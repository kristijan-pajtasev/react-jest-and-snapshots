import React from 'react';
// import ReactDOM from 'react-dom';
import PeopleList from './PeopleList';
import TestRenderer from 'react-test-renderer';


const pplList = [
    {firstName: "John", lastName: "Doe"}
];

describe("People list with full renderer ", () => {

    it('renders without crashing', () => {

        const tree = TestRenderer
            .create(<PeopleList people={pplList}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
