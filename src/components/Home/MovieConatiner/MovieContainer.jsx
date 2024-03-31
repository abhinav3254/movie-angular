import React from 'react'
import './MovieContainer.scss'
import startSvg from '../../../images/star.svg'
import { Link, useNavigate } from 'react-router-dom';


function MovieContainer({ singleMovie }) {
    const navigate = useNavigate();


    const checkSize = (text) => {
        if (text.length > 10) {
            text = text.split(',');
            return text[0];
        }
    }

    const sizeReducer = (text) => {
        if (text.length > 15) return text.substring(0, 15) + '...';
        return text;
    }

    const movieDetails = (movie) => {
        console.log(`movie clicked :- ${movie.id}`);
        navigate(`/detail/${movie.id}`);
    }

    return (
        <div className='MovieContainer' onClick={() => movieDetails(singleMovie)}>
            <img className='MovieContainerPoster' src={singleMovie.poster} alt="" />
            <div className="MovieContainerBottom">
                <p className='MovieContainerName'>{sizeReducer(singleMovie.title)}</p>
                <div className='MovieContainerConatiner'>
                    <p className='MovieContainerConatinerYear'>{singleMovie.year}</p>
                    <p className='MovieContainerConatinerCategory'>{checkSize(singleMovie.genre)}</p>
                    <p className='MovieContainerConatinerRuntime'>{singleMovie.runtime}</p>
                </div>
                <div className='MovieContainerConatiner'>
                    <p className='MovieContainerConatinerBtn'>Get Ticket</p>
                    <div className="MovieContainerConatinerRating">
                        <img className='MovieContainerConatinerRatingImg' src={startSvg} alt="" />
                        <p className='MovieContainerConatinerRatingNumber'>{singleMovie.imdbRating}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieContainer