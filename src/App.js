/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
// eslint-disable-next-line prettier/prettier

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  Hits,
  Highlight,
  connectSearchBox,
} from 'react-instantsearch-dom';
import AutoComplete from './Autocomplete';
import './App.css';

const VirtalSearchBox = connectSearchBox(() => null);

const searchClient = algoliasearch(
  'HTA4ITDOTD',
  '07998d795e7eb465efb4a0a08c947cc9'
);

class App extends Component {
  state = {
    query: '',
  };

  onSuggestionSelected = (_, { suggestion }) => {
    console.log('onSuggestionSelected', suggestion);
    this.setState({
      query: suggestion.Title,
    });
  };

  onSuggestionCleared = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;

    return (
      <div className="container">
        <h1>React InstantSearch - Results page with autocomplete</h1>
        <InstantSearch indexName="openinnov8-search_post" searchClient={searchClient}>
          <Configure hitsPerPage={5} />
          <AutoComplete
            onSuggestionSelected={this.onSuggestionSelected}
            onSuggestionCleared={this.onSuggestionCleared}
          />
        </InstantSearch>

        <InstantSearch indexName="openinnov8-search_post" searchClient={searchClient}>
          <Configure hitsPerPage={4} />
          <VirtalSearchBox defaultRefinement={query} />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div>
      <Highlight attribute="Title" hit={props.hit} />
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
