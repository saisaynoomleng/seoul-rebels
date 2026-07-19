import type { Meta, StoryObj } from '@storybook/react-vite';
import { EditStockistForm } from './EditForm';
import {
  mockFileUpload,
  mockForm,
  mockImageUploadAction,
  mockStockistData,
} from '#lib/mockData';
import { expect } from 'storybook/test';

const meta: Meta<typeof EditStockistForm> = {
  title: 'Components/Admin/Stockists/EditForm',
  component: EditStockistForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Admin Dashboard: Edit Stockist Form',
      },
    },
  },

  args: {
    stockist: mockStockistData,
    imageUploadAction: mockImageUploadAction,
    action: mockForm,
  },
  argTypes: {
    stockist: {
      control: false,
      description: 'Stockist data from Sanity',
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
  render: (args) => <EditStockistForm {...args} />,
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
      name: /publish/i,
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

    await userEvent.clear(name);
    await userEvent.clear(email);
    await userEvent.clear(phone);
    await userEvent.clear(street);
    await userEvent.clear(city);
    await userEvent.clear(zip);
    await userEvent.clear(state);
    await userEvent.clear(country);
    await userEvent.clear(imageAlt);

    for (let i = 0; i < 7; i++) {
      await userEvent.clear(canvas.getByTestId(`storeHours.${i}.openingHours`));
      await userEvent.clear(canvas.getByTestId(`storeHours.${i}.closingHours`));
    }

    await userEvent.click(submit);
    await userEvent.type(name, 'Haru Store Edit');
    await userEvent.click(generateSlug);
    await userEvent.type(email, 'haru@mail.com');
    await userEvent.type(phone, '+12345667890 edit');
    await userEvent.type(street, 'street edit');
    await userEvent.type(city, 'city edit');
    await userEvent.type(zip, '10001 edit');
    await userEvent.type(state, 'state edit');
    await userEvent.type(country, 'country edit');
    await userEvent.upload(image, mockFileUpload);
    await userEvent.type(imageAlt, 'alt edit');

    for (let i = 0; i < 7; i++) {
      await userEvent.type(
        canvas.getByTestId(`storeHours.${i}.openingHours`),
        '08:00',
      );
      await userEvent.type(
        canvas.getByTestId(`storeHours.${i}.closingHours`),
        '17:00',
      );
    }

    await userEvent.click(submit);

    await expect(mockForm).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Haru Store Edit',
        slug: 'haru-store-edit',
        email: 'haru@mail.com',
        phone: '+12345667890 edit',
        street: 'street edit',
        city: 'city edit',
        zip: '10001 edit',
        state: 'state edit',
        country: 'country edit',
        imageAssetId: 'test imageAssetId',
        imageAlt: 'alt edit',
        storeHours: [
          {
            _key: expect.stringContaining('-'),
            _type: 'storeHour',
            closingHours: '17:00',
            day: 0,
            openingHours: '08:00',
          },
          {
            _key: expect.stringContaining('-'),
            _type: 'storeHour',
            closingHours: '17:00',
            day: 1,
            openingHours: '08:00',
          },
          {
            _key: expect.stringContaining('-'),
            _type: 'storeHour',
            closingHours: '17:00',
            day: 2,
            openingHours: '08:00',
          },
          {
            _key: expect.stringContaining('-'),
            _type: 'storeHour',
            closingHours: '17:00',
            day: 3,
            openingHours: '08:00',
          },
          {
            _key: expect.stringContaining('-'),
            _type: 'storeHour',
            closingHours: '17:00',
            day: 4,
            openingHours: '08:00',
          },
          {
            _key: expect.stringContaining('-'),
            _type: 'storeHour',
            closingHours: '17:00',
            day: 5,
            openingHours: '08:00',
          },
          {
            _key: expect.stringContaining('-'),
            _type: 'storeHour',
            closingHours: '17:00',
            day: 6,
            openingHours: '08:00',
          },
        ],
      }),
    );
  },
};
