import { z } from "zod"
import { ChangeEvent, ComponentPropsWithoutRef } from "react"
import { loginSchema, registerSchema, userSchema } from "./lib/zod-schema"
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form"

// ZodTypes
type IUserLogin = z.infer<typeof loginSchema>
type IUserRegister = z.infer<typeof registerSchema>

export interface IUser extends IUserLogin, IUserRegister { }
// Forms

export interface IForm extends ComponentPropsWithoutRef<'form'> { 
  
}

export interface IInput extends ComponentPropsWithoutRef<"input"> {
  name: 'name' | 'email' | 'password' | 'confirmPassword'
  errors: string | undefined
  register: UseFormRegister<IUser>
}


// Buttons 

export interface IButton extends ComponentPropsWithoutRef<'button'> {
  formType: string
}

// Error

export interface IError {
  message: string
  status: number
}