'use server'

import { IUserLogin, IUserRegister } from "interfaces"
import { ZodError } from "zod"

const submitRegister = async (formData: IUserLogin | IUserRegister) => {
  try {
    const createUser = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    const res = await createUser.json()
    console.log(res)
  } catch (e) {
    if (e instanceof ZodError) {
      console.error(e.flatten())
    }
    console.log(e)
  }
}

const submitLogin = async (formData: IUserLogin | IUserRegister) => {
  console.log(formData)

}

export { submitRegister, submitLogin }