import React from "react";
import loginImg from "../../login.svg";
import logo from "../../images/ketabbaz-logo.png"
// import Criticimg from "../../cArtist.png"


export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      iscritic : false ,
      isuser : false
    }
  }

    myFunction() {
    var x = document.getElementById("myInput");
    console.log("thiiiis");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

    // criticfunc() {
    //   var y = document.getElementsByClassName('image')
    //   y.img.props.src = null
    // }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            {
              this.state.iscritic 
              ?         <img src="https://images.squarespace-cdn.com/content/v1/5d05278c95b50300011e2c35/1599777076417-AIAJXU7KMSRA84AVXM3R/ke17ZwdGBToddI8pDm48kNGHqViIUm0eT4cF8VGfp4sUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc4b-g6rVJqGozENJaNjUmDCRKZxCiYydrEAmDQKDH_i_8J3G1P4jWuExWStDVmTyx/6+Powerful+Methods+to+Fight+Your+Inner+Critic+as+an%C2%A0Artist.PNG?format=1500w" style = {{maxHeight: "179px"}} alt="" />
              :         this.state.isuser 
                      ?  <img src={loginImg} />
                      :  <img src={logo}  style = {{maxHeight: "179px" , maxWidth :"179px" , transform: "translate(0px, 22px)"}} alt=""/>
            }
           

            
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password"  id="myInput" placeholder="password" />
             
            </div>
            <div className="fo">
            <input type="checkbox" id="mycheckbox" onClick={this.myFunction}/> <h5>Show Password</h5>
            </div>
            <div className="fo1">
              <h3>Login as a :</h3> 
              <span className ="register">
              <input type="radio" id="client" name="gender" value="client"  onClick={() => this.setState({iscritic : false , isuser :true})}/>
              <label for="male"> {`User `} </label>
              <input type="radio" id="female" name="gender" value="critic"  onClick={() => this.setState({iscritic : true})}/>
              <label for="female">Critic </label>
              </span>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
