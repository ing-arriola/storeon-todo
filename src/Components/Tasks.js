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
            <div className="addNote">

            </div>
        </section>
    )
}

export default Tasks
