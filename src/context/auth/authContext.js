import {createContext} from 'react';

const authContext = createContext();
console.log("createdContext")
// export const authProvider = authContext.Provider
// export const authConsumer = authContext.Consumer

export default authContext;