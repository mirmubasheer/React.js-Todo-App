import React from "react"; // Importing React library
import { TodoItem } from "./TodoItem"; // Importing TodoItem component

export const Todos = (props) => { // Defining Todos component
  return (
    <div className="container"> {/* Container for styling */}
      <h3 className="text-center my-3">Todos List</h3> {/* Heading */}
      {props.todos.length === 0 ? ( // Conditional rendering based on todos length
        "No todos to display" // Display message if no todos
      ) : (
        // Otherwise, map through todos array
        props.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />; // Rendering TodoItem component for each todo
        })
      )}
    </div>
  );
};
