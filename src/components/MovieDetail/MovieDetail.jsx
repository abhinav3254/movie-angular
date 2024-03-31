import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import './MovieDetail.scss'
import ticketSvg from '../../images/ticket.svg'
import moviesJson from '../../json/movies.json'
import awardSvg from '../../images/award.svg'
import thumbsUpSvg from '../../images/thumbsup.svg'
import starSvg from '../../images/star.svg'


function MovieDetail() {
    const { id } = useParams();

    // loading movie from the JSON file
    const movie = moviesJson.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className='MovieDetail'>
            <div className="MovieDetailHeader">
                <img className='MoviePoster' src={movie.poster} alt="" />
                <div className="HeaderLeft">
                    <p className='HeaderMovieTitle'>{movie.title}</p>
                    <p className='HeaderMovieLanguage'>{movie.language}</p>
                    <p className='HeaderMovieRated'>{movie.rated}</p>
                    <p className='HeaderMovieGenre'>{movie.genre}</p>
                    <p className='HeaderDirector'>{movie.director}</p>
                    <div className="HeaderBooking">
                        <img className='HeaderBookingImg' src={ticketSvg} alt="" />
                        <p className='HeaderBookTicketText'>Book Ticket</p>
                    </div>
                </div>
            </div>

            <div className="OtherDetails">
                <p className='OtherDetailsPlot'>
                    {movie.plot}
                </p>
                <p>casts</p>
                <p>{movie.actors}</p>
                <div className="AwardSection">
                    <img className='AwardSectionLogo' src={awardSvg} alt="" />
                    <p className='AwardSectionAwards'>{movie.awards}</p>
                </div>

                <div className="AwardSectionRow">
                    <div className="AwardSection">
                        <img className='AwardSectionLogo' src={thumbsUpSvg} alt="" />
                        <p className='AwardSectionAwards'>{movie.imdbVotes}</p>
                    </div>

                    <div className="AwardSection">
                        <img className='AwardSectionLogo' src={thumbsUpSvg} alt="" />
                        <p className='AwardSectionAwards'>{movie.metascore}</p>
                    </div>
                    <div className="AwardSection">
                        <img className='AwardSectionLogo' src={starSvg} alt="" />
                        <p className='AwardSectionAwards'>{movie.imdbRating}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieDetail