import { AxiosError, AxiosResponse } from 'axios';
import React, {useEffect, useState}from 'react';
const axios = require('axios');

let auth = () =>{
//    window.location = "/auth/trakt";
}
    
const Login = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        axios({
            method: "GET",
            url: "/api/auth/user"
        }).then((res: AxiosResponse) => {
            setIsLogged(!!res.data.user);
        }).catch((err: AxiosError)=>{
            //do nothing
        });
    }, [])


    if (!isLogged) {
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