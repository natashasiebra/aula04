import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUser from "@/app/componets/ListUser";
import Cookies from "js-cookie";

export default  function Dashboard() {
const hancleAcessUser = () => {
    Cookies.remove('token')
}
   const users =  getUsers() 
    return (
        <div>
           <Suspense fallback={<p>carregando....</p>}>
            <ListUser users={users}/>
            <a href="/pages/alterar">alterar</a>
            <a href="/pages/registrar">Registrar</a>
            <button onClick={hancleAcessUser()}>remover
            </button>
           </Suspense>
        </div>
    );
};