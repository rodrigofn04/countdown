import React from 'react'
import Title from '../components/Title'
import Counter from '../components/Counter'

import { useContext, useEffect } from 'react'
import { CountdownContext } from '../context/CountdownContext'

import useCountdown from '../hooks/useCountdown'
import { Navigate } from 'react-router-dom';

const Countdown = () => {
  const { event } = useContext(CountdownContext)

  if (!event) return <Navigate to="/" />

  const eventTitle = event.title

  const eventColor = event.color
  
  const eventDescription = event.description

  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
      <Title title={`Contagem regressiva para ${eventTitle}`}  eventColor={eventColor}/>
        <div className="countdown-container">
          <Counter title="Dias" number={day} eventColor={eventColor}/>
          <Counter title="Horas" number={hour} eventColor={eventColor}/>
          <Counter title="Minutos" number={minute} eventColor={eventColor}/>
          <Counter title="Segundos" number={second} eventColor={eventColor}/>
        </div> 
        <div className="description">
          {eventDescription}
        </div>
    </>
  )
}

export default Countdown