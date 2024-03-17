import React from "react"; // Importing React library

export const TodoItem = ({ todo, onDelete }) => { // Defining TodoItem component with props destructured
  return (
    <div> {/* Container for todo item */}
      <h3>{todo.title}</h3> {/* Displaying todo title */}
      <p>{todo.desc}</p> {/* Displaying todo description */}
      <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button> {/* Delete button with onClick event to trigger onDelete function */}
    </div>
  );
};
