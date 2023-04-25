import Image from "next/image";

import styles from "../Login/login.module.scss";

import loginSvg from "../../assets/login.svg";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.inputContainer}>
          <h1>Do<span>.</span>it Now</h1>
          <p>Organize-se suas tarefas de forma fácil e efetiva</p>
          <button>Entrar com google</button>
        </div>
        <Image className={styles.imgLogin} src={loginSvg} alt="img de login" />
      </div>
    </div>
  );
};

export default Login;
