import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

@ValidatorConstraint()
export default class IsConfirmed implements ValidatorConstraintInterface {
  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const property = validationArguments.property.split('_')[0]

    return value === validationArguments.object[property]
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return '两次密码不一致'
  }
}
