import react, { useEffect, useState } from 'react';


function Gallery(props){
    const ratings = props.data.Ratings.map((review)=>{
        return(
            <li key={review.Source}>
                <li><a href ={review.Source === 'Internet Movie Database'? `https://www.imdb.com/title/${props.data.imdbID}` : review.Source === 'Metacritic' ? `https://www.metacritic.com/` : review.Source === 'Rotten Tomatoes' ? `https://www.rottentomatoes.com/` : '#'} target="_blank">{review.Source}</a>: {review.Value}</li>
            </li>
        )
    })
    return(
        <>
            <div className='Gallery'>
                <div>
                    <img src={props.data.Poster} alt={props.data.Title}/>
                </div>
                <div className='text'>
                    <h1>{props.data.Title}</h1> 
                    <h2>{props.data.Year}, Directed by {props.data.Director}</h2>
                    <p>{props.data.Plot}</p>
                    <p>{props.data.Awards}</p>
                    {/* <p>{Ratings}</p> */}
                </div>
                <div className='watch'>
                    <ul>
                        <li><a href={`https://www.amazon.com/s?k=${props.data.Title}`} target="_blank">Buy on Amazon</a></li>
                        <li><a href={`https://en.wikipedia.org/wiki/${props.data.Title}_(${props.data.Year}_film)` } target="_blank">Wikipedia</a></li>
                        {ratings}
                    </ul>
                </div>
            </div>
            {/* <div>
                <p> not what you were searching for? try different spacing</p>
            </div> */}
        </>
    )
}

export default Gallery