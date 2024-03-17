import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault(); // Corrected typo

    if (!title || !desc) {
      alert("Please fill in the inputs");
      return; // Stop further execution if inputs are empty
    }

    addTodo(title, desc); // Call addTodo function with title and desc
    setTitle(""); // Clear input fields after submitting
    setDesc("");
  };

  return (
    <div className="container my-3">
      <h3>AddTodo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            placeholder="Enter Todo Description"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
