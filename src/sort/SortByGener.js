import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import jsonData from '../data/data.json'

const SortByGener = () => {
    const { setData} = useContext(AppContext);

    const sortByGener = (e, action) => {
      e.preventDefault();
        const updatedMovies = jsonData.filter((ele) => {
            return ele.genres.find((ele) => ele === action)
        })
        console.log("Hello Action", updatedMovies)

        setData(updatedMovies);
    }

    const sortByYear = (e) => {
      e.preventDefault();

      const sortedArr = jsonData.sort((a,b) => {
        return b.year.localeCompare(a.year);
      })

      setData(sortedArr);
    }

    const sortByRating = (e) => {
      e.preventDefault();

      const ratedArr = jsonData.sort((a,b) => {
        return b.imdbRating-(a.imdbRating);
      })

      setData(ratedArr);
    }

  return (
    <>
        <button onClick={(e) => sortByGener(e, "Action")}>Action</button>
        <button onClick={(e) => sortByGener(e, "Drama")}>Drama</button>
        <button onClick={(e) => sortByGener(e, "Crime")}>Crime</button>
        <button onClick={(e) => sortByGener(e, "Biography")}>Biography</button>
        <button onClick={(e) => sortByGener(e, "History")}>History</button>
        <button onClick={(e) => sortByYear(e)}>Year</button>
        <button onClick={(e) => sortByRating(e)}>Rating</button>
    </>
  )
}

export default SortByGener;