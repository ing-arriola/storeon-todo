import {createStoreon} from 'storeon'
import {v4 as uuidv4} from 'uuid'
import { persistState } from '@storeon/localstorage'

let tasks = store => {
    store.on('@init',() => ({
        tasks:[
            {id:uuidv4(),item:"first task"},
            {id:uuidv4(),item:"second task"}
        ]
    }))
    store.on('addTask',({tasks},task)=>{
        return {
            tasks: [...tasks,{id:uuidv4(),item:task}] 
        }
    })
    store.on('deleteTask',({tasks},id)=>({
        tasks: tasks.filter(task => task.id !== id)
    }))
}

const store = createStoreon([
    tasks,
    persistState(['tasks'])
])

export default store;
