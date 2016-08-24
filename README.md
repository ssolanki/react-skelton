# React app skelton.

## Setup:-
  You can run `npm install` to install dependencies. which will install all dependencies mentioned below.
  1. Initialize npm: creates package.json and npm config
    - `npm init`
  2. Browserify: allow browser to use npm modules
    - `npm install -g browserify`   // globally installs browserify
  3. Babel: compile ES6/JSX into browser readable javascript.  
    - `npm install --save babel-cli`
  4. Babelify: allow Babel to use Babel with Browserify
    - `npm install --save babelify`
  5. Babel-preset-react: Tell babel how to compile JSX
    - `npm install --save babel-preset-react`
  6. Watchify: look for changes, works with browserify
    - `npm install --save watchify`
  7. React: react facebook library
    - `npm install --save react`
  8. React-Dom: react dom manupulation library
    - `npm install --save react-dom`

## Build:
  To build and watch changes run this command:
  - `npm start`
