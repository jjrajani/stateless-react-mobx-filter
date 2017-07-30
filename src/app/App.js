import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import './App.scss';

import SERVER from '../server/server';

// import USERS from '../server/users';
import Filter from './components/filter/filter';
import FilterByAgeUserList from './components/user/components/FilterByAgeUserList';

let users = observable([]);
let getUsers = function() {
  setTimeout(() => {
    SERVER.getUsers().forEach(u => {
      users.push(u);
    })
  }, 300);
}

let age = observable(0);
let changeAge = (filter) => {
  age.set(filter.value)
}

const App = () => {
  getUsers();
  return (
    <div className="app">
      <Filter value={age} update={changeAge}/>
      <FilterByAgeUserList users={users} age={age}/>
    </div>
  );
}

export default observer(App);
