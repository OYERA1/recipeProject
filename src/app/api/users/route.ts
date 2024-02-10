import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../../lib/db"

export const GET = async (req: NextRequest) => {
  const user = await prisma.user.findMany()
  return Response.json({ message: "OK", user })
}

export const POST = async (req: Response) => {
  const { name, email, password } = await req.json()
  try {

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })

    return Response.json({ message: "OK", user, email })
  } catch (err) {
    return NextResponse.json({
      message: "Error", err
    }, {
      status: 500
    })
  }
}

