export interface IMainItem {
  name: string;
  id: string;
  editable: boolean;
  editableHandler: (id: string, name: string) => void;
  secondaryItems: Array<ISecondaryItem>;
  handlePrimaryCreation: (categoryName: string, categoryId: string) => void;
  deleteHandler: (id: string) => void;
}

export interface ISecondaryItem {
  name: string;
  id: string;
  editable: boolean;
  editableHandler: (id: string, name: string) => void;
  deleteHandler: (id: string) => void;
}
