import React, { useEffect, useContext } from "react";
import AuthContext from '../../context/auth/authContext'
import Hoc from '../../containers/Hoc'
const MainPage = (props) => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, loadUser,error,logout } = authContext;
  
    useEffect(()=>{
        loadUser();
      },);
    useEffect(() => {
        if (!isAuthenticated) {       
            props.history.push('/login');
        }
    })

    return (
        <>
         <Hoc>
        <div className='w3-text'>
            hello
            {/* Hi This is Secure page for {props} */}
        </div>
     </Hoc>
        </>
        ) 
}

export default MainPage;