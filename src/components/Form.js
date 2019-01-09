import React, {Component} from 'react'
import _ from 'lodash';

class Form extends Component{
	constructor(){
		super();
		this.state={
			error:null
		}
	}


	render(){
		return(
			<form onSubmit={this.handleCreate.bind(this)}>
				<input
					ref={(input) => this.InputText=input}
					type='text'
					placeholder='Agrega una tarea'
				/>
			<button>Create</button>
			{this.renderError()}
			</form>		
		)
	}

	handleCreate(e){
		e.preventDefault();
		

		let task= this.InputText.value
		let validateInput= this.validateInput(task)
		console.log(validateInput)
		if (validateInput) {
			this.setState({error:validateInput})
			return
		}
		this.props.createTask(task)
		this.setState({error:null})
		this.InputText.value=''
	}

	renderError(){
		if (!this.state.error) {return null;}
		return (
			<div style={{color:'red'}}>
				{this.state.error}
			</div>
		)
	}

	validateInput(task){
	    if (!task) {
	      return 'Please enter a Task';
	      console.log(_.find(this.props.todos, todo => todo.task === task));
	    } else if (_.find(this.props.todos, todo => todo.task === task)) {
	      return 'Task already Exists';
	    } else {
	      return null;
	    }
	 }
}



export default Form;