Forked from https://github.com/AngularClass/NG6-starter

HOW TO SETUP
- Make sure you have Node, npm and gulp installed globally
- Make sure homebrew is installed globally
- Run `brew install libpng`
- In the project folder root run `npm install`
- In the project folder root run `npm run serve` to load the local server and watch for changes. Your command line should tell you the Local url to go to (usually http://localhost:3000)
- In the project folder root run `npm run build` to compile the code into the /dist folder

HOW TO USE
- Fonts are in client/assets/fonts
- Images are in client/assets/img
- CSS is in client/assets/scss
- SCSS files are imported into client/app/app.scss
- JSON data is in client/app/data/data.js

TEMPLATES
- Template logic is in client/app/components/*
- Each template has its own HTML file and JS
- Home page logic is in /client/app/components/home
- Second tier pages (e.g. Golden rules) is in /client/app/components/secondTier
- Third tier pages (e.g. Drive safely) is in /client/app/components/thirdTier
