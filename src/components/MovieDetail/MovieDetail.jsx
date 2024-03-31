import React from 'react'
import './MovieDetail.scss'
import ticketSvg from '../../images/ticket.svg'

function MovieDetail() {
    return (
        <div className='MovieDetail'>
            <div className="MovieDetailHeader">
                <img className='MoviePoster' src="https://c4.wallpaperflare.com/wallpaper/870/684/882/transformers-the-last-knight-optimus-prime-hd-wallpaper-preview.jpg" alt="" />
                <div className="HeaderLeft">
                    <p className='HeaderMovieTitle'>Transformers: Age of Extinction</p>
                    <p className='HeaderMovieLanguage'>English, Spanish</p>
                    <p className='HeaderMovieRated'>PG-13</p>
                    <p className='HeaderMovieGenre'>Action, Adventure, Fantasy</p>
                    <p className='HeaderDirector'>James Cameron</p>
                    <div className="HeaderBooking">
                        <img className='HeaderBookingImg' src={ticketSvg} alt="" />
                        <p className='HeaderBookTicketText'>Book Ticket</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail