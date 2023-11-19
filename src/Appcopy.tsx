import "./App.css";
import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import Header from "./components/Header";

interface ToDoList {
  name: string;
  description: string;
  duedate: Date;
  priority: string;
  status: string;
}

interface allTodos {
  initalStates: ToDoList;
  allTodos: Array<ToDoList>;
}

const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState<allTodos>({
    initalStates: {
      name: "",
      description: "",
      duedate: new Date(),
      priority: "",
      status: "",
    },
    allTodos: [],
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleActive = () => {
    setActive(!active);
  };
  const handleShowless = () => {
    setShow(!show);
  };
  const handleShowmore = () => {
    setShow(!show);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodos({
      ...todos,
      initalStates: {
        ...todos.initalStates,
        [e.target.name]: e.target.value,
      },
    });
  };

  const submitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    setTodos({
      initalStates: {
        name: "",
        description: "",
        duedate: new Date(),
        priority: "",
        status: "",
      },
      allTodos: [...todos.allTodos, todos.initalStates],
    });
  };
  const allList = todos.allTodos;
  const highPriority = allList.filter((list) => list.priority === "high");
  console.log(highPriority);

  return (
    <div>
      <Header todos={todos}/>
      <div className="m-1 p-7 min-h-[30rem] bg-gray-200 flex md:flex-row flex-col justify-between">
        {allList.length > 0 ? (
          <div>
            <h1 className="pb-2 font-serif text-2xl font-medium">Tasks</h1>
            <div className="">
              <div className="flex p-2">
                {show ? (
                  <button onClick={handleShowless}>
                    <BiChevronDown />
                  </button>
                ) : (
                  <button onClick={handleShowmore}>
                    <BiChevronUp />
                  </button>
                )}
                <h3 className="px-3 text">High Priority</h3>
              </div>
              {show ? (
                <div>
                  {highPriority.map((list, i) => (
                    <div key={i} className="flex bg-lime-500 p-6">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <div className="px-4 flex items-center">
                        <h1
                          style={{
                            textDecoration: isChecked ? "line-through" : "none",
                          }}
                          className="text-white px-2"
                        >
                          {list.name}
                        </h1>
                        <BiDotsHorizontalRounded />
                        {/* <h2>{list.description}</h2>
              <h3>{list.priority}</h3>
              <h4>{list.status}</h4> */}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="font-serif flex flex-col justify-center  ">
            <p className="">
              Welcome, To <span>The To Planner</span> we are excited and
              thrilled that you are here. This website is a To Do List
              Organizing and Creating webiste and hope you like it.
            </p>
            <button
              className="text-gray-500 text-2xl font-medium"
              onClick={handleActive}
            >
              + Add Task
            </button>
          </div>
        )}
        {active ? (
          <div className="">
            <form
              onSubmit={submitForm}
              className="flex flex-col rounded border-2 border-white p-6"
            >
              <div className="m-2 flex">
                <label className="text-white px-3">Taskname:</label>
                <input
                  className="rounded w-full p-1 "
                  id="name"
                  type="text"
                  name="name"
                  value={todos.initalStates.name}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="m-2 flex">
                <label className="text-white px-3">Description:</label>
                <input
                  className="rounded w-full p-1"
                  id="description"
                  type="text"
                  name="description"
                  value={todos.initalStates.description}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="m-2 flex">
                <label className="text-white px-3">DueDate:</label>
                <input
                  className="rounded w-full p-1"
                  id="duedate"
                  type="date"
                  name="duedate"
                  value=""
                  onChange={onChangeHandler}
                />
              </div>
              <div className="m-2 flex">
                <label className="text-white px-3">Priority:</label>
                <input
                  className="rounded w-full p-1"
                  id="status"
                  type="text"
                  name="priority"
                  value={todos.initalStates.priority}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="m-2 flex">
                <label className="text-white px-3">Status:</label>
                <input
                  className="rounded w-full p-1"
                  id="status"
                  type="text"
                  name="status"
                  value={todos.initalStates.status}
                  onChange={onChangeHandler}
                />
              </div>
              <button className="text-white border-2 " type="submit">
                Add Task
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
