import React from 'react'
import './MovieContainer.scss'
import startSvg from '../../../images/star.svg'

function MovieContainer() {
    return (
        <div className='MovieContainer'>
            <img className='MovieContainerPoster' src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" alt="" />
            <div className="MovieContainerBottom">
                <p className='MovieContainerName'>Avatar</p>
                <div className='MovieContainerConatiner'>
                    <p className='MovieContainerConatinerYear'>Year</p>
                    <p className='MovieContainerConatinerCategory'>Action</p>
                    <p className='MovieContainerConatinerRuntime'>1hr 36 min</p>
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