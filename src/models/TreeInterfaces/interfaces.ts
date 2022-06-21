export interface IMainItem {
  name: string;
  id: string;
  editable: boolean;
  editableHandler: (id: string, name: string) => void;
  secondaryItems: Array<ISecondaryItem>;
}

export interface ISecondaryItem {
  name: string;
  id: string;
  editable: boolean;
  editableHandler: (id: string, name: string) => void;
}
