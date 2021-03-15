import React, { Component } from 'react';
import './Modal.css'
import Auxx from '../../../hoc/Auxx';
import Backdrop from '../Backdrop/Backdrop'
class  Modal extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !==this.props.show || nextProps.children!==this.props.children;
        }
    componentWillUpdate(){
        console.log("will update");
    }
    render(){
        return (
            <Auxx>
                <Backdrop show={this.props.show}
                clicked={this.props.modelClosed}
            />
            <div 
                className='Modal'
                style ={
                    {
                transform :this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity :this.props.show ? '1':'0'
                    }
                    }
        >
        {this.props.children}
        </div>
            </Auxx>
        )
    }
}
export default Modal