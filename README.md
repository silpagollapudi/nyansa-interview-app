# Nyansa Interview Project

### Getting Started

To get you started you can simply clone the nyansa-interview-app repository. I decided to create this app using the ReactJS library.

#### Prerequisites

You need git to clone the nyansa-interview-app repository. You can get it from https://github.com/silpagollapudi/nyansa-interview-app.git.

`git clone https://github.com/silpagollapudi/nyansa-interview-app.git` <br>
`cd nyansa-interview-app`

#### Installing dependencies

`npm install`

node_modules - contains the npm packages for the tools we need

#### Run the Application

`npm start` <br>
Now browse to the app at http://localhost:3000.

#### Writeup

##### Tech Stack
The app was created using the ReactJS library.

##### Project Information
Initial Setup: I initially created the app using the `npx create-react-app` command which creates a basic project layout for a React App. I then added a new `components` folder in the `src` folder. In the `components` folder, there are two files: `DeviceManager.css` and `DeviceManager.js`

###### DeviceManager.Js
This file contains most of the source code. The data is loaded into the state along with the column names. I then used a react component- React Table which is a react component that allows users to create dynamic tables easily.

###### DeviceManager.css
This file contains styling.
