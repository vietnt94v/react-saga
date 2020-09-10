import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

import Spinner from 'react-bootstrap/Spinner';

function UsersContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <>
      {userData.loading ? (
        <Spinner animation="grow" />
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <>
          <h2>User list</h2>
          <ul>
            {userData &&
              userData.users &&
              userData.users.map((user, index) => (
                <li key={index}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
