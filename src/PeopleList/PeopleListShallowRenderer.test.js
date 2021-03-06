import React from 'react';
import PeopleList from './PeopleList';
import ShallowRenderer from 'react-test-renderer/shallow';


const pplList = [
    {firstName: "John", lastName: "Doe"}
];

describe("People list with shallow renderer ", () => {

    it('renders without crashing', () => {

        const renderer = new ShallowRenderer();
        const tree = renderer
            .render(<PeopleList people={pplList}/>);
        expect(tree).toMatchSnapshot();
    });
});
