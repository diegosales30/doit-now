import styles from "./styles.module.scss";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FcCalendar } from "react-icons/fc";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { FaTasks } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "@/services/firebase";
import { format } from "date-fns";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from 'react-hot-toast';
import Link from "next/link";

const MyTasks = () => {
  const [taskDone, setTaskDone] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      const tasksRef = collection(db, "tarefas");
      const q = query(
        tasksRef,
        where("userId", "==", user.uid),
        orderBy("created", "desc")
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasksData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksData);
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  const deleteTask = async (taskId) => {
    try {
      // Remove a tarefa do estado local
      setTasks(tasks.filter((task) => task.id !== taskId));

      // Remove a tarefa do Firestore
      await deleteDoc(doc(db, "tarefas", taskId));

      // console.log(`Tarefa ${taskId} excluída com sucesso.`);
      toast.success('Tarefa excluída com sucesso.')
    } catch (error) {
      console.error(`Erro ao excluir tarefa ${taskId}: ${error}`);
    }
  };

  //função que da checked na task
  const handleDone = (id) => {
    setTaskDone((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      {tasks.length === 0 ? (
        <div className={styles.withoutTask}>
          <h1>Ainda não há tarefas aqui.</h1>
          <FaTasks />
        </div>
      ) : (
        <ul className={styles.container}>
          {tasks.map((current, index) => (
            <li className={styles.task} key={current?.id}>
              <div className={styles.taskContainer}>
                <div
                  onClick={() => handleDone(index)}
                  className={styles.iconContainer}
                >
                  {taskDone[index] ? (
                    <ImCheckboxChecked className={styles.taskdone} />
                  ) : (
                    <ImCheckboxUnchecked />
                  )}
                </div>

                <p>{current.tarefa}</p>
                <div
                  className={styles.iconContainer}
                  onClick={() => deleteTask(current.id)}
                >
                  <RiDeleteBin2Fill className={styles.deleteTask} />
                </div>
              </div>

              <div className={styles.details}>
                <span>
                  <FcCalendar />{" "}
                  {format(current.created.toDate(), "dd/MM/yyyy")}
                </span>
                
                <Link href={`/details/${current.id}`}>
                  <span>detalhes</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MyTasks;
