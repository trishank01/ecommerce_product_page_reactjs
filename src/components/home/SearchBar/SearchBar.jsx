import React from 'react'
import {Search} from '@material-ui/icons'
import './styles.css'

const SearchBar = ({changeInput , value}) => {
  return (
    <div className='searchBar-wrap'>
      <Search className="searchBar-icon"/>
      <input type="text" placeholder='WoodLand Hills' value={value} onChange={changeInput}/>
    </div>
  )
}

export default SearchBar