import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addPerson } from '../actions/actions'
function Addperson() {
    const dispatch= useDispatch()
    const [info, setInfo] = useState({
        name:"",
        lname:"",
        age:"",
        email:"",
        password:""
    })
    const handleChange=(e)=>{
         setInfo({...info,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addPerson(info))
        setInfo({name:"",
        lname:"",
        age:"",
        email:"",
        password:""})
       
    }
    return (
        <div>
         <form onSubmit={handleSubmit}>
           
            <input  value={info.name}  type="text" placeholder="name"  name="name" onChange={handleChange}/><br/>
            <input  value={info.lname}   type="text" placeholder="lname"   name="lname" onChange={handleChange}/><br/>
            <input   value={info.age}  type="text"  placeholder="age"  name="age" onChange={handleChange}/><br/>
            <input   value={info.email}   type="text" placeholder="a@b.com"  name="email" onChange={handleChange}/><br/>
            <input   value={info.password}   type="text" placeholder="********"  name="password" onChange={handleChange}/><br/>
            <button> Add a person  </button>

         </form>
            
        </div>
    )
}

export default Addperson
