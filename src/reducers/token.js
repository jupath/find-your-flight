export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACCESS_TOKEN':
      return {
        accessToken: action.accessToken,
      };
    default:
      return state;
  }
};
