import React from 'react'
import Nav from '../Nav/Nav'
import './Home.scss'
import playSvg from '../../images/play.svg'
import tcktSvg from '../../images/ticket.svg'
import MovieContainer from './MovieConatiner/MovieContainer'

function Home() {
    return (
        <div className='Home'>
            <Nav />
            <div className="homeImage">
                <div className="homeImageinfo">
                    <p className='homeImageinfo-1'>Exclusive Show(Experience in 3D)</p>
                    <p className='homeImageinfo-heading'>The Amazing Spider-Man</p>
                    <p className='homeImageinfo-desc'>Peter Parker, an outcast high school student, gets bitten by a radioactive spider and attains superpowers. While unraveling his parents' disappearance, he must fight against the Lizard.</p>
                    <div className="homeImageinfo-details">
                        <p className='homeImageinfo-details-time'>3h 12mins</p>
                        <div className="homeImageinfo-border"></div>
                        <p className='homeImageinfo-details-age'>PG-13</p>
                        <div className="homeImageinfo-border"></div>
                        <p className='homeImageinfo-details-year'>2022</p>
                    </div>
                    <div className="homeImageinfo-book-tickets">
                        <div className="homeImageinfo-book-tickets-row">
                            <img className='homeImageinfo-book-tickets-row-playSvg' src={tcktSvg} alt="" />
                            <p className='homeImageinfo-book-tickets-row-playText'>Get Ticket</p>
                        </div>
                        <div className="homeImageinfo-book-tickets-row">
                            <img className='homeImageinfo-book-tickets-row-playSvg' src={playSvg} alt="" />
                            <p className='homeImageinfo-book-tickets-row-playText'>Watch Trailer</p>
                        </div>
                    </div>
                </div>
            </div>

            <MovieContainer />
        </div>
    )
}

export default Home