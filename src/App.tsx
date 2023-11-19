import "./App.css";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Layout from "./components/Layout";
import Form from "./components/Form";

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

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [todos, setTodos] = useState<allTodos>({
    initalStates: {
      id: Date.now(),
      name: "",
      duedate: "",
      priority: "",
      status: "not Completed",
      category: ''
    },
    allTodos: [],
  });
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <Header />
      <div className="m-1 p-7 min-h-[30rem]  flex lg:flex-row flex-col justify-between">
        <Layout todos={todos} setTodos={setTodos} setActive={setActive} active={active}/>
        <Form active={active} setTodos={setTodos} todos={todos} setActive={setActive}/>
      </div>
    </div>
  );
};

export default App;
