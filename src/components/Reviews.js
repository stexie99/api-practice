import React from 'react'

function Reviews(props){
    const ratings = props.data.Ratings.map((review)=>{
        return(
            <div key={review.Source}>
                <p><a href ={review.Source === 'Internet Movie Database'? `https://www.imdb.com/title/${props.data.imdbID}` : review.Source === 'Metacritic' ? `https://www.metacritic.com/` : review.Source === 'Rotten Tomatoes' ? `https://www.rottentomatoes.com/` : '#'} target="_blank">{review.Source}</a>: {review.Value}</p>
            </div>
        )
    })
    return(
        <>
        {ratings}
        </>
    )
}

export default Reviews