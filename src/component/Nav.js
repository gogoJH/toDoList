import React from 'react';
import Search from './Search';

const Nav = (props) => {

    return (
      <div id='Nav'>
        <Search search={props.search}/>
      </div>
    );
}

export default Nav;