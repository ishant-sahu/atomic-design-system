import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../src/components/atoms/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A radio button component with support for labels, helper text, and validation states.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text displayed next to the radio button',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is disabled',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message displayed below the radio button',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the radio button',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'The visual state variant of the radio button',
    },
    value: {
      control: { type: 'text' },
      description: 'The value of the radio button',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
  },
};

export const Checked: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
    checked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Premium Plan',
    value: 'premium',
    helperText: 'Best value with all features included',
  },
};

export const WithError: Story = {
  args: {
    label: 'Required Option',
    value: 'required',
    error: 'This selection is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'This option is disabled',
    value: 'disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'This option is disabled and checked',
    value: 'disabled-checked',
    checked: true,
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('option1');

    return (
      <div className="space-y-3">
        <Radio
          label="Option 1"
          value="option1"
          checked={selectedValue === 'option1'}
          onChange={setSelectedValue}
        />
        <Radio
          label="Option 2"
          value="option2"
          checked={selectedValue === 'option2'}
          onChange={setSelectedValue}
        />
        <Radio
          label="Option 3"
          value="option3"
          checked={selectedValue === 'option3'}
          onChange={setSelectedValue}
        />
        <p className="text-sm text-gray-600 mt-2">Selected: {selectedValue}</p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'A controlled radio button group with state management.',
      },
    },
  },
};

export const MultipleRadios: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Radio
        label="Credit Card"
        value="credit"
        helperText="Secure payment with major cards"
      />
      <Radio
        label="Debit Card"
        value="debit"
        helperText="Direct bank account payment"
      />
      <Radio
        label="PayPal"
        value="paypal"
        helperText="Fast and secure online payments"
      />
      <Radio
        label="Bank Transfer"
        value="bank"
        helperText="Direct bank transfer (1-3 business days)"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple radio buttons in a form layout.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Payment Method
        </h3>
        <div className="space-y-3">
          <Radio
            label="Credit Card"
            value="credit"
            helperText="Secure payment with major cards"
          />
          <Radio
            label="Debit Card"
            value="debit"
            helperText="Direct bank account payment"
          />
          <Radio
            label="PayPal"
            value="paypal"
            helperText="Fast and secure online payments"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping</h3>
        <div className="space-y-3">
          <Radio
            label="Standard Shipping"
            value="standard"
            helperText="5-7 business days"
          />
          <Radio
            label="Express Shipping"
            value="express"
            helperText="2-3 business days"
          />
          <Radio
            label="Overnight"
            value="overnight"
            helperText="Next business day"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons used in a form with different sections.',
      },
    },
  },
};
