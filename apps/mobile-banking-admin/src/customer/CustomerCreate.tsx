import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="accounts" reference="Account">
          <SelectArrayInput
            optionText={AccountTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Address" multiline source="address" />
        <DateTimeInput label="Birthdate" source="birthdate" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Full Name" source="fullName" />
        <TextInput label="Phone Number" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
