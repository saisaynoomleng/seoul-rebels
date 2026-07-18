import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLocation } from './PageLocation';
import { expect } from 'storybook/test';

const meta: Meta<typeof PageLocation> = {
  title: 'Components/Shared/PageLocation',
  component: PageLocation,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Show current location of the page',
      },
    },
  },

  args: {
    location: 'Store Create-Store',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    location: {
      control: 'text',
      description: 'Current location path from base path',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <PageLocation {...args} />,
  play: async ({ canvas }) => {
    const p = canvas.getByRole('paragraph');

    await expect(p).toBeInTheDocument();
  },
};
