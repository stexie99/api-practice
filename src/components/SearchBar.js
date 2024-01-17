import React, { useState, useEffect } from 'react'

function SearchBar(props){
    let [searchTerm, setSearchTerm] = useState('')
    
    return(
        <form onSubmit={(e)=> props.handleSearch(e, searchTerm)}>
            <input type='text' onChange={(e)=> setSearchTerm(e.target.value)}/>
            <input type ='submit'/>
        </form>
    )
}

export default SearchBar