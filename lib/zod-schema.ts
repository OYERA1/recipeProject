import path from "path";
import { z } from "zod";


// Schema para o registro
export const registerSchema = z.object({
  name: z.string().min(1, { message: 'O nome não pode ter menos que 1 caractere' }).max(45),
  email: z.string().email({ message: 'Insira um email válido' }),
  password: z.string().min(8, { message: 'A senha precisa ter pelo menos 8 caracteres' }),
  confirmPassword: z.string(),
}).refine((fields) => fields.password === fields.confirmPassword, {
  path: ['confirmPassword'],
  message: 'As senhas não coincidem'
}).transform((fields) => ({
  name: fields.name.trim().replace(/\s+/g, ' ').replace(/(^\w|\s\w)/g, (match) => match.toUpperCase()),
  email: fields.email.trim(),
  password: fields.password,
  confirmPassword: fields.confirmPassword
}));

// Schema para o login
export const loginSchema = z.object({
  email: z.string().email({ message: 'Insira um email válido' }),
  password: z.string().min(8, { message: 'A senha precisa ter pelo menos 8 caracteres' }),
});


export const userSchema = (type: 'login' | 'register') => {
  switch (type) {
    case 'register':
      return registerSchema
    case 'login':
      return loginSchema
  }
}