import React, { useState } from 'react';
import useFetch from '../components/useFetch'
import NavLinks from '../components/NavLinks'
import { Link } from 'react-router-dom'


function Users() {
  const [page, setPage] = useState(1);

  const {data, loading, error} = useFetch(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
  if(loading) return <h1>LOADING...</h1>
  if(error) return <h1> {error} </h1>

  const handlePageClick = (pageNumber) => (
    setPage(pageNumber)
  )
  const handleClickNext = (event) => {
    event.preventDefault()
    setPage((prev) => prev + 1);
  };

  const handleClickPrev = (event) => {
    event.preventDefault()
    setPage((prev) => prev - 1);
  };


  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
    <div>
      <NavLinks />
      <h2>Users</h2>
      
      <Link  to="user/:userId" className="links">
        {data?.results?.map((user, index) => (
          <div key={index.toString()} className="card">
            <div className="user">
              <div className="avatar">
                <img src={user.picture.large} alt="user-avatar" />
              </div>
              <div className="name">
                <h3 >
                {user.name.title} {user.name.first} {user.name.last}
                </h3>
              </div>
            </div>
          </div>

        ))}
      </Link>
      
      <div className="btn">
        <button className="prev" onClick={handleClickPrev}>Prev</button>
          {pageNumbers.map(pageNumber => (
            <button className="pages" key={pageNumber.toString()} onClick={() => handlePageClick(pageNumber)}> {pageNumber} </button>
          ))}
          
          <button className="next" onClick={handleClickNext} 
          disabled={page === pageNumbers[pageNumbers.length -1]}>Next</button>
        </div>
      </div>
    );
  }


export default Users;