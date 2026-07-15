import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextAreaWithCount } from './TextAreaWithCount';
import { expect } from 'storybook/test';

const meta: Meta<typeof TextAreaWithCount> = {
  title: 'Components/Shared/TextareaWithCount',
  component: TextAreaWithCount,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Textarea with text counts',
      },
    },
  },

  args: {},
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    maxLength: {
      control: 'number',
      description: 'Specify the maximum number of the word',
    },

    id: {
      control: 'text',
      description: 'ID for the form label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <TextAreaWithCount {...args} />,
  play: async ({ canvas }) => {
    const textarea = canvas.getByRole('textbox');

    await expect(textarea).toBeInTheDocument();
    await expect(textarea).toHaveAttribute('maxLength', '2000');
  },
};

export const MaxLength5000: Story = {
  render: (args) => <TextAreaWithCount {...args} maxLength={5000} />,
  play: async ({ canvas }) => {
    const textarea = canvas.getByRole('textbox');

    await expect(textarea).toHaveAttribute('maxLength', '5000');
  },
};
