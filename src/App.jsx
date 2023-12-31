import ToDoFilter from "./Components/ToDoFilter";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import ToDoProvider from "./Context/ToDoProvider";

function App() {
  return (
    <ToDoProvider>
      <>
        <div className="bg-gray-500 w-[100%] min-[321px]:w-[90%] md:w-[70%] lg:w-[60%] mx-auto px-6 py-4 mt-0 min-[321px]:mt-5">
          <ToDoForm />
          <div className="bg-gray-500 mt-5">
            <ToDoList />
          </div>
        </div>
      </>
    </ToDoProvider>
  );
}

export default App;
