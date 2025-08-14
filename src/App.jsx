import law from './assets/LAW.jpg'
import { useContext, useMemo } from 'react'
import { CountdownContext } from './context/CountdownContext'
import { Outlet, useLocation } from 'react-router-dom'

import './App.css'

function App() {
  const { event } = useContext(CountdownContext)

  let eventImage = null

  const location = useLocation()

  eventImage = location.pathname === '/' ? law : (event.image ? event.image : law)

  const appStyle = useMemo(() => ({
    backgroundImage: `url(${eventImage})`
  }), [eventImage])

  return (
    <>
        <div className="App" style={appStyle}> 
          <div className="container">
            <Outlet />
          </div>
        </div>
    </>
  )
}

export default App
