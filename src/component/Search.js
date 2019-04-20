import React from 'react';

const _ = require('lodash');

const Search = (props) => {

  const _onChange = (e) =>{

    let query = document.querySelector('#searchBar').value;
    props.search(query);
  }

  return (
    <div id="Search" >
      <input id = 'searchBar' type="text" className="form-control" placeholder="Search for..." onChange={_.debounce(_onChange,500)} />
    </div>

  );
}

export default Search;