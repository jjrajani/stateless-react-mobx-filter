import React from 'react';
import './App.css';

import USERS from './user/utils/users';
import Filter from './filter/filter';
import FilterByAgeUserList from './user/components/FilterByAgeUserList';

import { observer } from 'mobx-react';
import { observable } from 'mobx';

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
