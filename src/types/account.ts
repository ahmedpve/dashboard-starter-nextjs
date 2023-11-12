export type Account = {
  id: string;
  title: string;
  type: "debit" | "credit";
  statement: "balance-sheet" | "income-statement";
  section: string;
  value: {
    amount: number;
  };
  budget?: {
    amount: number;
  };
};
