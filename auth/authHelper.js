import { useContext } from "react";

import AuthContext from "./context";

const authHelper = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (user) => {
    setUser(user);
  };

  const logOut = () => {
    setUser(null);
  };

  return { user, login, logOut };
};

export default authHelper;
