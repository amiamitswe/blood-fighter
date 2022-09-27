const useAuth = () => {
  const isAuth = localStorage.getItem("x-access-token");

  return isAuth;

};

export default useAuth;