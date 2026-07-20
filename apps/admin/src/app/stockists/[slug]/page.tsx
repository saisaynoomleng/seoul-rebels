import { urlFor } from '@/sanity/image';
import { sanityFetch } from '@/sanity/live';
import { STOCKIST } from '@/sanity/query';
import {
  Bounded,
  DashboardSkeleton,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@seoul-rebels/ui';
import { formatTime } from '@seoul-rebels/utils';
import Image from 'next/image';

const StockistPreview = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: store } = await sanityFetch({
    query: STOCKIST,
    params: await params,
  });

  if (!store) return <DashboardSkeleton />;

  const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <Bounded isCentered={false} size="full" className="grid grid-cols-2 gap-6">
      <div className="overflow-hidden aspect-square relative">
        {store.imageUrl && (
          <Image
            src={urlFor(store.imageUrl).format('webp').url()}
            alt={store.imageAlt || ''}
            fill
            sizes="(max-width: 600px) 66vw 100vw"
            className="w-full object-cover"
          />
        )}
      </div>

      <div className="flex flex-col gap-y-6">
        <div className="flex justify-between items-center">
          <p>Name</p>
          <p className="font-semibold">{store.name}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>Email</p>
          <p className="font-semibold">{store.contacts?.email}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>Phone</p>
          <p className="font-semibold">{store.contacts?.phone}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>Street</p>
          <p className="font-semibold">{store.contacts?.street}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>City</p>
          <p className="font-semibold">{store.contacts?.city}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>State</p>
          <p className="font-semibold">{store.contacts?.state}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>Zip/Postal Code</p>
          <p className="font-semibold">{store.contacts?.zip}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>Country</p>
          <p className="font-semibold">{store.contacts?.country}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>Latitude</p>
          <p className="font-semibold">{store.contacts?.latitude}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>Longitude</p>
          <p className="font-semibold">{store.contacts?.longitude}</p>
        </div>

        <Table>
          <TableCaption>Store Hours</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Days</TableHead>
              <TableHead>Opening Hours</TableHead>
              <TableHead>Closing Hours</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {store.storeHours?.map((s) => (
              <TableRow key={s._key}>
                <TableCell>{DAYS[s.day as number]}</TableCell>
                <TableCell>{formatTime(s.openingHours as string)}</TableCell>
                <TableCell>{formatTime(s.closingHours as string)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Bounded>
  );
};

export default StockistPreview;
