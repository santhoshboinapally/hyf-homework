import './App.css';
import Header from './components/header';
import React from 'react';
import GithubUsers from './components/GithubUsers';
import ContextProvider from './components/ContextProvider';
import HyfRepos from './components/HyfRepos';
import DateTime from './components/timer';

function App() {
  return (
    <div>
         <ContextProvider>        
        <Header />
        <GithubUsers />     
        <HyfRepos />   
        <DateTime />
        </ContextProvider>
         </div>
  );
}

export default App;
