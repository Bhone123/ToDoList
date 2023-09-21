import {
  RiEdit2Fill,
  RiDeleteBin2Fill,
  RiCheckFill,
  RiCloseFill,
} from "react-icons/ri";
import { useContext,useRef,useState } from "react";
import { ToDoContext } from "../../Context/ToDoProvider";

const ToDoItem = ({ todo }) => {
  const { DeleteToDo,editToDo } = useContext(ToDoContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const refEditInput = useRef(null);


  const DeleteHandler = () => {
    DeleteToDo(todo.id);
  };

  const EditHandler = () => {
    setIsEditMode(true);
    setIsReadOnly(false);
    refEditInput.current.focus();
  };

  const CancelHandler = () => {
    setIsEditMode(false);
    setIsReadOnly(true);
  };

  const SaveChangeHandler = () => {
    setIsEditMode(false);
    setIsReadOnly(true);
    //go to save chagne database
    todo.text = refEditInput.current.value;
    editToDo(todo);
  };

  const CompleteCheckHandler = (e) => {
    console.log(e.target.checked);
    todo.completed = e.target.checked;
    editToDo(todo);
  };


  return (
    <div className="flex mt-4 justify-between items-center w-full bg-gray-700 py-2 px-5">
      <div className="flex gap-2">
        <input
        onClick={(e) => CompleteCheckHandler(e)}
          type="checkbox"
          name="chk-completed"
          id="completed"
          defaultChecked={todo.completed ? true : false}
        />
        {/* <p
        className="text-lg text-white"
        >{todo.text}</p>
        {console.log(todo)} */}
        <input
          type="text"
          ref={refEditInput}
          name="text"
          id="text"
          defaultValue={todo.text}
          readOnly={isReadOnly}
          className={`outline-none text-white bg-transparent  w-full ${
            !isEditMode && todo.completed ? "line-through text-gray-200" : ""
          }`}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              SaveChangeHandler();
            }
          }}
        />
      </div>


      {isEditMode ? (
        <div className="flex justify-center">
          <button className="mr-4" onClick={SaveChangeHandler}>
            <RiCheckFill size={32} className="text-white border-2 border-white p-1 rounded-md" />
          </button>
          <button onClick={CancelHandler}>
            <RiCloseFill size={32} className="text-white border-2 border-white p-1 rounded-md" />
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button className="mr-4" onClick={EditHandler}>
            <RiEdit2Fill size={32} className="text-white border-2 border-white p-1 rounded-md" />
          </button>
          <button onClick={DeleteHandler}>
            <RiDeleteBin2Fill size={32} className="text-white border-2 border-white p-1 rounded-md" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ToDoItem;
