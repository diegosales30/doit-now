import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  collection,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/services/firebase";

const TaskDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState(null);

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

  return (
    <>
      <Head>
        <title>{task?.tarefa || "Tarefa não encontrada"} - Minhas Tarefas</title>
      </Head>

      {task ? (
        <div>
          <h1>{task.tarefa}</h1>
          <p>{task.descricao}</p>
          <p>Data de criação: {task.created.toDate().toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};

export default TaskDetails;