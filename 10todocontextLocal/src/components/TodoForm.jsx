import React, { use } from 'react'
import { useState, useContext } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {
    const[todo, setTodo] = useState('');
    const { addTodo } = useTodo();

    const add=(e) => {
        e.preventDefault();
        if (!todo) return; // Prevent adding empty todos
        addTodo({ id: Date.now(), todo, completed: false }); //as we are taking the input in the form of object we are passing the id and completed value as well
         //here we are spreading values that we have taken from the form
         //we are using Date.now() to generate a unique id for each todo
         //completed is set to false by default
         //the above can be also written as addTodo({ todo, completed: false }); because id is generated in the app.js and todo are spread earlier
        setTodo(''); // Clear input after adding
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //wiring the variable to the input
                onChange={(e) => setTodo(e.target.value)} //updating the variable with the input value
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

