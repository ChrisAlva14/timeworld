import { Route, Switch } from "wouter";

import { AppProvider } from "./context/AppContext";
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
            <AppProvider>
                <Layout>
                    <Switch>
                        <Route path="/" component={TimeConvecter} />
                        <Route path="/invitacion" component={InvitationGenerator} />
                        <Route path="/tutorial" component={Tutorial} />
                        <Route path="/team" component={TeamPage} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </AppProvider>
        </>
    );
}
export default App;
