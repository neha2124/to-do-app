import React,{useEffect, useState} from 'react'
import CreateTask from './createTask'
import ListTask from './listTask'
import { Toaster } from 'react-hot-toast'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = () => {
  
  const [tasks,setTasks] = useState([])
  console.log("tasks" , tasks)
  useEffect(() =>{
    setTasks(JSON.parse(localStorage.getItem("tasks")))
  },[])
  
  return (
    <DndProvider backend={HTML5Backend}>
    <Toaster/>
    <div className='bg-slate-200 w-screen h-screen flex flex-col items-center pt-3 gap-16 '>
      <CreateTask tasks={tasks} setTasks={setTasks}/>
      <ListTask tasks={tasks} setTasks={setTasks}/>
    

    </div>
    </DndProvider>

  )
}

export default App