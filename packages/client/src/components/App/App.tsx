import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Heatmap } from "../Heatmap/Heatmap";

export const Router = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exac path="/" component={Heatmap} />
      </React.Fragment>
    </BrowserRouter>
  );
};
