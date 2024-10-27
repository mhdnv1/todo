import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodosState {
  filter: 'all' | 'completed' | 'incomplete';
}

const loadFilterFromLocalStorage = (): 'all' | 'completed' | 'incomplete' => {
  const savedFilter = localStorage.getItem('filter');
  return savedFilter === 'completed' || savedFilter === 'incomplete' ? savedFilter : 'all';
};

const initialState: TodosState = {
  filter: loadFilterFromLocalStorage(),
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<'all' | 'completed' | 'incomplete'>) => {
      state.filter = action.payload;
      localStorage.setItem('filter', action.payload);
    },
  },
});

export const { setFilter } = todosSlice.actions;
export default todosSlice.reducer;