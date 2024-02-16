import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  // biome-ignore lint/style/noVar: <explanation>
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

// biome-ignore lint/suspicious/noRedeclare: <explanation>
const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma