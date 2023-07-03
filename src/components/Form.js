import React, { useState } from 'react'
import "../index.css";



export default function Form() {
  const [name,setName]=useState({
    fname:"",
    lname:"",
    email:""
  });

  let inputEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setName((preValue)=>{
     return{
      ...preValue,
      [name]:value
     }
    // setName((preValue)=>{
    //   if(name==="fname"){
    //     return{
    //       fname:value,
    //       lname:preValue.lname,
    //       email:preValue.email
    //     }
    //   }
    //   else if(name==="lname"){
    //     return{
    //       fname:preValue.fname,
    //       lname:value,
    //       email:preValue.email
    //     }
    //   }
    //   else if(name==="email"){
    //     return{
    //       fname:preValue.fname,
    //       lname:preValue.lname,
    //       email:value
    //     }
    //   }
      
      
    })
  }

  let onSumbitF=(e)=>{
    e.preventDefault();
    alert("Feedback submited")
  }

  return (
    <>
    <h1 className='my-5'>Give us feedback</h1>
    <h3>Your Name: {name.fname} {name.lname} Mail: {name.email}</h3>
    <div className='container mt-5 custom-form'>
    <form onSubmit={onSumbitF} >
      <div class="form-group">
        <label className='mx-4' for="firstName">First Name</label>
        <input onChange={inputEvent} name="fname"  type="text" className="form-control" id="firstName" placeholder="Enter your first name"/>
      </div>
      <div class="form-group">
        <label className='mx-4' for="lastName">Last Name</label>
        <input onChange={inputEvent} name="lname"  type="text" class="form-control" id="lastName" placeholder="Enter your last name"/>
      </div>
      <div class="form-group">
        <label className='mx-4' for="email">Email</label>
        <input onChange={inputEvent} name="email" type="email" class="form-control" id="email" placeholder="Enter your email address" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
      </div>
    </>
    
  )
}
