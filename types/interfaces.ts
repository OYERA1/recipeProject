import { ChangeEvent, ComponentPropsWithoutRef } from "react"

// Functions
export interface IModal {
  toggleModal: () => void;
}

// Forms

export interface IForm extends IModal {
  formType: 'login' | 'register'
}

export interface IInput extends ComponentPropsWithoutRef<"input"> {
  title: string
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
  formType: IForm['formType']
}

// Error

export interface IError {
  message: string
  status: number
}