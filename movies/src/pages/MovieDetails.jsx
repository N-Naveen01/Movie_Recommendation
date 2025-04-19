import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import bac from "../assets/s.jpg"
import { convertMinutes } from '../utils/utils'

export const MovieDetails = () => {

  const params = useParams()
  const key = import.meta.env.VITE_API_KEY
  const [movie,setmovie] = useState([])

  const url=`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : bac ;

  useEffect( () =>{

    async function fetchMovies() {
        fetch(url)
        .then(res => res.json())
        .then(data => {setmovie(data) ; console.log(data) })
    }

    fetchMovies()

  },[])

  useEffect( () =>{
    document.title = `${movie.title}`
  })


  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-8">
          <h3 className="text-primary">{movie.title}</h3>
          <p className="mt-3">{movie.overview}</p>

          {movie.genres ? (
            <p className="d-flex gap-3">
              {movie.genres.map( (genre) => (
              <span key={genre.id} className="badge bg-danger">{genre.name}</span>
              ))}
            </p>
          ) : "" }

          <p className="mt-2">
            <i className="bi bi-star-fill text-warning"></i> {movie.vote_average} |
            <i className="bi bi-people-fill text-success"></i> {movie.vote_count} reviews
          </p>

          <table className="table table-bordered w-60 mt-2">
            <tbody>
              <tr>
                <th>Runtime</th>
                <td>{convertMinutes(movie.runtime)}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>{movie.budget}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>{movie.revenue}</td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>
              
            </tbody>
          </table>

          <a href={`https:/www.imdb.com/title/${movie.imdb_id}/`} className="btn btn-primary" target='_blank'>View in IMDB</a>

        </div>
      </div>
    </main>
  )
}

