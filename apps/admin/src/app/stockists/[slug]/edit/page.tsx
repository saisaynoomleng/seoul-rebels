import { handleEditStockists } from '@/actions/handleEditStockists';
import { handleSanityImageUpload } from '@/actions/handleSanityImageUpload';
import { sanityFetch } from '@/sanity/live';
import { STOCKIST } from '@/sanity/query';
import { Bounded, DashboardSkeleton, EditStockistForm } from '@seoul-rebels/ui';
import { StockistOutputSchema } from '@seoul-rebels/utils';

const StockistEditPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: store } = await sanityFetch({
    query: STOCKIST,
    params: await params,
  });

  if (!store) return <DashboardSkeleton />;

  const stockist: StockistOutputSchema = {
    _id: store._id,
    name: store.name || '',
    slug: store.slug || '',
    email: store.contacts?.email || '',
    phone: store.contacts?.phone || '',
    street: store.contacts?.street || '',
    city: store.contacts?.city || '',
    state: store.contacts?.state || '',
    zip: store.contacts?.zip || '',
    country: store.contacts?.country || '',
    imageAlt: store.imageAlt || '',
    imageAssetId: store.imageAssetId || '',
    storeHours: store.storeHours as StockistOutputSchema['storeHours'],
  };

  return (
    <Bounded size="full">
      <EditStockistForm
        action={handleEditStockists}
        imageUploadAction={handleSanityImageUpload}
        stockist={stockist}
      />
    </Bounded>
  );
};

export default StockistEditPage;
