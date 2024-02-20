import { IInput } from "interfaces"

const cms = (name: IInput['name']) => {
  switch (name) {
    case 'name':
      return {
        label: 'Nome',
        placeholder: 'John Doe',
        type: 'text'
      }
    case 'email':
      return {
        label: 'Email',
        placeholder: 'example@mail.com',
        type: 'email'
      }
    case 'password':
      return {
        label: 'Senha',
        placeholder: '********',
        type: 'password'
      }
    case 'confirmPassword':
      return {
        label: 'Confirme sua senha',
        placeholder: '********',
        type: 'password'
      }

  }
}

export { cms }