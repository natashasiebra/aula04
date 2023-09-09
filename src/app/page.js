'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import styles from "../globals.css";
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh} = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Erro no e-mail ou senha!")
      }
      push('/pages/dashboard');
    } catch {
      refresh();
    }
  }
  return (
    <div className={styles.container}>
      
      <form className={styles.form} onSubmit={handlerLogin}>
      
      <div class="avatar">
        
      </div>
      <h1>Entrar</h1>
      <div class="input">
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        </div>
        <button class="button-64" role="button"><span class="text">Entrar</span></button>
      </form>
      <ToastContainer/>
    </div>
  );
}



 