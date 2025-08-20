import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '../src/components/molecules/RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Molecules/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A molecule component that manages multiple radio buttons with proper accessibility and consistent styling.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Group label displayed above the radio buttons',
    },
    options: {
      control: { type: 'object' },
      description: 'Array of radio button options',
    },
    value: {
      control: { type: 'text' },
      description: 'Currently selected value',
    },
    orientation: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
      description: 'Layout direction of the radio buttons',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message displayed below the group',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the group',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'The visual state variant of the radio group',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const paymentOptions = [
  {
    value: 'credit',
    label: 'Credit Card',
    helperText: 'Secure payment with major cards',
  },
  {
    value: 'debit',
    label: 'Debit Card',
    helperText: 'Direct bank account payment',
  },
  {
    value: 'paypal',
    label: 'PayPal',
    helperText: 'Fast and secure online payments',
  },
  {
    value: 'bank',
    label: 'Bank Transfer',
    helperText: 'Direct bank transfer (1-3 business days)',
  },
];

const shippingOptions = [
  {
    value: 'standard',
    label: 'Standard Shipping',
    helperText: '5-7 business days',
  },
  {
    value: 'express',
    label: 'Express Shipping',
    helperText: '2-3 business days',
  },
  { value: 'overnight', label: 'Overnight', helperText: 'Next business day' },
];

const planOptions = [
  {
    value: 'basic',
    label: 'Basic Plan',
    helperText: 'Essential features for individuals',
  },
  {
    value: 'pro',
    label: 'Pro Plan',
    helperText: 'Advanced features for professionals',
  },
  {
    value: 'enterprise',
    label: 'Enterprise Plan',
    helperText: 'Full features for large teams',
  },
];

export const Default: Story = {
  args: {
    label: 'Payment Method',
    options: paymentOptions,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Payment Method',
    options: paymentOptions,
    value: 'credit',
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Shipping Option',
    options: shippingOptions,
    orientation: 'horizontal',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Subscription Plan',
    options: planOptions,
    helperText: 'Choose the plan that best fits your needs',
  },
};

export const WithError: Story = {
  args: {
    label: 'Required Selection',
    options: paymentOptions,
    error: 'Please select a payment method to continue',
  },
};

export const Success: Story = {
  args: {
    label: 'Plan Selection',
    options: planOptions,
    variant: 'success',
    helperText: 'Great choice! Your plan has been selected.',
  },
};

export const Controlled: Story = {
  render: () => {
    const [selectedPayment, setSelectedPayment] = React.useState('credit');
    const [selectedShipping, setSelectedShipping] = React.useState('standard');

    return (
      <div className="space-y-6 w-80">
        <RadioGroup
          label="Payment Method"
          options={paymentOptions}
          value={selectedPayment}
          onChange={setSelectedPayment}
        />

        <RadioGroup
          label="Shipping Option"
          options={shippingOptions}
          value={selectedShipping}
          onChange={setSelectedShipping}
        />

        <div className="p-4 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-600">
            <strong>Selected:</strong>
            <br />
            Payment: {selectedPayment}
            <br />
            Shipping: {selectedShipping}
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple controlled radio groups with state management.',
      },
    },
  },
};

export const FormLayout: Story = {
  render: () => (
    <div className="space-y-8 w-96">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Account Setup
        </h3>
        <RadioGroup
          label="Account Type"
          options={[
            {
              value: 'personal',
              label: 'Personal Account',
              helperText: 'For individual use',
            },
            {
              value: 'business',
              label: 'Business Account',
              helperText: 'For companies and organizations',
            },
            {
              value: 'developer',
              label: 'Developer Account',
              helperText: 'For API and development use',
            },
          ]}
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Preferences</h3>
        <RadioGroup
          label="Notification Frequency"
          options={[
            {
              value: 'immediate',
              label: 'Immediate',
              helperText: 'Get notified right away',
            },
            {
              value: 'daily',
              label: 'Daily Digest',
              helperText: 'Summary once per day',
            },
            {
              value: 'weekly',
              label: 'Weekly Summary',
              helperText: 'Summary once per week',
            },
          ]}
          orientation="horizontal"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Security</h3>
        <RadioGroup
          label="Two-Factor Authentication"
          options={[
            {
              value: 'enabled',
              label: 'Enabled',
              helperText: 'Enhanced security with 2FA',
            },
            {
              value: 'disabled',
              label: 'Disabled',
              helperText: 'Standard password protection',
            },
          ]}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio groups used in a comprehensive form layout.',
      },
    },
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Plan Selection',
    options: [
      {
        value: 'basic',
        label: 'Basic Plan',
        helperText: 'Essential features for individuals',
      },
      {
        value: 'pro',
        label: 'Pro Plan',
        helperText: 'Advanced features for professionals',
      },
      {
        value: 'enterprise',
        label: 'Enterprise Plan',
        helperText: 'Full features for large teams',
        disabled: true,
      },
    ],
    helperText: 'Enterprise plan is currently unavailable',
  },
};
