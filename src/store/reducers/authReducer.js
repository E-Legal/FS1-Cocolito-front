const checkToken = (localStorage.getItem('token') !== null);

const initState = {
  IsAuth: checkToken,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login sucess');
      return {
        ...state,
        IsAuth: true,
      };
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        IsAuth: false,
      };
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return {
        ...state,
        IsAuth: false,
      };
    default:
      return state;
  }
};

export default authReducer;
