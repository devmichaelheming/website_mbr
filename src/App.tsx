import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./pages/Home";

import "./style.scss";

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
    </BrowserRouter>
  )
}