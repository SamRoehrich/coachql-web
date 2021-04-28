export const setAccessToken = (s: string) => {
  localStorage.setItem("jid", s);
};

export const getAccessToken = () => {
  return localStorage.getItem("jid");
};
