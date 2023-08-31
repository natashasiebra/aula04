
'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import handlerAcessUser from "@/app/functions/handlerAcess";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UserForm = ({ userAuth}) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
      });
      const { push, refresh} = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
 
     try {
        const userAuth = await handlerAcessUser(user);
       
        if(userAuth.token === undefined){
            alert('enviado')
            toast.error("Erro no e-mail ou senha!")
          }
        push('/pages/alterar');
      }catch {
        refresh();
        toast.error("alterado com sucesso")
      }
    // Verifique se onSubmit é uma função antes de chamá-la
    
    }
  return (
    <div>
      <h1>Alterar</h1>
      <form onSubmit={handleSubmit}>
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
        <button>Entrar</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default UserForm;

