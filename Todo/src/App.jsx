import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { TodoContextProvider } from "./context/TodosContext";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todos) => {
    setTodos((prevTodos) => {
      return [{ id: Date.now(), ...todos }, ...prevTodos];
    });
  };

  const updateTodo = (id, todos) => {
    console.log("updatedtodo from app id and todo", id, todos);
    setTodos((prevTodos) => {
      return prevTodos.map(
        (eachPrevTodo) => (eachPrevTodo?.id === id ? todos : eachPrevTodo),

        // {
        //   // return prevTodos?.id === id ? { text: todos?.text, ...eachTodo } : "";
        //   return
        // }
      );
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((PrevTodos) => PrevTodos?.id !== id);
    });
  };

  const StatusTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodos) =>
        prevTodos.id == id
          ? { completed: !prevTodos?.completed, ...prevTodos }
          : prevTodos,
      ),
    );
  };

  return (
    <TodoContextProvider
      value={{ addTodo, deleteTodo, updateTodo, todos, StatusTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            <TodoForm />
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo, index) => (
              <div
                key={todo.id ? todo.id : index}
                className="w-full text-black"
              >
                <TodoItem todos={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
