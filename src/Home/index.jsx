import React, { useState } from 'react';
import { Card } from '../components/Card'
import './styles.css'

function Home() {
  
  const [studentName, setStudentName] = useState('');

  return (
    <div className="container">
      <h1>Lista de presença</h1>

      <input 
        type="text" 
        placeholder="Digite aqui seu nome"
        onChange={e => setStudentName(e.target.value)}
      />
      <button>Adicionar</button>

      <Card name="Cassiano Junior" time="07:00:15"/>
      <Card name="Camila Evelyn" time="07:01:23"/>
      <Card name="Miguel Osti" time="07:01:53"/>
      <Card name="Noah Osti" time="07:02:10"/>
      <Card name="Teste" time="07:02:25"/>
    </div>
  )
}

export default Home
