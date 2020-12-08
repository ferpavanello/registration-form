import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

function DeliveryInfo({ formSubmit }) {
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState('')
  const [numberAddress, setNumberAddress] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        formSubmit({ cep, address, numberAddress, state, city })
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value)
        }}
        id="cep"
        name="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={address}
        onChange={(event) => {
          setAddress(event.target.value)
        }}
        id="address"
        name="address"
        label="Address"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numberAddress}
        onChange={(event) => {
          setNumberAddress(event.target.value)
        }}
        id="numberAddress"
        name="numberAddress"
        label="Number"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={state}
        onChange={(event) => {
          setState(event.target.value)
        }}
        id="state"
        name="state"
        label="State"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={city}
        onChange={(event) => {
          setCity(event.target.value)
        }}
        id="city"
        name="city"
        label="City"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finish
      </Button>
    </form>
  )
}

export default DeliveryInfo
