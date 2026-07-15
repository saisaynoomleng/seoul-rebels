import {authorType} from './documents/authorType'
import {blogCategory} from './documents/blogCategory'
import {blogType} from './documents/blogType'
import {brandType} from './documents/brandType'
import {collectionType} from './documents/collectionType'
import {departmentType} from './documents/departmentType'
import {FAQsType} from './documents/faqsType'
import {heroType} from './documents/heroType'
import {jobOfferType} from './documents/jobOfferType'
import {lookbookType} from './documents/lookbookType'
import {milestoneType} from './documents/milestoneType'
import {productCategoryType} from './documents/productCategoryType'
import {productType} from './documents/productType'
import {productVariantType} from './documents/productVariantType'
import {shopTheLookType} from './documents/shopTheLookType'
import {sizeChartType} from './documents/sizeChartType'
import {stockistType} from './documents/stockistType'
import {teamMemberType} from './documents/teamMemberType'
import {utilityPageType} from './documents/utilityPageType'
import {
  blockContent,
  contactInfo,
  faq,
  imageWithAlt,
  localeContent,
  localeString,
  localeText,
  measurement,
  seo,
  socialLink,
} from './shareTypes'

export const schemaTypes = [
  imageWithAlt,
  blockContent,
  localeString,
  localeText,
  localeContent,
  socialLink,
  seo,
  faq,
  measurement,
  contactInfo,

  heroType,
  utilityPageType,
  milestoneType,
  FAQsType,
  stockistType,
  teamMemberType,
  authorType,
  blogCategory,
  blogType,
  jobOfferType,
  departmentType,
  brandType,
  productCategoryType,
  productType,
  productVariantType,
  sizeChartType,
  collectionType,
  lookbookType,
  shopTheLookType,
]
