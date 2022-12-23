// Podemos crear tareas, añadir datos, eliminar tareas, actualizar o listar elementos
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        // EL STATE ES TODO ESTO
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false
    }
]

const taskSlices = createSlice({
    name: 'tasks',
    initialState,
    // Cuando inicie la aplicacion, va a ser un arreglo vacio
    reducers: {
        addTask: (state, action) => {
            // Va a poder ser llamado en cualquier parte de la aplicacion
            state.push(action.payload)
            //añadimos una nueva tarea
        },
        deleteTask: (state, action) => {
           const taskFound = state.find(task => task.id === action.payload)
           if (taskFound) {
            state.splice(state.indexOf(taskFound), 1)
           }
        },
        updateTask: (state, action) => {
            const {id, title, description} = action.payload

            const foundTask = state.find(task => task.id === id)
            if (foundTask) {
                foundTask.title = title
                foundTask.description = description
            }
        }
    }
})

export default taskSlices.reducer
// Estariamos exportando solamente los reducers 
export const  {addTask, deleteTask, updateTask} = taskSlices.actions