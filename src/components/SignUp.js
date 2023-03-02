import React from 'react'
import '../App.css';

  
function SignUp() {
  return (
      <div className="Form">
        <label>Username</label>&nbsp;&nbsp;
        <input type="text"/>
        <br></br>
        <label>Email</label>&nbsp;&nbsp;
        <input type="text" />
        <br></br>
        <label>City</label>&nbsp;&nbsp;
        <input type="text" />
        <br></br>
        <label>State</label>&nbsp;&nbsp;
        <input type="text" />
        <br></br>
        <label>Zip</label>&nbsp;&nbsp;
        <input type="text" />
        <br></br>
        <label>How did you hear about us?</label>&nbsp;&nbsp;
        <select>
        <option value="friend">Friend/Family</option>
        <option value="web">Web Search</option>
        <option value="Other">Other</option>
   </select>
   <br></br>
     <button type="submit">Submit</button>
       </div>
  )
}



export default SignUp




//   const props = (props) => {
//     super(props)

//     this.state = {
//       username: '',
//       userEmail: '',
//       userCity: '',
//       userState: '',
//       userZip: '',
//       userReferral: ''
//     }
  
  
//   const handleUserInput = (event) => {
//     this.setState({
//       username: event.target.value,
//       userEmail: event.target.value,
//       userCity: event.target.value,
//       userState: event.target.value,
//       userZip: event.target.value,
//       userReferral: event.target.value
//     })
//   }

//   const handleSubmit = event => {
//     // temporarily setting up an alert to verify user input information
//     alert(`${this.state.username} ${this.state.userEmail} ${this.state.userCity} ${this.state.userState} ${this.state.UserZip} ${this.state.userReferral}`)
//   }
  

// function SignUp() {
//   render(
  
    
//     // <form onSubmit={this.handleSubmit}>
//       <div>
//         <label>Username</label>
//         <input type="text" value={this.state.username} onChange={this.handleUserInput} />
//         <label>Email</label>
//         <input type="text" value={this.state.userEmail} onChange={this.handleUserInput} />
//         <label>City</label>
//         <input type="text" value={this.state.userCity} onChange={this.handleUserInput} />
//         <label>State</label>
//         <input type="text" value={this.state.userState} onChange={this.handleUserInput} />
//         <label>Zip</label>
//         <input type="text" value={this.state.userZip} onChange={this.handleUserInput} />
//         <label>How did you hear about us?</label>
//         <select value={this.state.userReferral} onChange={this.handleUserInput} />
//         <option value="friend">Friend/Family</option>
//         <option value="web">Web Search</option>
//         <option value="Other">Other</option>
   
//       <button type="submit">Submit</button>
//       </div>
//   )