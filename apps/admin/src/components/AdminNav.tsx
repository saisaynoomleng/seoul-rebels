import {
  Bounded,
  ModeToggle,
  Separator,
  SidebarTrigger,
} from '@seoul-rebels/ui';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { FaMagnifyingGlass, FaUser } from 'react-icons/fa6';

type AdminNav = {
  className?: string;
};
const AdminNav = ({ className }: AdminNav): React.JSX.Element => {
  return (
    <Bounded
      as="nav"
      size="full"
      className={twMerge(clsx('shadow flex justify-between', className))}
    >
      <div>
        <SidebarTrigger />
      </div>

      <div className="flex items-center gap-x-2">
        {/* Search */}
        <FaMagnifyingGlass />
        <ModeToggle />

        <Separator orientation="vertical" />
        <FaUser />
      </div>
    </Bounded>
  );
};

export default AdminNav;
