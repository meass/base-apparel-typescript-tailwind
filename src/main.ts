const email = document.querySelector('#mail') as HTMLInputElement
const submitBtn = document.querySelector('#submit') as HTMLButtonElement
const iconError = document.querySelector('#icon-error') as HTMLImageElement
const error = document.querySelector('#error') as HTMLParagraphElement

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submitBtn.addEventListener('click', () => {
  const isValid = emailRegExp.test(email.value)
  
  if(!isValid) {
    iconError.classList.add('active')
    submitBtn.classList.add('active')
    email.classList.add('active')
    error.classList.add('active')
  }
})

email.addEventListener('input', () => {
  const isValid = emailRegExp.test(email.value)
  if(isValid) {
    iconError.classList.remove('active')
    submitBtn.classList.remove('active')
    email.classList.remove('active')
    error.classList.remove('active')
  }
})
