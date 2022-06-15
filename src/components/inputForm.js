import React from 'react'

import './inputForm.css'



const InputForm = (props) => {
  const changeHandler = (e) => {
    props.setValue({...props.value, [e.target.name]: e.target.value})
 }

 const changeHandlerExp = (e,index) =>{
  const list = [...props.exp];
  list[index][e.target.name] = e.target.value;
  props.setExp(list)
     
 }

 const handleAddInputExp = () => {
   props.setExp([...props.exp,{
    company : '',
    title : '',
    work :'',
  }])
 }

 const handleRemoveInputExp = index => {
  const list = [...props.exp];
  list.splice(index,1);
  props.setExp(list);

}

const changeHandlerExpEdu = (e,index) =>{
  const list = [...props.edu];
  list[index][e.target.name] = e.target.value;
  props.setEdu(list)
     
 }

 const handleAddInputEdu = () => {
   props.setEdu([...props.edu,{
    schoolname : '',
    yearstart : '',
    yearend :'',
    degree:''
  }])
 }

 const handleRemoveInputEdu = index => {
  const list = [...props.edu];
  list.splice(index,1);
  props.setEdu(list);

}
 




  return (
    <div class ="containerinput">
    <h1>Create your CV by filling your details below!</h1>
    <h3>Personal Details</h3>
    <form className = "form">
      <label htmlFor="" >First Name:</label>
      <input type="text" name ="firstname" value={props.value.firstname} onChange={changeHandler}/>
      <label htmlFor="">Last name:</label>
      <input type="text" name ="lastname" value={props.value.lastname} onChange={changeHandler} />
      <label htmlFor="">Address:</label>
      <input type="text" name ="address" value={props.value.address} onChange={changeHandler} />
      <label htmlFor="">Email:</label>
      <input type="text" name ="email" value={props.value.email} onChange={changeHandler} />
      <label htmlFor="">Phone Number:</label>
      <input type="number" name ="number" value={props.value.number} onChange={changeHandler} />
      <label htmlFor="">Skills:</label>
      <input type="text" name ="skills" value={props.value.skills} onChange={changeHandler} />
      <label htmlFor="">Certificates:</label>
      <input type="text" name ="cert" value={props.value.cert} onChange={changeHandler} />
      <label htmlFor="">Interests:</label>
      <input type="text" name ="interest" value={props.value.interest} onChange={changeHandler} />
      <h3>Experience</h3>
    {props.exp.map((item,i)=>{
      return(
        <div key ={i} className="expbox">
          <label htmlFor="" >Company:</label>
      <input type="text" name ="company" value={item.company} onChange={e =>changeHandlerExp(e,i)}/>
      <label htmlFor="" >Title:</label>
      <input type="text" name ="title" value={item.title} onChange={e =>changeHandlerExp(e,i)}/>
      <label htmlFor="" >Work details:</label>
      <textarea name="work" value={item.work} rows={8} cols={100} onChange={e =>changeHandlerExp(e,i)}/>
      {props.exp.length !== 1 && <input type="button" value="Remove Experience" onClick={()=>handleRemoveInputExp(i)}/>}
        </div>
      )
      
    })}
    <input type="button" value="Add Experience" onClick={handleAddInputExp}/>

    <h3>Education</h3>
    {props.edu.map((item,i)=>{
      return(
        <div key={i} className="edubox">
        <label htmlFor="" >School Name:</label>
      <input type="text" name ="schoolname" value={item.schoolname} onChange={e =>changeHandlerExpEdu(e,i)}/>
      <label htmlFor="" >Degree:</label>
      <input type="text" name ="degree" value={item.degree} onChange={e =>changeHandlerExpEdu(e,i)}/>
      <label htmlFor="" >Year Start:</label>
      <input name="yearstart" value={item.yearstart}  onChange={e =>changeHandlerExpEdu(e,i)}/>
      <label htmlFor="" >Year Graduated:</label>
      <input name="yearend" value={item.yearend}  onChange={e =>changeHandlerExpEdu(e,i)}/>
      {props.edu.length !== 1 && <input type="button" value="Remove Education" onClick={()=>handleRemoveInputEdu(i)}/>}

        </div>
      )
    })}
    <input type="button" value="Add Education" onClick={handleAddInputEdu}/>


    </form>
    </div>
  )
}

export default InputForm;