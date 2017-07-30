import React from 'react';
import './user.css';
import { observer } from 'mobx-react';

let handleOnChage = (user, e) => {
  user[e.target.id].update(user, e.target.value);
}

const User = ({user}) => {
  return (
    <div className="user">
      <h3>Name: {user.name.value}</h3>
      <input id="name" placeholder="Name" value={user.name.value} onChange={handleOnChage.bind(this, user)}/>
      <h3>Email: {user.email.value}</h3>
      <input id="email" placeholder="Email" value={user.email.value} onChange={handleOnChage.bind(this, user)}/>
      <h3>Password: {user.password.value}</h3>
      <input id="password" placeholder="Password" value={user.password.value} onChange={handleOnChage.bind(this, user)}/>
      <h3>DOB: {user.dob.toDateString()}</h3>
      <h3>Age: {user.age().years} years, {user.age().months} months</h3>
    </div>
  );
}

export default observer(User);
