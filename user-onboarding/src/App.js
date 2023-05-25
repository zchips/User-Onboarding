import './App.css';
import React, {useState} from 'react'
import * as yup from 'yup'
import Form from './Components/Form';
import formSchema from './validation/formSchema';
import axios from 'axios';


const initialFormValues = {
  username: '',
  password:'',
  email:  '',
  tos: false
}


const initialFormErrors = {

}


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([])

  const clickHandler = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})

  }

  const handleSubmit = () =>{
    axios.post('https://reqres.in/api/users', formValues).then(res => {
    setUsers(res.data, ...users)
    })
    .catch(err => console.log(err))
  }
  
  const validate = (name, value) => {
    yup.reach(formSchema, name).validate(value).then(() => setFormErrors({...formErrors, [name]: ''})).catch(err => setFormErrors({...formErrors, [name]: err.errors}))
  }

  return (
    <div className='App'>
      <Form values= {initialFormValues} onChange={clickHandler} errors={formErrors} submit={handleSubmit}/>
       
       {users.map(user => (
        <div key ={user.id}>
        <p>{user.createdAt}</p>
        <p>{user.email}</p>

        </div>
       ))}
    </div>
  );
}

export default App;
