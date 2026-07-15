import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bounded } from './Bounded';
import { expect } from 'storybook/test';

const meta: Meta<typeof Bounded> = {
  title: 'Components/Shared/Bounded',
  component: Bounded,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Wrapper element for React Node with predefined classes`,
      },
    },
  },

  args: {
    size: 'md',
    padding: 'md',
    isCentered: true,
    space: true,
  },
  argTypes: {
    as: {
      control: false,
      description: 'React Element Type',
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    size: {
      control: 'radio',
      options: ['sm', 'md', 'full'],
      description: 'Maximum width of the wrapper',
    },

    padding: {
      control: 'radio',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Predefined horizontal padding',
    },

    isCentered: {
      control: 'boolean',
      description: 'Is the component should be centered depending on screens',
    },

    children: {
      control: false,
      description: 'React Node',
    },

    space: {
      control: 'boolean',
      description:
        'Whether to add vertical spacing between children components',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Bounded {...args}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta unde
        voluptatibus rerum impedit, error nulla voluptatem quidem iure
        blanditiis voluptates.
      </p>
    </Bounded>
  ),
  play: async ({ canvas }) => {
    const p = canvas.getByRole('paragraph');

    await expect(p).toBeInTheDocument();
  },
};

export const MultipleChildren: Story = {
  render: (args) => (
    <Bounded {...args} as="div">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt at,
        amet aliquam quasi esse voluptatibus ipsa beatae porro voluptas alias?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque
        unde libero fuga hic labore minima, dignissimos ipsa assumenda
        voluptatem.
      </p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
        repudiandae ipsam non repellat? Maxime itaque dignissimos odio neque.
        Eveniet laboriosam saepe laudantium ab obcaecati quod blanditiis.
        Dolorum delectus reiciendis eaque?
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
        quisquam.
      </p>
    </Bounded>
  ),
};
