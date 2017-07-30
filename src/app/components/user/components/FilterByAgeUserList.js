import React from 'react';
import UserList from './UserList';
import './byAgeUserList.css';
import { observer } from 'mobx-react';

const FilterByAgeUserList = ({users, age}) => {
  return age <= -1
    ? FilterLessThan(users, (age * -1))
    : FilterMoreThan(users, (age));
}

const FilterLessThan = (users, age) => {
  return (
    <div className='filtered_list'>
      <UserList
        title={`Users Under ${age}`}
        users={users.filter(u => u.age().years <= age)}
      />
    </div>
  );
}

const FilterMoreThan = (users, age) => {
  let listTitle = age.value <= 0
    ? "All Users"
    : `Users Over ${age}`;
  return (
    <div className='filtered_list'>
      <UserList
        title={listTitle}
        users={users.filter(u => u.age().years >= age)}
      />
    </div>
  );
}

export default observer(FilterByAgeUserList);
