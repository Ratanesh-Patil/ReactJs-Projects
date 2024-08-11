import { createContext ,useContext } from "react";

export const TodoContext = createContext({
    todos : [{
        id : 1,
        todo : "task 1",
        completed : false
    }],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deletedTodo : (id) => {},
    toggleCompleteTodo : (id) => {}

})

export const useTodo = () => {
 return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider