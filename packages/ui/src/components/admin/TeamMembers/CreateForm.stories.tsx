import type { Meta, StoryObj } from '@storybook/react-vite';
import { CreateTeamMemberForm } from './CreateForm';
import { mockFileUpload, mockForm, mockImageUploadAction } from '#lib/mockData';
import { expect } from 'storybook/test';

const meta: Meta<typeof CreateTeamMemberForm> = {
  title: 'Components/Admin/TeamMembers/CreateForm',
  component: CreateTeamMemberForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Admin Dashboard: Create Team Member',
      },
    },
  },

  args: {
    action: mockForm,
    imageUploadAction: mockImageUploadAction,
  },
  argTypes: {
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
  render: (args) => <CreateTeamMemberForm {...args} />,
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

    await userEvent.type(name, 'sai say');
    await userEvent.type(position, 'CEO');
    await userEvent.click(generateSlug);
    await userEvent.upload(imageUrl, mockFileUpload);
    await userEvent.type(imageAlt, 'photo');

    await userEvent.click(submit);

    await expect(mockForm).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'sai say',
        slug: 'sai-say-team-member',
        imageAlt: 'photo',
        position: 'CEO',
        imageAssetId: 'test imageAssetId',
      }),
    );
  },
};
