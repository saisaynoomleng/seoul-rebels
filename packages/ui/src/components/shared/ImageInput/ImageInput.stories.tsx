import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageInput } from './ImageInput';

const meta: Meta<typeof ImageInput> = {
  title: 'Components/Shared/ImageInput',
  component: ImageInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Image Upload Input',
      },
    },
  },

  args: {},
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
