import React from 'react';
import './user.scss';
import { observer } from 'mobx-react';

let handleOnChage = (user, e) => {
  user[e.target.id].update(user, e.target.value);
}

const User = ({user, editMode, toggleEditMode}) => {
  let activeEdit = (editMode === false || editMode === undefined);
  let editClass = activeEdit ? 'hidden' : '';
  let activeEditClass = activeEdit ? '' : 'active';

  return (
    <div className={activeEditClass + " user"}>
      <div className="row">
        <h3>Name: <span className="value">{user.name.value}</span></h3>
        <input className={editClass} id="name" placeholder="Name" value={user.name.value} onChange={handleOnChage.bind(this, user)}/>
      </div>
      <div className="row">
        <h3>Email: <span className="value">{user.email.value}</span></h3>
        <input className={editClass} id="email" placeholder="Email" value={user.email.value} onChange={handleOnChage.bind(this, user)}/>
      </div>
      <div className="row">
        <h3>Password: <span className="value">{user.password.value}</span></h3>
        <input className={editClass} id="password" placeholder="Password" value={user.password.value} onChange={handleOnChage.bind(this, user)}/>
      </div>
      <h3>DOB: <span className="value">{user.dob.toDateString()}</span></h3>
      <h3>Age: <span className="value">{user.age().years} years, {user.age().months} months</span></h3>
      <i className={activeEditClass + " fa fa-pencil-square-o"} onClick={toggleEditMode.bind(this)}/>
    </div>
  );
}

export default observer(User);
