import styles from './styles.module.scss';

import { IoLogOutOutline } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi2";
import { signOut } from 'firebase/auth';
import { auth } from '@/services/firebase';

const HeaderComponent = () => {

    const logout = async () => {
        await signOut(auth);
    };

  return (
    <header className={styles.container}>
      <div className={styles.profileContainer}>
        <HiUserCircle />
        <p>Diego sales</p>
      </div>
      <div className={styles.logoutContainer} onClick={logout}>
        <IoLogOutOutline  />
      </div>
    </header>
  );
};

export default HeaderComponent;
