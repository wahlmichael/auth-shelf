import React, { Component } from 'react';
import { connect } from 'react-redux';




class ItemTable extends Component {
 /*    //set by default to the reduxstate value
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
    } */
    componentDidMount(){
        this.props.dispatch({type: 'FETCH_ITEMS'});
    }
  render() {
    return (
      <div className="itemDisplay">
        <table>
            <thead>
                <tr>
                <th>Item Description</th>
                <th>Delete</th>
                <th>User ID</th>
                </tr>   
            </thead>
            <tbody>
                {this.props.itemReducer.map(item=>{return <tr>
                <td>{item.description}</td>
                <td>
                    <button>Delete</button>
                </td>
                <td>{item.user_id}</td>
                </tr>}
                )}
            </tbody>
        </table>
      </div>
    );
  }
}

const mapReduxStateToProps =(reduxState)=>{
    return reduxState;
}

export default connect(mapReduxStateToProps)(ItemTable);