import { fn } from 'storybook/test';

export const logoWhiteURL =
  'https://cdn.sanity.io/images/fg8lqh2u/production/84fa054f0cb7edd4ea2dabef706ab3b23c1488ef-520x250.png';

export const logoBlackURL =
  'https://cdn.sanity.io/images/fg8lqh2u/production/b307b8433b2f5fa67446d57093699e63d6294f6f-503x239.png';

export const mockPhotoURL =
  'https://cdn.sanity.io/images/fg8lqh2u/production/92e862943354141d40d82e5403da1b82be96b04a-736x1308.jpg';

export const mockForm = fn(async () => {
  return { success: true, message: 'Submission Success' };
});

export const mockImageUploadAction = fn(async () => 'test imageAssetId');

export const mockFileUpload = new File(['image'], 'image.png', {
  type: 'image/png',
});

export const mockStockistData = {
  _id: '',
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
  latitude: 0,
  longitude: 0,
  storeHours: [
    {
      closingHour: '17:00',
      _key: 'd61eba8e-1552-4526-8beb-3a24618f7844',
      _type: 'storeHour',
      closingHours: '17:00',
      day: 0,
      openingHour: '08:00',
      openingHours: '08:00',
    },
    {
      closingHour: '17:00',
      _key: '3d90275f-4a00-46ad-af32-c578a4be7294',
      _type: 'storeHour',
      closingHours: '17:00',
      day: 1,
      openingHour: '08:00',
      openingHours: '08:00',
    },
    {
      _key: 'bb36ba6a-7e4e-42ac-a847-3ddb5a344c59',
      _type: 'storeHour',
      closingHours: '17:00',
      day: 2,
      openingHours: '08:00',
    },
    {
      _key: '9b9530b2-a86d-42d5-a369-3bacd52e979b',
      _type: 'storeHour',
      closingHours: '17:00',
      day: 3,
      openingHours: '08:00',
    },
    {
      _key: '3255bb36-0f54-462b-9cbb-72bf5feab552',
      _type: 'storeHour',
      closingHours: '17:00',
      day: 4,
      openingHours: '08:00',
    },
    {
      _key: '1d447639-7aca-4525-a45e-9510abc0f142',
      _type: 'storeHour',
      closingHours: '17:00',
      day: 5,
      openingHours: '08:00',
    },
    {
      _key: 'c0c148c9-0c04-40f2-a36c-fe20f3ec4d3d',
      _type: 'storeHour',
      closingHours: '17:00',
      day: 6,
      openingHours: '08:00',
    },
  ],
};

export const mockTeamMember = {
  _id: 'a984c5a9-6259-4a17-a1e2-979717f41638-17845938',
  imageAlt: 'photo',
  imageAssetId: 'test imageAssetId',
  name: 'sai say',
  position: 'CEO',
  slug: 'sai-say-team-member',
};
