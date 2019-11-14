import React, { Component } from 'react';
import { connect } from 'react-redux';




class AddItem extends Component {
    //set by default to the reduxstate value
    state={
        description: '',
        url: '',
    }
    //update local state on typing
    setValue=(event,property)=>{
        this.setState({
            [property]: event.target.value,
        })
    }
    //update reduxState value
    addItem=(actionType)=>{
        this.props.dispatch({type: 'FETCH_NEW_ITEM', payload: this.state.value});
    }

  render() {
    return (
      <div className="addItem">
        <p>Item Description:</p>
        <input onChange={(event)=>{this.setValue(event,'description')}}></input>
        <p>Item Url:</p>
        <input onChange={(event)=>{this.setValue(event,'url')}}></input>
        <button onClick={this.AddItem}>Add</button>
      </div>
    );
  }
}

export default connect()(AddItem);