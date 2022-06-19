import { IconDefinition } from '@fortawesome/fontawesome-common-types';

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
  date: string;
  value: number;
  subcategory: ISubCategory;
  account: IAccount;
  user: IUser;
  tag: ITag;
}

export interface IGetAllCategoriesRequest {
  allCategories: Array<ICategory>;
}
