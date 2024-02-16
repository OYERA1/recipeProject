import { IForm, IUser } from "types/interfaces"
import inputs from "./fakecms/inputs"

export const initialValue = (type: string) => {
  if (type === 'register') {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    } satisfies IUser
  }
  return { email: '', name: '', password: '' } satisfies IUser
}

export const cms = (type: string) => {
  if (type === 'register') {
    return { cta: 'Registre-se!', inputs: inputs.inputRegister }
  }
  return { cta: 'Faça seu login', inputs: inputs.inputLogin }
}