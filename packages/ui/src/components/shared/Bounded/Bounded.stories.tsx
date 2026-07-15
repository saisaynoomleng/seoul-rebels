import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bounded } from './Bounded';

const meta: Meta<typeof Bounded> = {
  title: 'Components/Shared/Bounded',
  component: Bounded,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Wrapper element for React Node`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Deafault: Story = {};
