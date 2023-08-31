import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUser from "@/app/componets/ListUser";


export default async function Dashboard() {
   const users = await getUsers() 
    return (
        <div>
           <Suspense fallback={<p>carregando....</p>}>
            <ListUser users={users}/>
            <a href="/pages/alterar">alterar</a>

           </Suspense>
        </div>
    );
};