export type RefType = {
  open: (id?: string) => void;
  close: () => void;
};

export type User = {
  id: string;
  name: string;
};

export type Friend = {
  id: string;
  name: string;
};

export type PropsType = {
  users?: User[];
};
