import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Button {...args}>Click</Button>,
};

export const Outline: Story = {
  render: (args) => (
    <Button variant="outline" {...args}>
      Outline
    </Button>
  ),
};

export const Secondary: Story = {
  render: (args) => (
    <Button variant="secondary" {...args}>
      Outline
    </Button>
  ),
};
