import React, { useContext  } from "react";
import { UsersContext  } from "./ContextProvider";


function GithubUsers() {
  const userContext = useContext(UsersContext);
  


  function onChangeInputValue(e) {
    let value = e.target.value;
    userContext.setInputValue(value);
  }

  return (
    <><center>
      <div className="githubusers">
        <input
          type="text"
          name="user"
          value={userContext.inputvalue}
          placeholder="search for user"
          onChange={onChangeInputValue} />
        <div>
          <ul>
            
            {userContext.users.length > 0 ? (
              userContext.users &&
              userContext.users.map((user) => {
                return <li key={user.id}>Name : {user.login} <br/> URL :  {user.url}</li>;
              })
            ) : (
              <h2>Empty User List</h2>
            )}
          </ul>
        </div>
      </div>
      </center>
    </>
  );
}
export default GithubUsers;