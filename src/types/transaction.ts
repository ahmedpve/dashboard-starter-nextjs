export type Transaction = {
  id: string;
  date: Date | string;
  debit: {
    account: string;
    amount: number;
  };
  credit: {
    account: string;
    amount: number;
  };
  description: string;
};
