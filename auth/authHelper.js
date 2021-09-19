import { useContext } from "react";

import AuthContext from "./context";

const admin = "sales@pankh.tech";

const authHelper = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (user) => {
    if(user.email === admin)
      user.admin = true;
    else
      user.admin = false;
    setUser(user);
  };

  const logOut = () => {
    setUser(null);
  };

  return { user, login, logOut };
};

export default authHelper;
