


function SignIn(){

  return(
    <div>
      <h1>Welcome Back</h1>
      <div>
      <label>Username: </label>&nbsp;&nbsp;
      <input type="text" />
      </div>
      <br></br>
      <div>
      <label>Password: </label>&nbsp;&nbsp;
      <input type="text" />
      </div>
    </div>
  );
}

export default SignIn;






// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import UserContext from '../contexts/UserContext';

// const SignIn = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  

//   let { signInUser } = useContext(UserContext);
//   let navigate = useNavigate();

//   function handleSubmit(event) {
//       event.preventDefault();
//       signInUser(username, password).then(() => {
//           console.log("hey")
//           navigate('/post');
//       }).catch(error => {
//           console.log(error);
//           window.alert('Failed login');
//       });
//   }

//   return(
//     <div>
//       <h1>Welcome Back</h1>
//       <form onSubmit={handleSubmit}>
//             <h1>LOGIN</h1>
//             <strong><span>Username</span></strong>
//             <input type="text" name="username" onChange={e => setUsername(e.target.value)} />
//             <br></br><br></br>
//             <strong><span>Password</span></strong>
//             <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
//             <br /><br></br>
//             <button>
//                 Sign In
//             </button>
//         </form>
//     </div>
//   );
// }

// export default SignIn;