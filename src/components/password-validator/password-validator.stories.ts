import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PasswordValidator from './password-validator';
import {
  IValidator,
  LengthValidator,
  LowercaseValidator,
  NumberValidator,
  SpecialCharValidator,
  UppercaseValidator
} from './validators';


const meta = {
  title: 'PasswordValidator',
  component: PasswordValidator,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof PasswordValidator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

export const CustomValidators: Story = {
  args: {
    validators: [LengthValidator(8), UppercaseValidator, LowercaseValidator, NumberValidator]
  },
};

export const SuccessCallback: Story = {
  args: {
    onSuccess: (value: string) => {console.log('Success!', value)}
  },
};
