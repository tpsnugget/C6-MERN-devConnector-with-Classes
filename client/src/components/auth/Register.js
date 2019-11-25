import React, { Component, Fragment, useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

class Register extends Component {

   constructor(props) {
      super(props)
      this.state = {
         name: "",
         email: "",
         password: "",
         password2: ""
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e){
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   async handleSubmit(e){
      e.preventDefault()
      const name = e.target.name.value
      const email = e.target.email.value
      const password = e.target.password.value
      const password2 = e.target.password2.value
      
      if(password !== password2){
         console.log("Passwords do not match")
      }
      else{ console.log("Success")
         // const newUser = {
         //    name,
         //    email,
         //    password
         // }
         // try{
         //    const config = {
         //       headers: {
         //          "Content-Type": "application/json"
         //       }
         //    }

         //    const body = JSON.stringify(newUser)

         //    const res = await axios.post("api/users", body, config)
         //    console.log(res.data)
         // }
         // catch(err){
         //    console.error(err.response.data)
         // }
      }
   }

   render() {

      const { name, email, password, password2 } = this.state

      return (
         <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={this.handleSubmit}>
               <div className="form-group">
               <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
               />
               </div>
               <div className="form-group">
                  <input
                     type="email"
                     placeholder="Email Address"
                     name="email"
                     value={email}
                     onChange={this.handleChange}
                     required
                  />
                  <small className="form-text"
                  >This site uses Gravatar so if you want a profile image, use a
               Gravatar email</small
                  >
               </div>
               <div className="form-group">
                  <input
                     type="password"
                     placeholder="Password"
                     name="password"
                     minLength="6"
                     value={password}
                     onChange={this.handleChange}
                     required
                  />
               </div>
               <div className="form-group">
                  <input
                     type="password"
                     placeholder="Confirm Password"
                     name="password2"
                     minLength="6"
                     value={password2}
                     onChange={this.handleChange}
                     required
                  />
               </div>
               <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
               Already have an account? <Link to="/login">Sign In</Link>
            </p>

         </Fragment>
      )
   }
}

export default Register