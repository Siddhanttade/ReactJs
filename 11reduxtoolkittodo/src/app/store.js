import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice.js'; // Import the todo reducer from the todoSlice file

export const store = configureStore({
    reducer:{
        todoReducer
    }
}); // Create a Redux store using configureStore from Redux Toolkit
// This store can be used to manage the state of the application

