import { Meta, Story } from '@storybook/react'

import { RadioButtonProps, RadioGroup } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
    },
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroupDemo',
} satisfies Meta<typeof RadioGroup>

export default meta

const Template: Story<RadioButtonProps> = args => <RadioGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  // isDisabled: false,
  // You can provide additional props as needed
}

export const Disabled = Template.bind({})
Disabled.args = {
  // isDisabled: true,
  // You can provide additional props as needed
}

// Add more stories for different scenarios as needed
