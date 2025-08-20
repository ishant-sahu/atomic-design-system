import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from '../src/components/molecules/ButtonGroup';
import { Button } from '../src/components/atoms/Button';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A component that groups multiple buttons together with consistent styling and spacing.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The layout direction of the button group',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'The size of all buttons in the group',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <ButtonGroup variant="horizontal">
      <Button variant="outline">Previous</Button>
      <Button>Next</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup variant="vertical">
      <Button variant="outline">Top</Button>
      <Button>Bottom</Button>
    </ButtonGroup>
  ),
};

export const MultipleButtons: Story = {
  render: () => (
    <ButtonGroup variant="horizontal">
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
      <Button>Last</Button>
    </ButtonGroup>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-600 mb-2">Small</p>
        <ButtonGroup size="sm">
          <Button variant="outline">Small</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-2">Medium</p>
        <ButtonGroup size="md">
          <Button variant="outline">Medium</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-2">Large</p>
        <ButtonGroup size="lg">
          <Button variant="outline">Large</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <ButtonGroup variant="horizontal">
      <Button
        variant="outline"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        }
      >
        Previous
      </Button>
      <Button
        rightIcon={
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        }
      >
        Next
      </Button>
    </ButtonGroup>
  ),
};

export const Pagination: Story = {
  render: () => (
    <ButtonGroup variant="horizontal">
      <Button variant="outline" size="sm">
        1
      </Button>
      <Button variant="outline" size="sm">
        2
      </Button>
      <Button variant="outline" size="sm">
        3
      </Button>
      <Button variant="outline" size="sm">
        4
      </Button>
      <Button variant="outline" size="sm">
        5
      </Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A pagination example using button groups.',
      },
    },
  },
};

export const ActionButtons: Story = {
  render: () => (
    <ButtonGroup variant="horizontal">
      <Button variant="outline" size="sm">
        Edit
      </Button>
      <Button variant="outline" size="sm">
        Duplicate
      </Button>
      <Button variant="destructive" size="sm">
        Delete
      </Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Action buttons grouped together for common operations.',
      },
    },
  },
};

export const FormActions: Story = {
  render: () => (
    <ButtonGroup variant="horizontal">
      <Button variant="outline">Cancel</Button>
      <Button variant="outline">Save Draft</Button>
      <Button>Publish</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Form action buttons with different priorities.',
      },
    },
  },
};
