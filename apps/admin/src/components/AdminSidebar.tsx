'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@seoul-rebels/ui';
import React from 'react';

import {
  BsBriefcaseFill,
  BsPencil,
  BsPostcardHeartFill,
  BsReverseLayoutTextWindowReverse,
} from 'react-icons/bs';
import { GiFurShirt, GiResize, GiStairsGoal, GiTShirt } from 'react-icons/gi';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { IoStorefrontSharp } from 'react-icons/io5';
import { FaPeopleGroup } from 'react-icons/fa6';
import {
  BiCollection,
  BiSolidCategory,
  BiSolidCategoryAlt,
} from 'react-icons/bi';
import { PiNewspaperBold } from 'react-icons/pi';
import { MdMapsHomeWork } from 'react-icons/md';
import { SiNike } from 'react-icons/si';
import { LuBookHeart } from 'react-icons/lu';
import { GrWorkshop } from 'react-icons/gr';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const SIDEBAR_MENU = [
  // operations
  {
    label: 'operations',
    menus: [
      {
        label: 'stockists (stores)',
        icon: <IoStorefrontSharp />,
        url: '/stockists',
      },
      {
        label: 'team members',
        icon: <FaPeopleGroup />,
        url: '/team-members',
      },
      {
        label: 'authors',
        icon: <BsPencil />,
        url: '/authors',
      },
      {
        label: 'job offers',
        icon: <BsBriefcaseFill />,
        url: '/job-offers',
      },
      {
        label: 'departments',
        icon: <MdMapsHomeWork />,
        url: '/departments',
      },
    ],
  },

  // Products
  {
    label: 'products',
    menus: [
      { label: 'brands', icon: <SiNike />, url: '/products' },
      {
        label: 'product categories',
        icon: <BiSolidCategory />,
        url: '/products',
      },
      { label: 'products', icon: <GiTShirt />, url: '/products' },
      { label: 'product variants', icon: <GiFurShirt />, url: '/products' },
      { label: 'size charts', icon: <GiResize />, url: '/products' },
      { label: 'collections', icon: <BiCollection />, url: '/products' },
      { label: 'lookbooks', icon: <LuBookHeart />, url: '/products' },
      { label: 'shop the looks', icon: <GrWorkshop />, url: '/products' },
    ],
  },

  // marketing
  {
    label: 'marketing',
    menus: [
      { label: 'milestones', icon: <GiStairsGoal />, url: '/marketing' },
      { label: 'blogs', icon: <PiNewspaperBold />, url: '/marketing' },
      {
        label: 'blogs categories',
        icon: <BiSolidCategoryAlt />,
        url: '/marketing',
      },
      { label: 'faqs', icon: <RiQuestionnaireLine />, url: '/marketing' },
    ],
  },

  // components & pages
  {
    label: 'components & pages',
    menus: [
      {
        label: 'hero banners',
        icon: <BsPostcardHeartFill />,
        url: '/herobanner',
      },
      {
        label: 'utility pages',
        icon: <BsReverseLayoutTextWindowReverse />,
        url: '/herobanner',
      },
    ],
  },
];

export const AdminSidebar = (): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <Sidebar className="border-0">
      <SidebarHeader>
        <SidebarMenu className="border-b border-brand-accent-200 dark:border-brand-accent-400">
          <SidebarMenuItem className="block dark:hidden overflow-hidden aspect-video">
            <Link href="/">
              <Image
                src={`https://cdn.sanity.io/images/fg8lqh2u/production/b307b8433b2f5fa67446d57093699e63d6294f6f-503x239.png`}
                alt="White Logo"
                fill
                className="object-contain w-full"
                sizes="(max-width: 100px) 66vw 100vw"
              />
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem className="dark:block hidden overflow-hidden aspect-video">
            <Link href="/">
              <Image
                src={`https://cdn.sanity.io/images/fg8lqh2u/production/84fa054f0cb7edd4ea2dabef706ab3b23c1488ef-520x250.png`}
                alt="Black Logo"
                fill
                className="object-contain w-full"
                sizes="(max-width: 100px) 66vw 100vw"
              />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {SIDEBAR_MENU.map((sidebar, i) => (
          <SidebarGroup key={i}>
            <SidebarGroupLabel className="capitalize">
              {sidebar.label}
            </SidebarGroupLabel>
            <SidebarSeparator />

            <SidebarMenu>
              {sidebar.menus.map((menu) => (
                <SidebarMenuItem key={menu.label}>
                  <SidebarMenuButton
                    className="capitalize"
                    isActive={pathname === menu.url}
                  >
                    <Link href={menu.url} className="flex gap-x-1 items-center">
                      <span>{menu.icon}</span>
                      <span>{menu.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};
