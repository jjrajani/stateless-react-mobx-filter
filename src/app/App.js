import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import './App.scss';

import SERVER from '../server/server';

import Header from './components/header/header';
import Filter from './components/filter/filter';
import FilterByAgeUserList from './components/user/components/FilterByAgeUserList';
import Footer from './components/footer/footer';

let users = SERVER.getUsers();

let age = observable(0);
let changeAge = (filter) => {
  age.set(filter.value)
}

const App = () => {
  return (
    <div className="app">
      <Header />
      <Filter value={age} update={changeAge}/>
      <FilterByAgeUserList users={users} age={age}/>
      <Footer />
    </div>
  );
}

export default observer(App);
