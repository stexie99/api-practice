import react, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';


function Gallery(props){
    const ratings = props.data.Ratings.map((review)=>{
        return(
            <div key={review.Source}>
                <p><a href ={review.Source === 'Internet Movie Database'? `https://www.imdb.com/title/${props.data.imdbID}` : review.Source === 'Metacritic' ? `https://www.metacritic.com/` : review.Source === 'Rotten Tomatoes' ? `https://www.rottentomatoes.com/` : '#'} target="_blank">{review.Source}</a>: {review.Value}</p>
            </div>
        )
    })
    return(
        <>
            <div className='Gallery'>
                <div>
                    <Image src={props.data.Poster} alt={props.data.Title}/>
                </div>
                <div className='text'>
                    <h1>{props.data.Title}</h1> 
                    <h2>{props.data.Year}, Directed by {props.data.Director}</h2>
                    <p>{props.data.Plot}</p>
                    <p>{props.data.Awards}</p>
                    {/* <p>{Ratings}</p> */}
                </div>
                <div className='watch'>
                    {ratings}
                    <img src='/images/amazon.png' height='24' width= '24px' alt='amazon logo'></img><a href={`https://www.amazon.com/s?k=${props.data.Title}`} target="_blank">Buy on Amazon</a><br/>
                    <a href={`https://en.wikipedia.org/wiki/${props.data.Title}_(${props.data.Year}_film)` } target="_blank">Wikipedia</a>
                </div>
            </div>
            {/* <div>
                <p> not what you were searching for? try different spacing</p>
            </div> */}
        </>
    )
}

export default Gallery