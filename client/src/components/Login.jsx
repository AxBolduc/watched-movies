import React from 'react';


const AUTH_ENDPOINT = "https://trakt.tv/oauth/authorize"
const CLIENT_ID = "d5ef030b36b283b2695c90ce322a7ff50317bfcff52d83743b7e25cb07b37cbc"
const REDIRECT_URI = "http://127.0.0.1:3000/auth/"
// "?response_type=code&client_id=%20&redirect_uri=%20&state=%20"

let auth = () =>{
   window.location = "http://127.0.0.1:3000/auth/trakt";
}

const Login = () => {
    return (
        <button onClick={auth} className='btn-login'>
            Login with Trakt
        </button>
      );
}
 
export default Login;