import React from 'react';
import axios from "axios"
import Movie from "../components/Movie"
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading : true,
    movies: []
  };

  getMovies = async() => {
    //movies.data.data.movies?
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

    //movies: movies
    this.setState({movies, isLoading:false})
  }

  componentDidMount(){
    this.getMovies();
  }
  render(){
    //this.state.isLoading, this.state.movies
    const {isLoading, movies} = this.state;
    return (
      <section className ="container">
      {isLoading? (
        <div className="loader">
          <span className="loder_text">Loading</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie=>(
            <Movie 
              key = {movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              bigPoster={movie.large_cover_image}
              genres={movie.genres}
              rating={movie.rating}
            />
          ))}
        </div>
      )}
      </section>
    )
  } 
}


export default Home;
