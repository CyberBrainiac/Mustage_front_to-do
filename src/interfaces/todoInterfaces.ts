export interface I_CreateTodo {
  title: string;
  description?: string;
}

export interface I_Todo extends I_CreateTodo {
  id: string;
  status: boolean;
  dateCreate: number;
}

export interface I_TodoItem {
  item: I_Todo;
  onStatusChange: (id: string) => void;
  onDoubleClick: (id: string) => void;
}
