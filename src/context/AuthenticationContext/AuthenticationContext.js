/* eslint-disable no-console */
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const AuthenticationContext = createContext(() => {});
const useAuth = () => useContext(AuthenticationContext);

const demoUser = {
  avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
  email: 'demo@devias.io',
  id: undefined,
  name: 'Jane Rotanson',
  plan: 'Premium',
};

function useLocalStorageState(
  key,
  defaultValue = '',
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      // the try/catch is here in case the localStorage value was set before
      // we had the serialization in place (like we do in previous extra credits)
      try {
        return deserialize(valueInLocalStorage);
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  const prevKeyRef = useRef(key);

  // Check the example at src/examples/local-state-key-change.js to visualize a key change
  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

function AuthenticationProvider({ children }) {
  const [user, setUser] = useLocalStorageState('user');

  const handleLogin = () => {
    // console.log('login');
    // window.localStorage.setItem('user', demoUser);
    setUser(demoUser);
  };

  const handleLogout = () => {
    // console.log('logout');
    window.localStorage.removeItem('user');
    setUser(null);
  };

  const handlePasswordRecovery = () => {
    console.log('handle Password Recovery');
  };

  const handlePasswordReset = () => {
    console.log('handle password reset');
  };

  const handleRegister = () => {
    console.log('handle register');
  };

  const handleResendCode = () => {
    console.log('handle resend code');
  };

  const handleVerifyCode = () => {
    console.log('handle verify code');
  };

  const contextValue = {
    isAuthenticated: true,
    isInitialized: true,
    login: handleLogin,
    logout: handleLogout,
    passwordRecovery: handlePasswordRecovery,
    passwordReset: handlePasswordReset,
    platform: 'Amplify',
    register: handleRegister,
    resendCode: handleResendCode,
    user,
    verifyCode: handleVerifyCode,
  };
  return (
    <AuthenticationContext.Provider value={contextValue}>{children}</AuthenticationContext.Provider>
  );
}

AuthenticationProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthenticationProvider, useAuth };
