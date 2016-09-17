var React = require('react');

var Search = React.createClass({
	// onFormSubmit: function(e){
	// 	e.preventDefault();

	// 	var todo = this.refs.todo.value;

	// 	if (todo.length > 0){
	// 		this.refs.todo.value = '';
	// 		//onSearch is created here
	// 		this.props.onAdd(todo);
	// 	} else {
	// 		//focus puts the cursor back to the input field if invalid
	// 		this.refs.todo.focus();
	// 	}
	// },
	render: function () {
		return (
			<div className="container">
			 	<div className="row">
			 		<div className="col-md-4 col-md-offset-4 well">
						<h1 className="text-center" id="resultsTitle">Search NY Times Articles</h1>
						<form id="searchForm">
							<div className="form-group text-center">
								<label>Article Keywords</label>
								<div className="input-group center-block">
									<input type="text" name="title" className="form-control" id="titleInput"/>
								</div>
							</div>
							<div className="form-group text-center">
								<label>Start Date</label>
								<div className="input-group center-block">
									<input type="text" name="startDate" className="form-control" id="startDateInput"/>
								</div>
							</div>
							<div className="form-group text-center">
								<label>End Date</label>
								<div className="input-group center-block">
									<input type="text" name="endDate" className="form-control" id="endDateInput"/>
								</div>
							</div>
							<div className = "form-group">
								<input id="submitButton" type="submit" className="btn btn-default btn-block"/>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Search;