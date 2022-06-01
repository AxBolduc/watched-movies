import { AxiosError, AxiosResponse } from 'axios';
import React, {useEffect, useState}from 'react';
const axios = require('axios');

let auth = () =>{
//    window.location = "/auth/trakt";
}
    
export const Login: React.FC= () => {
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
            <button onClick={auth} className='bg-stone-500 rounded p-2 text-white font-bold'>
                Login with Trakt
            </button>
        );
    }else{
        return null;
    }

}