import React from 'react'
import { toast } from 'react-hot-toast'
import { useDrag } from 'react-dnd'

const Tasks = ({ tasks, setTasks, task }) => {
    
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: {id:task.id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
      
    
    console.log(isDragging)
    
    const handleRemove = (id) =>{
    const fTasks = tasks.filter(t => t.id !== id)
   localStorage.setItem('tasks',JSON.stringify(fTasks))
    setTasks(fTasks)
    toast("Task Removed" ,{icon:'💀'})
     
    }
    return (
        <div ref={drag}className={`relative p-4 shadow-md rounded-md cursor-grabbing
         ${isDragging ? 'opacity-25' :'opacity-100'}` } >
            <p>{task.name}</p>
            <button className='absolute bottom-1 right-1
             text-slate-400' onClick={() => handleRemove(task.id)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </button>
        </div>
    )
}

export default Tasks