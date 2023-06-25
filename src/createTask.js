import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import toast from 'react-hot-toast'
const CreateTask = ({tasks,setTasks}) => {
    const [task,setTask] = useState({
        id:"",
        name:"",
        status:"todo"
    })
    console.log(task)
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(task.name.length<3)
         return toast.error("A task must have more than three charcter")
        if(task.name.length > 100){
            return toast.error("A task must not be more than 100 characters")
        }
         setTasks((prev) => {
            const list = [...prev,task]
            localStorage.setItem("tasks",JSON.stringify(list))
            return list
        })
        toast.success("Task Created")
        setTask({
            id:"",
            name:"",
            status:"todo"
        })
    }
  return (
    <form onSubmit={handleSubmit}> 

        <input type="text"
         className='border-2
          border-slate-400
           bg-slate-100 rounded-md 
           mr-4 h-12 w-64 px-1 mt-20'
           value={task.name}
           onChange={(e) => 
            setTask({...task,id:uuidv4(),name:e.target.value})}
           />
        <button className='bg-cyan-500 rounded-md h-12 text-white px-4'>Create</button>
    </form>
  )
}

export default CreateTask