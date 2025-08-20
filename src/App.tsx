import { useState } from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { Button } from './components/atoms/Button';
import { Input } from './components/atoms/Input';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from './components/atoms/Card';
import { ButtonGroup } from './components/molecules/ButtonGroup';
import { Badge } from './components/atoms/Badge';
import { Select } from './components/atoms/Select';
import { Checkbox } from './components/atoms/Checkbox';
import { RadioGroup } from './components/molecules/RadioGroup';
import { FormField } from './components/molecules/FormField';
import { Form } from './components/organisms/Form';
import { Navigation } from './components/organisms/Navigation';
import { DataTable } from './components/organisms/DataTable';

function DemoApp() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({});

  // Sample data for DataTable
  const sampleUsers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'inactive',
      role: 'User',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      status: 'active',
      role: 'User',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice@example.com',
      status: 'pending',
      role: 'User',
    },
  ];

  const tableColumns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge
          variant={
            value === 'active'
              ? 'success'
              : value === 'inactive'
              ? 'error'
              : 'warning'
          }
          size="sm"
        >
          {value}
        </Badge>
      ),
    },
    { key: 'role', label: 'Role', sortable: true },
  ];

  const handleFormSubmit = (data: Record<string, any>) => {
    setFormData(data);
    console.log('Form submitted:', data);
  };

  const navigationItems = [
    { label: 'Dashboard', href: '#', active: true },
    { label: 'Users', href: '#', badge: '4' },
    { label: 'Settings', href: '#' },
    { label: 'Reports', href: '#', disabled: true },
  ];

  const userMenu = {
    name: 'Demo User',
    email: 'demo@example.com',
    items: [
      { label: 'Profile', href: '#' },
      { label: 'Settings', href: '#' },
      { label: 'Help', href: '#' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation */}
      <Navigation
        title="Atomic Design System"
        items={navigationItems}
        userMenu={userMenu}
        onLogout={() => console.log('Logout clicked')}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Atomic Design
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              This is a comprehensive React-based atomic design system built
              with TypeScript, Tailwind CSS, and Storybook. Explore the
              components below to see how they work together.
            </p>
          </section>

          {/* Badge Section */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Badges
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Variants
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Sizes
                </h4>
                <div className="flex items-center gap-3">
                  <Badge variant="primary" size="sm">
                    Small
                  </Badge>
                  <Badge variant="primary" size="md">
                    Medium
                  </Badge>
                  <Badge variant="primary" size="lg">
                    Large
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Button Section */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Buttons
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Variants
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Sizes
                </h4>
                <div className="flex items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  States
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button
                    leftIcon={
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    }
                  >
                    With Icon
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Input Section */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Inputs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Default Input" placeholder="Enter some text..." />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
              />
              <Input
                label="With Helper Text"
                placeholder="Username"
                helperText="Must be at least 3 characters long"
              />
              <Input
                label="With Error"
                placeholder="Invalid input"
                error="This field has an error"
              />
              <Input
                label="Success State"
                placeholder="Valid input"
                variant="success"
                helperText="This field is valid"
              />
              <Input
                label="Disabled"
                placeholder="This input is disabled"
                disabled
              />
            </div>
          </section>

          {/* Select Section */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Select Dropdowns
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Country"
                options={[
                  { value: 'us', label: 'United States' },
                  { value: 'ca', label: 'Canada' },
                  { value: 'uk', label: 'United Kingdom' },
                  { value: 'au', label: 'Australia' },
                ]}
                value={selectedCountry}
                onChange={setSelectedCountry}
              />
              <Select
                label="Category"
                options={[
                  { value: 'tech', label: 'Technology' },
                  { value: 'design', label: 'Design' },
                  { value: 'business', label: 'Business' },
                  { value: 'lifestyle', label: 'Lifestyle' },
                ]}
                helperText="Choose the most relevant category"
              />
            </div>
          </section>

          {/* Checkbox and Radio Section */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Checkboxes & Radio Buttons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Checkboxes
                </h4>
                <div className="space-y-3">
                  <Checkbox
                    label="I agree to the terms and conditions"
                    checked={agreed}
                    onChange={setAgreed}
                  />
                  <Checkbox
                    label="Send me marketing emails"
                    helperText="We'll never spam you"
                  />
                  <Checkbox label="This option is disabled" disabled />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Radio Buttons
                </h4>
                <RadioGroup
                  label="Payment Method"
                  options={[
                    { value: 'credit', label: 'Credit Card' },
                    { value: 'debit', label: 'Debit Card' },
                    { value: 'paypal', label: 'PayPal' },
                    { value: 'bank', label: 'Bank Transfer' },
                  ]}
                  value={selectedPayment}
                  onChange={setSelectedPayment}
                  orientation="vertical"
                />
              </div>
            </div>
          </section>

          {/* Card Section */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Cards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <h4 className="text-lg font-semibold">Basic Card</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Simple card example
                  </p>
                </CardHeader>
                <CardBody>
                  <p>This is a basic card with header, body, and no footer.</p>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h4 className="text-lg font-semibold">Card with Footer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Actions included
                  </p>
                </CardHeader>
                <CardBody>
                  <p>This card has a footer with action buttons.</p>
                </CardBody>
                <CardFooter>
                  <Button variant="outline" size="sm" className="mr-2">
                    Cancel
                  </Button>
                  <Button size="sm">Save</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardBody className="text-center">
                  <div className="text-3xl font-bold text-primary-600">
                    1,234
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Total Users
                  </div>
                  <div className="text-xs text-success-600 mt-2">
                    +15% from last month
                  </div>
                </CardBody>
              </Card>
            </div>
          </section>

          {/* Button Group Section */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Button Groups
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Horizontal
                </h4>
                <ButtonGroup variant="horizontal">
                  <Button variant="outline">Previous</Button>
                  <Button>Next</Button>
                </ButtonGroup>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Vertical
                </h4>
                <ButtonGroup variant="vertical">
                  <Button variant="outline">Top</Button>
                  <Button>Bottom</Button>
                </ButtonGroup>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Multiple Buttons
                </h4>
                <ButtonGroup variant="horizontal">
                  <Button variant="outline">First</Button>
                  <Button variant="outline">Second</Button>
                  <Button variant="outline">Third</Button>
                  <Button>Last</Button>
                </ButtonGroup>
              </div>
            </div>
          </section>

          {/* Form Field Section */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Form Fields
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Required Field"
                required
                helperText="This field is required"
              >
                <Input placeholder="Enter required information" />
              </FormField>

              <FormField
                label="Field with Error"
                error="This field has an error"
              >
                <Input placeholder="Invalid input" />
              </FormField>
            </div>
          </section>

          {/* Form Example */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Complete Form
            </h3>
            <Form
              title="User Registration"
              subtitle="Create a new user account"
              fields={[
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
                  component: (
                    <Input type="email" placeholder="Enter your email" />
                  ),
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
              ]}
              onSubmit={handleFormSubmit}
              submitText="Create Account"
              cancelText="Cancel"
              onCancel={() => console.log('Form cancelled')}
            />
          </section>

          {/* Data Table Section */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Data Table
            </h3>
            <DataTable
              title="User Management"
              data={sampleUsers}
              columns={tableColumns}
              pagination={{ pageSize: 10 }}
              onRowClick={(user) => console.log('Clicked user:', user)}
            />
          </section>

          {/* Form Results */}
          {Object.keys(formData).length > 0 && (
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Form Submission Results
              </h3>
              <Card>
                <CardBody>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                    {JSON.stringify(formData, null, 2)}
                  </pre>
                </CardBody>
              </Card>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <DemoApp />
    </ThemeProvider>
  );
}

export default App;
