import { sanityFetch } from '@/sanity/live';
import { STOCKIST } from '@/sanity/query';
import { Bounded } from '@seoul-rebels/ui';

const StockistPreview = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: store } = await sanityFetch({
    query: STOCKIST,
    params: await params,
  });

  return <Bounded>{store?.name}</Bounded>;
};

export default StockistPreview;
