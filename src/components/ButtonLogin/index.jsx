import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/services/firebase";

import styles from './input.module.scss';
import {FcGoogle} from 'react-icons/fc'



const ButtonLogin = () => {

    const login = async () => {
        await signInWithPopup(auth, provider);
      };

    return ( 
        <div className={styles.btnContainer} onClick={login}>
            <button>Entrar com google <FcGoogle /> </button>
        </div>
     );
}
 
export default ButtonLogin;