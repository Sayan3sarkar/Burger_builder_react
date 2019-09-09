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
</ul>
<hr>


### Backend Usage

For this project, as of now, I am using [Google Firebase Console](https://firebase.google.com/?gclid=EAIaIQobChMIj9GWh4W85AIVSR0rCh16ygT4EAAYASAAEgJt2vD_BwE) as it provides a dummy backend with a dummy [NO-SQL](https://searchdatamanagement.techtarget.com/definition/NoSQL-Not-Only-SQL) databse to which I can store and retreive data to test the functionality of my application.
<hr>

### Higher order components(hoc)

For hoc's, we can use [React.Fragment](https://reactjs.org/docs/fragments.html) but for this project, I have created a custom hoc which can be found in the **hoc** folder. I have named it **Auxilliary.js** (can also be named **Aux.js** for but this will be applicable for Linux and MAC only, as windows does not allow to name a directory or file as Aux/aux) 