import { IUser } from "types/interfaces"
import inputs from "./fakecms/inputs"

export const initialValue = (type: 'register' | 'login') => {
  switch (type) {
    case "register":
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    case "login":
      return { email: '', name: '', password: '' }
    default:
      return { email: '', name: '', password: '' }
  }
}

export const cms = (type: string) => {
  if (type === 'register') {
    return { cta: 'Registre-se!', inputs: inputs.inputRegister }
  }
  return { cta: 'Faça seu login', inputs: inputs.inputLogin }
}


