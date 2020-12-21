import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useApolloClientForProvider } from "../../apollo";
import { useServerConfig } from "../../hooks/useServerConfig";
import { AddPage } from "../AddPage/AddPage";
import { Heatmap } from "../Heatmap/Heatmap";
import { NotFoundPage } from "../NotFoundPage";

export const App = () => {
  const config = useServerConfig();
  const [client, isLoading] = useApolloClientForProvider(config?.BACKEND_URL);

  if (isLoading || !client || !config) {
    return <div>Loading...</div>;
  }

  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename={config.FRONT_BASENAME}>
        <React.Fragment>
          <Switch>
            <Route exact path="/">
              <Heatmap />
            </Route>
            <Route path="/add">
              <AddPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </ApolloProvider>
  );
};
