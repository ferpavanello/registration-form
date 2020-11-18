import React, { useState } from 'react'
import DeliveryInfo from './DeliveryInfo'
import PersonalInfo from './PersonalInfo'
import UserInfo from './UserInfo'

function RegistrationForm({ formSubmit, validateCpf }) {
  const [actualStage, setActualStage] = useState(0)
  const forms = [
    <UserInfo formSubmit={nextStage} />,
    <PersonalInfo formSubmit={nextStage} validateCpf={validateCpf} />,
    <DeliveryInfo formSubmit={formSubmit} />
  ]

  function nextStage() {
    return setActualStage(actualStage + 1)
  }

  return <>{forms[actualStage]}</>
}

export default RegistrationForm
