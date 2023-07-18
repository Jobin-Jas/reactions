import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ReactionTypeList } from "./reactionType/ReactionTypeList";
import { ReactionTypeCreate } from "./reactionType/ReactionTypeCreate";
import { ReactionTypeEdit } from "./reactionType/ReactionTypeEdit";
import { ReactionTypeShow } from "./reactionType/ReactionTypeShow";
import { PostList } from "./post/PostList";
import { PostCreate } from "./post/PostCreate";
import { PostEdit } from "./post/PostEdit";
import { PostShow } from "./post/PostShow";
import { PostFileList } from "./postFile/PostFileList";
import { PostFileCreate } from "./postFile/PostFileCreate";
import { PostFileEdit } from "./postFile/PostFileEdit";
import { PostFileShow } from "./postFile/PostFileShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"reactionService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="ReactionType"
          list={ReactionTypeList}
          edit={ReactionTypeEdit}
          create={ReactionTypeCreate}
          show={ReactionTypeShow}
        />
        <Resource
          name="Post"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          show={PostShow}
        />
        <Resource
          name="PostFile"
          list={PostFileList}
          edit={PostFileEdit}
          create={PostFileCreate}
          show={PostFileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
