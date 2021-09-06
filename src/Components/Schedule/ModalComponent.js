import React, { Component } from "react";
import FormComponent from './FormComponent';
class ModalComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            modalToggle: props.show
        }
    }
    render(){
        if(this.state.modalToggle){
            return(
                <div> 
                    <div className='ModalContainer'>
                        <FormComponent />
                    </div>
                </div>
            )
        } else {
           
        }
    }
}
export default ModalComponent;