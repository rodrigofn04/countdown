import React, { use } from 'react'
import Title from './components/Title'
import Counter from './components/Counter'
import law from './assets/LAW.jpg'
import useCountdown from './hooks/useCountdown'
import {Outlet} from 'react-router-dom'

import './App.css'

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2026 00:00:00")

  return (
    <>
        <div className="App" style={{ backgroundImage: `url(${law})` }}> 
          <div className="container">
            <Title title="Contagem Regressiva para 2026" />
          <div className="countdown-container">
            <Counter title="Dias" number={day} />
            <Counter title="Horas" number={hour} />
            <Counter title="Minutos" number={minute} />
            <Counter title="Segundos" number={second} />
            </div>
            <Outlet />
          </div>
        </div>
    </>
  )
}

export default App
