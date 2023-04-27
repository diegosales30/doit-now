
import MyTasks from '../MyTasks';
import styles from './styles.module.scss';


const ListTask = () => {
    return ( 
        <div className={styles.container}>
            <MyTasks />
        </div>
     );
}
 
export default ListTask;