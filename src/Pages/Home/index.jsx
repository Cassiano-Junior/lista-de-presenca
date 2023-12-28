import React, { useState, useEffect } from 'react'
import { Container, Input, Div, Button, Header, Imagem } from './styles.jsx' 
import { Card } from '../../components/Card/index'

export function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({name: "", avatar: ""})

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    }
    setStudents([...students, newStudent])
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
  }, [])

  return (
    <Container>
      <Header>
        <h1>Lista de Presença</h1>
        <Div>
          <strong>{user.name}</strong>
          <Imagem src={user.avatar} alt="Foto de perfil " />
        </Div>
      </Header>
      <Input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setStudentName(e.target.value)}
      />
      <Button type="button" onClick={handleAddStudent}>
        Adicionar
      </Button>
      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </Container>
  )
}
