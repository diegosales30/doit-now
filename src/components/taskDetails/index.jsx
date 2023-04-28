import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { IoArrowBackCircleSharp } from "react-icons/io5";
import { collection, doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/services/firebase";

import styles from "./styles.module.scss";
import Link from "next/link";
import Login from "../Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcCalendar } from "react-icons/fc";

const TaskDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState(null);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const fetchTask = async () => {
      const taskRef = doc(db, "tarefas", id);
      const taskDoc = await getDoc(taskRef);
      if (taskDoc.exists()) {
        setTask({ id: taskDoc.id, ...taskDoc.data() });
      }
    };
    fetchTask();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!user) {
    router.push("/");
    return null;
  }

  return (
    <>
      <Head>
        <title>
          {task?.tarefa || "Tarefa não encontrada"} - Minhas Tarefas
        </title>
      </Head>

      {task ? (
        <div className={styles.container}>
          <div className={styles.taskContainer}>
            <h3>{task.tarefa}</h3>
            <Link href={"/"}>
              <IoArrowBackCircleSharp />
            </Link>
          </div>

          <p>
            <FcCalendar /> {task.created.toDate().toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};

export default TaskDetails;
