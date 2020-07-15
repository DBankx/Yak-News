import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/home/Landing';
import Footer from './components/layout/Footer';
import Search from './components/tabviews/Search';
import Contact from './components/home/Contact';
import About from './components/home/About';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='content'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/search/:topic/:sortby' component={Search} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
