import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location"

import Layout from "./layout/Layout/Layout";
import InvitationGenerator from "./pages/InvitationGenerator/InvitationGenerator";
import NotFound from "./pages/NotFound/NotFound";
import TeamPage from "./pages/Team/TeamPage";
import TimeConvecter from "./pages/TimeConvecter/TimeConvecter";
import { Tutorial } from "./pages/Tutorial/Tutorial";

import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Router hook={useHashLocation}>
          <Switch>
            <Route path="/" component={TimeConvecter} />
            <Route path="/invitacion" component={InvitationGenerator} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/team" component={TeamPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}
export default App;
