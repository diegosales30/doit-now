import styles from "./styles.module.scss";
import { MdDoneOutline } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BsCalendarDateFill } from "react-icons/bs";
import { useState } from "react";

export let text = [
  {
    id: 0,
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        tempora est error, iste, explicabo doloribus magni quidem ab
        voluptate, quia repellat. Adipisci cupiditate minima a eum delectus
        earum totam neque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        tempora est error, iste, explicabo doloribus magni quidem ab
        voluptate, quia repellat. Adipisci cupiditate minima a eum delectus
        earum totam neque.`,
  },
  {
    id: 1,
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        tempora est error, iste, explicabo doloribus magni quidem ab
        voluptate, quia repellat. Adipisci cupiditate minima a eum delectus
        earum totam neque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        tempora est error, iste, explicabo doloribus magni quidem ab
        voluptate, quia repellat. Adipisci cupiditate minima a eum delectus
        earum totam neque.`,
  },
  {
    id: 2,
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        tempora est error, iste, explicabo doloribus magni quidem ab
        voluptate, quia repellat. Adipisci cupiditate minima a eum delectus
        earum totam neque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        tempora est error, iste, explicabo doloribus magni quidem ab
        voluptate, quia repellat. Adipisci cupiditate minima a eum delectus
        earum totam neque.`,
  },
];

const MyTasks = () => {
  const [taskDone, setTaskDone] = useState(false);

  const handleDone = (id) => {
    setTaskDone((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  //function for delete
//   const handleDelete = (id) => {
//     const updatedTasks = text.filter((task) => task.id !== id);
//     setTaskDone((prevState) => {
//       const newState = { ...prevState };
//       delete newState[id];
//       return newState;
//     });
//     setTaskDone(updatedTasks);
//   };

  return (
    <ul className={styles.container}>
      {text.map((p) => (
        <li className={styles.task} key={p.id}>
          <div className={styles.taskContainer}>
            <div onClick={() => handleDone(p.id)} className={styles.iconContainer}>
            {taskDone[p.id] ? (
                <MdDoneOutline className={styles.taskdone} />
              ) : (
                <MdDoneOutline />
              )}
            </div>

            <p>{p.paragraph}</p>
            <div className={styles.iconContainer} >
              <RiDeleteBin2Fill className={styles.deleteTask} />
            </div>
          </div>

          <div className={styles.details}>
            <span>
              <BsCalendarDateFill /> 11-03-2023
            </span>
            <span>detalhes</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MyTasks;
