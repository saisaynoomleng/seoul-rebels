import type { Meta, StoryObj } from '@storybook/react-vite';
import { EditTeamMemberForm } from './EditForm';
import {
  mockFileUpload,
  mockForm,
  mockImageUploadAction,
  mockTeamMember,
} from '#lib/mockData';
import { expect } from 'storybook/test';

const meta: Meta<typeof EditTeamMemberForm> = {
  title: 'Components/Admin/TeamMembers/EditForm',
  component: EditTeamMemberForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Admin Dashboard: Edit Team Member Form',
      },
    },
  },

  args: {
    action: mockForm,
    imageUploadAction: mockImageUploadAction,
    teamMember: mockTeamMember,
  },
  argTypes: {
    teamMember: {
      control: false,
      description: 'Team Member data from Sanity',
    },

    action: {
      control: false,
      description: 'Server Action to be rendered in Next.js',
    },

    imageUploadAction: {
      control: false,
      description: 'Server Action to be rendered in Next.js',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledForm: Story = {
  render: (args) => <EditTeamMemberForm {...args} />,
  play: async ({ canvas, userEvent }) => {
    const name = canvas.getByLabelText(/name/i);
    const position = canvas.getByLabelText(/position/i);
    const slug = canvas.getByLabelText(/slug/i);
    const generateSlug = canvas.getByRole('button', {
      name: /generate/i,
    });
    const imageUrl = canvas.getByLabelText(/upload an image/i);
    const imageAlt = canvas.getByLabelText(/image alt/i);
    const submit = canvas.getByRole('button', {
      name: /publish/i,
    });

    await expect(name).toBeInTheDocument();
    await expect(slug).toBeInTheDocument();
    await expect(generateSlug).toBeInTheDocument();
    await expect(imageUrl).toBeInTheDocument();
    await expect(imageAlt).toBeInTheDocument();
    await expect(submit).toBeInTheDocument();

    await userEvent.clear(name);
    await userEvent.clear(position);
    await userEvent.clear(imageAlt);

    await userEvent.type(name, 'sai say edit');
    await userEvent.type(position, 'CEO edit');
    await userEvent.click(generateSlug);
    await userEvent.upload(imageUrl, mockFileUpload);
    await userEvent.type(imageAlt, 'photo edit');

    await userEvent.click(submit);

    await expect(mockForm).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'sai say edit',
        slug: 'sai-say-edit-team-member',
        imageAlt: 'photo edit',
        position: 'CEO edit',
        imageAssetId: 'test imageAssetId',
      }),
    );
  },
};
