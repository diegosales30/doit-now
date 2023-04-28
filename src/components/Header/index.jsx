import styles from "./styles.module.scss";

import { IoLogOutOutline } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi2";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/services/firebase";
import { useEffect, useState } from "react";
import Image from "next/image";

const HeaderComponent = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <header className={styles.container}>
      <div className={styles.profileContainer}>
        {user?.photoURL ? (
          <Image
            src={user && user.photoURL}
            alt="img do perfil"
            width={25}
            height={25}
            className={styles.profileImg}
          />
        ) : (
          <HiUserCircle />
        )}
        <p>{user && user.displayName}</p>
      </div>
      <div className={styles.logoutContainer} onClick={logout}>
        <IoLogOutOutline />
      </div>
    </header>
  );
};

export default HeaderComponent;
