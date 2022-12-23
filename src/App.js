import './App.css';
import { TaskForm } from './components/TaskForm';
import { TasksList } from './components/TasksList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// useDispatch: para hacer algo
// useSelector: para seleccionar algo o traer algo
function App() {

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className='flex items-center justify-center h-full'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksList/>}/>
          <Route path='/crear-tarea' element={<TaskForm/>}/>
          <Route path='/editar-tarea/:id' element={<TaskForm/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
