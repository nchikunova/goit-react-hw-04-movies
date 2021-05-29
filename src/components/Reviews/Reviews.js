import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../../api/movies-api'; 

class Reviews extends Component {
  
  static propTypes = {
    movieId: PropTypes.string,
  };

  state = {
    reviews: [],
    error: null,
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    moviesApi
      .fetchReviews(movieId)
      .then(({ results }) => {

        if (results.length === 0) {
          throw new Error('We don`t have any reviews for this movie');
        }

        this.setState({
          reviews: [...results],
        });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { reviews, error } = this.state;

    return (
      <>
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4> Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
        {error && <h3 className="ErrorMessage">{error.message}</h3>}
      </>
    );
  }
}

export default Reviews;
