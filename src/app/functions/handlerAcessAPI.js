'use serve'
const url = "https://aula-17-10-tzkb.vercel.app"

const getUserAuthenticated = async (user) => {
    const resposeOfApi = await fetch(url + "/user/autheticated",
 {
  method:"POST",
  headers:{"Content-Type": "Application/json"},
  body: JSON.stringify(user)
    }
 );
 const userAuth = await resposeOfApi.json();
 return userAuth;
}
const getUsers = () =>{
       
}

export { getUsers, getUserAuthenticated };