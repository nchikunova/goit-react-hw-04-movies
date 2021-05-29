import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.scss';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <div className="Search">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={this.state.query}
            onChange={this.handleChange}
          />

          <button type="submit" className="Search-button">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
