import React,{Component} from 'react';

class ListItem extends Component{
	constructor(){
		super();
		this.state={
			isEditing:false
		}
	}

	renderTaskSection(){
		const {task,isCompleted} = this.props;
		const taskStyle={
			color:isCompleted ? 'green': 'red',
			cursor:'pointer'
		}
		if (this.state.isEditing) {
			return(
				<td>
					<form>
						<input
							type='text'
							defaultValue={task}
						/>
					</form>
				</td>
			)
		}
		return (
			<td style={taskStyle}>
				{task}
			</td>
		)
		
	}

	render(){
		return(
			<tr >
				<td>{this.renderTaskSection()}</td>
				<td><button>save</button></td>
			</tr>
		)
	}
}

export default ListItem;