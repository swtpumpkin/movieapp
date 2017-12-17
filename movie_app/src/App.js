import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'

const movies = [
  {
    title: "matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR79,0,630,1200_AL_.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://movieswithaplottwist.com/wp-content/uploads/2016/04/old-boy-movie-poster.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://imgc.allpostersimages.com/img/posters/star-wars-the-force-awakens-one-sheet_u-L-F8G58H0.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
