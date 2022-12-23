import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from 'react-router-dom'

export const TasksList = () => {

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const eliminarEvento = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div className='w-4/6'>
            <header className='flex justify-between items-center py-4'>
                <h1>Tareas: {tasks.length}</h1>
                <Link to='/crear-tarea' className='bg-violet-600 px-2 py-1 rounded-sm text-sm'>Crear tarea</Link>
            </header>
            <div className='grid grid-cols-3 gap-4'>
                {tasks.map(task => (
                    <div key={task.id} className='bg-neutral-800 p-4 rounded-md'>
                        <header className='flex justify-between'>
                            <h3>{task.title}</h3>
                            <div className='flex gap-x-2'>
                                <Link to={`/editar-tarea/${task.id}`} className='bg-zinc-600 px-2 py-1 text-xs rounded-md' >Editar</Link>
                                <button onClick={() => eliminarEvento(task.id)} className='bg-red-500 px-2 py-1 text-xs rounded-md'>Delete</button>      
                            </div>
                        </header>
                        <p>{task.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
