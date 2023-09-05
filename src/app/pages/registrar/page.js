
'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UserForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
     toast.error('registrado com sucesso ')
    // Verifique se onSubmit é uma função antes de chamá-la
    
    }
  return (
    <div>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit}>
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
      </form>
      <ToastContainer/>
    </div>
  );
};

export default UserForm;

