import React, { Component } from 'react'
import './App.css'
import 'fontsource-roboto'
import RegistrationForm from './components/registration-form/RegistrationForm'
import { Container, Typography } from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Registration Form
        </Typography>
        <RegistrationForm formSubmit={formSubmit} validateCpf={validateCpf} />
      </Container>
    )
  }
}

function formSubmit (data) {
  console.log(data)
}

function validateCpf (value) {
  if (value.length !== 11) {
    return { isValid: false, message: 'CPF must be 11 digits.' }
  }
  return { isValid: true, message: '' }
}

export default App
