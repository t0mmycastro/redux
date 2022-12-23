import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, updateTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'

export const TaskForm = () => {

    const [task, setTask] = useState(
        {
            title: '',
            description: ''
        }
    )

    // Nos va a permitir disparar eventos
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)

    const recibirEvento = (e) => {
        setTask({
            ...task, 
            [e.target.name]: e.target.value,
        })
    }

    const enviarEvento  = (e) => {
        e.preventDefault()

        if (params.id) {
            dispatch(updateTask(task))
        } else {
            dispatch(addTask({
                ...task,
                id: uuid(),
               }))
        }
        navigate('/')
       
    }

    useEffect(() => {
        if (params.id) {
            setTask(tasks.find(task => task.id === params.id));
        }
    }, [params.id, tasks])

    return (
        <form onSubmit={enviarEvento} className='bg-zinc-800 max-w-sm p-4 mb-2'>
            <label htmlFor='title' className='block text-xs font-bold '>Tareas:</label>
            <input name='title' type="text" placeholder='titulo' onChange={recibirEvento} value={task.title} className='w-full p-2 rounded-md bg-zinc-600 mb-2'/>

            <label htmlFor='description' className='block text-xs font-bold'>Descripcion:</label>
            <textarea name='description' placeholder='description' onChange={recibirEvento} value={task.description} className='w-full p-2 rounded-md bg-zinc-600 mb-2'/>

            <button className='bg-violet-600 px-2 py-2'>Guardar</button>
        </form>
    )
}
