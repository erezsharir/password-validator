interface IValidator {
    validate: (value: string) => boolean;
    errorMessage: string;
}
declare const LengthValidator: (length: number) => IValidator;
declare const UppercaseValidator: IValidator;
declare const LowercaseValidator: IValidator;
declare const NumberValidator: IValidator;
declare const SpecialCharValidator: IValidator;

export { type IValidator, LengthValidator, LowercaseValidator, NumberValidator, SpecialCharValidator, UppercaseValidator };
