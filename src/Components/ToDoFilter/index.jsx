import { useContext } from "react";
import { ToDoContext } from "../../Context/ToDoProvider";

const ToDoFilter = () => {
  const { setIsCompletedFilter } = useContext(ToDoContext);
  return (
    <div className="mt-5 flex justify-end">
      <input
        type="checkbox"
        name="chkfilter"
        id="chkfilter"
        onChange={(e) => {
          console.log(e);
          setIsCompletedFilter(e.target.checked);
        }}
      />
      <label htmlFor="chkfilter" className="text-white ml-2">
        Completed
      </label>
    </div>
  );
};

export default ToDoFilter;
