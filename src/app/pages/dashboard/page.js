import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUser from "@/app/componets/ListUser";
import Alter from "@/app/pages/alterar/pages"
import Register from "@/app/pages/registrar/pages"


export default async function Dashboard() {
   const users = await getUsers() 
    return (
        <div>
           <Suspense fallback={<p>carregando....</p>}>
            <ListUser users={users}/>
            <button><a href={Alter}>alterar</a></button>
            <button><a href={Register}>registrar</a></button>
           </Suspense>
            
        </div>
    );
};