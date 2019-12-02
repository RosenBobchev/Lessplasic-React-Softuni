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
import ArticleDetails  from './components/Article/DetailsArticle';
import EventDetails  from './components/Event/DetailsEvent';
import VideoDetails  from './components/Video/DetailsVideo';
import UpdateDeleteArticle from "./components/Article/UpdateDeleteArticle";
import UpdateDeleteEvent from "./components/Event/UpdateDeleteEvent";
import UpdateDeleteVideo from "./components/Video/UpdateDeleteVideo";
import DeletePoll from "./components/Poll/DeletePoll";
import AllArticles from "./components/Article/AllArticles";
import AllEvents from "./components/Event/AllEvents";
import AllPolls from "./components/Poll/AllPolls";
import AllVideos from "./components/Video/AllVideos";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./Images/background-img.jpg";

function App() {
  return (
      <Container style={{backgroundImage: `url(${img})`, minHeight: '100%'}} fluid='true'>
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
                  <Route path='/articleDetails/:articleId' exact component={ArticleDetails} />
                  <Route path='/eventDetails/:eventId' exact component={EventDetails} />
                  <Route path='/videoDetails/:videoId' exact component={VideoDetails} />
                  <Route path='/deleteArticle/:articleId' exact component={UpdateDeleteArticle} />
                  <Route path='/editArticle/:articleId' exact component={UpdateDeleteArticle} />
                  <Route path='/editEvent/:eventId' exact component={UpdateDeleteEvent} />
                  <Route path='/deleteEvent/:eventId' exact component={UpdateDeleteEvent} />
                  <Route path='/deleteVideo/:videoId' exact component={UpdateDeleteVideo} />
                  <Route path='/editVideo/:videoId' exact component={UpdateDeleteVideo} />
                  <Route path='/deletePoll/:pollId' exact component={DeletePoll} />
                  <Route path='/articles' exact component={AllArticles} />
                  <Route path='/events' exact component={AllEvents} />
                  <Route path='/polls' exact component={AllPolls} />
                  <Route path='/videos' exact component={AllVideos} />
              </Router>
          </Layout>
      </Container>
  );
}

export default App;
