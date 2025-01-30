import {createSlice} from "@reduxjs/toolkit";
import {TodoItem} from "../../models/TodoType";

export interface TodosState {
    items: TodoItem[];
}

const initialState: TodosState = {
    items: JSON.parse(localStorage.getItem('todos') || '[]')
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdd: (state, action) => {
            state.items.push(action.payload)
            localStorage.setItem('todos', JSON.stringify(state.items));
        },
        todoDelete: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.items));
        },
        todoSelect: (state, action) => {
            state.items = state.items.map(item =>
                item.id === action.payload ? {...item, completed: !item.completed} : item)
            localStorage.setItem('todos', JSON.stringify(state.items));
        }
    }
})

export const { todoAdd, todoDelete, todoSelect } = todosSlice.actions
export default todosSlice.reducer
