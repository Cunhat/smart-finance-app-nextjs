import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { Prisma } from '@prisma/client'


export interface ISideBarItem {
  title: string;
  path: string;
  selected?: boolean;
  bottom?: boolean;
  icon: IconDefinition;
}

export interface ICategory {
  name: string;
  id: string;
  subCategories: ISubCategory[];
}

export interface ISubCategory {
  id: string;
  id_category: string;
  name: string;
  category: ICategory;
}

export interface IAccount {
  name: string;
  id: string;
}
export interface IUser {
  name: string;
  id: string;
}
export interface ITag {
  name: string;
  id: string;
}

export interface ITransaction {
  description: string;
  date: Date;
  value: Prisma.Decimal;
  subcategory: ISubCategory;
  account: IAccount;
  tag: ITag;
  id: string;
}

export interface IGetAllCategoriesRequest {
  allCategories: Array<ICategory>;
}

export interface IGetAllTagsRequest {
  getTags: Array<ITag>;
}
