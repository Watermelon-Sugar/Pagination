import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import NavLinks from '../components/NavLinks';
import useFetch from '../components/useFetch'


function User() {
  const { userId } = useParams();
  const {data, loading, error} = useFetch(`https://randomuser.me/api/?${userId}=name,location,email,picture`);

  if (!loading && error) {
    return <h1>Error : Something went wrong!</h1>;
  }

  return (
    <div className="user_main">
      <div>
        <NavLinks />
        <h2>User</h2>
        
        {data?.results?.map((user) => (
          <div key={user} className="card">
            <div className="user">
              <div className="avatar">
                <img src={user.picture.large} alt="user-avatar" />
              </div>
              <div className="name">
                <h3> {user.name.title} {user.name.first} {user.name.last}</h3>
              </div>
              <div className="location">
                <h5>{user.location.city}, { user.location.country } </h5>
              </div>
              <div className="email">
              <h5>{user.email}</h5>
              </div>
              </div>
          </div>
        ))}
        <Outlet />
      </div>
    </div>
  );
}

export default User;