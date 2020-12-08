import React, { useState, useContext } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'
import FormValidations from '../../contexts/formValidations'

function PersonalInfo({ formSubmit }) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [cpf, setCpf] = useState('')
  const [promotions, setPromotions] = useState(true)
  const [newsletter, setNewsletter] = useState(false)
  const [errors, setErrors] = useState({
    cpf: { isValid: true, message: '' },
    name: { isValid: true, message: '' },
  })

  const validations = useContext(FormValidations)

  function validateFields(event) {
    const { name, value } = event.target
    const newState = { ...errors }
    newState[name] = validations[name](value)
    setErrors(newState)
  }

  function isValidForm () {
    return Object.keys(errors).every(key => {
      return errors[key].isValid
    })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (isValidForm()) {
          formSubmit({ name, lastName, cpf, promotions, newsletter })
        }
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
        onBlur={validateFields}
        error={!errors.name.isValid}
        helperText={errors.name.message}
        id="name"
        name="name"
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
        name="lastname"
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
        onBlur={validateFields}
        error={!errors.cpf.isValid}
        helperText={errors.cpf.message}
        id="cpf"
        name="cpf"
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

export default PersonalInfo
