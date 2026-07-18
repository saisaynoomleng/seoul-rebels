import type { Meta, StoryObj } from '@storybook/react-vite';
import { CreateStockistForm } from './CreateForm';
import { expect, fn, getByRole } from 'storybook/test';
import { mockFileUpload, mockForm, mockImageUploadAction } from '#lib/mockData';

const meta: Meta<typeof CreateStockistForm> = {
  title: 'Components/Admin/Stockists/CreateForm',
  component: CreateStockistForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Admin Dashboard: Create Stockist Form',
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
      description: 'Server Action to be rendered in Next.js & Express',
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
  render: (args) => <CreateStockistForm {...args} />,
  play: async ({ canvas, userEvent }) => {
    const name = canvas.getByLabelText(/store name/i);
    const slug = canvas.getByLabelText(/slug/i);
    const generateSlug = canvas.getByRole('button', { name: /generate/i });
    const email = canvas.getByLabelText(/email/i);
    const phone = canvas.getByLabelText(/phone/i);
    const street = canvas.getByLabelText(/street/i);
    const city = canvas.getByLabelText(/city/i);
    const state = canvas.getByLabelText(/state/i);
    const zip = canvas.getByLabelText(/zip/i);
    const country = canvas.getByLabelText(/country/i);
    const image = canvas.getByLabelText(/upload an image/i);
    const imageAlt = canvas.getByLabelText(/image alternative text/i);
    const submit = canvas.getByRole('button', {
      name: /create/i,
    });

    await expect(name).toBeInTheDocument();
    await expect(slug).toBeInTheDocument();
    await expect(email).toBeInTheDocument();
    await expect(phone).toBeInTheDocument();
    await expect(street).toBeInTheDocument();
    await expect(city).toBeInTheDocument();
    await expect(zip).toBeInTheDocument();
    await expect(state).toBeInTheDocument();
    await expect(country).toBeInTheDocument();
    await expect(generateSlug).toBeInTheDocument();
    await expect(image).toBeInTheDocument();
    await expect(imageAlt).toBeInTheDocument();
    await expect(submit).toBeInTheDocument();

    await userEvent.type(name, 'Haru Store');
    await userEvent.click(generateSlug);
    await userEvent.type(email, 'haru@mail.com');
    await userEvent.type(phone, '+12345667890');
    await userEvent.type(street, 'street');
    await userEvent.type(city, 'city');
    await userEvent.type(zip, '10001');
    await userEvent.type(state, 'state');
    await userEvent.type(country, 'country');
    await userEvent.upload(image, mockFileUpload);
    await userEvent.type(imageAlt, 'alt');

    for (let i = 0; i < 7; i++) {
      await userEvent.type(
        canvas.getByTestId(`storeHours.${i}.openingHour`),
        '08:00',
      );
      await userEvent.type(
        canvas.getByTestId(`storeHours.${i}.closingHour`),
        '17:00',
      );
    }
    await userEvent.click(submit);

    await expect(mockForm).toHaveBeenCalledWith({
      name: 'Haru Store',
      slug: 'haru-store',
      email: 'haru@mail.com',
      phone: '+12345667890',
      street: 'street',
      city: 'city',
      zip: '10001',
      state: 'state',
      country: 'country',
      imageAssetId: 'test imageAssetId',
      imageAlt: 'alt',
      storeHours: [
        {
          closingHour: '17:00',
          day: 0,
          openingHour: '08:00',
        },
        {
          closingHour: '17:00',
          day: 1,
          openingHour: '08:00',
        },
        {
          closingHour: '17:00',
          day: 2,
          openingHour: '08:00',
        },
        {
          closingHour: '17:00',
          day: 3,
          openingHour: '08:00',
        },
        {
          closingHour: '17:00',
          day: 4,
          openingHour: '08:00',
        },
        {
          closingHour: '17:00',
          day: 5,
          openingHour: '08:00',
        },
        {
          closingHour: '17:00',
          day: 6,
          openingHour: '08:00',
        },
      ],
    });
  },
};
