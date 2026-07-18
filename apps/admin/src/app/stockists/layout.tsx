import React from 'react';
import { AdminNavigation, Bounded } from '@seoul-rebels/ui';
import { RenderAction } from '@/components/RenderAction';

const StockistLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Bounded size="full">
      <AdminNavigation
        title="Stockists"
        location="Home Stockists"
        actions={{ label: 'Create Stockist', href: '/stockists/create' }}
        renderAction={RenderAction}
      />
      {children}
    </Bounded>
  );
};

export default StockistLayout;
