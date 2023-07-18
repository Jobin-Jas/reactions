import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PostFileTitle } from "../postFile/PostFileTitle";
import { UserTitle } from "../user/UserTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="postFiles.id"
          reference="PostFile"
          label="post_files"
        >
          <SelectInput optionText={PostFileTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <ReferenceInput source="userId.id" reference="User" label="userId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
