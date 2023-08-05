import React, { useState } from "react";
import './navbar.css';
import Servies from "./Services";
import Images from "./Images";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
let Navbar = () => {

   let [state, setState] = useState({
      user: {
         username: "",
         password: ""
      },
      newuser: {
         name: "",
         phone: "",
         email: "",
         password: "",
      }
   });
   const [showCreateAccount, setShowCreateAccount] = useState(true);
   const navigate = useNavigate();
   const toggleForm = () => {
     setShowCreateAccount((prev) => !prev);
   };
   let changeinput = (event) => {
      setState((state) = ({
         user: {
            ...state.user,
            [event.target.name]: event.target.value
         }
      }));
   };
   let {newuser} = state;
   let { user } = state;
   let submitlogin = () => {
      navigate('/userhome')
   }
   let createnewaccount = () => {

   }
   return (
      <React.Fragment>

         <div className="wrapper" id="register">
            <nav className='navbar navbar-expand-lg ' >
               <div className="container-fluid">

                  <div className="logo">
                    <a href="/"> <img src="images/job2.jpg" width="100" height="30" alt="" /></a>
                  </div>

                  <div className="navitem">
                     <span>

                        <span> <i class="fa fa-map-marker" aria-hidden="true"></i></span>
                        <a href="">Indore,India(465333)</a>
                     </span>
                     <span>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <a href="">+91 8269575176</a>
                     </span>
                  </div>
               </div>
            </nav>
            <div className="homeimg">
               <img src="images/job.webp" width="100" height="40" />
            </div>
            <div className="container">
            {showCreateAccount ? (
                <div className="login-form">
                <h2>LOGIN</h2>
                <form onSubmit={submitlogin}>
                   <span>
                      <span>
                         <div className="form-group">
                            <input
                               type="text"
                               id="username"
                               name="username"
                               value={user.username}
                               onChange={changeinput}
                               placeholder="Enter your username"
                            />
                            <hr />
                         </div></span>
                   </span>
                   <div className="form-group">
                      <input
                         type="password"
                         id="password"
                         name="password"
                         value={user.password}
                         onChange={changeinput}
                         placeholder="Password"
                      />
                      <hr />
                   </div>

                   <div className="form-group">
                      <button type="submit" className="button">Login to Account</button>
                   </div>
                   <div className="form-group">
                      <button type="btn" className="button" onClick={toggleForm}>Create New Account</button>
                   </div>
                </form>
             </div>
            ):(
               <div className="login-form">
                  <h2>CREATE NEW ACCOUNT</h2>
                  <form onSubmit={createnewaccount}>
                     <span>
                        <span>

                           <div className="form-group">
                              <div className="con">
                              <i class="fa fa-user-o" aria-hidden="true"></i>
                              <input
                                 type="text"
                                 id="username"
                                 name="username"
                                 value={newuser.name}
                                 onChange={changeinput}
                                 placeholder="Name"
                              />
                              </div>
                             
                              <hr />
                           </div></span>
                     </span>
                     <div className="form-group">
                        <div className="con">
                        <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                        <input
                           type="password"
                           id="password"
                           name="password"
                           value={newuser.password}
                           onChange={changeinput}
                           placeholder="Password"
                        />
                        </div>
                        
                        <hr />
                     </div>
                     <span>
                           <div className="form-group">
                              <div className="con">
                              <i class="fa fa-phone" aria-hidden="true"></i>
                              <input
                                 type="text"
                                 id="phone"
                                 name="phone"
                                 value={newuser.phone}
                                 onChange={changeinput}
                                 placeholder="Phone"
                              />
                              </div>
                             
                              <hr />
                           </div></span>
                           <span>
                           <div className="form-group">
                              <div className="con">
                              <i class="fa fa-envelope" aria-hidden="true"></i>
                              <input
                                 type="text"
                                 id="email"
                                 name="email"
                                 value={newuser.email}
                                 onChange={changeinput}
                                 placeholder="E-mail"
                              />
                              </div>
                              <hr />
                           </div></span>

                     <div className="form-group">
                        <button type="submit" className="button">Submit</button>
                     </div>
                     <div className="form-group">
                        <button type="btn" className="button" onCanPlay={toggleForm}>Login to Account</button>
                     </div>
                  </form>
               </div>
            )}
              
               
            </div >
            {/* break  */}

         </div >
         <Servies></Servies>
         <Images></Images>
         <Footer></Footer>

      </React.Fragment >
   );
}
export default Navbar;