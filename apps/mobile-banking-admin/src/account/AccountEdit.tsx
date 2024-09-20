import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { CardTitle } from "../card/CardTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Account Number" source="accountNumber" />
        <SelectInput
          source="accountType"
          label="Account Type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Balance" source="balance" />
        <ReferenceArrayInput source="cards" reference="Card">
          <SelectArrayInput
            optionText={CardTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="transactions" reference="Transaction">
          <SelectArrayInput
            optionText={TransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
