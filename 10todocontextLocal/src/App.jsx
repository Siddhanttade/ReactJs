import { useState,useEffect } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import { TodoForm, TodoItem } from './components'
import React from 'react' 
import './App.css'
import { use } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prevTodos) => [{id:Date.now(),...todo}, ...prevTodos]) //here we are spreading values that we have taken from the form
  }
  
  //here we are updating the todo we are looping through the previous todos and checking if the id matches the one we are updating if it does we return the new todo else we return the previous todo
  const updateTodo = (id, todo) => {
    setTodos((prevTodos) =>prevTodos.map((prevTodo)=>()=> prevTodo.id === id ? todo  : prevTodo))
    //the above syntax in alternate form using for each
    // prev.map((eachValue) => {
    //   if (eachValue.id === id) {
    //     return todo;
    //   }
    //   return eachValue;
    // })
  }

  //here we used filter because we had to simply remove the todo with the id that we are passing
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo //here we took all values first and then overwrite the completed value with the opposite of what it was before
      )
    )
  }

  useEffect(() => {
    const todos=JSON.parse(localStorage.getItem('todos'));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <TodoProvider value={{ todos, setTodos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here and inside loop we pass a prop to todo item and then call it */}
                        {todos.map((todo) => (
                          //here we need to use keys because we are mapping through an array and rendering multiple components and react doen't know which component is which so we need to give a unique key to each component
                          //we can not take index also because it has drawbacks like if we delete a todo the index will change and react will not be able to identify which component is which
                            <div key={todo.id} className="w-full">
                                {todos.map((todo) => (
                                  <TodoItem key={todo.id} todo={todo} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}


export default App;
