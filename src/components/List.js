import React,{Component} from 'react';
import ListHeader from  './ListHeader';
import _ from 'lodash';
import ListItem from './ListItem'


class List extends Component{

	renderItems(){
		const props =_.omit(
			this.props,
			'todos'
		)
		return _.map(this.props.list,(todo,index)=>{
			return (
				///estoy pasando la inforamcion de un lado al otro componente
				<ListItem key={index}{... todo}
				{...props}/>
			)
			
		})
	}
	render(){
		return(
			<table>
				<ListHeader/>
				{this.renderItems()}
			</table>	
		)
	}
}

export default List;