import React from 'react';
import { useFetchTodosQuery } from '../store/todosApi';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const TodoList: React.FC = () => {
  const { data: todos, isLoading } = useFetchTodosQuery();
  const filter = useSelector((state: RootState) => state.todos.filter);

  const filteredTodos = todos?.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <TodoFilter />
      <ul>
        {filteredTodos?.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;