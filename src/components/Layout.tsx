import { useState } from "react";
//import { Link } from 'react-router-dom';

import Contact from "../ui/Contact";
import Tasks from "../ui/Tasks";
import Showbutton from "../ui/Showbutton";
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
type Checked = {
  todos: allTodos;
  setTodos: React.Dispatch<React.SetStateAction<allTodos>>;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
};
const Layout = ({ setTodos, todos, setActive, active }: Checked) => {
  const [isChecked, setIsChecked] = useState(false);
  const [show, setShow] = useState(false);
  const allList = todos.allTodos;
  const personalCategory = allList.filter(
    (list) => list.category === "personal"
  );
  const businessCategory = allList.filter(
    (list) => list.category === "business"
  );
  const socialCategory = allList.filter((list) => list.category === "social");

  return (
    <div>
      {allList.length > 0 ? (
        <div>
          <h1 className="pb-2 font-serif text-2xl font-medium">Tasks</h1>
          <div>
            <div className="flex p-2">
              <Showbutton setShow={setShow} show={show} />
              <h3 className="px-3 text">Personal Task</h3>
            </div>
            {show ? (
              <div>
                {personalCategory.map((list, i) => (
                  <Tasks
                    key={i}
                    i={i}
                    todos={todos}
                    setTodos={setTodos}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    list={list}
                  />
                ))}
              </div>
            ) : null}
          </div>
          <div>
            <div className="flex p-2">
              <Showbutton setShow={setShow} show={show} />
              <h3 className="px-3 text">Business Task</h3>
            </div>
            {show ? (
              <div>
                {businessCategory.map((list, i) => (
                  <Tasks
                    key={i}
                    i={i}
                    todos={todos}
                    setTodos={setTodos}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    list={list}
                  />
                ))}
              </div>
            ) : null}
          </div>
          <div>
            <div className="flex p-2">
              <Showbutton setShow={setShow} show={show} />
              <h3 className="px-3 text">Social Task</h3>
            </div>
            {show ? (
              <div>
                {socialCategory.map((list, i) => (
                  <Tasks
                    key={i}
                    i={i}
                    todos={todos}
                    setTodos={setTodos}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    list={list}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <Contact setActive={setActive} active={active} />
      )}
    </div>
  );
};
export default Layout;
