export const getDomain = () => {
  const email = Session.getActiveUser().getEmail();
  return email.split('@')[1];
};

export const getUserEmail = () => Session.getActiveUser().getEmail();
