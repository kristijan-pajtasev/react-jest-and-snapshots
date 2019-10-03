import React from 'react';
import Counter from './Counter';
import ShallowRenderer from 'react-test-renderer/shallow';

describe("Counter stateless component ", () => {

    it('renders without crashing', () => {

        const renderer = new ShallowRenderer();
        const tree = renderer
            .render(<Counter/>);
        expect(tree).toMatchSnapshot();
    });
});
