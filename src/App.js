import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/home/Landing';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
