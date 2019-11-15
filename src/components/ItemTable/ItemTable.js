import React, { Component } from 'react';
import { connect } from 'react-redux';
/* import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'; */




class ItemTable extends Component {

    deleteItem =( item )=>{
        this.props.dispatch({type:'FETCH_REMOVE_ITEM', payload: item});
       
    }


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
                    <button onClick={()=>{this.deleteItem(item)}}>Delete</button>
                </td>
                <td>{item.user_id}</td>
                </tr>}
                )}
            </tbody>
        </table>
       {/*  <Dialog
        open={this.}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog> */}
      </div>
    );
  }
}

const mapReduxStateToProps =(reduxState)=>{
    return reduxState;
}

export default connect(mapReduxStateToProps)(ItemTable);