import { RiDeleteBin5Line } from "react-icons/ri";
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

type Tasksprops = {
    i:number;
    todos: allTodos;
  isChecked: boolean;
  setTodos: React.Dispatch<React.SetStateAction<allTodos>>
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  list: ToDoList;
};
const Tasks = ({i,setTodos, todos, list, isChecked, setIsChecked }: Tasksprops) => {
    const handleCheckboxChange = (id :number) => {
    setIsChecked(list.id === id && !isChecked);
    setTodos((prevTodos) => {
      const updatedTodos = {
        ...prevTodos,
        allTodos: prevTodos.allTodos.map((todo)=>
        todo.id ===id ? {...todo, status: todo.status === 'completed'? 'not Completed' : 'completed'} : todo
        ),
      }
      return updatedTodos;
    })
  };

  

  const deleteHandler=(index: number):void =>{
    const filterTodo = todos.allTodos.filter((todo, i) => {
        return index !== i
    })
    setTodos({ 
        ...todos,
        allTodos: filterTodo
    })
  };
  
  return (
    <>
      <div className="p-6">
        <div className=" flex justify-between items-center">
          <input
            type="checkbox"
            value={list.name}
            onChange={() =>handleCheckboxChange(list.id)}
          />
          <h1
            className="md:w-[10rem] w-[4rem] sm:mx-7 mx-1 "
          >
            {list.name}
          </h1>
          <h1 className="px-2 sm:visible invisible ">{list.duedate}</h1>
          <h4 
          className={`bg-${list.status === 'completed'? 'indigo': 'lime'}-500 text-white rounded-3xl sm:mx-7 mx-1 p-1 px-2 text-center md:w-[8rem] w-[5rem] md:text-base text-xs`}>
            {list.status}
          </h4>
          <h4 className={`bg-${list.priority === 'high'? 'red': list.category === 'medium'? 'purple' : 'green'}-500 rounded-2xl p-2 sm:mx-10 mx-0 text-black sm:visible invisible `}>{list.priority}</h4>
          <button onClick={()=> deleteHandler(i)}>
          <RiDeleteBin5Line />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Tasks;
