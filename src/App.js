import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>
  );
}

export default App;
