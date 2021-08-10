import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  Stats,
  SortBy,
  Menu,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  'JVECSPNXI5',
  'b31369b0e02baa00c7f597dfd3b7a95e'
);

class App extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>Openinnov8</h1>
        <InstantSearch
          indexName="openinnov8-search_post"
          searchClient={searchClient}
        >
          <div className="left-panel">
            <ClearRefinements clearsQuery />
            <h2>Research Projects</h2>
            <Stats />
            <Menu attribute="Organisation" />
            <SortBy
              defaultRefinement="openinnov8-search_post"
              items={[
                { value: 'openinnov8-search_post', label: 'Featured' },
                {
                  value: 'openinnov8-search_post_price_asc',
                  label: 'published_at asc.',
                },
                {
                  value: 'openinnov8-search_post_published_at_desc',
                  label: 'published_at desc.',
                },
              ]}
            />
            <RefinementList attribute="Title" />
            <Configure hitsPerPage={3} />
          </div>
          <div className="right-panel">
            <SearchBox autoFocus />
            <Hits hitComponent={Hit} />
            <Pagination showLast />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div>
      {/* <h1 className="hit-name">{props.hit.Title}</h1> */}
      <div className="hit-name">
        <Highlight attribute="Title" hit={props.hit} />
      </div>
      <div className="hit-ShortDescription">
        <Highlight attribute="Description" hit={props.hit} />
      </div>
      <div className="hit-iptype">{props.hit.IPType}</div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
// https://www.youtube.com/watch?v=Uc9JAQNP1PE&t=383s
// https://codesandbox.io/s/github/algolia/doc-code-samples/tree/master/React%20InstantSearch/getting-started?file=/src/App.js:0-1523