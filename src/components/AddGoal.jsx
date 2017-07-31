import React, {Component} from 'react';
import { connect} from 'react-redux';
import {goalRef } from '../firebase';

class AddGoal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal() {
    console.log('this', this);
    const{title } = this.state
    const{ email} = this.props.user;
    if (title != "") {
    goalRef.push({email: email, title: title});
    }
    document.getElementById("inputField").value = "";
  }


  render() {
    return (
      <div className = "form-inline" style = {{textAlign: "center"}}>

        <div className="form-group" style = {{textAlign: "center"}}>

          <input
            id = "inputField"
            type="text"
            placeholder = "Add a Goal"
            className = "form-control"
            style={{marginRight: '5px', textAlign: "center"}}
            onChange={event => this.setState({title:event.target.value})}
          />
          <button
            className = "btn btn-success"
            type = "button"
            onClick={() => this.addGoal()}
          >
            AddGoal
          </button>

        </div>

      </div>


    )
  }
}
function mapStateToProps(state) {
  const {user } = state;
  return {
    user
  }
}

export default connect (mapStateToProps, null)(AddGoal);
