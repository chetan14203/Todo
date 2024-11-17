import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { getStorage } from "./localStorage";

const Todo = () => {
  const [input, setInput] = useState({id:"",content:"",checked:false});
  const [task,setTask] = useState(() => getStorage());
  return (
    <div className="container-fluid">
      <TodoInput input={input} setInput={setInput} task={task} setTask={setTask} />
      <TodoList task={task} setTask={setTask} setInput={setInput} input={input}/>
    </div>
  );
};

export default Todo;
