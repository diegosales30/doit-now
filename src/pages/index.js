import HomeComponent from "@/components/Home";
import Login from "@/components/Login";
import { useCallback, useEffect, useState } from "react";

export default function Home() { 
  const [user, setUser] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setUser(true);
  //   }, 3000);
  // }, [user]);

  return <>{user ? <HomeComponent /> : <Login />}</>;
}
