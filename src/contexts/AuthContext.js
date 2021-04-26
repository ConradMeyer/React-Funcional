import React from 'react';

const AuthContext = React.createContext({
   logged: true,
   handleLogged: () => {}
});

export default AuthContext;