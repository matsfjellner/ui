# UI Test
###### UI Test made as a work sample according to specification.
*Layout branch also according to specification, but actually the same as master (explanation below)*
The technologies used are ReactJS augmented by SCSS, my first "real" project with React - the JS library I would use comfortably for something like this is BackboneJS, but as it has JQuery as a hard dependency I had to go a different route.

The application initially populates the past people data from a JSON file, and then persists the initial data along with new votes in the browser's localstorage.

The main problem I ran into was due to working with GIMP for interpreting the layout, which I produced as a static HTML5/CSS3 page using my usual GulpJS workflow. Well, I should have known better than to trust GIMP to be fully compatible with PSD files, and I was almost done programming the interactions part in React before I got to see the real intended design in Photoshop (mainly because I had trouble interpreting some hover states in GIMP)! This led to a lot of restructuring, and for this reason the final layout was produced in the React environment.

The app was deployed publically at https://matsfjellner.github.io/ui/ using gh-pages (https://www.npmjs.com/package/gh-pages).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


