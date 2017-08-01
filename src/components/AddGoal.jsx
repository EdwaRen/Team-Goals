import React, {Component} from 'react';
import { connect} from 'react-redux';
import {goalRef } from '../firebase';
import moment from 'moment';

class AddGoal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
    }
  }

  addGoal() {
    console.log('this', this);
    const{title, date } = this.state;
    const{ email} = this.props.user;

    if (title != "") {
      goalRef.push({email: email, title: title, date: date});
      // item.setWithPriority('order', 0 - Date.now());

    }
    document.getElementById("inputField").value = "";
  }


  render() {

    var dates = new Date().getTime();
    console.log(dates);

    return (

      // moment(new Date()).utcOffset(-240).format('MM-DD-YYYY  HH:mm')
      <div className = "form-inline" style = {{textAlign: "center"}}>

        <div className="form-group" style = {{textAlign: "center"}}>

          <input
            id = "inputField"
            type="text"
            placeholder = "Add a Goal"
            className = "form-control"
            style={{marginRight: '5px', textAlign: "left", width:"500px"}}
            onChange={event => this.setState({title:event.target.value, date: -dates})}
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
