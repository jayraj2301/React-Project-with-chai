import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {

    todos : [{
        id:1,
        text: "Hello World!"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo : (state, action) => {
            type: "add"
            const todo = {
                id: nanoid,
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            type: "remove"
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state,action) => {
            type: "update"
            const uptodo = state.todos.find(todo => todo.id !== action.payload.id)
            
            if(uptodo){
                uptodo.text = action.payload.text
            }
        }
    }
})

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer