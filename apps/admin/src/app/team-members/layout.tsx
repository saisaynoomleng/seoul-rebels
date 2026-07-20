import { RenderAction } from '@/components/RenderAction';
import { AdminNavigation, Bounded } from '@seoul-rebels/ui';
import React from 'react';

const TeamMemberLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Bounded as="div" size="full" isCentered={false}>
      <AdminNavigation
        title="Team Members"
        location="Home Team-Members"
        actions={{ label: 'Create Team Member', href: '/team-members/create' }}
        renderAction={RenderAction}
      />
      {children}
    </Bounded>
  );
};

export default TeamMemberLayout;
