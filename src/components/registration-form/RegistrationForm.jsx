import React, { useState } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function RegistrationForm({ formSubmit }) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [cpf, setCpf] = useState('')
  const [promotions, setPromotions] = useState(true)
  const [newsletter, setNewsletter] = useState(false)
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
