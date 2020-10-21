import React from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function RegistrationForm() {
  return (
    <form>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="lastname"
        label="Last Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promotions"
        control={<Switch name="promotions" defaultChecked color="primary" />}
      />
      <FormControlLabel
        label="Newsletter"
        control={<Switch name="newsletter" defaultChecked color="primary" />}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  )
}

export default RegistrationForm
