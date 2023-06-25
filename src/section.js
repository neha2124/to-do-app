// 
import React from 'react'
import Header from './header'
import Tasks from './tasks'
import { useDrop } from 'react-dnd'

const Section = ({status ,tasks,setTasks,inProgress,closed, todos}) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))
      

  let text = "Todo"
  let bg = 'bg-slate-500'
  let taskToMap = todos

//   let count = todos.length
   if(status === 'inprogress'){
    text = 'In Progress'
    bg = 'bg-purple-500'
    taskToMap = inProgress
   }

   if(status === 'closed'){
    text = 'Closed'
    bg = 'bg-green-400'
    taskToMap = closed
   }
   const addItemToSection = (id) =>{
    //  console.log('drop' ,id ,status)
    setTasks((prev) =>{
    const mTask =  prev.map((t) => {
                if(t.id === id){
                    return {...t , status:status}
                }
                return t
     })
         localStorage.setItem("tasks", JSON.stringify(mTask))
       return mTask
    })
   }
    return (
    <div ref={drop} className= {`w-64 p-3 rounded-md ${isOver ? 'bg-slate-300' : ""}`}>
        <Header text={text} bg={bg} count={taskToMap.length}/>
        {taskToMap.length > 0 && taskToMap.map(task => <Tasks key={task.id} tasks = {tasks} setTasks={setTasks} task={task}/> )}
    </div>
  )
}

export default Section