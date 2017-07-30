import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

let filter = observable(0);
let changeFilter = (e) => {
  filter.set(e.target.value)
}

const Filter = ({...props}) => {
  return (
    <div>
      <label>Filter By Age</label>
      <input type="number" value={filter} onChange={changeFilter.bind(this)}/>
      <button type="submit" onClick={props.update.bind(this, filter)}>Apply Age Filter</button>
    </div>
  );
}

export default observer(Filter);
