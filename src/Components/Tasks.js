import React,{ useState } from 'react'
import {useStoreon} from 'storeon/react'


const Tasks = () => {
    const {dispatch,tasks} = useStoreon('tasks')
    const [value,setValue] = useState('') 

    const deleteTask = id => {
        dispatch('deleteTask',id)
    }

    const submit = () => {
        dispatch('addTask',value)
        setValue()
    }

    const handleInput = e => {
        setValue(e.target.value)
    }

    return (
        <section>
            <header>Tasks</header>
            <div className="addTask">
                <textarea onChange={handleInput} value={value} />
                <button onClick={()=>submit()}>Add new task</button>
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <div className='todo'>
                            <p>{task.item}</p>
                            <button onClick={()=>deleteTask(task.id)} >Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Tasks
