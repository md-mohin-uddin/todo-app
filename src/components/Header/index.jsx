import React, { useState } from "react";
import todoLogo from "../../assets/todoLogo.svg";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      // Check if the title is empty or contains only whitespace
      alert("Please enter a task title."); // Display an alert if the title is empty
      return; // Exit the function early if the title is empty
    }

    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Todo Logo" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Add a new task"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
