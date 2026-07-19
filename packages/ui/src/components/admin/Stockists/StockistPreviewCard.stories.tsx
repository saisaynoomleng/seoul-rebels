import type { Meta, StoryObj } from '@storybook/react-vite';
import { StockistPreviewCard } from './StockistPreviewCard';
import { mockPhotoURL } from '#lib/mockData';
import { expect } from 'storybook/test';
import { StockistPreviewCardSkeleton } from './StockistPreviewCardSkeleton';

const meta: Meta<typeof StockistPreviewCard> = {
  title: 'Components/Admin/Stockists/PreviewCard',
  component: StockistPreviewCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Admin Dashborad: Stockist Preview Card',
      },
    },
  },

  args: {
    editAction: {
      label: 'Edit',
      href: '',
    },
    previewAction: {
      label: 'Preview',
      href: '',
    },
    imageAlt: 'model standing',
    imageUrl: mockPhotoURL,
    name: 'Haru Store',
    city: 'Cleveland',
    country: 'United States',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    imageAlt: {
      control: 'text',
      description: 'Image Alternative Text',
    },

    imageUrl: {
      control: 'text',
      description: 'Image URL',
    },

    editAction: {
      control: false,
      description: 'Path to editing specific Stockist',
    },

    previewAction: {
      control: false,
      description: 'Path to prevewing specific Stockist',
    },

    name: {
      control: 'text',
      description: 'Stockist Name',
    },

    city: {
      control: 'text',
      description: "Stockist's City Address",
    },

    country: {
      control: 'text',
      description: "Stockist's Country Address",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <StockistPreviewCard
      {...args}
      renderEditAction={(props) => (
        <a href={props.href} data-testid="edit">
          {props.label}
        </a>
      )}
      renderPreviewAction={(props) => (
        <a href={props.href} data-testid="preview">
          {props.label}
        </a>
      )}
    />
  ),
  play: async ({ canvas }) => {
    const image = canvas.getByRole('img');
    const name = canvas.getByText(/haru store/i);
    const city = canvas.getByText(/cleveland/i);
    const country = canvas.getByText(/united states/i);

    await expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('cdn.sanity.io'),
    );
    await expect(image).toHaveAttribute('alt', 'model standing');
    await expect(name).toHaveTextContent('Haru Store');
    await expect(city).toHaveTextContent('Cleveland');
    await expect(country).toHaveTextContent('United States');
  },
};

export const Loading = {
  render: () => <StockistPreviewCardSkeleton />,
};
