import { Currency } from "./currency";

export type Transaction = {
  debits: { account: string; amount: number; currency: Currency }[];
  credits: { account: string; amount: number; currency: Currency }[];
  description: string;
  date: Date | string;
};
