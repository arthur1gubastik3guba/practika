import { Account } from "../account/Account";

export type Customer = {
  accounts?: Array<Account>;
  address: string | null;
  birthdate: Date | null;
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  phoneNumber: string | null;
  updatedAt: Date;
};
