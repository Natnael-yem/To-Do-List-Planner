import React from 'react';
import { BiPlusMedical } from "react-icons/bi";
interface ToDoList {
  id: number;
  name: string;
  duedate: string;
  priority: string;
  status: string;
  category: string;
}

interface allTodos {
  initalStates: ToDoList;
  allTodos: Array<ToDoList>;
}

type Active = {
  active: boolean
  setTodos: React.Dispatch<React.SetStateAction<allTodos>>
  todos: allTodos
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({active, setTodos,setActive, todos}: Active) => {
  

  const submitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    //setCount(++count);
    setTodos({
      initalStates: {
        id: Date.now(),
        name: "",
        duedate: '',
        priority: "",
        status: "not Completed",
        category: ''
      },
      allTodos: [...todos.allTodos, todos.initalStates],
    });
    setActive(!active)
  };
  console.log(todos)
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {

    setTodos({
      ...todos,
      initalStates: {
        ...todos.initalStates,
        [e.target.name]: e.target.value,
        
      },
    });
  };
  const handleactive = () => {
    setActive(!active)
  }

  return (
    <div>
    {active ? (
      <div className="sm:mx-32 mx:10 lg:mx-2">
        <form
          onSubmit={submitForm}
          className="flex flex-col rounded border-2 border-black p-6"
        >
          <div className="m-2 flex">
            <label className=" px-3">Taskname:</label>
            <input
              className="rounded w-full p-1 bg-gray-300"
              id="name"
              type="text"
              name="name"
              value={todos.initalStates.name}
              onChange={onChangeHandler}
            />
          </div>
          <div className="m-2 flex">
            <label className=" px-3">DueDate:</label>
            <input
              className="rounded w-full p-1  bg-gray-300"
              id="duedate"
              type="date"
              name="duedate"
              value={todos.initalStates.duedate}
              onChange={onChangeHandler}
            />
          </div>
          <div className="m-2 flex">
            <label className=" px-3">Priority:</label>
            <input
              className="rounded w-full p-1  bg-gray-300"
              id="status"
              type="text"
              name="priority"
              value={todos.initalStates.priority}
              onChange={onChangeHandler}
            />
          </div>
          <div className="m-2 flex">
            <select className='px-3' 
            name="category"
            id="category"
            value={todos.initalStates.category}   
            onChange={onChangeHandler} 
            required >
             <option value="">Choose Category...</option>
             <option value="business">Business</option>
             <option value="social">Social</option>
             <option value="personal">Personal</option>
           </select>
          </div>

          <button className="" type="submit">
            Add Task
          </button>
        </form>
      </div>
    ) : 
    <button onClick={handleactive} className='flex items-center'>
      <BiPlusMedical />
      
      </button>
    }
    </div>
  );
};

export default Form;