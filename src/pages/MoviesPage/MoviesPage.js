import React, { Component } from 'react';
import queryString from 'query-string';
import SearchForm from '../../components/SearchForm';
import FilmsList from '../../components/FilmsList';
import moviesApi from '../../api/movies-api';

class MoviesPage extends Component {
  state = {
    searchQuery: '', 
    error: null,
    films: [],
  };

  componentDidMount() {
    const { search, pathname } = this.props.location;
    if (search && pathname) {
      this.setState({
        searchQuery: queryString.parse(search).query,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchFilms();
    }
  }

  changeQuery = query => {
    const { history, location } = this.props;

    this.setState({
      searchQuery: query,
      films: [],
      error: null,
    });

    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  fetchFilms() {
    const { searchQuery, error } = this.state;
    const options = { searchQuery, error };

    if (!searchQuery) {
      return;
    }

    moviesApi
      .fetchSearchMovies(options)
      .then(({ results }) => {
        if (results.length === 0) {
          throw new Error('No matches were found! Try again!');
        }

        this.setState({
          films: [...results],
        });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { error } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.changeQuery} />
        <FilmsList films={this.state.films} />

        {error && <h3 className="ErrorMessage ">{error.message}</h3>}
      </>
    );
  }
}

export default MoviesPage;
