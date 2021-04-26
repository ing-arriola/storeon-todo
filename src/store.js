import {createStoreon} from 'storeon'
import {v4 as uuidv4} from 'uuid'
import { persistState } from '@storeon/localstorage'

let note = store => {
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
    store.on('deleteTask',({tasks,id})=>({
        tasks: tasks.filter(note => note.id === id)
    }))
}

const store = createStoreon([
    tasks,
    persistState(['notes'])
])

export default store;
