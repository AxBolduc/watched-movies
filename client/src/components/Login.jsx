import React, {useEffect, useState}from 'react';
const axios = require('axios');

let auth = () =>{
   window.location = "http://127.0.0.1:3000/auth/trakt";
}
let isAuthed = false;
    
const Login = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const authed = axios({
            method: "GET",
            url: "/auth/user"
 
        }).then((res) => {
            setIsLogged(res.status ===200);
        }).catch((err)=>{
            //do nothing
        });
    })


    if (!isLogged) {
        console.log("not Authed")
        return (
            <button onClick={auth} className='btn-login'>
                Login with Trakt
            </button>
        );
    }else{
        return null;
    }

}
 
export default Login;