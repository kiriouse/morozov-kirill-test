export interface User {
  login: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface Document {
  id: string;
  approver: string;
  resolution: string;
  comment?: string;
  state: number;
}

