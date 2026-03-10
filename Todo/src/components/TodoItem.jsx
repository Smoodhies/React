import { Children, useState } from "react";
import useTodos from "../context/TodosContext";

function TodoItem({ todos }) {
  console.log("todos from todoitem", todos);

  const [toggleCompleted, setToggleCompleted] = useState(false);
  // console.log("toggle complete from todoitem", toggleCompleted)

  const [todoMsg, setTodoMsg] = useState(todos.todo);

  console.log("todosmdg from todoitem", todoMsg);

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  // console.log("todos from todoitem", isTodoEditable);

  const { addTodo, deleteTodo, StatusTodo, updateTodo } = useTodos();

  // console.log("add todo from context but in tododitem we call it ",addTodo)
  // console.log("delete todo from context but in tododitem we call it ",deleteTodo)
  // console.log(
  //   "StatusTodo todo from context but in tododitem we call it ",
  //   StatusTodo,
  // );

  console.log(
    "updateTodo todo from context but in tododitem we call it ",
    updateTodo,
  );
  
  const editTodo = () => {
    console.log("togglecomplete",toggleCompleted)
    setToggleCompleted(!toggleCompleted);
    console.log("edit todo value", todos);

    updateTodo(todos.id, todoMsg);
  };

  //  setTodoMsg((prev)=>{
  //   setIsTodoEditable(true)
  //    updateTodo(todos.id, todos)
  //  }
  //   )

  // setToggleCompleted(StatusTodo(todos.id, todos));

  // setIsTodoEditable(!isTodoEditable);

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todos.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todos.completed}
        onChange={setToggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todos.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => {
          console.log("todomsg from input ", todoMsg);
          console.log("target value", e.target.value);
          return setTodoMsg( e.target.value );
        }}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todos.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todos.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todos.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
