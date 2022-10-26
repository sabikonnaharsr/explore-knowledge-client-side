import React, { createContext, useState } from 'react';

export const AuthProvider = createContext(); 
const AuthContextProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const handleCard = (selectedBooks) => {
      setBooks([...books, selectedBooks])

    }
   
const authInfo = {handleCard, books, };
    return (
       
          <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
        
    );
};

export default AuthContextProvider;