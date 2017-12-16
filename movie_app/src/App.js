import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'

const moviesTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR79,0,630,1200_AL_.jpg",
  "https://movieswithaplottwist.com/wp-content/uploads/2016/04/old-boy-movie-poster.jpg",
  "https://imgc.allpostersimages.com/img/posters/star-wars-the-force-awakens-one-sheet_u-L-F8G58H0.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={moviesTitles[0]} poster={movieImages[0]}/>
        <Movie title={moviesTitles[1]} poster={movieImages[1]}/>
        <Movie title={moviesTitles[2]} poster={movieImages[2]}/>
        <Movie title={moviesTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
