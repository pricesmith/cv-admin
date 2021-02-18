import React                            from "react";
import { Admin, Resource, EditGuesser } from "react-admin";
import jsonServerProvider               from "ra-data-json-server";

import PersonsList                      from "./components/UserList";


const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="users" list={PersonsList} edit={EditGuesser} />
        </Admin>
    );
};

export default App;

