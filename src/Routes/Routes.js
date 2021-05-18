import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Scroll from 'pages/Scroll';
import ReactQuery from 'pages/ReactQuery';
import Error404 from 'errors/Error404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/scroll" component={Scroll} />
      <Route exact path="/react-query" component={ReactQuery} />

      <Route path="*">
        <Error404 />
      </Route>
    </Switch>
  );
}
