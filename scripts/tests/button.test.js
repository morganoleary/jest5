/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button"); // import the function from source file

beforeEach(() => {
    let fs = require("fs"); // Node fs allows us to open, read & write files

    let fileContents = fs.readFileSync("index.html", "utf-8"); // reads html file and stores it w/in 'fileContents' variable
    // utf-8 = unicode character encoding standard

    /** Attach this to the DOM = (recommended way) */
    document.open(); // open the file path
    document.write(fileContents); // write our file contents
    document.close(); // close it
});

describe("DOM tests", () => { // keep tests w/in a describe for hierarchy of tests
    test("expects p content to change", () => { // describe what test should check
        buttonClick(); // call the function to make button click automatically
        expect(document.getElementById('par').innerHTML).toEqual("You Clicked"); // get the element from the document & list what is expected from it
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1); // gets all h1 tags and stores them in a special array (if 1 exists, length of array is 1, etc)
    });
});