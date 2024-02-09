import React, { createContext, useState } from 'react';
import Usuario from '../interfaces/Usuario';
import UserContextType from '../interfaces/UserContextType';

const initialUserState:Usuario = {user:'admin',password:'123'};

export const UserContext = createContext<UserContextType>({
    user : initialUserState,
    setUser:()=>{},
});

export const UserProvider = ({children}) => {
    const [user,setUser] = useState<Usuario>(initialUserState);
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  );
};
