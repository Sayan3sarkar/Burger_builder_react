# Burger_builder_react

A Burger Builder API created using [React JS](https://reactjs.org). Here user can add ingredients of choice to their burger and can view the burger creation. At the end of burger creation, users are provided with a **Checkout** option which displays price. 


### Prerequisites to run this app on a system

[Node JS](https://nodejs.org/en/) installed (Windows/Linux/MAC). [npx](https://www.npmjs.com/package/npx) and [npm](https://docs.npmjs.com/getting-started/) get installed alongside it.

### Optional

We use [create-react-app](https://github.com/facebook/create-react-app) to make a React App. Alternative is to clone this repo as it has all dependencies in it.


In this repo **create-react-app** script(folder directory) version **1.1.5** has been used, so as to enhance [CSS Modules](https://programmingwithmosh.com/react/css-modules-react/) usage in the application.
<hr>

## Enabling CSS Modules

If you install the latest directory structure for **create-react-app**, name all the CSS files as "[filename].module.css" instead of "[filename].css". Only then would you be able to use the module features of CSS

### Steps to enable css modules(for version 1.1.5)

<ul>
	<li>In terminal(MAC,Linux)(cmd for windows), run <b>npm run eject</b></li>
	<li>In <strong>config</strong> folder open up both <legend>webpack.config.dev.js</legend> and <legend>webpack.config.prod.js</legend></li>
	<li>
		In <b>webpack.config.dev.js</b> search for "test: /\.css$/" and go to "options" under it. You would have to add the following:
		<ul style="list-style-type:circle;">
			<li>modules: true</li>
			<li>localIdentName: '[name]__[local]__[hash:base64:5]'</li>
		</ul>
	</li>
	<li>For <b>webpack.config.prod.js</b> we search for "test: /\.css$/" and go to "use" under it and perform similar modifications as <b>webpack.config.dev.js</b></li>
</ul>


After this you can save a CSS file as "[filename].css" and it still would have the ability to use CSS modules.
<hr>


### Starting the project


I have used to [npm](https://docs.npmjs.com/getting-started/) to start this project by going into the **burger** folder via terminal and entering the command **npm start**


If you're using **yarn**, kindly go through it's [documentation](https://yarnpkg.com/lang/en/docs/) for more details on how to start a react app.
<hr>


### Packages installed

The following packages are installed with the command **npm install --save <package_name>**, as the project has dependencies on them.

<ul>
	<li><a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank">react-router-dom</a>. This also wraps the <b>react-router</b> package, so no need to separately install it. </li>
	<li><a href="https://github.com/axios/axios" target="_blank">axios</a></li>
	<li><a href="https://redux.js.org/">redux</a></li>
	<li><a href="https://react-redux.js.org/">react-redux</a></li>
	<li><a href="https://github.com/reduxjs/redux-thunk">redux-thunk</a></li>
</ul>

Packages required for testing in case anyone wants to implement it.
<ul>
	<li><a href="https://airbnb.io/enzyme/">enzyme</a></li></li>
	<li><a href="https://www.npmjs.com/package/react-test-renderer">react-test-renderer</a></li>
	<li><a href="https://www.npmjs.com/package/enzyme-adapter-react-16">enzyme-adapter-react-16</a>. Since, I'm using react version > 16</li>
</ul>
<hr>

### Extensions used

<ul>
	<li><a href="https://github.com/zalmoxisus/redux-devtools-extension">Redux Devtools Extension</a></li>
</ul>

### Backend Usage

For this project, as of now, I am using [Google Firebase Console](https://firebase.google.com/?gclid=EAIaIQobChMIj9GWh4W85AIVSR0rCh16ygT4EAAYASAAEgJt2vD_BwE) as it provides a dummy backend with a dummy [NO-SQL](https://searchdatamanagement.techtarget.com/definition/NoSQL-Not-Only-SQL) databse to which I can store and retreive data to test the functionality of my application.
<hr>

### Higher order components(hoc)

For hoc's, we can use [React.Fragment](https://reactjs.org/docs/fragments.html) but for this project, I have created a custom hoc which can be found in the **hoc** folder. I have named it **Auxilliary.js** (can also be named **Aux.js** for but this will be applicable for Linux and MAC only, as windows does not allow to name a directory or file as Aux/aux) 
<hr>

## Application Deployment

Find the complete app [here](https://burger-builder-react-c3110.firebaseapp.com/)

### Steps involved in deployment to Firebase

<ul>
	<li>Run <b>npm run build</b>. This creates an extra folder in our app named build with optimized code to run on production server</li>
	<li>Install <a href="https://github.com/firebase/firebase-tools">firebase-tools</a> with <b>npm install -g firebase-tools</b>. Use <b>sudo</b> before this command for Linux/MAC(not needed for windows)</li>
	<li>Sign in to Google through CLI with the command <b>firebase login</b></li>
	<li>Initialize the project with <b>firebase init</b></li>
	<ul>
		<li>Select <b>Hosting: Configure and Deploye Firebase Hosting sites</b> from the displayed options</li>
		<li>Select <b>use existing project</b> and then sleetc the project name you created for your app in firebase</li>
		<li>Type <b>build</b> when asked for <b>What do you want to use as your public directory?</b></li>
		<li>Press 'y' when asked <b>Configure as a single page app?</b> as all files will get redirected to <b>index.html</b> inside the build folder</li>
		<li>Press 'N' when asked <b>File build/index.html already exists. Overwrite?</b></li>
	</ul>
	<li>Deploy the app using <b>firebase deploy</b></li>
</ul>