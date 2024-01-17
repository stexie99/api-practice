import react, { useEffect, useState } from 'react'
function Gallery(props){
    // let moviesFormatted = props.data.map((movie)=>{
    //     <div>
    //         <h1>{movie.Title}</h1>
    //         <h2>{data.Year}</h2>
    //     </div>
    // })
    return(
        <div style={{ backgroundImage: `url(${props.data.Poster})`, borderStyle: 'solid' }}>
            <h1>{props.data.Title}</h1>
            <h2>{props.data.Year}</h2>
        </div>
    )
}

export default Gallery