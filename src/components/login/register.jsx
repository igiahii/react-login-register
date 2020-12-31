import React from "react";
import loginImg from "../../login.svg";
// import 'bootstrap/dist/css/bootstrap.min.css';

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
   
      <div className="base-container" ref={this.props.containerRef}>

        <div className="header">Register</div>
        <div className="content">
          {/* <div className="image">
            <img src={loginImg} />
          </div> */}
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username*</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="number">Phone Number*</label>
              <input type="number" name="number" placeholder="phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="date">Birthday</label>
              <input type="date" name="date"  />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password*</label>
              <input type="text" name="password" placeholder="password" />
            </div>
            <div className="fo1">
              <h3>Register as a :</h3> 
              <span className ="register">
              <input type="radio" id="client" name="gender" value="client"/>
              <label for="male"> {`User `} </label>
              <input type="radio" id="female" name="gender" value="critic"/>
              <label for="female">Critic </label>
              </span>
            </div>
          </div>
        </div>
        <div className="footer" style={{marginTop: "-1em"}}>
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
