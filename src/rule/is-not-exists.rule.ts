import { PrismaClient } from '@prisma/client'
import { registerDecorator, ValidationOptions } from 'class-validator'

export default function IsNotExists(tableName: string, validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsNotExists',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [tableName],
      options: validationOptions,
      validator: {
        async validate(value: any): Promise<boolean> {
          const prisma = new PrismaClient()
          const user = await prisma[tableName].findFirst({
            where: {
              [propertyName]: value,
            },
          })

          return !user
        },
      },
    })
  }
}
