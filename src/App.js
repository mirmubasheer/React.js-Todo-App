import React, { useState, useEffect } from "react"; // Import React library and necessary hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route components from react-router-dom
import Header from "./MyComponents/Header"; // Import Header component
import { Todos } from "./MyComponents/Todos"; // Import Todos component
import { Footer } from "./MyComponents/Footer"; // Import Footer component
import { AddTodo } from "./MyComponents/AddTodo"; // Import AddTodo component
import { About } from "./MyComponents/About"; // Import About component

function App() {
  let initTodo; // Declare variable to store initial todos

  // Check if todos exist in localStorage, if not, initialize to an empty array
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // Function to delete a todo item
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo)); // Filter out the todo to be deleted and update todos state
  };

  // Function to add a new todo item
  const addTodo = (title, desc) => {
    let sno = 1;
    if (todos.length > 0) {
      sno = todos[todos.length - 1].sno + 1; // Calculate the sno for the new todo
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]); // Add the new todo to the todos array and update todos state
  };

  const [todos, setTodos] = useState(initTodo); // Initialize state for todos, defaulting to initTodo

  // Save todos to localStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router> {/* Set up BrowserRouter */}
      <Header title="My Todos" searchBar={false} /> {/* Render Header component with title prop */}
      <Routes> {/* Define routes */}
        {/* Route for "/" path, rendering AddTodo and Todos components */}
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} /> {/* Render AddTodo component with addTodo prop */}
              <Todos todos={todos} onDelete={onDelete} /> {/* Render Todos component with todos and onDelete props */}
            </>
          }
        />
        {/* Route for "/about" path, rendering About component */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> {/* Render Footer component */}
    </Router>
  );
}

export default App; // Export App component
