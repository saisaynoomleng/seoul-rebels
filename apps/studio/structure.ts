import {StructureResolver} from 'sanity/structure'

import {
  BsBriefcaseFill,
  BsPencil,
  BsPostcardHeartFill,
  BsReverseLayoutTextWindowReverse,
} from 'react-icons/bs'
import {GiFurShirt, GiResize, GiStairsGoal, GiTShirt} from 'react-icons/gi'
import {RiQuestionnaireLine} from 'react-icons/ri'
import {IoStorefrontSharp} from 'react-icons/io5'
import {FaPeopleGroup} from 'react-icons/fa6'
import {BiCollection, BiSolidCategory, BiSolidCategoryAlt} from 'react-icons/bi'
import {PiNewspaperBold} from 'react-icons/pi'
import {MdMapsHomeWork} from 'react-icons/md'
import {SiNike} from 'react-icons/si'
import {LuBookHeart} from 'react-icons/lu'
import {GrWorkshop} from 'react-icons/gr'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Seoul Rebels')
    .items([
      S.divider().title('Operations'),
      S.documentTypeListItem('stockist').title('Stockists(Stores)').icon(IoStorefrontSharp),
      S.documentTypeListItem('teamMember').title('Team Members').icon(FaPeopleGroup),
      S.documentTypeListItem('author').title('Authors').icon(BsPencil),
      S.documentTypeListItem('jobOffer').title('Job Offers').icon(BsBriefcaseFill),
      S.documentTypeListItem('department').title('Departments').icon(MdMapsHomeWork),

      S.divider().title('Products'),
      S.documentTypeListItem('brand').title('Brands').icon(SiNike),
      S.documentTypeListItem('productCategory').title('Product Categories').icon(BiSolidCategory),
      S.documentTypeListItem('product').title('Products').icon(GiTShirt),
      S.documentTypeListItem('productVariant').title('Product Variants').icon(GiFurShirt),
      S.documentTypeListItem('sizeChart').title('Size Charts').icon(GiResize),
      S.documentTypeListItem('collection').title('Collections').icon(BiCollection),
      S.documentTypeListItem('lookbook').title('Lookbooks').icon(LuBookHeart),
      S.documentTypeListItem('shopTheLook').title('Shop The Looks').icon(GrWorkshop),

      S.divider().title('Marketing'),
      S.documentTypeListItem('milestone').title('Milestones').icon(GiStairsGoal),
      S.documentTypeListItem('blog').title('Blogs').icon(PiNewspaperBold),
      S.documentTypeListItem('blogCategory').title('Blog Categories').icon(BiSolidCategoryAlt),
      S.documentTypeListItem('faqs').title('FAQs').icon(RiQuestionnaireLine),

      S.divider().title('Components & Pages'),
      S.documentTypeListItem('hero').title('Hero Banners').icon(BsPostcardHeartFill),
      S.documentTypeListItem('utilityPage')
        .title('Utility Pages')
        .icon(BsReverseLayoutTextWindowReverse),
    ])
