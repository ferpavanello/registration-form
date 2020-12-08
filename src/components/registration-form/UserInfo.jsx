import React, { useState, useContext } from 'react'
import { TextField, Button } from '@material-ui/core'
import FormValidations from '../../contexts/formValidations'

function UserInfo({ formSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ password: { isValid: true, message: '' } })

  const validations = useContext(FormValidations)

  function validateFields(event){
    const {name, value} = event.target;
    const newState = {...errors}
    newState[name] = validations[name](value);
    setErrors(newState);
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
          formSubmit({ email, password })
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        id="email"
        name="email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value)
        }}
        onBlur={validateFields}
        error={!errors.password.isValid}
        helperText={errors.password.message}
        id="password"
        name="password"
        label="Password"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  )
}

export default UserInfo
