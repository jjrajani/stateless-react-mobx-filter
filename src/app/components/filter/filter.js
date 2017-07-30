import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import "./filter.scss";

let filter = observable(0);
let changeFilter = (e) => {
  filter.set(e.target.value)
}

let update;
let handleKeyPress = (filter, e) => {
  if (e.key === 'Enter') update(filter);
}

const Filter = ({...props}) => {
  update = props.update;
  return (
    <div className="filter">
      <label>
        <h1>Filter By Age</h1>
        <p><span className="over">Positive</span> numbers to filter <span className="over">over</span> age. <span className="under">Negative</span> numbers to filter <span className="under">under</span> age</p>
      </label>
      <div className="form">
        <input onKeyPress={handleKeyPress.bind(this, filter)} type="number" value={filter} onChange={changeFilter.bind(this)}/>
        <button type="submit" onClick={props.update.bind(this, filter)}>Apply Age Filter</button>
      </div>
    </div>
  );
}

export default observer(Filter);
