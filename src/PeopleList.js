import React from 'react';
import './PeopleList.css';
import Person from "./Person.";

const PeopleList = (props) => {
  return (
      <div>
        <div>People:</div>
        <ul>
          { (props.people || []).map((person, index) => <Person key={`person-${index}`} handleClick={props.handleClick} {...person} />) }
        </ul>
      </div>
  );
};

export default PeopleList;
