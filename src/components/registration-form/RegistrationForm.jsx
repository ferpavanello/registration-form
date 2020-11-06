import React, { useState } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function RegistrationForm({ formSubmit, validateCpf }) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [cpf, setCpf] = useState('')
  const [promotions, setPromotions] = useState(true)
  const [newsletter, setNewsletter] = useState(false)
  const [error, setError] = useState({ cpf: { isValid: true, message: '' } })
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        formSubmit({ name, lastName, cpf, promotions, newsletter })
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
        id="name"
        label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value)
        }}
        id="lastName"
        label="Last Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value)
        }}
        onBlur={(event) => {
          const validation = validateCpf(event.target.value)
          setError({ cpf: validation })
        }}
        error={!error.cpf.isValid}
        helperText={error.cpf.message}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promotions"
        control={
          <Switch
            checked={promotions}
            onChange={(event) => {
              setPromotions(event.target.checked)
            }}
            name="promotions"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Newsletter"
        control={
          <Switch
            checked={newsletter}
            onChange={(event) => {
              setNewsletter(event.target.checked)
            }}
            name="newsletter"
            color="primary"
          />
        }
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  )
}

export default RegistrationForm
