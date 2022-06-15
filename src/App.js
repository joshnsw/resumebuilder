
import './App.css';
import Output from './components/Output'
import InputForm from './components/inputForm';
import { useState } from 'react';

function App() {

  const [value,setValue] = useState({
    firstname : '',
    lastname : '',
    address:'',
    email:'',
    number:'',
    skills:'',
    cert:'',
    interest:'',
  
  });

  const pdata = value
 
  const [exp,setExp] = useState([{
    company : '',
    title : '',
    work :'',
  }]);

  const edata = exp;

  const [edu,setEdu] = useState([{
    schoolname : '',
    yearstart : '',
    yearend :'',
    degree:''
  }]);

  const edudata = edu;



  return (
    <div className="App">
       
      <InputForm setValue = {setValue} value = {value} setExp={setExp} exp={exp} setEdu={setEdu} edu={edu}/>
      
      
      <Output pdata = {pdata} edata = {edata} edudata={edudata} />
    </div>
  );
}

export default App;
