import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import './Home.scss'
import playSvg from '../../images/play.svg'
import tcktSvg from '../../images/ticket.svg'
import MovieContainer from './MovieConatiner/MovieContainer'
import { Paginator } from 'primereact/paginator';

import axios from "axios"
import { getAllMovies } from './MovieApi'

function Home() {
    const [movies, setMovies] = useState([]);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [totalRecords, setTotalRecords] = useState(0);

    const onPageChange = (event) => {
        setPage(event.page);
        setSize(event.rows);
        fetchData(event.page, event.rows);
    };


    useEffect(() => {
        fetchData(page, size);
    }, [page, size]);

    const fetchData = async (page, size) => {
        try {
            const data = await getAllMovies(page, size);
            setMovies(data.content);
            setTotalRecords(data.totalElements);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };


    return (
        <div className='Home'>
            {/* <Nav /> */}
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

            <div className="MoviesGrid">
                {
                    movies.map((movie, key) => (
                        <MovieContainer singleMovie={movie} key={key} />
                    ))
                }
            </div>

            <Paginator first={page} rows={size} totalRecords={totalRecords} rowsPerPageOptions={[5, 10]} onPageChange={onPageChange} className='HomePaginator' />

        </div>
    )
}

export default Home