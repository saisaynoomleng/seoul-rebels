import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdminSidebar } from './Sidebar';
import { logoBlackURL, logoWhiteURL } from '#lib/mockData';

const meta: Meta<typeof AdminSidebar> = {
  title: 'Components/Admin/Sidebar',
  component: AdminSidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Admin dashboard sidebar menu',
      },
    },
  },

  args: {
    logoBlack: {
      imageUrl: logoBlackURL,
      imageAlt: 'Logo black',
    },
    logoWhite: {
      imageUrl: logoWhiteURL,
      imageAlt: 'logo white',
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
