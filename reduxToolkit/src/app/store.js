import {configureStore} from '@reduxjs/toolkit';
import todooReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todooReducer
});