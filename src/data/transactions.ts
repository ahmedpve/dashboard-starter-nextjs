import { Transaction } from "../types/transaction";

const transactionsSample: Transaction[] = [
  {
    id: "1",
    debit: { account: "cash", amount: 15000 },
    credit: { account: "revenue", amount: 15000 },
    description: "Monthly income.",
    date: "31-oct-2023",
  },
  {
    id: "2",
    debit: { account: "cash", amount: 15000 },
    credit: { account: "revenue", amount: 15000 },
    description: "Monthly income.",
    date: "31-oct-2023",
  },
  {
    id: "3",
    debit: { account: "cash", amount: 15000 },
    credit: { account: "revenue", amount: 15000 },
    description: "Monthly income.",
    date: "31-oct-2023",
  },
  {
    id: "4",
    debit: { account: "cash", amount: 15000 },
    credit: { account: "revenue", amount: 15000 },
    description: "Monthly income.",
    date: "31-oct-2023",
  },
  {
    id: "5",
    debit: { account: "cash", amount: 15000 },
    credit: { account: "revenue", amount: 15000 },
    description: "Monthly income.",
    date: "31-oct-2023",
  },
];

export const transactions: Transaction[] = [
  ...transactionsSample,
  ...transactionsSample,
  ...transactionsSample,
  ...transactionsSample,
  ...transactionsSample,
  ...transactionsSample,
  ...transactionsSample,
  ...transactionsSample,
  ...transactionsSample,
  ...transactionsSample,
].map((t, i) => ({ ...t, id: String(i + 1) }));
