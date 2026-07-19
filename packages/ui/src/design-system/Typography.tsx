import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '#components/ui/table';
import { Bounded, SectionTitle } from '../components';
import { Separator } from '#components/ui/separator';

import { GiFurShirt, GiResize, GiStairsGoal, GiTShirt } from 'react-icons/gi';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { IoStorefrontSharp } from 'react-icons/io5';
import { FaMagnifyingGlass, FaPeopleGroup } from 'react-icons/fa6';
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
import { CiMapPin } from 'react-icons/ci';
import { PiEyes } from 'react-icons/pi';
import { AiOutlineEdit } from 'react-icons/ai';

const Icons = [
  <GiStairsGoal />,
  <SiNike />,
  <GrWorkshop />,
  <GiFurShirt />,
  <GiResize />,
  <GiTShirt />,
  <RiQuestionnaireLine />,
  <IoStorefrontSharp />,
  <FaPeopleGroup />,
  <BiCollection />,
  <BiSolidCategory />,
  <BiSolidCategoryAlt />,
  <PiNewspaperBold />,
  <MdMapsHomeWork />,
  <LuBookHeart />,
  <FaMagnifyingGlass />,
  <CiMapPin />,
  <PiEyes />,
  <AiOutlineEdit />,
];

const HEADING = [
  {
    name: 'Heading 1',
    weight: 'bold',
    size: '72px',
    lineHeight: '1',
  },
  {
    name: 'Heading 2',
    weight: 'bold',
    size: '60px',
    lineHeight: '1',
  },
];

const HIERARCHY = [
  {
    name: 'Heading 1',
    weight: 'bold',
    size: '72px',
    lineHeight: '1',
  },
  {
    name: 'Heading 2',
    weight: 'bold',
    size: '60px',
    lineHeight: '1',
  },
  {
    name: 'Body 1',
    weight: 'regular',
    size: '16px',
    lineHeight: '1.5',
  },
  {
    name: 'Body 2',
    weight: 'regular',
    size: '14px',
    lineHeight: '1.5',
  },
  {
    name: 'Body 3',
    weight: 'regular',
    size: '8px',
    lineHeight: '1.5',
  },
];

const BODY = [
  {
    name: 'Body 1',
    weight: 'regular',
    size: '16px',
    lineHeight: '1.5',
  },
  {
    name: 'Body 2',
    weight: 'regular',
    size: '14px',
    lineHeight: '1.5',
  },
  {
    name: 'Body 3',
    weight: 'regular',
    size: '8px',
    lineHeight: '1.5',
  },
];

const Headers = [...new Set(HIERARCHY.flatMap((h) => Object.keys(h)))];

export const Typography = (): React.JSX.Element => {
  return (
    <Bounded className="space-y-12">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-y-3">
          <SectionTitle label="typography" />
          <p className="text-brand-black-600 dark:text-brand-black-500">
            Typography is part of the overall visual language you use to
            communicate with your users. Just like the visual elements of color,
            form and pattern, typography can set a mood, set a tone and present
            a product the way you want it perceived.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="youtubeShadow border-4 rounded-lg">
            <p className="text-fs-900 p-8 font-semibold">Aa</p>
          </div>
        </div>
      </div>

      <SectionTitle label="Typeface" />

      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-y-1 font-heading font-bold text-fs-500">
          <p className="text-brand-black-600">Title/Headings</p>
          <p className="font-bold text-fs-700">Italiana</p>
          <p className="tracking-widest">abcdefghijklmnopqrstuvwxyz</p>
          <p className="tracking-widest">abcdefghijklmnopqrstuvwxyz</p>
          <p>1234567890</p>
        </div>

        <div className="flex flex-col gap-y-1 font-body text-fs-500">
          <p className="text-brand-black-600">Body/Text</p>
          <p className="font-bold text-fs-700">Montserrat</p>
          <p className="uppercase tracking-widest">
            abcdefghijklmnopqrstuvwxyz
          </p>
          <p className="lowercase tracking-widest">
            abcdefghijklmnopqrstuvwxyz
          </p>
          <p>1234567890</p>
        </div>
      </div>

      <Separator />

      <SectionTitle label="Hierarchy" />

      <Table>
        <TableHeader>
          <TableRow>
            {Headers.map((header, i) => (
              <TableHead
                key={i}
                className="capitalize font-semibold text-fs-500"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {HEADING.map((h) => (
            <TableRow key={h.name} className="font-heading border-0">
              <TableCell style={{ fontSize: h.size }}>{h.name}</TableCell>
              <TableCell className="font-body uppercase">{h.weight}</TableCell>
              <TableCell className="font-body uppercase">{h.size}</TableCell>
              <TableCell className="font-body uppercase">
                {h.lineHeight}
              </TableCell>
            </TableRow>
          ))}

          {BODY.map((b) => (
            <TableRow key={b.name} className="font-body border-0">
              <TableCell style={{ fontSize: b.size }}>{b.name}</TableCell>
              <TableCell className="font-body uppercase">{b.weight}</TableCell>
              <TableCell className="font-body uppercase">{b.size}</TableCell>
              <TableCell className="font-body uppercase">
                {b.lineHeight}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Separator />

      <div className="space-y-4">
        <SectionTitle label="Icons" />
        <div className="grid grid-cols-12 border-2 p-4 place-items-center gap-6 rounded-lg">
          {Icons.map((icon) => (
            <i className="border border-brand-black-300 p-3">{icon}</i>
          ))}
        </div>
      </div>
    </Bounded>
  );
};
