import React from 'react';

const Search = ({location}) => {
    return (  
        <div>
            <h1>
                {/* Seach Keyword: {location.search} */}
                Search Keyword: {new URLSearchParams(location.search).get("keyword")}
            </h1>
        </div>
    );
}
 
export default Search;