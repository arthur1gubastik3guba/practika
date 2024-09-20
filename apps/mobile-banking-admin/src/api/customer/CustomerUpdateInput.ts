import { AccountUpdateManyWithoutCustomersInput } from "./AccountUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  accounts?: AccountUpdateManyWithoutCustomersInput;
  address?: string | null;
  birthdate?: Date | null;
  email?: string | null;
  fullName?: string | null;
  phoneNumber?: string | null;
};
