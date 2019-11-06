import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../../apollo";
import { Heatmap } from "../Heatmap/Heatmap";
import { AddPage } from "../AddPage/AddPage";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/">
            <Heatmap />
          </Route>
          <Route path="/add">
            <AddPage />
          </Route>
        </React.Fragment>
      </BrowserRouter>
    </ApolloProvider>
  );
};
