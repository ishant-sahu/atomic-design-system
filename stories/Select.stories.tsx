import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../src/components/atoms/Select';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible select dropdown component with support for labels, options, and validation states.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text displayed above the select',
    },
    options: {
      control: { type: 'object' },
      description: 'Array of options for the select dropdown',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message displayed below the select',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the select',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'The visual state variant of the select',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
];

const categoryOptions = [
  { value: 'tech', label: 'Technology' },
  { value: 'design', label: 'Design' },
  { value: 'business', label: 'Business' },
  { value: 'lifestyle', label: 'Lifestyle' },
  { value: 'health', label: 'Health & Fitness' },
  { value: 'education', label: 'Education' },
];

export const Default: Story = {
  args: {
    options: countryOptions,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Category',
    options: categoryOptions,
    helperText: 'Choose the most relevant category for your content',
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    error: 'Please select a valid country',
  },
};

export const Success: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    variant: 'success',
    helperText: 'Country selected successfully',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    disabled: true,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Country',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom', disabled: true },
      { value: 'au', label: 'Australia' },
    ],
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState('us');

    return (
      <Select
        label="Controlled Select"
        options={countryOptions}
        value={value}
        onChange={setValue}
        helperText={`Selected: ${value}`}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'A controlled select component with state management.',
      },
    },
  },
};

export const MultipleSelects: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Select
        label="Country"
        options={countryOptions}
        helperText="Select your country of residence"
      />
      <Select
        label="Category"
        options={categoryOptions}
        helperText="Choose your preferred category"
      />
      <Select
        label="Language"
        options={[
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Spanish' },
          { value: 'fr', label: 'French' },
          { value: 'de', label: 'German' },
        ]}
        helperText="Select your preferred language"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple select components in a form layout.',
      },
    },
  },
};
