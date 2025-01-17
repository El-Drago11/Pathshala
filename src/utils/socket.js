import {io} from 'socket.io-client'
const BACKEND_URL = process.env.REACT_APP_BACK_END_URL;

export const createSocketConnection = (userToken)=>{
    return io(BACKEND_URL,{
        auth:{
            token:userToken
        }
    });
}