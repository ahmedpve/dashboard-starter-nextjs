export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  image: {
    path: string;
  };
  country: string;
  createAt: Date | string;
  updatedAt: Date | string;
};
