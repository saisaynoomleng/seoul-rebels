import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorBlock } from './ColorBlock';
import { expect } from 'storybook/test';

const meta: Meta<typeof ColorBlock> = {
  title: 'Components/Shared/ColorBlock',
  component: ColorBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Rounded color component to display available colors on Product Detail',
      },
    },
  },

  args: {
    colorCode: '#86e7b8',
  },
  argTypes: {
    colorCode: {
      control: 'text',
      description: 'Accept Different Color Codes such as HEX, RGBA, HSLA',
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ColorBlock {...args} />,
  play: async ({ canvas }) => {
    const color = canvas.getByTestId('color');

    await expect(color).toBeInTheDocument();
    await expect(color).toHaveStyle('backgroundColor : #86e7b8');
  },
};

export const RGBAColor: Story = {
  render: (args) => (
    <ColorBlock {...args} colorCode="rgba(177, 40, 111, 0.8)" />
  ),
  play: async ({ canvas }) => {
    const color = canvas.getByTestId('color');

    await expect(color).toBeInTheDocument();
    await expect(color).toHaveStyle(
      'backgroundColor : rgba(177, 40, 111, 0.8)',
    );
  },
};

export const HSLAColor: Story = {
  render: (args) => (
    <ColorBlock {...args} colorCode="hsla(249, 59.5%, 32%, 0.4)" />
  ),
  play: async ({ canvas }) => {
    const color = canvas.getByTestId('color');

    await expect(color).toBeInTheDocument();
    await expect(color).toHaveStyle(
      'backgroundColor : hsla(249, 59.5%, 32%, 1)',
    );
  },
};

export const RGBColor: Story = {
  render: (args) => <ColorBlock {...args} colorCode="rgb(177, 40, 111)" />,
  play: async ({ canvas }) => {
    const color = canvas.getByTestId('color');

    await expect(color).toBeInTheDocument();
    await expect(color).toHaveStyle('backgroundColor : rgb(177, 40, 111)');
  },
};

export const HSLColor: Story = {
  render: (args) => <ColorBlock {...args} colorCode="hsl(249, 59.5%, 32%)" />,
  play: async ({ canvas }) => {
    const color = canvas.getByTestId('color');

    await expect(color).toBeInTheDocument();
    await expect(color).toHaveStyle('backgroundColor : hsl(249, 59.5%, 32%)');
  },
};

export const OKLCHColor: Story = {
  render: (args) => (
    <ColorBlock {...args} colorCode="oklch(0.398 0.07 227.392)" />
  ),
  play: async ({ canvas }) => {
    const color = canvas.getByTestId('color');

    await expect(color).toBeInTheDocument();
    await expect(color).toHaveStyle(
      'backgroundColor : oklch(0.398 0.07 227.392)',
    );
  },
};
