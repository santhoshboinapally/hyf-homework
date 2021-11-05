import React from 'react'
import Activities from "./activities";
import {TodoList} from './TodoList';

function App() {
  return <Activities TodoList={TodoList} />;
}

 export default App;