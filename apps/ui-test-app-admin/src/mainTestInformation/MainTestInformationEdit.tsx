import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MainTestInformationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="host" source="host" />
      </SimpleForm>
    </Edit>
  );
};
