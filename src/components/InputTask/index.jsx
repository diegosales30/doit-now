
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { BiAddToQueue } from "react-icons/bi";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../services/firebase";
import firebase from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { toast } from 'react-hot-toast';


const InputTask = () => {
  const [tasks, setTasks] = useState("");
  const [newTask, setNewTask] = useState([]);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const storedNewTask = JSON.parse(localStorage.getItem('newTask'));
    if (storedNewTask) {
      setNewTask(storedNewTask);
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('newTask', JSON.stringify(newTask));
  }, [newTask]);

  async function handleAddTask(event) {
    event.preventDefault();

    if (!tasks) {
      toast.error('Oops, digite alguma coisa!')
      return;
    }
    
    const tasksCollection = collection(db, "tarefas");
    await addDoc(tasksCollection, {
        created: new Date(),
        
        tarefa: tasks,
        userId: user.uid,
        nome: user.displayName,
      })
      .then((docRef) => {
        
        toast.success('Nice! tarefa adicionada.')
        const data = {
          id: docRef.id,
          created: new Date(),
          createdFormat: format(new Date(), "dd MMMM yyyy"),
          tarefa: tasks,
          userId: user.uid,
          nome: user.displayName,
        }
        setNewTask([...newTask, data]);
        setTasks("");
      })
      .catch((err) => console.log(err));
    }

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Adicionar uma tarefa..."
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />
        <button type="submit">
          <BiAddToQueue />
        </button>
      </form>
    </div>
  );
};

export default InputTask;

