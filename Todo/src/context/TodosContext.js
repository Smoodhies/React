import { createContext, useContext } from "react";

const Todo = createContext({
  todos: [
    {
      id: 1,
      text: "nothing is there",
      completed: false,
    },
  ],
  addTodo: (todos) => {},
  updateTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  StatusTodo:(id,todo)=>{}
});

export const TodoContextProvider = Todo.Provider;

function useTodos() {
  return useContext(Todo);
}

export default useTodos;
