import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import { Container } from 'react-bootstrap';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Privacy } from './components/Common/Privacy';
import { About } from './components/Common/About';
import { CreateArticle } from './components/Article/CreateArticle';
import { CreateEvent } from './components/Event/CreateEvent';
import { AddVideo } from './components/Video/AddVideo';
import { CreatePoll } from './components/Poll/CreatePoll';
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
                  <Route path='/privacy' component={Privacy} />
                  <Route path='/about' component={About} />
                  <Route path='/createArticle' component={CreateArticle} />
                  <Route path='/createEvent' component={CreateEvent} />
                  <Route path='/createPoll' component={CreatePoll} />
                  <Route path='/addVideo' component={AddVideo} />
              </Router>
          </Layout>
      </Container>
  );
}

export default App;
