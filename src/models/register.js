function validateCpf(value) {
  if (value.length !== 11) {
    return { isValid: false, message: 'CPF must be 11 digits.' }
  }
  return { isValid: true, message: '' }
}

function validateLength(value) {
  if (value.length < 4 || value.length > 72) {
    return {
      isValid: false,
      message: 'Field must have between 4 and 72 digits.',
    }
  }
  return { isValid: true, message: '' }
}

export { validateCpf, validateLength }
