// https://www.npmjs.com/package/@microsoft/microsoft-graph-client

import { Client } from "@microsoft/microsoft-graph-client";

export const getClient = () => {
  const client = Client.init({
    authProvider: (done) => {
      // Perform authentication here (e.g., using Microsoft Identity Platform, OAuth, etc.)
      // Call the `done` function with the access token
      done(null, "<access-token>");
    },
  });

  return client;
};