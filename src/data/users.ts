import { User } from "../types/user";

export const users: User[] = [
  {
    id: "1",
    name: "Ahmed Rezk",
    email: "ahmed@mailsac.com",
    password: "11111111",
    image: {
      url: "",
    },
    currency: "EGP",
    accounts: [
      {
        id: "1",
        title: "cash on hand",
        type: "debit",
        statement: "balance-sheet",
        section: "cash",
        value: {
          amount: 10000,
        },
      },
    ],
    createAt: "26-oct-2023",
    updatedAt: "26-oct-2023",
  },
];
