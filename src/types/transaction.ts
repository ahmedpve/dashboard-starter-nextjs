import { Currency } from "./currency";

export type Transaction = {
  id: string;
  date: Date | string;
  debit: {
    account: string;
    amount: number;
    currency: Currency;
  };
  credit: {
    account: string;
    amount: number;
    currency: Currency;
  };
  description: string;
};
