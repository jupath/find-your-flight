export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        ...action.userData,
      };
    case 'USER_LOGOUT':
      return {};
    default:
      return state;
  }
};
