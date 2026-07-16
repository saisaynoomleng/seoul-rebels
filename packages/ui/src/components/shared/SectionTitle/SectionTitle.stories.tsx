import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionTitle } from './SectionTitle';
import { expect } from 'storybook/test';

const meta: Meta<typeof SectionTitle> = {
  title: 'Components/Shared/SectionTitle',
  component: SectionTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Title Component to render in each section',
      },
    },
  },

  args: {
    label: 'Example Title',
    as: 'h2',
    size: 'sm',
  },
  argTypes: {
    as: {
      control: 'radio',
      options: ['h2', 'h3', 'h4', 'h5'],
      description: 'Specify heading type',
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Specify font sizes of the title',
    },

    label: {
      control: 'text',
      description: 'Title text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Heading3: Story = {
  render: (args) => <SectionTitle {...args} as="h3" size="md" />,

  play: async ({ canvas }) => {
    const title = canvas.getByRole('heading');

    await expect(title?.tagName).toBe('H3');
    await expect(title).toHaveTextContent('Example Title');
  },
};
