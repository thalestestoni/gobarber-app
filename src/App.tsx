import React from 'react';

import SignIn from './pages/Signin';
// import Signup from './pages/Signup';
import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Thales' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
