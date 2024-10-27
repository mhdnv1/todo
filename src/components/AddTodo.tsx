import React, { useState } from 'react';
import { useAddTodoMutation } from '../store/todosApi';

const AddTodo: React.FC = () => {
  const [addTodo] = useAddTodoMutation();
  const [text, setText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      await addTodo({ text, completed: false }).unwrap();
      setText('');
    } catch (error) {
      console.error('Ошибка при добавлении задачи:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{marginBottom:"10px"}}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите новую задачу"
      />
      <button type="submit">Добавить задачу</button>
    </form>
  );
};

export default AddTodo;
