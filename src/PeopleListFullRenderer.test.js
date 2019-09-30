import React from 'react';
// import ReactDOM from 'react-dom';
import PeopleList from './PeopleList';
import TestRenderer from 'react-test-renderer';
import {render, fireEvent, waitForElement} from '@testing-library/react'

const pplList = [
    {id: 1, firstName: "John", lastName: "Doe"}
];

describe("People list with full renderer ", () => {

    it('renders without crashing', () => {

        const tree = TestRenderer
            .create(<PeopleList people={pplList}/>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('trigger click handler', () => {

        const clickHandler = jest.fn();

        const {getByTestId} = render(<PeopleList handleClick={clickHandler} people={pplList}/>);

        fireEvent.click(getByTestId('person-1'));

        expect(clickHandler).toHaveBeenCalled();
    });
});
