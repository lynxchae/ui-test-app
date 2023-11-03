import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MainTestInformationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="host" source="host" />
      </SimpleForm>
    </Create>
  );
};
