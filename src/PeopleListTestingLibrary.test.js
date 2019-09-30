import React from 'react';
import PeopleList from './PeopleList';
import {render, fireEvent} from '@testing-library/react'

const pplList = [
    {id: 1, firstName: "John", lastName: "Doe"}
];

describe("People list with @testing/library ", () => {
    it('trigger click handler', () => {

        const clickHandler = jest.fn();

        const {getByTestId} = render(<PeopleList handleClick={clickHandler} people={pplList}/>);

        fireEvent.click(getByTestId('person-1'));

        expect(clickHandler).toHaveBeenCalled();
    });
});
