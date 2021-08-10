/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
import React, { createElement } from 'react';
import { Highlight } from 'react-instantsearch-dom';

export function ResearchProjects({ hit, components }) {
  return (
    // <a href={hit.url} className="aa-ItemLink">
    //   <div className="aa-ItemContent">
    //     <div className="aa-ItemTitle">
    //       <components.Highlight hit={hit} attribute="title" />
    //     </div>
    //   </div>
    // </a>
    <div className="aa-ItemTitle">
    {/* <components.Highlight hit={hit} attribute="title" /> */}
    {/* <Highlight attribute="Title" hit={hit} /> */}
    <h1>{hit.Title}</h1>
  </div>
  );
}
