import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const { name, email, password } = data

  if (!name || !name || !password) {
    return NextResponse.json('Dados inválidos', { status: 400 })
  }

  const isUserExists = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  if (isUserExists) return NextResponse.json({ error: 'Usuário já existe', status: 400 })

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword
    }
  })

  return NextResponse.json({ user: user, status: 201 })
}