import { Children, useState } from "react";
import useTodos from "../context/TodosContext";

function TodoItem({ todos }) {
  console.log("todos from todoitem", todos);

  const [todoMsg, setTodoMsg] = useState(todos.todo);

  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const { deleteTodo, StatusTodo, updateTodo } = useTodos();

  const editTodo = () => {
    setToggleCompleted(!toggleCompleted);
    updateTodo(todos.id, { ...todos, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const setToggleCompleted = () => {
    StatusTodo(todos.id);
  };

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
        onChange={(e) => setTodoMsg(e.target.value)}
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
