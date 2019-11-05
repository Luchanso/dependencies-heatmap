import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Heatmap } from "../Heatmap/Heatmap";
import { AddPage } from "../AddPage/AddPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/">
          <Heatmap />
        </Route>
        <Route path="/add">
          <AddPage/>
        </Route>
      </React.Fragment>
    </BrowserRouter>
  );
};
