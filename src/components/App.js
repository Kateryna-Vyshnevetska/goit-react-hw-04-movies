import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../routes";
import { PageNotFound } from "../pages/pageNotFound/PageNotFound";
import { Navigation } from "./nav/Navigation";
import { Spinner } from "../components/loader/Spinner";

export const App = () => (
  <>
    <Navigation />
    <Suspense fallback={<Spinner />}>
      <Switch>
        {routes.map(({ path, name, exact, component }) => {
          return (
            <Route key={name} path={path} exact={exact} component={component} />
          );
        })}
        <Route>
          <PageNotFound>
            <h1>PageNotFound</h1>
          </PageNotFound>
        </Route>
      </Switch>
    </Suspense>
  </>
);
