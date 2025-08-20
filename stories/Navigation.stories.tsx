import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from '../src/components/organisms/Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Organisms/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A comprehensive navigation header with logo, navigation items, and user menu.',
      },
    },
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Main title or logo text',
    },
    items: {
      control: { type: 'object' },
      description: 'Array of navigation items',
    },
    userMenu: {
      control: { type: 'object' },
      description: 'User menu configuration',
    },
    onLogout: {
      action: 'logout',
      description: 'Callback when logout is clicked',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicNavigationItems = [
  { label: 'Dashboard', href: '#', active: true },
  { label: 'Users', href: '#' },
  { label: 'Settings', href: '#' },
  { label: 'Reports', href: '#' },
];

const navigationWithBadges = [
  { label: 'Dashboard', href: '#', active: true },
  { label: 'Users', href: '#', badge: '12' },
  { label: 'Messages', href: '#', badge: '3' },
  { label: 'Settings', href: '#' },
  { label: 'Reports', href: '#' },
];

const navigationWithDisabled = [
  { label: 'Dashboard', href: '#', active: true },
  { label: 'Users', href: '#' },
  { label: 'Analytics', href: '#', disabled: true },
  { label: 'Settings', href: '#' },
  { label: 'Reports', href: '#', disabled: true },
];

const basicUserMenu = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  items: [
    { label: 'Profile', href: '#' },
    { label: 'Settings', href: '#' },
    { label: 'Help', href: '#' },
  ],
};

const userMenuWithActions = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  items: [
    { label: 'View Profile', href: '#' },
    { label: 'Edit Settings', href: '#' },
    { label: 'Notifications', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Help & Support', href: '#' },
  ],
};

export const Default: Story = {
  args: {
    title: 'My Application',
    items: basicNavigationItems,
    userMenu: basicUserMenu,
  },
};

export const WithBadges: Story = {
  args: {
    title: 'Dashboard App',
    items: navigationWithBadges,
    userMenu: basicUserMenu,
  },
};

export const WithDisabledItems: Story = {
  args: {
    title: 'Admin Panel',
    items: navigationWithDisabled,
    userMenu: basicUserMenu,
  },
};

export const ExtendedUserMenu: Story = {
  args: {
    title: 'Enterprise App',
    items: basicNavigationItems,
    userMenu: userMenuWithActions,
  },
};

export const MinimalNavigation: Story = {
  args: {
    title: 'Simple App',
    items: [
      { label: 'Home', href: '#', active: true },
      { label: 'About', href: '#' },
    ],
    userMenu: {
      name: 'User',
      email: 'user@example.com',
      items: [
        { label: 'Profile', href: '#' },
        { label: 'Logout', href: '#' },
      ],
    },
  },
};

export const EcommerceNavigation: Story = {
  args: {
    title: 'Shop Store',
    items: [
      { label: 'Home', href: '#', active: true },
      { label: 'Products', href: '#' },
      { label: 'Categories', href: '#' },
      { label: 'Deals', href: '#', badge: 'HOT' },
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    userMenu: {
      name: 'Customer',
      email: 'customer@example.com',
      items: [
        { label: 'My Orders', href: '#' },
        { label: 'Wishlist', href: '#' },
        { label: 'Account Settings', href: '#' },
        { label: 'Help Center', href: '#' },
      ],
    },
  },
};

export const DeveloperNavigation: Story = {
  args: {
    title: 'Dev Hub',
    items: [
      { label: 'Dashboard', href: '#', active: true },
      { label: 'Projects', href: '#' },
      { label: 'API Docs', href: '#' },
      { label: 'Tools', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Support', href: '#' },
    ],
    userMenu: {
      name: 'Developer',
      email: 'dev@example.com',
      items: [
        { label: 'Developer Profile', href: '#' },
        { label: 'API Keys', href: '#' },
        { label: 'Usage Analytics', href: '#' },
        { label: 'Billing', href: '#' },
        { label: 'Documentation', href: '#' },
      ],
    },
  },
};

export const ResponsiveNavigation: Story = {
  args: {
    title: 'Responsive App',
    items: [
      { label: 'Home', href: '#', active: true },
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    userMenu: {
      name: 'User',
      email: 'user@example.com',
      items: [
        { label: 'Account', href: '#' },
        { label: 'Settings', href: '#' },
        { label: 'Help', href: '#' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Navigation that adapts to different screen sizes with mobile menu.',
      },
    },
  },
};

export const WithCustomStyling: Story = {
  args: {
    title: 'Custom App',
    items: [
      { label: 'Overview', href: '#', active: true },
      { label: 'Analytics', href: '#' },
      { label: 'Reports', href: '#' },
      { label: 'Settings', href: '#' },
    ],
    userMenu: {
      name: 'Admin User',
      email: 'admin@example.com',
      items: [
        { label: 'Admin Panel', href: '#' },
        { label: 'User Management', href: '#' },
        { label: 'System Settings', href: '#' },
        { label: 'Logs', href: '#' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with custom styling and admin-focused user menu.',
      },
    },
  },
};
