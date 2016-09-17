var React = require('react');
var Search = require('Search');
var Results = require('Results');
var Saved = require('Saved');

var MainPage = React.createClass({
	// getInitialState: function () {
	// 	return {
	// 		showCompleted: false,
	// 		searchText: '',
	// 		todos: TodoApi.getTodos()
	// 	}
	// },
	// componentDidUpdate: function () {
	// 	TodoApi.setTodos(this.state.todos)
	// },
	// handleAddTodo: function(text){
	// 	this.setState({
	// 		todos: [
	// 			...this.state.todos,
	// 			{
	// 				id: uuid(),
	// 				text: text,
	// 				completed: false
	// 			}
	// 		]
	// 	})
	// },
	// handleToggle: function(id){
	// 	var updatedTodos = this.state.todos.map(function(todo){
	// 		if(todo.id === id){
	// 			todo.completed = !todo.completed;
	// 		}
	// 		return todo;
	// 	})

	// 	this.setState({
	// 		todos: updatedTodos
	// 	})
	// },
	// handleSearch: function(showCompleted, searchText){
	// 	this.setState({
	// 		showCompleted: showCompleted,
	// 		searchText: searchText.toLowerCase()
	// 	});
	// },
	render: function () {
		// var {todos} = this.state;

		return (
			<div>
				<Search/>
				<Results/>
				<Saved/>
			</div>
		)
	}
});

module.exports = MainPage;