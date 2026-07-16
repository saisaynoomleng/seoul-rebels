import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageInput } from './ImageInput';
import { fn } from 'storybook/test';

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

  args: {
    onChange: fn(),
    onValidationError: fn(),
    errorMessage: '',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    onChange: {
      control: false,
      description: 'React input element change event',
    },

    onValidationError: {
      control: false,
      description: 'Set Error message',
    },

    errorMessage: {
      control: 'text',
      description: 'Error Message',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
