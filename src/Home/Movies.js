import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Context/Context';
import Searchbar from './Searchbar';

const Movies = () => {
  const { data, query, isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <div>
        <div className='loading'>Loading...</div>
      </div>
    )
  }
  return (
    <>
      {/* searchBar  */}
      <section className='search-section'>
        <Searchbar/>
      </section>

      {/* Movies */}
      <section className='movie-page'>
        <div className='container grid grid-4-col'>
          {
            data.filter((ele) => {
              if (ele.title === "") {
                return ele;
              } else if (ele.title.toLowerCase().includes(query.toLowerCase())) {
                return ele;
              }
            }).map((currEle, index) => {
              const { posterurl, imdbRating, title } = currEle;
              const titleName = title.substring(0, 15);
              return <NavLink to={`movie/${title}`} key={index}>
                <div className='card'>
                  <div className='card-info'>
                    <img src={posterurl} alt="url is not valid" />
                    <h4>{titleName.length >= 15 ? `${titleName}...` : titleName}</h4>
                    <p>{imdbRating}</p>
                  </div>
                </div>
              </NavLink>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Movies;