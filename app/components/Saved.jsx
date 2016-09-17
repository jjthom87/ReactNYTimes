var React = require('react');
// var Todo = require('Todo');

var Saved = React.createClass({
	render: function () {
		// var {todos} = this.props;
		// //or this.props.todos
		// var renderTodos = () => {
		// 	return todos.map((todo) => {
		// 		return (
		// 			//key keeps track of your items
		// 			//...todo is a spread operator that passes it down as a prop
		// 			<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
		// 		);
		// 	});
		// };

		return(
			<div className="container">
			 	<div className="row">
			 		<div className="col-md-4 col-md-offset-4 well">
			 			<h1 className="text-center">Saved Items</h1>
						<ul className="saved list-group"></ul>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Saved;