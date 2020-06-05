import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    AUTH_ERROR,
    CLEAR_ERRORS,
    LOGOUT,
    USER_LOADED
} from "../types";

const AuthState = (props) => {

    const initialState = {
        isAuthenticated: false,
        loading: true,
        user: null,
        token: null,
        error: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Register User
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-Type': "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        };

        try {
            const res = await axios.post('/user/signup', formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.message
            })
        }
    };

    // Login User
    const login = async (formData) => {
        const config = {
            headers: {
                'Content-Type': "application/json"
            }
        };

        try {
            console.log("[formdata]",formData)
            const res = await axios.post('http://13.233.125.241:8080/user/login', formData, config);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            loadUser();
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.message
            });
        }
    }
    // LOAD USER
    const loadUser = async () => {
        /**
         * 1. Load Token to Global Headers
         * 2. Get the User from server. 
         */

        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        try {
            const res = await axios.get('http://13.233.125.241:8080/user')
            if(!res.data.error){
                dispatch({
                    type: USER_LOADED,
                    payload: res.data
                });
            }
     
        } catch (err) {
            dispatch({
                type: AUTH_ERROR
            });
        }
    }

    // Logout User
    const logout = () => {
        dispatch({ type: LOGOUT });
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                error: state.loading,
                user: state.user,
                register,
                login,
                logout,
                loadUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
};


export default AuthState;
