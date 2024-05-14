import React, { useState } from "react";
import styles from "./task.module.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export function Task({ task, onDelete, onComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleComplete = () => {
    onComplete(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (!editedTitle.trim()) {
      // Check if the edited title is empty or contains only whitespace
      alert("Please enter a task title."); // Display an alert if the edited title is empty
      return; // Exit the function early if the edited title is empty
    }

    onEdit(task.id, editedTitle);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(task.title);
  };

  const handleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  return (
    <div className={styles.task}>
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={handleChange}
          className={styles.editInput}
        />
      ) : (
        <p
          className={`${styles.taskTitle} ${
            task.isCompleted ? styles.completed : ""
          }`}
        >
          {task.title}
        </p>
      )}

      <div className={styles.actions}>
        {isEditing ? (
          <>
            <button className={styles.editButton} onClick={handleSaveEdit}>
              Save
            </button>
            <button className={styles.cancelButton} onClick={handleCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEdit} className={styles.editButton}>
              <AiOutlineEdit size={20} />
            </button>
            <button onClick={handleDelete} className={styles.deleteButton}>
              <AiOutlineDelete size={20} />
            </button>
          </>
        )}
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleComplete}
          className={styles.checkbox}
        />
      </div>
    </div>
  );
}
