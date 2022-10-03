import { ValidationPipe, ValidationError } from '@nestjs/common'

export class CustomValidate extends ValidationPipe {
  protected mapChildrenToValidationErrors(error: ValidationError, parentPath?: string): ValidationError[] {
    const errors = super.mapChildrenToValidationErrors(error, parentPath)
    errors.map((error) => {
      for (const key in error.constraints) {
        error.constraints[key] = `${error.property}-${error.constraints[key]}`
      }
      return error
    })
    // throw new ValidateExceptionFilter()

    return errors
  }
}
