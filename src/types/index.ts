export interface ICounter {
  status: string;
  value: number;
}

export interface IProfile {
  name: string;
  email: string;
}

export interface IEmailPayload {
  type: string;
  data?: string;
}
