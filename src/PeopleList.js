import React from 'react';
import logo from './logo.svg';
import './PeopleList.css';
import Person from "./Person.";

const PeopleList = (props) => {
  return (
      <div>
        <div>People:</div>
        <ul>
          { (props.people || []).map(person => <Person handleClick={props.handleClick} {...person} />) }
        </ul>
      </div>
  );
}

export default PeopleList;
