import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const storedToken = localStorage.getItem('accessToken')
    ? localStorage.getItem('accessToken')
    : '';
  const [accessToken, setAccessToken] = useState(storedToken);

  const handleTokenUpdate = (newToken) => {
    setAccessToken(newToken);
    localStorage.setItem('accessToken', newToken);
  };

  return (
    <AuthContext.Provider value={{ accessToken, handleTokenUpdate }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
