

import styles from './input.module.scss';
import {FcGoogle} from 'react-icons/fc'

const ButtonLogin = () => {
    return ( 
        <div className={styles.btnContainer}>
            <button>Entrar com google <FcGoogle /> </button>
        </div>
     );
}
 
export default ButtonLogin;