import React from 'react'

const Form = (props) => {
    return (
     <div>
     <h1> Starting the form</h1>
     <form>
        <label> Name:
            <input type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
           />
        </label>
        <label> Email:
            <input type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
           />
        </label>
        <label> Password:
            <input type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
           />
        </label>
        <label> Terms of Service:
            <input type="checkbox"
                    name="tos"
                    checked={checked}
                    onChange={onChange}
           />
        </label>
        
        <input type="submit" value="Create a Friend!" 
     </form>

     </div>

    )
}

export default Form
