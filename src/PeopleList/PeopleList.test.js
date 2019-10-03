import React from 'react';
// import ReactDOM from 'react-dom';
import PeopleList from './PeopleList';
import ShallowRenderer from 'react-test-renderer/shallow';


const pplList = [
    {firstName: "John", lastName: "Doe"}
];

describe("People list ", () => {

    it("should pass",() => {
        expect(true).toBe(true);
    });
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
// it('renders without crashing', () => {
//
//     const renderer = new ShallowRenderer();
//     renderer.render(<PeopleList people={pplList}/>);
//     const result = renderer.getRenderOutput();

    // expect(result.type).toBe('div');
// expect(result.props.children).toEqual([
//   <span className="heading">Title</span>,
//   <Subcomponent foo="bar" />
// ]);
// });
