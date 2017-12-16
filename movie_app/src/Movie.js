import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>hello this is a movie</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://cdn.rialto.co.nz/cdn/resources/movies/10688/images/largeposter.jpg" />
    )
  }
}

export default Movie;
