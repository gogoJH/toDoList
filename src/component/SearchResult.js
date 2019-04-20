import React from 'react';

const SearchResult = (props) => {

  let list = props.allList;
  let search = props.search;
  let matchArr = [];
  let toDoArr= [];

  for(let key in list){
    toDoArr = list[key].filter(ele => {
      if(ele.includes(search)){
        return <div>{ele}</div>; 
      }; 
    })
    matchArr.push(<div key={key}><h2>{key}</h2><div>{toDoArr}</div></div>);
  }
  return (
    <div>
      {matchArr}
    </div>
  );

}

export default SearchResult;