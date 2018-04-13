export const setAccessToken = accessToken => ({
  type: 'SET_ACCESS_TOKEN',
  accessToken,
});

export const startSettingAccessToken = () => async (dispatch) => {
  const res = await fetch('/token');
  const data = await res.json();

  if (res.status !== 200) throw Error(data.message);
  await dispatch(setAccessToken(data.access_token));
};
