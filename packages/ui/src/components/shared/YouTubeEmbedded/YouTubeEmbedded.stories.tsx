import type { Meta, StoryObj } from '@storybook/react-vite';
import { YouTubeEmbedded } from './YouTubeEmbedded';
import { expect } from 'storybook/test';

const meta: Meta<typeof YouTubeEmbedded> = {
  title: 'Components/Shared/YouTubeEmbedded',
  component: YouTubeEmbedded,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'YouTube Player',
      },
    },
  },

  args: {
    videoId: 'I-Y5FHI4JXc',
    title: 'Skateboard video',
  },

  argTypes: {
    videoId: {
      control: 'text',
      description: 'Youtube Video ID',
    },

    title: {
      control: 'text',
      description: 'Video title for A11y',
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
  render: (args) => <YouTubeEmbedded {...args} />,
  play: async ({ canvas }) => {
    const video = canvas.getByTestId('iframe');

    await expect(video).toHaveAttribute(
      'src',
      expect.stringContaining('I-Y5FHI4JXc'),
    );

    await expect(video).toHaveAttribute('title', 'Skateboard video');
  },
};
