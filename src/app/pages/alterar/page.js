
'use client'
import "./style.css"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UserForm = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
 
     toast.error('alterado com sucesso ')
    // Verifique se onSubmit é uma função antes de chamá-la
    
    }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <h1>Alterar</h1>
        <input
          placeholder='E-mail'
          type="email"
          >
        </input>
        <input
          placeholder='Senha'
          type='password'
          >
        </input>
        <button>Entrar</button>
        <button><a href="/pages/dashboard">Voltar</a></button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default UserForm;

