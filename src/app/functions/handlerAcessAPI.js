'use serve'
const url = "https://aula-17-10-tzkb.vercel.app"

const responseIsUserAtuh = [
    {name:'Viuva Negra',
        email:'natasha@teste.com',
        senha:"1213",
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
{name:'Homem De Ferro',
    email:'tony@teste.com',
    senha:"1231",
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
},
{name:'Loki',
    email:'loki@teste.com',
    senha:"1234",
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
}];

const getUserAuthenticated = async (userLogin) => {
let Userauth = {};

 
    responseIsUserAtuh.map((user) =>{
        if(user.email === userLogin.email && user.senha === userLogin.password){
           Userauth= user
        }
    })
    return Userauth;
}
const getUsers = () =>{
       return responseIsUserAtuh ;
}
export { getUsers, getUserAuthenticated };