import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../src/components/atoms/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A checkbox component with support for labels, helper text, and validation states.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text displayed next to the checkbox',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message displayed below the checkbox',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the checkbox',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'The visual state variant of the checkbox',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Send me marketing emails',
    helperText: "We'll never spam you, unsubscribe anytime",
  },
};

export const WithError: Story = {
  args: {
    label: 'Accept terms and conditions',
    error: 'You must accept the terms to continue',
  },
};

export const Disabled: Story = {
  args: {
    label: 'This option is disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'This option is disabled and checked',
    checked: true,
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <Checkbox
        label="Controlled Checkbox"
        checked={checked}
        onChange={setChecked}
        helperText={`Checkbox is ${checked ? 'checked' : 'unchecked'}`}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'A controlled checkbox component with state management.',
      },
    },
  },
};

export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Checkbox
        label="Email notifications"
        helperText="Receive updates about your account"
      />
      <Checkbox
        label="SMS notifications"
        helperText="Get important alerts via text message"
      />
      <Checkbox
        label="Push notifications"
        helperText="Receive real-time updates in your browser"
      />
      <Checkbox
        label="Marketing communications"
        helperText="Stay updated with our latest products and offers"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple checkboxes in a form layout.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Preferences</h3>
        <div className="space-y-3">
          <Checkbox
            label="Newsletter subscription"
            helperText="Weekly updates and insights"
          />
          <Checkbox
            label="Product updates"
            helperText="New features and improvements"
          />
          <Checkbox
            label="Security alerts"
            helperText="Important security notifications"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Required</h3>
        <Checkbox
          label="I agree to the terms and conditions"
          error="You must accept the terms to continue"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Checkboxes used in a form with different sections and validation.',
      },
    },
  },
};
