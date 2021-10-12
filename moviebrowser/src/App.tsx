import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './common/Layout/Layout';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './common/PageNotFound/PageNotFound';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <Layout />
          </Route>
          <Route path='/movies' exact>
            <Layout />
          </Route>
          <Route path='/movies/:id'>
            <MovieDetails />
          </Route>
          <Route path='/tv-shows'></Route>
          <Route path='/kids'></Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
