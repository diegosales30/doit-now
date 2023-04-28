import Image from "next/image";

import styles from "../Login/login.module.scss";

import loginSvg from "../../assets/login.svg";
import ButtonLogin from "../ButtonLogin";
import Head from "next/head";


const Login = () => {

  return (
    <>
    <Head>
        <title>Do.it</title>
      </Head>
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.inputContainer}>
          <h1>Do<span>.</span>it Now</h1>
          <p>Organize suas tarefas de forma fácil e efetiva</p>
          <ButtonLogin />
        </div>
        <Image className={styles.imgLogin} src={loginSvg} alt="img de login" />
      </div>
    </div>
    </>
  );
};

export default Login;
