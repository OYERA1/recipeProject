import { ChangeEvent, ComponentPropsWithoutRef } from "react"
import { z } from "zod"
import { loginSchema, registerSchema, userSchema } from "./lib/zod-schema"
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form"

// Forms

export interface IForm extends ComponentPropsWithoutRef<'form'> { }

export interface IInput extends ComponentPropsWithoutRef<"input"> {
  label: string
  name: string
  error: FieldProps<IUser>
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  register: any
  helperText: FieldProps<IUser>
}

// ZodTypes
export type IUserLogin = z.infer<typeof loginSchema>
export type IUserRegister = z.infer<typeof registerSchema>

// Buttons 

export interface IButton extends ComponentPropsWithoutRef<'button'> {
  formType: string
}

// Error

export interface IError {
  message: string
  status: number
}