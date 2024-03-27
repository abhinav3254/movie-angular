import React from 'react'
import './MovieContainer.scss'
import startSvg from '../../../images/star.svg'

function MovieContainer({ singleMovie }) {

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

    return (
        <div className='MovieContainer'>
            <img className='MovieContainerPoster' src={singleMovie.Images[0]} alt="" />
            <div className="MovieContainerBottom">
                <p className='MovieContainerName'>{sizeReducer(singleMovie.Title)}</p>
                <div className='MovieContainerConatiner'>
                    <p className='MovieContainerConatinerYear'>{singleMovie.Year}</p>
                    <p className='MovieContainerConatinerCategory'>{checkSize(singleMovie.Genre)}</p>
                    <p className='MovieContainerConatinerRuntime'>{singleMovie.Runtime}</p>
                </div>
                <div className='MovieContainerConatiner'>
                    <p className='MovieContainerConatinerBtn'>Get Ticket</p>
                    <div className="MovieContainerConatinerRating">
                        <img className='MovieContainerConatinerRatingImg' src={startSvg} alt="" />
                        <p className='MovieContainerConatinerRatingNumber'>4.98</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieContainer