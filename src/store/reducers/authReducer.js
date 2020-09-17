const checkToken = (localStorage.getItem('token') !== null);

const initState = {
  IsAuth: checkToken,
  AuthError: null,
  profile: {},
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        IsAuth: true,
      };
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        AuthError: 'Login Fail',
        IsAuth: false,
      };
    case 'SIGNIN_SUCCESS':
      console.log('signing success');
      return {
        ...state,
      };
    case 'SIGNIN_ERROR':
      console.log('signing error');
      return {
        ...state,
        AuthError: 'Signing Fail',
      };
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return {
        ...state,
        IsAuth: false,
      };
    case 'GET_PROFILE_SUCCESS':
      console.log('get profile success');
      return {
        ...state,
        profile: action.profile,
      };
    case 'GET_PROFILE_FAIL':
      console.log('get profile fail');
      return {
        ...state,
      };
    case 'GET_PROFILEID_SUCCESS':
      console.log('get profileid succes');
      return {
        ...state,
        profile: action.profile,
      };
    case 'GET_PROFILEID_FAIL':
      console.log('get profileid fail');
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
