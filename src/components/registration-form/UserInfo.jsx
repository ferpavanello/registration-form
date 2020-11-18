import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

function UserInfo({ formSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        formSubmit({ email, password })
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        id="email"
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
        id="password"
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
