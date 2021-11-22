import React from "react";
import ListItems from "./listitems";
function HeaderTitle() {
  return <h1>Welcome to Todo list</h1>;
}
function Activities(props) {
  return (
      <div>
      <HeaderTitle />
      {props.TodoList.map((todo) => {
        return <ListItems id={todo.id} task={todo.task} deadlineDate={todo.deadlineDate} />;
      })}
    </div>
  );
}
export default Activities;