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
                <div>
                    <h1>{props.data.Title}</h1>
                    <h2>{props.data.Year}</h2>
                    <p>{props.data.Plot}</p>
                </div>
            </div>
        </>
    )
}

export default Gallery