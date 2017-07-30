import React from 'react';
import User from '../User';
import './userList.scss';

import { observer } from 'mobx-react';
import { observable } from 'mobx';

let editModes = observable.map();
let toggleEditMode = (i) => {
  let newMode = !editModes.get(i)
  editModes.set(i, newMode);
  console.log(editModes.get(i));
}

const UserList = ({users, title}) => {
  return(
    <div className='user_list'>
      <h1>{title}</h1>
      {users.map((u, i) => {
        return (
          <User
            user={u}
            key={i}
            editMode={editModes.get(i)}
            toggleEditMode={toggleEditMode.bind(this, i)}
          />
        )
      })}
    </div>
  );
}

export default observer(UserList);
