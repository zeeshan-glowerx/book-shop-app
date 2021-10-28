import "./App.css";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Books from "./pages/books";
import Genre from "./pages/genre";
import Aurthors from "./pages/aurthor";
import Language from "./pages/language";
import BookDesc from "./pages/bookdescription";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Books} />
        <Route path="/genre" component={Genre} />
        <Route path="/language" component={Language} />
        <Route path="/aurthor" component={Aurthors} />
        <Route path="/Books/:bookname/:id" component={BookDesc} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
