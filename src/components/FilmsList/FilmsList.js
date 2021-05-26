import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './FilmsList.scss';
import defaultImg from '../../images/default.jpg'

const FilmsList = ({ films, location }) => {
  return (
    <>
      <ul className="FilmsList">
        {films.map(({ id, title, poster_path, }) => (
          <li className="FilmItem" key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
             <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : defaultImg
                }
                alt=""
              />
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

FilmsList.propType = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }),
  ),
};

export default withRouter(FilmsList);
