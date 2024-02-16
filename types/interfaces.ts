import { ChangeEvent } from "react"

// Functions
export interface IModal {
  toggleModal: () => void;
}

// Forms

export interface IForm extends IModal {
  type: 'login' | 'register'
}

export interface IInput {
  name: string
  type: string
  title: string
  placeholder: string
  onChange: (newState: ChangeEvent<HTMLInputElement>) => void;
}

export interface IUser {
  name: string
  email: string
  password: string
  confirmPassword?: string
}

// Error

export interface IError {
  message: string
  status: number
}