import styles from './styles.module.scss';
import {BiAddToQueue} from 'react-icons/bi'

const InputTask = () => {
    return ( 
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <input type="text" placeholder='Adicionar uma tarefa...'  />
                <button>
                    <BiAddToQueue />
                </button>
            </form>
        </div>
     );
}
 
export default InputTask;