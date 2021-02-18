import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

const PersonsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField  source="id" />
            <TextField  source="name" />
            <TextField  source="username" />
            <EmailField source="email" />
            <TextField  source="address.street" label="Address" />
            <TextField  source="phone" />
            <UrlField   source="website" />
            <TextField  source="company.name"   label="Company" />
        </Datagrid>
    </List>
);

export default PersonsList;