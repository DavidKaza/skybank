import { configureStore } from '@reduxjs/toolkit';
import UserSlicer from './UserSlicer';

export const store = configureStore({
  reducer: { user: UserSlicer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
