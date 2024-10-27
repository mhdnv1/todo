import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import { todoApi } from './todosApi';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;