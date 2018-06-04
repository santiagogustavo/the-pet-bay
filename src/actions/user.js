export const signIn = payload => ({
  type: 'USER/SIGN_IN',
  payload,
});

export const signOut = () => ({
  type: 'USER/SIGN_OUT',
});
