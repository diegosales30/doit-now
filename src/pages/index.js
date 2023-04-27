import { auth } from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCallback, useEffect, useState } from "react";
import { db } from "./../services/firebase";

import Loading from "@/components/Loading";
import HomeComponent from "@/components/Home";
import Login from "@/components/Login";



export default function Home() { 
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoUrl: user.photoURL,
        nome: user.displayName,
      });
    }
  }, [user]);

  if (loading) return <Loading />;
  if (user) return <Login />;  // add !

  return  <HomeComponent />;
}
