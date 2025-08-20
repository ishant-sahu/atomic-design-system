import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../src/components/molecules/FormField';
import { Input } from '../src/components/atoms/Input';
import { Select } from '../src/components/atoms/Select';
import { Checkbox } from '../src/components/atoms/Checkbox';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A molecule component that provides consistent form field styling and behavior for various input types.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text displayed above the form field',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the field is required',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message displayed below the field',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the field',
    },
    children: {
      control: false,
      description: 'The form input component to be wrapped',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  args: {
    label: 'Email Address',
    required: true,
    helperText: "We'll never share your email with anyone else",
    children: <Input type="email" placeholder="Enter your email" />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    required: true,
    error: 'Username is already taken',
    children: <Input placeholder="Choose a username" />,
  },
};

export const WithSelect: Story = {
  args: {
    label: 'Country',
    helperText: 'Select your country of residence',
    children: (
      <Select
        options={[
          { value: 'us', label: 'United States' },
          { value: 'ca', label: 'Canada' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'au', label: 'Australia' },
        ]}
      />
    ),
  },
};

export const WithCheckbox: Story = {
  args: {
    label: 'Terms Agreement',
    required: true,
    helperText: 'You must accept the terms to continue',
    children: <Checkbox label="I agree to the terms and conditions" />,
  },
};

export const RequiredField: Story = {
  args: {
    label: 'Full Name',
    required: true,
    children: <Input placeholder="Enter your full name" />,
  },
};

export const OptionalField: Story = {
  args: {
    label: 'Company Name',
    helperText: 'Optional - for business accounts',
    children: <Input placeholder="Enter company name" />,
  },
};

export const MultipleFields: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <FormField
        label="First Name"
        required
        children={<Input placeholder="Enter first name" />}
      />

      <FormField
        label="Last Name"
        required
        children={<Input placeholder="Enter last name" />}
      />

      <FormField
        label="Email"
        required
        helperText="We'll send a confirmation to this email"
        children={<Input type="email" placeholder="Enter email address" />}
      />

      <FormField
        label="Phone Number"
        helperText="Optional - for account recovery"
        children={<Input type="tel" placeholder="Enter phone number" />}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple form fields in a consistent layout.',
      },
    },
  },
};

export const FormSection: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Personal Information
        </h3>
        <div className="space-y-4">
          <FormField
            label="Full Name"
            required
            children={<Input placeholder="Enter your full name" />}
          />

          <FormField
            label="Date of Birth"
            required
            helperText="Must be 18 or older"
            children={<Input type="date" />}
          />

          <FormField
            label="Gender"
            children={
              <Select
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'other', label: 'Other' },
                  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
                ]}
              />
            }
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Account Settings
        </h3>
        <div className="space-y-4">
          <FormField
            label="Email Notifications"
            children={
              <Checkbox label="Send me email updates about new features" />
            }
          />

          <FormField
            label="Marketing Communications"
            helperText="Receive offers and promotions"
            children={<Checkbox label="I want to receive marketing emails" />}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Form fields organized into logical sections.',
      },
    },
  },
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <FormField
        label="Valid Field"
        helperText="This field is valid"
        children={<Input placeholder="Valid input" />}
      />

      <FormField
        label="Field with Error"
        error="This field has an error"
        children={<Input placeholder="Invalid input" />}
      />

      <FormField
        label="Required Field"
        required
        helperText="This field is required"
        children={<Input placeholder="Required input" />}
      />

      <FormField
        label="Optional Field"
        helperText="This field is optional"
        children={<Input placeholder="Optional input" />}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different validation states and field types.',
      },
    },
  },
};
