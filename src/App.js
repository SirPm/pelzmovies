import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import MoviePage from './pages/movie_page/MoviePage';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route path={`/movie/:movie_id`} component={MoviePage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

// API KEY: 2f353b0bc0f2eaffd8aa6eb2474ee037
export default App;
