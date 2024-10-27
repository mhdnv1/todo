import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo/>
      <TodoList />
    </div>
  );
};

export default App;
