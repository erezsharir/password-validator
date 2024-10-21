import React, { useCallback, useState } from "react";
import {
  IValidator,
  LengthValidator,
  LowercaseValidator,
  NumberValidator,
  SpecialCharValidator,
  UppercaseValidator
} from './validators';

export interface PasswordValidatorProps {
  validators?: IValidator[];
  onSuccess?: (value: string) => void;
}

const PasswordValidator = (props: PasswordValidatorProps) => {
  const {
    validators = [LengthValidator(6), UppercaseValidator, LowercaseValidator, NumberValidator, SpecialCharValidator],
    onSuccess,
  } = props;

  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = useCallback(() => {
    const errors: string[] = [];
    validators.forEach((validator) => {
      const result = validator.validate(password);
      if (!result) {
        errors.push(validator.errorMessage);
      }
    })
    if (password !== passwordRepeat) {
      errors.push('Passwords must match');
    }

    setSuccess(errors.length === 0);
    setErrors(errors)
    if (errors.length === 0 && onSuccess) {
      onSuccess(password)
    }
  }, [password, passwordRepeat, validators, onSuccess])

  return <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    }}
    className={'password-validator'}
  >
    <div className={'input-label'}>
      Enter password
    </div>
    <input
      className={'input'}
      type={'password'}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <div className={'input-label'}>
      Validate password
    </div>
    <input
      className={'input'}
      type={'password'}
      value={passwordRepeat}
      onChange={(e) => setPasswordRepeat(e.target.value)}
    />
    {
      !!errors.length &&
        <div
            className={'errors'}
            style={{
              color: 'red',
            }}
        >
          {
            errors.map((error) => <div>
              {error}
            </div>)
          }
        </div>
    }
    {
      success &&
        <div
            className={'success'}
            style={{
              color: 'green',
            }}
        >
            Password is validated successfully.
        </div>
    }
    <button onClick={handleSubmit}>Submit</button>
  </div>
};

export default PasswordValidator;