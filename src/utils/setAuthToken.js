import axios from 'axios';

const setAuthToken = (token) => {
    if(token){
        console.log(token);
        axios.defaults.headers.common["x-auth-token"] = token;
        axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
        console.log('Default Header Has Been Set !');
    }else{
        delete axios.defaults.headers.common["x-auth-token"];
        axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
        console.log('Header Token deleted !');
    }
}

export default setAuthToken;