import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profile';
import counterReducer from './slices/counter';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
