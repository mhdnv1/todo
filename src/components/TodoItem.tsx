import React from 'react';
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../store/todosApi';

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const handleToggleComplete = () => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={handleToggleComplete}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
    </li>
  );
};

export default TodoItem;