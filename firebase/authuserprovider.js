import { createContext, useContext, Context } from 'react'
import useFirebaseAuth from './userauth';

const authUserContext = createContext({
  userDataPresent: false,
  user: null,
  authUser: null,
  signInWithEmailAndPassword: async () => {},
  createUserWithEmailAndPassword: async () => {},
  signOut: async () => {}
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}

export const useAuth = () => useContext(authUserContext);