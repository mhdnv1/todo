import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/todosSlice';
import { RootState } from '../store/store';

const TodoFilter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.todos.filter);

  const handleFilterChange = (newFilter: 'all' | 'completed' | 'incomplete') => {
    dispatch(setFilter(newFilter));
  };

  return (
    <div>
      <button
        onClick={() => handleFilterChange('all')}
        disabled={filter === 'all'}
      >
        Все
      </button>
      <button
        onClick={() => handleFilterChange('completed')}
        disabled={filter === 'completed'}
      >
        Выполненные
      </button>
      <button
        onClick={() => handleFilterChange('incomplete')}
        disabled={filter === 'incomplete'}
      >
        Невыполненные
      </button>
    </div>
  );
};

export default TodoFilter;