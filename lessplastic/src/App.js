import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import { Container } from 'react-bootstrap';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./Images/background-img.jpg";

function App() {
  return (
      <Container style={{backgroundImage: `url(${img})`}} fluid='true'>
          <Layout>
              <Router>
                  <Route exact path='/' component={Home} />
                  <Route path='/login' component={Login} />
                  <Route path='/register' component={Register} />
              </Router>
          </Layout>
      </Container>
  );
}

export default App;
