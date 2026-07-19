import { PathActionButton } from '@/components/PathActionButton';
import { sanityFetch } from '@/sanity/live';
import { ALL_STOCKISTS } from '@/sanity/query';
import {
  Bounded,
  DashboardSkeleton,
  StockistPreviewCard,
  StockistPreviewCardSkeleton,
} from '@seoul-rebels/ui';
import React, { Suspense } from 'react';

const StockistPage = async (): Promise<React.JSX.Element> => {
  const { data: stores } = await sanityFetch({ query: ALL_STOCKISTS });

  if (!stores) return <DashboardSkeleton />;

  return (
    <Bounded size="full" isCentered={false} className="grid grid-cols-3 gap-4">
      {stores.map((s) => (
        <Suspense key={s._id} fallback={<StockistPreviewCardSkeleton />}>
          <StockistPreviewCard
            name={s.name || ''}
            previewAction={{ label: 'preview', href: `/stockists/${s.slug}` }}
            editAction={{ label: 'edit', href: `/stockists/${s.slug}/edit` }}
            imageAlt={s.imageAlt || ''}
            imageUrl={s.imageUrl || ''}
            renderEditAction={(props) =>
              PathActionButton({
                label: props.label,
                href: props.href,
                actionType: 'edit',
              })
            }
            renderPreviewAction={(props) =>
              PathActionButton({
                label: props.label,
                href: props.href,
                actionType: 'preview',
              })
            }
            city={s.city || ''}
            country={s.country || ''}
          />
        </Suspense>
      ))}
    </Bounded>
  );
};

export default StockistPage;
