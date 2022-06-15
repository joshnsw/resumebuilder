import React from 'react'
import "./Output.css"
import { jsPDF } from "jspdf";




const Output = (props) => {

  

  function print(){
  
      window.print(document.getElementById('cvformprint'));
      
  }


  const expmap =props.edata.map((item)=>{
    return(
      <div className="explist" key={item.index}>
        <p><b>{item.company}</b></p>
        <p>{item.title}</p>
        <p>{item.work}</p>
      </div>
    )
  })

  const edumap = props.edudata.map((item)=>{
    return(
      <div className="edulist" key={item.index}>
        <p>{item.schoolname}</p> 
        <p>{item.degree} </p>
        <p>{item.yearstart}-{item.yearend}</p>
        
      </div>
    )
  })

  return (
    <div className='container'>
      <h1>This is your generated CV!</h1>
      <button onClick={print}>Save as PDF</button>
      <div className="cvform" id="cvformprint">
    <h3>{props.pdata.firstname} {props.pdata.lastname}</h3>
   <p>{props.pdata.address} | {props.pdata.email} | {props.pdata.number}</p>
   <hr />
   <div className='workexpsection'>
    <h3>Work and Leadership Experience</h3>
    <p>{expmap}</p>
    </div>
  <div className='edusection'>
    <h3>Education</h3>
    <p>{edumap}</p>
    </div>
  <div className='endsection'>
  <h3>Skills,Activities and Interests</h3>
  <p>Skills: {props.pdata.skills}</p>
  <p>Certificates: {props.pdata.cert}</p>
  <p>Interests: {props.pdata.interest}</p>
  </div>
    

      </div>
</div>
  )
}

export default Output;