import React from 'react'
import DeliveryInfo from './DeliveryInfo'
import PersonalInfo from './PersonalInfo'
import UserInfo from './UserInfo'

function RegistrationForm({ formSubmit, validateCpf }) {
  return (
    <>
      <PersonalInfo formSubmit={formSubmit} validateCpf={validateCpf} />
      <UserInfo />
      <DeliveryInfo />
    </>
  )
}

export default RegistrationForm
