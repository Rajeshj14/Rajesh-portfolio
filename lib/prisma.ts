
// import { PrismaClient } from '@prisma/client'

// declare global {
//   var prisma: PrismaClient | undefined
// }

// const prisma = globalThis.prisma || new PrismaClient({
//   log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error']
// })

// if (process.env.NODE_ENV !== 'production') {
//   globalThis.prisma = prisma
// }

// export default prisma

import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma