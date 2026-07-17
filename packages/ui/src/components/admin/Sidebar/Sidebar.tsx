import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupAction,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarSeparator,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '#components/ui/sidebar';
import { Collapsible } from '#components/ui/collapsible';

import { Media } from '@seoul-rebels/utils';

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

type AdminSidebarProps = {
  logoBlack: Media;
  logoWhite: Media;
};

const SIDEBAR_MENU = [
  {
    label: 'operations',
    menus: [{ label: 'stockists (stores)', icon: <IoStorefrontSharp /> }],
  },
  {
    label: 'products',
    menus: [{ label: 'brands', icon: <SiNike /> }],
  },
  {
    label: 'marketing',
    menus: [{ label: 'milestones', icon: <GiStairsGoal /> }],
  },
  {
    label: 'components & pages',
    menus: [{ label: 'hero banners', icon: <BsPostcardHeartFill /> }],
  },
];

export const AdminSidebar = ({ logoBlack, logoWhite }: AdminSidebarProps) => {
  return (
    <Sidebar className="border-0">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="block dark:hidden">
            <img
              loading="lazy"
              src={logoBlack.imageUrl}
              alt={logoBlack.imageAlt}
              className="w-40 mx-auto"
            />
          </SidebarMenuItem>

          <SidebarMenuItem className="dark:block hidden">
            <img
              loading="lazy"
              src={logoWhite.imageUrl}
              alt={logoWhite.imageAlt}
              className="w-40 mx-auto"
            />
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
                  <SidebarMenuButton className="capitalize">
                    <span>{menu.icon}</span>
                    <span>{menu.label}</span>
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
