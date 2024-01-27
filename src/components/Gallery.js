import react, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image'

function Gallery(props){
    // let Ratings = props.data.Ratings.map((item, i)=>{
    //     const ratingObject =JSON.parse(item)
    //     return(
    //         <div key={i}>
    //             <p>Rating: {ratingObject.Rating}</p>
    //         </div>
    //     )
    // })
    return(
        <>
            <div className='Gallery'>
                <div>
                    <Image src={props.data.Poster} alt={props.data.Title}/>
                </div>
                <div className='text'>
                    <h1>{props.data.Title}</h1> 
                    <p>{props.data.Year}, Directed by {props.data.Director}</p>
                    <p>{props.data.Plot}</p>
                    <p>{props.data.Awards}</p>
                    {/* <p>{Ratings}</p> */}
                </div>
                <div className='watch'>
                    <a href={`https://www.amazon.com/s?k=${props.data.Title}`}>Watch on Amazon</a>
                    <a href={`https://en.wikipedia.org/wiki/${props.data.Title}_(${props.data.Year}_film)`}>Wikipedia</a>
                </div>
            </div>
            {/* <div>
                <p> not what you were searching for? try different spacing</p>
            </div> */}
        </>
    )
}

export default Gallery