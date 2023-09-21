import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { ToDoContext } from "../../Context/ToDoProvider";

const ToDoList = () => {
  const { todos, completedToDos,isCompletedFilter } = useContext(ToDoContext);
  return (
    <>
      <div className="text-xl text-white font-bold">
        <h2>ToDoList</h2>
      </div>
      <div className="mt-5">
        {todos.map((todo) => {
          if (!isCompletedFilter) {
            if (!todo.completed) {
              return <ToDoItem todo={todo} key={todo.id} />;
            }
          } else {
            if (todo.completed) {
              return <ToDoItem todo={todo} key={todo.id} />;
            }
          }
        })}

        {!isCompletedFilter && completedToDos.length > 0 && (
          <div className="mt-4  py-5 ">
            <div className="text-white font-bold text-lg">Completed</div>
            {completedToDos.map((todo) => (
              <ToDoItem todo={todo} key={todo.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ToDoList;
