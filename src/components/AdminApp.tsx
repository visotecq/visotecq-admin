"use client"; // remove this line if you choose Pages Router
import * as React from "react";
import { Amplify } from "aws-amplify";
import { Resource } from "react-admin";
import { AmplifyAdmin } from "react-admin-amplify";
import awsExports from "./aws-exports";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";
Amplify.configure(awsExports);

const AdminApp = () => (
  <AmplifyAdmin  operations={{ queries, mutations }}  options={{ authGroups: ["admin"] }} >
     <Resource name="orders" />
  </AmplifyAdmin>
);

export default AdminApp;