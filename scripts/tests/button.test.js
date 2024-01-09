/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button"); // import the function from source file

beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>"; // add part of the HTML being tested
});

describe("DOM tests", () => { // keep tests w/in a describe for hierarchy of tests
    test("expects p content to change", => { // describe what test should check
        buttonClick(); // call the function to make button click automatically
        expect(document.getElementById('par').innerHTML).toEqual("You Clicked"); // get the element from the document & list what is expected from it
    });
});