import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '../src/components/organisms/Form';
import { Input } from '../src/components/atoms/Input';
import { Select } from '../src/components/atoms/Select';
import { Checkbox } from '../src/components/atoms/Checkbox';
import { RadioGroup } from '../src/components/molecules/RadioGroup';

const meta: Meta<typeof Form> = {
  title: 'Organisms/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A comprehensive form organism that structures and manages form fields with consistent styling and behavior.',
      },
    },
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Main title of the form',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Subtitle or description below the title',
    },
    fields: {
      control: false,
      description: 'Array of form field configurations',
    },
    submitText: {
      control: { type: 'text' },
      description: 'Text for the submit button',
    },
    cancelText: {
      control: { type: 'text' },
      description: 'Text for the cancel button',
    },
    onSubmit: {
      action: 'submitted',
      description: 'Callback when form is submitted',
    },
    onCancel: {
      action: 'cancelled',
      description: 'Callback when form is cancelled',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const userRegistrationFields = [
  {
    name: 'firstName',
    label: 'First Name',
    required: true,
    component: <Input placeholder="Enter your first name" />,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    required: true,
    component: <Input placeholder="Enter your last name" />,
  },
  {
    name: 'email',
    label: 'Email Address',
    required: true,
    component: <Input type="email" placeholder="Enter your email" />,
  },
  {
    name: 'password',
    label: 'Password',
    required: true,
    component: <Input type="password" placeholder="Create a password" />,
  },
  {
    name: 'country',
    label: 'Country',
    component: (
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
  {
    name: 'agreement',
    label: 'Terms Agreement',
    required: true,
    component: (
      <Checkbox
        label="I agree to the terms and conditions"
        helperText="Please read the terms before agreeing"
      />
    ),
  },
];

const contactFormFields = [
  {
    name: 'name',
    label: 'Full Name',
    required: true,
    component: <Input placeholder="Enter your full name" />,
  },
  {
    name: 'email',
    label: 'Email Address',
    required: true,
    component: <Input type="email" placeholder="Enter your email" />,
  },
  {
    name: 'subject',
    label: 'Subject',
    required: true,
    component: <Input placeholder="What is this about?" />,
  },
  {
    name: 'message',
    label: 'Message',
    required: true,
    component: <Input placeholder="Enter your message" />,
  },
  {
    name: 'priority',
    label: 'Priority Level',
    component: (
      <RadioGroup
        options={[
          { value: 'low', label: 'Low', helperText: 'General inquiry' },
          {
            value: 'medium',
            label: 'Medium',
            helperText: 'Important question',
          },
          { value: 'high', label: 'High', helperText: 'Urgent issue' },
        ]}
      />
    ),
  },
];

const settingsFormFields = [
  {
    name: 'notifications',
    label: 'Email Notifications',
    component: <Checkbox label="Send me email updates about new features" />,
  },
  {
    name: 'marketing',
    label: 'Marketing Communications',
    component: (
      <Checkbox
        label="Receive offers and promotions"
        helperText="We'll never spam you, unsubscribe anytime"
      />
    ),
  },
  {
    name: 'language',
    label: 'Preferred Language',
    component: (
      <Select
        options={[
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Spanish' },
          { value: 'fr', label: 'French' },
          { value: 'de', label: 'German' },
        ]}
      />
    ),
  },
  {
    name: 'timezone',
    label: 'Timezone',
    component: (
      <Select
        options={[
          { value: 'utc', label: 'UTC' },
          { value: 'est', label: 'Eastern Time' },
          { value: 'cst', label: 'Central Time' },
          { value: 'mst', label: 'Mountain Time' },
          { value: 'pst', label: 'Pacific Time' },
        ]}
      />
    ),
  },
];

export const UserRegistration: Story = {
  args: {
    title: 'Create Account',
    subtitle: 'Join our community and get started today',
    fields: userRegistrationFields,
    submitText: 'Create Account',
    cancelText: 'Cancel',
  },
};

export const ContactForm: Story = {
  args: {
    title: 'Contact Us',
    subtitle: "We'd love to hear from you. Send us a message!",
    fields: contactFormFields,
    submitText: 'Send Message',
    cancelText: 'Cancel',
  },
};

export const SettingsForm: Story = {
  args: {
    title: 'Account Settings',
    subtitle: 'Customize your account preferences and notifications',
    fields: settingsFormFields,
    submitText: 'Save Changes',
    cancelText: 'Reset',
  },
};

export const MinimalForm: Story = {
  args: {
    title: 'Quick Feedback',
    fields: [
      {
        name: 'rating',
        label: 'How would you rate your experience?',
        component: (
          <RadioGroup
            options={[
              { value: '1', label: 'Poor' },
              { value: '2', label: 'Fair' },
              { value: '3', label: 'Good' },
              { value: '4', label: 'Very Good' },
              { value: '5', label: 'Excellent' },
            ]}
            orientation="horizontal"
          />
        ),
      },
      {
        name: 'comment',
        label: 'Additional Comments',
        component: <Input placeholder="Share your thoughts..." />,
      },
    ],
    submitText: 'Submit Feedback',
  },
};

export const ComplexForm: Story = {
  args: {
    title: 'Product Configuration',
    subtitle: 'Configure your product with advanced settings',
    fields: [
      {
        name: 'productName',
        label: 'Product Name',
        required: true,
        component: <Input placeholder="Enter product name" />,
      },
      {
        name: 'category',
        label: 'Product Category',
        required: true,
        component: (
          <Select
            options={[
              { value: 'electronics', label: 'Electronics' },
              { value: 'clothing', label: 'Clothing' },
              { value: 'home', label: 'Home & Garden' },
              { value: 'sports', label: 'Sports & Outdoors' },
              { value: 'books', label: 'Books & Media' },
            ]}
          />
        ),
      },
      {
        name: 'price',
        label: 'Price',
        required: true,
        component: <Input type="number" placeholder="0.00" />,
      },
      {
        name: 'description',
        label: 'Description',
        component: <Input placeholder="Describe your product..." />,
      },
      {
        name: 'features',
        label: 'Product Features',
        component: (
          <div className="space-y-2">
            <Checkbox label="Free shipping" />
            <Checkbox label="Warranty included" />
            <Checkbox label="Gift wrapping available" />
            <Checkbox label="Returns accepted" />
          </div>
        ),
      },
      {
        name: 'availability',
        label: 'Availability',
        component: (
          <RadioGroup
            options={[
              {
                value: 'in-stock',
                label: 'In Stock',
                helperText: 'Ready to ship',
              },
              {
                value: 'pre-order',
                label: 'Pre-order',
                helperText: 'Available soon',
              },
              {
                value: 'out-of-stock',
                label: 'Out of Stock',
                helperText: 'Currently unavailable',
              },
            ]}
          />
        ),
      },
    ],
    submitText: 'Save Product',
    cancelText: 'Discard Changes',
  },
};

export const WithCustomActions: Story = {
  args: {
    title: 'Document Editor',
    subtitle: 'Edit your document and choose your action',
    fields: [
      {
        name: 'title',
        label: 'Document Title',
        required: true,
        component: <Input placeholder="Enter document title" />,
      },
      {
        name: 'content',
        label: 'Content',
        component: <Input placeholder="Enter document content..." />,
      },
    ],
    submitText: 'Save & Publish',
    cancelText: 'Save Draft',
  },
  parameters: {
    docs: {
      description: {
        story: 'Form with custom action buttons for different save behaviors.',
      },
    },
  },
};
