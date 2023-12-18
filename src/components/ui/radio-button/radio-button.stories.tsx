// radioGroupDemo.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react'

import { RadioButtonProps, RadioGroupDemo } from './' // Update the import path based on your actual file structure

export default {
  component: RadioGroupDemo,
  title: 'UI/RadioGroupDemo',
} as Meta

const Template: Story<RadioButtonProps> = args => <RadioGroupDemo {...args} />

export const Default = Template.bind({})
Default.args = {
  isDisabled: false,
  // You can provide additional props as needed
}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
  // You can provide additional props as needed
}

// Add more stories for different scenarios as needed
