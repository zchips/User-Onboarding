import './App.css';
import React, {useState} from 'react'
import Form from './Components/Form';


const initialFormValues = {
  username: '',
  password:'',
  email:  '',
  tos: false
}


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const clickHandler = (name, value) => {
    setFormValues({... formValues, [name]: value})
  }

  return (
    <div className='App'>
      <Form values= {initialFormValues} onChange={clickHandler}/>
       
    </div>
  );
}

export default App;
