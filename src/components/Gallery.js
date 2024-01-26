import react, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image'

function Gallery(props){
    // let moviesFormatted = props.data.map((movie)=>{
    //     <div>
    //         <h1>{movie.Title}</h1>
    //         <h2>{data.Year}</h2>
    //     </div>
    // })
    return(
        <>
            <div className='Gallery'>
                <div>
                    <Image src={props.data.Poster}/>
                </div>
                <div className='text'>
                    <h1>{props.data.Title}</h1> 
                    <p>{props.data.Year}, Directed by {props.data.Director}</p>
                    <p>{props.data.Plot}</p>
                    <p>{props.data.Awards}</p>
                </div>
            </div>
        </>
    )
}

export default Gallery