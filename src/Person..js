import React from 'react';

const Person = (props) => (
    <div onClick={props.handleClick}>
        <div>{props.firstName}</div>
        <div>{props.secondName}</div>
    </div>
);

export default Person;
