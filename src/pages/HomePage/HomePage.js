import React, { Component } from 'react';
import FilmsList from '../../components/FilmsList';
import moviesApi from '../../api/movies-api'; 

class HomePage extends Component {
  state = {
    films: [],
    error: null,
  };

  componentDidMount() {
    moviesApi
      .fetchPopularMovies()
      .then(({ results }) => {

        this.setState({ films: [...results] });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { error } = this.state;

    return (
      <div>
        <h2>Tranding today:</h2>

        <FilmsList films={this.state.films} />

        {error && <h3 className="ErrorMessage">{error.message}</h3>}
      </div>
    );
  }
}

export default HomePage;
