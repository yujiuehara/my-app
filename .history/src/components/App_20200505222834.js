import React, { useReducer, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'
//import operationLogs from '../reducers/operationLogs'


const App = () => {
  const appState localStorage.getItem('appwithRedux')
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(()=>{
    localStorage.setItem('appWithRedux', JSON.stringify(state))
  },[state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App