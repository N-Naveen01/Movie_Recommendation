import React, { useEffect, useState } from 'react'

export const useFetch = (apiPath , queryTerm = "" ) => {
    const [data,setdata] = useState([])
    const key = import.meta.env.VITE_API_KEY

    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`

  useEffect( () =>{

    async function fetchMovies() {
        fetch(url)
        .then(res => res.json())
        .then(data => setdata(data.results))
    }

    fetchMovies()

  } , [url])

  return {data};
}



