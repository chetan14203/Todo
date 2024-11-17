import React from "react";
import { setStorage } from "./localStorage";

const TodoInput = ({ input, setInput, task, setTask }) => {

    const handleSubmit = (event) => {
    event.preventDefault();
    if(!input.content) return;
    if(task.find((elem)=>elem.content===input.content)){
        setInput("")
        return;
    }
    setTask((prev)=> [...prev,input]);
    setInput("");
    }
    const handleChange = (event) => {
        setInput((prev)=>({
            ...prev,id:event.target.value,content:event.target.value
        }))
    }
    setStorage(task);
  return (
    <form className="container mx-auto w-50 py-5" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={input.content}
          onChange={handleChange}
          placeholder="Add Task"
        />
        <button
          className="btn btn-outline-primary"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
