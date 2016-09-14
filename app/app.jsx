var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

// var objOne = {
// 	name: 'Jared',
// 	location: 'Philadelphia'	
// };

// var objTwo = {
// 	age: 25,
// 	...objOne
// };

// console.log(objTwo);

//calls all of the files here and renders to the html page
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>,
	document.getElementById('app')
);		