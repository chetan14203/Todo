import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const Todo = () => {
  const [input, setInput] = useState({id:"",content:"",checked:false});
  const [task,setTask] = useState([]);
  return (
    <div className="container-fluid">
      <TodoInput input={input} setInput={setInput} task={task} setTask={setTask} />
      <TodoList task={task} setTask={setTask} setInput={setInput}/>
    </div>
  );
};

export default Todo;
