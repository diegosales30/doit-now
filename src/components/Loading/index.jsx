import Image from "next/image";
import Loader from "../../assets/gifs/Loading.gif";

import styles from "./styles.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <Image
        src={Loader}
        width={300}
        height={300}
        alt=""
        priority={true}
        quality={100}
      />
      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default Loading;
