import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Hotel from './components/Hotel';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import News from './components/News';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hotel" component={Hotel} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/News" component={News} />
        <Route path="/Contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
