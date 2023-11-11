import { Account } from "./account";
import { Currency } from "./currency";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  image: {
    url: string;
  };
  currency: Currency;
  accounts: Account[];
  createAt: Date | string;
  updatedAt: Date | string;
};
