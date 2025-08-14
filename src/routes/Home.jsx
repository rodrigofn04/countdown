import React from 'react'
import './Home.css'
import { useState, useContext } from 'react'

import { CountdownContext } from '../context/CountdownContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [image, setImage] = useState("")
  const [color, setColor] = useState("")
  const [description, setDescription] = useState("")

  const {event, setEvent} = useContext(CountdownContext)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const eventObejct = {
      title,
      date,
      image,
      color,
      description
    }

    setEvent(eventObejct)
    navigate('/countdown')
  }

  return (
    <div className='home'>
        <form className="countdown-form" onSubmit={handleSubmit}>
            <label>
              <span>Nome: </span>
              <input 
              type="text" 
              name='title' 
              placeholder='Digite o nome do evento' 
              onChange={(e) => setTitle(e.target.value)}
              required/>
              
              </label>
            <label>
              <span>Data: </span>
              <input 
              type="date" 
              name='date' 
              onChange={(e) => setDate(e.target.value)}
              required/>
            </label>
            <label>
              <span>Imagem: </span>
              <input 
              type="text" 
              name='image' 
              placeholder='URL da imagem' 
              onChange={(e) => setImage(e.target.value)}
              />
            </label>
            <label>
              <span>Cor temática: </span>
              <input 
              type="color" 
              name='color' 
              onChange={(e) => setColor(e.target.value)}
              />
            </label>
            <label>
              <span>Descrição: </span>
              <textarea 
              name='description' 
              placeholder='Digite a descrição do evento'
              onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
            <label>
              <input 
              type="submit" 
              value="Enviar"/>
            </label>
        </form>
    </div>
  )
}

export default Home