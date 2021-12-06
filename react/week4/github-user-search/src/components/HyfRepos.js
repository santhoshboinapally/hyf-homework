import React, { useContext } from "react";
import { UsersContext } from "./ContextProvider";

const HyfRepos = () => {
  const repoContext = useContext(UsersContext);
  //fetching the github repos
  const getGitHubRepos = () => {
    fetch(`https://api.github.com/users/HackYourFuture-CPH/repos`)
      .then((res) => res.json())
      .then((reposdata) => {
        repoContext.setRepos(reposdata);
      });
  };

  return (
    <div class="HYF">
      <h1><img src="https://avatars.githubusercontent.com/u/29845045?s=200&v=4"  alt ="HYF"/>  HackYourFuture Repositories</h1>
      <div className="githubrepos">
        <a href="https://github.com/orgs/HackYourFuture-CPH/repositories" onClick={getGitHubRepos}>
          GitHub Repos
        </a>
        <ul>
           {repoContext.repositories &&
            repoContext.repositories.map((repo) => <li key={repo.id}>{repo.name}</li>)}
        </ul>
      </div>
    </div>
    );
};

export default HyfRepos;
