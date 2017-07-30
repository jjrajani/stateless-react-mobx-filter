import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import './App.css';

import USERS from './components/user/utils/users';
import Filter from './components/filter/filter';
import FilterByAgeUserList from './components/user/components/FilterByAgeUserList';

let age = observable(0);
let changeAge = (filter) => {
  age.set(filter.value)
}

const App = () => {
  return (
    <div className="App">
      <Filter value={age} update={changeAge}/>
      <FilterByAgeUserList users={USERS} age={age}/>
    </div>
  );
}

export default observer(App);
