export type TodoItem = {
  id: string;
  text: string;
  done: boolean;
};

export type FilterMapType = {
  All: () => boolean;
  Active: (todo: TodoItem) => boolean;
  Completed: (todo: TodoItem) => boolean;
};
