import React,{ Component } from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Auxilliary/Auxilliary'
import BackDrop from '../BackDrop/BackDrop'

class Modal extends Component{

	shouldComponentUpdate(nextProps, nextState){
		return nextProps.show !== this.props.show;
	}

	componentDidUpdate(){
		console.log('[Modal.js] will update')
	}

	render(){
		return(
			<Aux>
				<BackDrop show={this.props.show} CLICKED={this.props.modalClosed}/>
				<div 
					className={classes.Modal}
					style={{
						transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
						opacity: this.props.show ? '1' : '0'
					}}
				>
						{this.props.children}
				</div>
			</Aux>
		)
	}
}

export default Modal