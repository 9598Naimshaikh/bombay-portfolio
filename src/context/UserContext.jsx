import React, { createContext } from 'react'
// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext();

const UserProvider = ({ children }) => {
    const username = "Naim Shaikh";
  return (
    <div>
        <DataContext.Provider value={username}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserProvider;
