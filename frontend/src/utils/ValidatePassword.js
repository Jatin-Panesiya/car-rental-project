export const validatePassword = (input) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return regex.test(input);
};
