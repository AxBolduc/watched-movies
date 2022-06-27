import { AxiosError, AxiosResponse } from 'axios';
import React, {useEffect, useState}from 'react';
import { trpc } from '../util/trpc';
const axios = require('axios');


    
export const Login: React.FC= () => {
    const [isLogged, setIsLogged] = useState(false);

    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url: "/api/auth/user"
    //     }).then((res: AxiosResponse) => {
    //         setIsLogged(!!res.data.user);
    //     }).catch((err: AxiosError)=>{
    //         //do nothing
    //     });
    // }, [])


    if (!isLogged) {
        return (
            <button className='bg-stone-500 rounded p-2 text-white font-bold'>
                Login with Trakt
            </button>
        );
    }else{
        return null;
    }

}