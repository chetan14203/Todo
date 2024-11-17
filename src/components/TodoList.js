import React, { Fragment } from "react";
import { MdDeleteOutline } from "react-icons/md";
const TodoList = ({ task , setTask,setInput,input}) => {
  const handleDelete = (currTask) => {
        const updatedTask = task.filter((elem)=> elem!==currTask);
        setTask(updatedTask);
  }
  const handleCheck = (event) =>{
    setInput((prev) => ({
        ...prev,checked:!event.target.value
    }))
  }
  return (
    <Fragment>
      {task.map((currTask) => {
        return (
          <div key={currTask.id}>
            <div className="card w-50 mx-auto m-2 bg-dark">
              <div className="card-body d-flex justify-content-between text-light">
                <span>{currTask.content}</span>
                <input className="form-check-input" type="checkbox" value={input.checked} id="flexCheckDefault" onClick={handleCheck}></input>
                <MdDeleteOutline className="text-danger fs-4" style={{cursor:"pointer"}} onClick={()=>handleDelete(currTask)}/>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default TodoList;
