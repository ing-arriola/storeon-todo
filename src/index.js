import React from 'react'
import {render} from 'react-dom'
import {StoreContext} from 'storeon/react'
import Tasks from './Components/Tasks'
import store from './store'

const App = () => {
    return(
        <>
         <StoreContext.Provider value={store}>
            <Tasks/>
         </StoreContext.Provider>
        </>
    )
}

const root = document.getElementById('root')
render(<App/>,root)