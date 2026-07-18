import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdminNavigation } from './AdminNavigation';

const meta: Meta<typeof AdminNavigation> = {
  title: 'Components/Admin/AdminNavigation',
  component: AdminNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Admin Dashboard: Stockist Main Navigation',
      },
    },
  },

  args: {
    title: 'Stockist',
    location: 'Create Create-Store',
    actions: {
      label: 'Create Store',
      href: '',
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AdminNavigation
      {...args}
      renderAction={(props) => <a href={props.href}>{props.label}</a>}
    />
  ),
};
