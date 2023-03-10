import React, { Component } from 'react'
import './index.css'

export default class App extends Component {
  // key : value
  state = {
    Name:'',
    Department:'',
    Rating:'',
    employees :[]
    
  };
  changeHandler=(e)=>
  {

    // console.log(this.changeHandler)
// console.log(this.state)
    this.setState({[e.target.name] : e.target.value})
    console.log(this.state)
  }
  submitHandler=(e)=>{
    e.preventDefault();
    console.log('click event')
    // console.log(this.submitHandler);
    const empObj=
    {
      Name:this.state.Name,
      Department:this.state.Department,
      Rating:this.state.Rating,
    }
    const arr=this.state.employees
    arr.push(empObj);
    this.setState({employees:arr})
  }
  render() {
    return (
      <div>
        <h1>Employee FeedBack Form</h1>
        <div className='formdiv'>
          <form>
            
            <lable id='name' htmlFor='Name'>Name:</lable>
            <input  className='name' name='Name' type='text' value={this.state.Name} onChange={this.changeHandler}></input>
            <br/>
            <lable id='name' htmlFor='Department'>Department:</lable>
            <input type="text" className='name' name="Department" value={this.state.Department} onChange={this.changeHandler}></input>
            <br/>
            <lable id='name' htmlFor='Rating'>Rating:</lable>
            <input type="number" className='name' name='Rating' value={this.state.Rating} onChange={this.changeHandler}></input>
            <br/>
            <button className='btn' onClick={this.submitHandler}>Submit</button>
          </form>
          <div className='flex'>
            {this.state.employees.map((value)=>{
              return(
                  <div className='box'>
                    Name:{value.Name} | Department: {value.Department} | Rating:{value.Rating}
                  </div>
                
              )
            })
              
            }

          
          </div>
        </div>

      </div>
    )
  }
}
