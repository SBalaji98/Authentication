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

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        loading: false,
        token: action.payload.token,
        isAuthenticated: true
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
        localStorage.removeItem("token");
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        loading: false,
        user: null,
        token: null
      };
    case USER_LOADED : 
    return{
      ...state,
      isAuthenticated : true,
      loading : false,
      user : action.payload
    };
    
  }
};
