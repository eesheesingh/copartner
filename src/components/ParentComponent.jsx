import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

const ParentComponent = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const openSignUp = () => {
    setShowSignUp(true);
  };

  const closeSignUp = () => {
    setShowSignUp(false);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <div>
      {showSignUp && <SignUp onClose={closeSignUp} />}
      {showLogin && <Login onClose={closeLogin} openSignUp={openSignUp} />}
    </div>
  );
};

export default ParentComponent;
