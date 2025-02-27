import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const login = () => {
    setIsLogin(true);
  };
  const logout = () => {
    fetch("https://web.ics.purdue.edu/~maddy/profile-app/logout.php")
      .then((response) => response.json)
      .then((data) => {
        if (data.message) {
          setIsLogin(false);
        } else {
          console.log(data);
        }
      });
  };
  return(
    <AuthContext.Provider value={{ isLogin, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};
