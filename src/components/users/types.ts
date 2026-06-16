export type User = {
    id: number;
    name: string;
    email: string;
};

export type State = {
    loading: boolean;
    data: User[];
    error: string;
};

export type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS"; payload: User[] }
  | { type: "ERROR"; error: unknown };