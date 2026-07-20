import type { Meta, StoryObj } from '@storybook/react-vite';
import { TeamMemberPreviewCard } from './TeamMemberPreviewCard';
import { mockPhotoURL } from '#lib/mockData';
import { TeamMemberCardSkeleton } from './TeamMemberCardSkeleton';
import { expect } from 'storybook/test';

const meta: Meta<typeof TeamMemberPreviewCard> = {
  title: 'Components/Admin/TeamMembers/PreviewCard',
  component: TeamMemberPreviewCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },

  args: {
    imageAlt: 'Model standing',
    imageUrl: mockPhotoURL,
    name: 'Haru',
    position: 'CEO',
    previewAction: {
      label: 'Preview Haru',
      href: '',
    },
    editAction: {
      label: 'Edit Haru',
      href: '',
    },
  },
  argTypes: {
    imageAlt: {
      control: 'text',
      description: 'Image Alternative text',
    },

    imageUrl: {
      control: 'text',
      description: 'FULL URL to the image',
    },

    name: {
      control: 'text',
      description: 'Member Name',
    },

    position: {
      control: 'text',
      description: "Member's Position",
    },

    previewAction: {
      control: false,
      description: 'Path to previewing Team Member',
    },

    editAction: {
      control: false,
      description: 'Path to editing Team Member',
    },

    renderEditAction: {
      control: false,
      description: 'Link Component to be rendered in Next.js',
    },

    renderPreviewAction: {
      control: false,
      description: 'Link Component to be rendered in Next.js',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <TeamMemberPreviewCard
      {...args}
      renderEditAction={(props) => <a href={props.href}>{props.label}</a>}
      renderPreviewAction={(props) => <a href={props.href}>{props.label}</a>}
    />
  ),
  play: async ({ canvas }) => {
    const name = canvas.getByTestId('name');
    const position = canvas.getByTestId('position');

    await expect(name).toBeInTheDocument();
    await expect(position).toBeInTheDocument();
  },
};

export const Loading = {
  render: () => <TeamMemberCardSkeleton />,
};
