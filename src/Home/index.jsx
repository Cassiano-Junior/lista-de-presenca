import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card'
import './styles.css'

function Home() {
  
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })

    };

    setStudents([...students, newStudent]);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/Cassiano-Junior')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
    .catch(error => console.error(error))
  }, [] );

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>

        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <input 
        type="text" 
        placeholder="Digite aqui seu nome"
        onChange={e => setStudentName(e.target.value)}
      />
      <button
        type="button"
        onClick={handleAddStudent}
      >
        Adicionar
      </button>

      {
        students.map(student => (
          <Card 
            key={student.time} // ideal seria uso de um ID
            name={student.name}
            time={student.time}
          />
        ))
      }

    </div>
  )
}

export default Home
