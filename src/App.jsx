import React from 'react'
import './App.css'
import data from "./data.js"
import Card from './Card'
import Navbar from './Navbar'

function App() {
  const cards = data.map((card) =>{
    return(
      <Card 
      key={card.id}
      {...card}
      />
    )

  })
  return (
    <div className="App">
      <Navbar/>
      {cards}
    </div>
  )
}

export default App
