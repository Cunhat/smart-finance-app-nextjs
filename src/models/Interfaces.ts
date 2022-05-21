import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface ISideBarItem {
  title: string;
  path: string;
  selected?: boolean;
  bottom?: boolean;
  icon: IconDefinition;
}