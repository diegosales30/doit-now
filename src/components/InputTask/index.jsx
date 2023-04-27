import styles from './styles.module.scss';

const InputTask = () => {
    return ( 
        <div className={styles.container}>
            <form className={styles.formContainer}>
            <input type="text" />
            <button>adicionar</button>
            </form>
        </div>
     );
}
 
export default InputTask;