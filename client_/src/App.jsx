import { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

const App = () =>  
{
  const [user, setUser ]= useState(null);

  useEffect(() =>
  {
    const getUser = async ()=>
    {
      fetch("http://localhost:5000/auth/login/success",{
        method:"GET",
        credentials:"include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then (response=>{
        if(response.status === 200) return response.json();
        throw new Error("Authentication has been failed!")
      } ).then(resObject=>{
          setUser(resObject.user)
      })
      .catch((err) =>{
        console.log(err);
      })
    }
  },[]) 

  console.log(user)
  
  return (
    <div >
    <Navbar/>
    <Login/>
  </div>
  );
}

export default App;
