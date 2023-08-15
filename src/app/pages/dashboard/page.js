import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const lista = getUsers() 
    return (
        <div>
            <h1></h1>
            {lista.map((user)  => 
                <p>{user.name}</p>

            )}
        </div>
    );
};