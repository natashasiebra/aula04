'use server'
const responseIsUserAtuh = [
    {name:'Marcelino',
        email:'marcelino@teste.com',
        senha:"12345",
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
{name:'natasha',
    email:'natasha@teste.com',
    senha:"123",
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
},
{name:'Marcelino',
    email:'marcelino@teste.com',
    senha:"123456",
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