export interface I_CreateTodo {
  title: string;
  description?: string;
}

export interface I_Todo extends I_CreateTodo {
  id: string;
  status: boolean;
  dateCreate: number;
}

export interface I_Filters {
  status: string;
  searchStr: string;
}

export interface I_TodoItem {
  item: I_Todo;
  onStatusChange: (id: string) => void;
  onDoubleClick: (todo: I_Todo) => void;
}

export interface I_TodoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  todo?: I_Todo;
  isEditMode: boolean;
}

export interface I_TodoList {
  openEditPopup: (todo: I_Todo) => void;
}
