import { ChangeEvent, ComponentPropsWithoutRef } from "react"

// Forms

export interface IForm extends ComponentPropsWithoutRef<'form'> { }

export interface IInput extends ComponentPropsWithoutRef<"input"> {
  label: string
  value?: string
}

export interface IUser {
  name: string
  email: string
  password: string
  confirmPassword?: string
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