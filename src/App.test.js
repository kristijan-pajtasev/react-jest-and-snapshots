import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
it('renders without crashing', () => {

    const renderer = new ShallowRenderer();
    renderer.render(<App/>);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
// expect(result.props.children).toEqual([
//   <span className="heading">Title</span>,
//   <Subcomponent foo="bar" />
// ]);
});
