import React, { useState, useEffect } from 'react'
import DeliveryInfo from './DeliveryInfo'
import PersonalInfo from './PersonalInfo'
import UserInfo from './UserInfo'
import { Step, Stepper, StepLabel, Typography } from '@material-ui/core'

function RegistrationForm({ formSubmit, validateCpf }) {
  const [actualStage, setActualStage] = useState(0)
  const [formData, setFormData] = useState({})
  const forms = [
    <UserInfo formSubmit={concatData} />,
    <PersonalInfo formSubmit={concatData} validateCpf={validateCpf} />,
    <DeliveryInfo formSubmit={concatData} />,
    <Typography>Thanks for the registration</Typography>,
  ]

  useEffect(() => {
    if (actualStage === forms.length - 1) {
      formSubmit()
    }
  })

  function concatData(newData) {
    setFormData({ ...formData, ...newData })
    nextStage()
  }

  function nextStage() {
    return setActualStage(actualStage + 1)
  }

  return (
    <>
      <Stepper activeStep={actualStage}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Personal Info</StepLabel>
        </Step>
        <Step>
          <StepLabel>Delivery</StepLabel>
        </Step>
        <Step>
          <StepLabel>End</StepLabel>
        </Step>
      </Stepper>
      {forms[actualStage]}
    </>
  )
}

export default RegistrationForm
