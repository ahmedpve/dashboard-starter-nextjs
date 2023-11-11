import { Currency } from "./currency";

export type Account = {
  title: string;
  type: "debit" | "credit";
  statement: "balance-sheet" | "income-statement";
  section: string;
  value: {
    amount: number;
    currency: Currency;
  };
  budget?: {
    amount: number;
    currency: Currency;
  };
};
