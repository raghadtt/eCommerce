import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Men from './pages/men';
import Women from './pages/women';
import Jewelery from './pages/jewelery';
import About from './pages/about';
import contact from './pages/contact';
import Electronics from './pages/electronics';
import Cart from './pages/cart';
import Shipping from './pages/shipping';
import Policy from './pages/policy';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/eCommerce" exact component={Home} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/jewelery" component={Jewelery} />
        <Route path="/electronics" component={Electronics} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/policy" component={Policy} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
