import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeList extends Component {
	renderList() {
		return this.props.recipes.map((recipe) => {
			return (
				<li key={recipe.title} className="list-group-item">{recipe.title}</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	// Whatever is returned will show up as props inside RecipeList
	return {
		recipes: state.recipes
	};
}

export default connect(mapStateToProps)(RecipeList);