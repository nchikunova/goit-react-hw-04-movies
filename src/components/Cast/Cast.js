import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../../api/movies-api';
import './Cast.scss';
import defaultImg from '../../images/default.jpg';

class Cast extends Component {

static propTypes = {
  movieId: PropTypes.string,
};

  state = {
    casts: [],
    error: null,
  };

  componentDidMount() {

    const movieId = this.props.match.params.movieId;

    moviesApi
      .fetchCast(movieId)
      .then(results => {

        if (results.cast.length === 0) {
          throw new Error(
            'We don`t have any information about cast for this movie',
          );
        }

        this.setState({
          casts: [...results.cast],
        });

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { casts, error } = this.state;

    return (
      <>
        <ul className="CastGallery">
          {casts.map(({ id, name, character, profile_path }) => (
            <li key={id} className="CastGalleryItem">
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w92/${profile_path}`
                    : defaultImg
                }
                alt={name}
                width="92"
                className="CastGalleryItem-image"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>

        {error && <h3 className="ErrorMessage">{error.message}</h3>}
      </>
    );
  }

  
}

export default Cast;
