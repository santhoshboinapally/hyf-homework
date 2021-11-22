import React from 'react'
import  './App.css';
import WatchCount from './components/watchCount';
import HeaderTitle from './components/HeaderTitle';
import AddTodo from './components/Todos';

function App() {
  return (<div>
     <HeaderTitle />
     <WatchCount />
     <AddTodo />
     </div>);
}

 export default App;