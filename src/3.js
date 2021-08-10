// /* eslint-disable linebreak-style */
// /* eslint-disable no-console */
// /* eslint-disable prettier/prettier */
// import React from 'react';
// import { InstantSearch, Configure, Index, Highlight } from 'react-instantsearch/dom';
// import { connectAutoComplete, connectStateResults } from 'react-instantsearch/connectors';
// import Autosuggest from 'react-autosuggest';
// // import 'react-instantsearch-theme-algolia/style.css';

// const App = () => (
//   <InstantSearch
//     appId="JVECSPNXI5"
//     apiKey="b31369b0e02baa00c7f597dfd3b7a95e"
//     indexName="openinnov8-search_post"
//     onSearchStateChange={(searchState) => console.log(searchState)}
//   >
//     <AutoComplete />
//     <Configure hitsPerPage={1} />
//   </InstantSearch>
// );


// class Hits extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '', hits: [] };
//   }

//   componentWillReceiveProps(props) {
//     this.setState({ hits: !this.state.value ? [] : props.hits })
//   }
//   render() {
//     const { hits, currentRefinement, refine } = this.props;
//     console.log('state', this.state);
//     return <Autosuggest
//       suggestions={this.state.hits}
//       multiSection={false}
//       onSuggestionsFetchRequested={({ value }) => refine(value)}
//       onSuggestionsClearRequested={() => this.setState({ hits: [] })}
//       getSuggestionValue={hit => hit.name}
//       renderSuggestion={hit => (
//         <div className="hit">
//           <Highlight attributeName="title" hit={hit} />
//           <Highlight attributeName="organisation" hit={hit} />

//         </div>
//       )}
//       inputProps={{
//         placeholder: 'Type a product',
//         value: this.state.value,
//         onChange: (event, { newValue, method }) => { this.setState({ value: newValue }) },
//       }}
//       renderSectionTitle={section => section.index}
//       getSectionSuggestions={section => section.hits}
//     />
//   }
// }

// const AutoComplete = connectAutoComplete(Hits);


// const Loading = connectStateResults(({ searching }) => {
//   console.log('searching', searching)
//   return <div>{searching}</div>;
// });

// export default App;