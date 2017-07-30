import React from 'react';
import User from '../User';
import './userList.css';

const UserList = ({users, title}) => {
  return(
    <div className='user_list'>
      <h1>{title}</h1>
      {users.map((u, i) => {
        return <User user={u} key={i}/>
      })}
    </div>
  );
}

export default UserList;
