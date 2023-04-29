# Object-oriented Programming Challenge: SVG Logo Maker

<br>
This is an SVG Logo Maker created for the Monash module 10 challenge! 
<br>

<br>
This application does not launch in a browser and instead uses a console line interface via Node.js <br>
<br>
Dependencies required: <br>
<br>

[Node.js](https://www.nodejs.org/en) <br>
[Inquirer](https://www.npmjs.com/package/inquirer) <br>
<br>

We also used [Jest](https://www.npmjs.com/package/jest) for testing!<br>
<br>

Finally, because the main functionality of the project is using ES6 modules for imports and exports and jest is only compatible with common JS 
imports and exports, the project additionally uses [babel-jest](https://www.npmjs.com/package/babel-jest) to handle the import / export conversions. 
There are a couple of extra config files that have being created for use by babel-jest. These are, 'jest.config.cjs' and '.babelrc'.
<br>


<br>
<br>

## User Story
<code>
<br>
AS a freelance web developer <br>
<br>
I WANT to generate a simple logo for my projects<br>
<br>
SO THAT I don't have to pay a graphic designer<br>
<br>
</code>

## Acceptance Criteria
<br>
<code>
GIVEN a command-line application that accepts user input<br>
<br>
WHEN I am prompted for text <br>
<br>
THEN I can enter up to three characters<br>
<br>
WHEN I am prompted for the text color<br>
<br>
THEN I can enter a color keyword (OR a hexadecimal number)<br>
<br>
WHEN I am prompted for a shape<br>
<br>
THEN I am presented with a list of shapes to choose from: circle, triangle, and square<br>
<br>
WHEN I am prompted for the shape's color<br>
<br>
THEN I can enter a color keyword (OR a hexadecimal number)<br>
<br>
WHEN I have entered input for all the prompts<br>
<br>
THEN an SVG file is created named `logo.svg`<br>
<br>
AND the output text "Generated logo.svg" is printed in the command line<br>
<br>
WHEN I open the `logo.svg` file in a browser<br>
<br>
THEN I am shown a 300x200 pixel image that matches the criteria I entered<br>
</code>
<br>
<br>

## Instructional Video Link
<br>
<br>

[TBA](www.github.com/L10N37/)