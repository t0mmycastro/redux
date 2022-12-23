import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlice";


// Acá guardaremos todos los estados, para que se haga 1 centralizado
export const store = configureStore({
    // Con los reducers vamos a poder actualizar el estado, crear operaciones para
    //Cambiar el estado, es como un useState
    reducer: {
        tasks: tasksReducer,
    }
})

