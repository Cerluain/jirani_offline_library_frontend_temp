import { useState } from 'react';

/**
 * A custom hook to manage states from auth forms; login/setup.
 * Handles state for email, password, and provides change handlers.
 */
export function useAuthHook(initialEmail = '', initialPassword = '') {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword); 
  const [rememberMe, setRememberMe] = useState(false); // Won't be used until we implement a way to store login tokens 

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.value);

  return {
    email,
    password,
    rememberMe,
    handleEmailChange,
    handlePasswordChange,
    handleRememberMeChange
  };
}
