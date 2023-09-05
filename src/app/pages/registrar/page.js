
'use client'

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UserForm = ({ userAuth}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
     toast.error('registrado com sucesso ')
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

