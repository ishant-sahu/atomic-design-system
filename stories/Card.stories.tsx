import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '../src/components/atoms/Card';
import { Button } from '../src/components/atoms/Button';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible card component with header, body, and footer sections.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Card subtitle
        </p>
      </CardHeader>
      <CardBody>
        <p>
          This is the main content of the card. It can contain any type of
          content including text, images, forms, or other components.
        </p>
      </CardBody>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <h3 className="text-lg font-semibold">Card with Footer</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Actions in footer
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
  ),
};

export const ImageCard: Story = {
  render: () => (
    <Card className="w-80 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=200&fit=crop"
        alt="Beautiful landscape"
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <h3 className="text-lg font-semibold">Image Card</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          With featured image
        </p>
      </CardHeader>
      <CardBody>
        <p>This card includes an image at the top, followed by content.</p>
      </CardBody>
    </Card>
  ),
};

export const StatsCard: Story = {
  render: () => (
    <Card className="w-80">
      <CardBody className="text-center">
        <div className="text-3xl font-bold text-primary-600">2,847</div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Total Users
        </div>
        <div className="text-xs text-success-600 mt-2">
          +12% from last month
        </div>
      </CardBody>
    </Card>
  ),
};

export const FormCard: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <h3 className="text-lg font-semibold">Contact Form</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Send us a message
        </p>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your message"
            />
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <Button className="w-full">Send Message</Button>
      </CardFooter>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Feature 1</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Description of feature
          </p>
        </CardHeader>
        <CardBody>
          <p>This is a feature card that showcases important information.</p>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Feature 2</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Description of feature
          </p>
        </CardHeader>
        <CardBody>
          <p>Another feature card with different content.</p>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Feature 3</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Description of feature
          </p>
        </CardHeader>
        <CardBody>
          <p>Third feature card to complete the grid.</p>
        </CardBody>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple cards displayed in a responsive grid layout.',
      },
    },
  },
};
