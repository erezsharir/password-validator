export interface IValidator {
  validate: (value: string) => boolean;
  errorMessage: string;
}

export const LengthValidator = (length: number): IValidator => {
  return {
    validate: (input: string) => {
      return !!input && input.length >= length;
    },
    errorMessage: `Password must be at least ${length} characters long`,
  }
}

export const UppercaseValidator: IValidator = {
  validate: (input: string) => {
    return /[A-Z]/.test(input)
  },
  errorMessage: `Password must contain at least one uppercase letter`,
}

export const LowercaseValidator: IValidator = {
  validate: (input: string) => {
    return /[a-z]/.test(input)
  },
  errorMessage: `Password must contain at least one lowercase letter`,
}

export const NumberValidator: IValidator = {
  validate: (input: string) => {
    return /\d/.test(input)
  },
  errorMessage: `Password must contain at least one number`,
}

export const SpecialCharValidator: IValidator = {
  validate: (input: string) => {
    return /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/.test(input)
  },
  errorMessage: `Password must contain at least one special character`,
}
