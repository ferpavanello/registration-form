import React, { Component } from 'react'
import './App.css'
import 'fontsource-roboto'
import RegistrationForm from './components/registration-form/RegistrationForm'
import { Container, Typography } from '@material-ui/core'
import { validateCpf, validateLength } from './models/register'
import FormValidations from './contexts/formValidations'

class App extends Component {
  render() {
    const validations = {
      cpf: validateCpf,
      password: validateLength,
      name: validateLength
    }

    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Registration Form
        </Typography>
        <FormValidations.Provider value={validations}>
          <RegistrationForm formSubmit={formSubmit} />
        </FormValidations.Provider>
      </Container>
    )
  }
}

function formSubmit(data) {
  console.log(data)
}

export default App
