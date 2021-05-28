import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './FilmsList.scss';
import defaultImg from '../../images/default.jpg'

const FilmsList = ({ films, location }) => {
  return (
    <>
      <ul className="FilmsList">
        {films.map(({ id, title, original_title, poster_path, original_name}) => (
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
        <h1 className="title">{title || original_title || original_name}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// FilmsList.propType = {
//   films: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     }),
//   ),
// };

export default withRouter(FilmsList);
