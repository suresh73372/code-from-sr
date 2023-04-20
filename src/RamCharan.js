import React,{useState,useEffect} from "react";
import app from './App.css';
// import {useNavigate} from "./react-router-dom";

const RamCharan = () =>{

  // const navigate = useNavigate();

  // const navigateToHome = e =>{
  //   navigate('/Home');
  // }

  // const [data,setData] = useState({
  //   name:"",
  //   email:"",
  //   password:"",
  //   confirmPassword:"",
  //   male:"",
  //   female:"",
  //   stateLevel:""
  // })

  // const {name, email, password, confirmPassword, male, female, stateLevel} =data;

  // const changeHandler = e =>{
  //   setData({...data, [e.target.name]:[e.target.value]})
  // }

  // const onSubmit = e =>{
  //   e.preventDefault()
  //   console.log(data)
  // }
  return(
    <>
    <div>
    <div className="header">
      
    <nav><h1>ENTER TO MR.RC'S WORLD HERE</h1></nav>
    </div>
    <div className="parent">
    <div className="child1">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/RamCharan.jpg/640px-RamCharan.jpg" width="100%" height="100%"/>
    </div>
    <div className="child2">
      <form>
        <center>
        <label>NAME</label><br/>
        <input type="text" placeholder="ENTER NAME"  /><br/>
        </center>
        <center>
        <label>EMAIL</label><br/>
        <input type="email" placeholder="ENTER EMAIL"  /><br/>
        </center>
        <center>
        <label>PASSWORD</label><br/>
        <input type="password" placeholder="ENTER PASSWORD"  /><br/>
        </center>
        <center>
        <label>CONFIRM.PASSWORD</label><br/>
        <input type="password" placeholder="ENTER CONFIRM.PASSWORD"  /><br/>
        </center>
        <center>
          <p>GENDER:</p>
          <input type="radio" name="male" value="male" />MALE<br/> <input type="radio" name="male" value="female"  />FEMALE<br/>
          </center>
          <center>
            <select name="dropdown" >
              <option value="ap">ANDRA PRADESH</option>
              <option value="ap">ARUNACHAL PRADESH</option>
              <option value="ap">ASSAM</option>
              <option value="ap">BIHAR</option>
              <option value="ap">CHATTISGARH</option>
              <option value="ap">GOA</option>
              <option value="ap">GUJARAT</option>
              <option value="ap">HARYANA</option>
              <option value="ap">HIMACHAL PRADESH</option>
              <option value="ap">JHARKHAND</option>
              <option value="ap">KARNATAKA</option>
              <option value="ap">KERALA</option>
              <option value="ap">MADHYA PRADESH</option>
              <option value="ap">MAHARASHTRA</option>
              <option value="ap">MANIPUR</option>
              <option value="ap">MEGHALAYA</option>
              <option value="ap">MIZORAM</option>
              <option value="ap">NAGALAND</option>
              <option value="ap">ODISHA</option>
              <option value="ap">PUNJAB</option>
              <option value="ap">RAJASTHAN</option>
              <option value="ap">SIKKIM</option>
              <option value="ap">TAMILNADU</option>
              <option value="ap">TELANGANA</option>
              <option value="ap">TRIPURA</option>
              <option value="ap">UTTAR PRADESH</option>
              <option value="ap">UTTARAKHAND</option>
              <option value="ap">WEST BENGAL</option>
            </select>
          </center><br/>
        
        <center><button >submit</button></center>
      </form>
    </div>
    </div>
    </div>
    
    </>
    
  )
}
export default RamCharan