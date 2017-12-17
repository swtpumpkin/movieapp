import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {
    
  } 

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
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
          },
          {
            title: "Kingsman",
            poster: "https://mediafiles.cineplex.com/Central/Film/Posters/24441_320_470.jpg"
          }
        ]
      })
    }, 1000);
  }
  
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }
  // 자체기능은 그냥 함수명을 사용하고 나의 기능은 언더스코어(_)를 사용하여 구분한다.

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading '}
      </div>
    );
  }
}

export default App;
