import { Route, Switch } from "wouter";
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ProductsPage from "./pages/products";
import CertificationsPage from "./pages/certifications";
import ContactPage from "./pages/contact";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/certifications" component={CertificationsPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      {import.meta.env.DEV && <AgentFeedback />}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
