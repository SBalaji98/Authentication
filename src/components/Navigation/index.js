import React, {  useContext,useEffect } from 'react';
import AuthContext from '../../context/auth/authContext'

const Navigation = props => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated,loadUser,logout } = authContext;
    const handleLogout=(e)=>{
        logout()
    }
    const auth = (
        <div className="w3-bar w3-black">
             <a className="w3-bar-item">
                <strong><span className="w3-text-red ">Authentication</span>&nbsp;</strong>
            </a>
            <a className="w3-bar-item" href="/login">
                signin
            </a>
            <a className="w3-bar-item" href="/signup">
                signup
            </a>
        </div>
    )
    const app = (
        <div className="w3-bar w3-black">
        <a className="w3-bar-item">
           <strong><span className="w3-text-red ">Authentication</span>&nbsp;</strong>
       </a>
       <a className="w3-bar-item" href="/login" onClick={handleLogout}>Logout</a>
       </div>
    )

    return (
        <React.Fragment>
            {isAuthenticated ?  app : auth
            }
        </React.Fragment>
    );
};



export default Navigation;