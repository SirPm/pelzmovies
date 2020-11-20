import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import MoviePage from './pages/movie_page/MoviePage';
import TvShowsPage from './pages/tv_shows_page/TvShowsPage';
import ActorsPage from './pages/actors_page/ActorsPage';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route path={`/movies/:movie_id`} component={MoviePage} />
          <Route path={`/tvshows`} component={TvShowsPage} />
          <Route path={`/actors`} component={ActorsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

// API KEY: 2f353b0bc0f2eaffd8aa6eb2474ee037
export default App;
