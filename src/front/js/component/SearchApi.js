import algoliasearch from "algoliasearch/lite";
import React from "react";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
} from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "7VW33R3U8I",
  "b1f9230c31bc7c0e843528ead2376046"
);

function SearchAPI() {
  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName="the_book_club" searchClient={searchClient}>
        <div>



          
          <SearchBox />
          <Hits hitComponent={Hit} />
          <Pagination />
        </div>
      </InstantSearch>
    </div>
  );
}
function Hit({ hits }) {
  return (
    <ol>
      {hits.map((hit) => (
        <li key={hit.title}>{hit.author}</li>
      ))}
    </ol>
  );
}

export default SearchAPI;
