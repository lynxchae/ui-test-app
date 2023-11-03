import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MainTestInformationList } from "./mainTestInformation/MainTestInformationList";
import { MainTestInformationCreate } from "./mainTestInformation/MainTestInformationCreate";
import { MainTestInformationEdit } from "./mainTestInformation/MainTestInformationEdit";
import { MainTestInformationShow } from "./mainTestInformation/MainTestInformationShow";
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
        title={"ui-test-app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MainTestInformation"
          list={MainTestInformationList}
          edit={MainTestInformationEdit}
          create={MainTestInformationCreate}
          show={MainTestInformationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
