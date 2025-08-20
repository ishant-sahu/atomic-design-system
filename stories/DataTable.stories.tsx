import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '../src/components/organisms/DataTable';
import { Badge } from '../src/components/atoms/Badge';
import { Button } from '../src/components/atoms/Button';

const meta: Meta<typeof DataTable> = {
  title: 'Organisms/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A comprehensive data table component with sorting, searching, pagination, and custom column rendering.',
      },
    },
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Title displayed above the table',
    },
    data: {
      control: { type: 'object' },
      description: 'Array of data objects to display',
    },
    columns: {
      control: false,
      description: 'Column configuration array',
    },
    pagination: {
      control: { type: 'object' },
      description: 'Pagination configuration',
    },
    onRowClick: {
      action: 'row-clicked',
      description: 'Callback when a row is clicked',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active',
    role: 'Admin',
    lastLogin: '2024-01-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'inactive',
    role: 'User',
    lastLogin: '2024-01-10',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    status: 'active',
    role: 'User',
    lastLogin: '2024-01-14',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    status: 'pending',
    role: 'User',
    lastLogin: '2024-01-12',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    status: 'active',
    role: 'Moderator',
    lastLogin: '2024-01-13',
  },
  {
    id: 6,
    name: 'Diana Davis',
    email: 'diana@example.com',
    status: 'suspended',
    role: 'User',
    lastLogin: '2024-01-08',
  },
];

const sampleProducts = [
  {
    id: 1,
    name: 'Laptop Pro',
    category: 'Electronics',
    price: 1299.99,
    stock: 45,
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 199.99,
    stock: 120,
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Coffee Maker',
    category: 'Home',
    price: 89.99,
    stock: 67,
    rating: 4.4,
  },
  {
    id: 4,
    name: 'Running Shoes',
    category: 'Sports',
    price: 129.99,
    stock: 89,
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Desk Chair',
    category: 'Office',
    price: 299.99,
    stock: 23,
    rating: 4.5,
  },
];

const sampleOrders = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    total: 299.99,
    status: 'completed',
    date: '2024-01-15',
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    total: 149.99,
    status: 'processing',
    date: '2024-01-14',
  },
  {
    id: 'ORD-003',
    customer: 'Bob Johnson',
    total: 599.99,
    status: 'shipped',
    date: '2024-01-13',
  },
  {
    id: 'ORD-004',
    customer: 'Alice Brown',
    total: 89.99,
    status: 'cancelled',
    date: '2024-01-12',
  },
  {
    id: 'ORD-005',
    customer: 'Charlie Wilson',
    total: 1299.99,
    status: 'pending',
    date: '2024-01-11',
  },
];

const userColumns = [
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
            : value === 'pending'
            ? 'warning'
            : 'secondary'
        }
        size="sm"
      >
        {value}
      </Badge>
    ),
  },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'lastLogin', label: 'Last Login', sortable: true },
  {
    key: 'actions',
    label: 'Actions',
    render: () => (
      <div className="flex gap-2">
        <Button size="sm" variant="outline">
          Edit
        </Button>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
      </div>
    ),
  },
];

const productColumns = [
  { key: 'name', label: 'Product Name', sortable: true },
  { key: 'category', label: 'Category', sortable: true },
  {
    key: 'price',
    label: 'Price',
    sortable: true,
    render: (value: number) => `$${value.toFixed(2)}`,
  },
  {
    key: 'stock',
    label: 'Stock',
    sortable: true,
    render: (value: number) => (
      <span
        className={value < 50 ? 'text-red-600 font-medium' : 'text-gray-600'}
      >
        {value}
      </span>
    ),
  },
  {
    key: 'rating',
    label: 'Rating',
    sortable: true,
    render: (value: number) => (
      <div className="flex items-center gap-1">
        <span className="text-yellow-500">★</span>
        <span>{value}</span>
      </div>
    ),
  },
];

const orderColumns = [
  { key: 'id', label: 'Order ID', sortable: true },
  { key: 'customer', label: 'Customer', sortable: true },
  {
    key: 'total',
    label: 'Total',
    sortable: true,
    render: (value: number) => `$${value.toFixed(2)}`,
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (value: string) => (
      <Badge
        variant={
          value === 'completed'
            ? 'success'
            : value === 'processing'
            ? 'primary'
            : value === 'shipped'
            ? 'secondary'
            : value === 'cancelled'
            ? 'error'
            : 'warning'
        }
        size="sm"
      >
        {value}
      </Badge>
    ),
  },
  { key: 'date', label: 'Order Date', sortable: true },
];

export const UserManagement: Story = {
  args: {
    title: 'User Management',
    data: sampleUsers,
    columns: userColumns,
    pagination: { pageSize: 10 },
  },
};

export const ProductCatalog: Story = {
  args: {
    title: 'Product Catalog',
    data: sampleProducts,
    columns: productColumns,
    pagination: { pageSize: 10 },
  },
};

export const OrderHistory: Story = {
  args: {
    title: 'Order History',
    data: sampleOrders,
    columns: orderColumns,
    pagination: { pageSize: 10 },
  },
};

export const WithSearch: Story = {
  args: {
    title: 'Searchable User Table',
    data: sampleUsers,
    columns: userColumns.slice(0, 5), // Remove actions column for this example
    pagination: { pageSize: 5 },
  },
  parameters: {
    docs: {
      description: {
        story: 'Data table with search functionality enabled.',
      },
    },
  },
};

export const CompactTable: Story = {
  args: {
    title: 'Compact Data View',
    data: sampleUsers.slice(0, 3),
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'status', label: 'Status' },
    ],
    pagination: { pageSize: 5 },
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact table with minimal columns and data.',
      },
    },
  },
};

export const WithCustomActions: Story = {
  args: {
    title: 'Users with Actions',
    data: sampleUsers,
    columns: userColumns,
    pagination: { pageSize: 10 },
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with custom action buttons in each row.',
      },
    },
  },
};

export const ResponsiveTable: Story = {
  args: {
    title: 'Responsive Data Table',
    data: sampleUsers,
    columns: userColumns.slice(0, 4), // Fewer columns for mobile
    pagination: { pageSize: 5 },
  },
  parameters: {
    docs: {
      description: {
        story: 'Table that adapts to different screen sizes.',
      },
    },
  },
};

export const EmptyState: Story = {
  args: {
    title: 'No Data Available',
    data: [],
    columns: userColumns,
    pagination: { pageSize: 10 },
  },
  parameters: {
    docs: {
      description: {
        story: 'Table showing empty state when no data is available.',
      },
    },
  },
};

export const LargeDataset: Story = {
  args: {
    title: 'Large Dataset Example',
    data: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      status: ['active', 'inactive', 'pending'][i % 3],
      role: ['User', 'Admin', 'Moderator'][i % 3],
      lastLogin: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
    })),
    columns: userColumns.slice(0, 5), // Remove actions for large dataset
    pagination: { pageSize: 10 },
  },
  parameters: {
    docs: {
      description: {
        story: 'Table handling large datasets with pagination.',
      },
    },
  },
};
