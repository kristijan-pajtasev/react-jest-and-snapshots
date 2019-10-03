import React from 'react';
import PeopleList from './PeopleList';
import {render} from 'react-dom'
import { act } from "react-dom/test-utils";

const pplList = [
    {id: 1, firstName: "John", lastName: "Doe"}
];

describe("People list ReactDOM ", () => {
    it('trigger click handler', () => {

        const clickHandler = jest.fn();

        const container = document.createElement("div")
        render(<PeopleList handleClick={clickHandler} people={pplList}/>, container);
        document.body.append(container);

        const button = document.querySelector("[data-testid=person-1]");
        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        expect(clickHandler).toHaveBeenCalled();
    });
});
