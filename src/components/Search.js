import React from 'react'

const Search = props => {

  function search(e){
    props.searchHandler(e)
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={props.searchVal} onChange={search}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
