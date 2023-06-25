// 
import React, { useEffect, useState } from 'react'
import Section from './section'

const ListTask = ({ tasks, setTasks }) => {

    const [todos, setTodos] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [closed, setClosed] = useState([])

    useEffect(() => {
        const fTodos = tasks.filter(task => task.status === 'todo')
        const fInprogress = tasks.filter(task => task.status === 'inprogress')
        const fClosed = tasks.filter(task => task.status === 'closed')
        setTodos(fTodos)
        setInProgress(fInprogress)
        setClosed(fClosed)
    }, [tasks])

    const stauses = ['todo', 'inprogress', 'closed']
    return (
        <div className='flex gap-16'>
            {stauses.map((status, index) =>
                <Section key={index}
                 status={status} 
                todos={todos} 
                inProgress={inProgress}
                closed ={closed} 
                tasks={tasks} 
                setTasks={setTasks} />
            )}

        </div>
    )
}

export default ListTask