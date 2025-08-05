import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos: [{   //it is a variable that accepts array of objects just like theme:dark
        id: 1,
        todo: "Learn React",
        completed: false
    }],
    //here we add functionalities without definition we will define them later in app.js
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
    //for any component we take values from todos and the methods are written in app.js when we use this context
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;