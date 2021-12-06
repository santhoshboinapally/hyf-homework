import React, { createContext, useContext, useState, useEffect } from "react";

export const UsersContext = createContext();
export const useUser = () => useContext(UsersContext);

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [repos, setRepos] = useState([]);

   const contextValue = {
    isLoading,
    setIsLoading,
    users,
    setUsers,
    inputvalue,
    setInputValue,
    message,
    setMessage,
    repos,
    setRepos };
       
const getGithubUsers = async (input) => {
  try{
      await  fetch(`https://api.github.com/search/users?q=${inputvalue}`)
          .then((res) => {
            if(!res.ok){
              throw  Error("Error");
            }else{
              return res.json();
            }
          })
          .then((data) => {
            setIsLoading(true);
            setUsers(data.items);
          });
      } catch (e) {
        setMessage("Error");  
      }};    
      useEffect(() => {
        getGithubUsers();
      }, [inputvalue]);

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </ UsersContext.Provider >
  );
};

export default ContextProvider;