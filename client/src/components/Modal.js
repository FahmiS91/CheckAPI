import {Button,Modal} from 'react-bootstrap'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {editPerson} from '../actions/actions'
export default function Example({person}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch= useDispatch()
  const [info, setInfo] = useState(person)
    const handleChange=(e)=>{
         setInfo({...info,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(editPerson(info._id,info))
        
       
    }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update information </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
           
            <input  value={info.name} type="text" placeholder="name"  name="name" onChange={handleChange}/>
            <input  value={info.lname}   type="text" placeholder="lname"   name="lname" onChange={handleChange}/>
            <input   value={info.age}  type="text"  placeholder="age"  name="age" onChange={handleChange}/>
            <input   value={info.email}   type="text" placeholder="a@b.com"  name="email" onChange={handleChange}/>
            <input   value={info.password}   type="text" placeholder="********"  name="password" onChange={handleChange}/><br/>
            <button> save </button>

         </form>
        
        </Modal.Body>
      </Modal>
    </>
  );
}































/*import {Modal,Button} from 'react-bootstrap'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { editPerson } from '../actions/actions'
export default function Example({person}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch= useDispatch()
    const [info, setInfo] = useState(person)
    const handleChange=(e)=>{
   setInfo({...info,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(editPerson(info._id,info))
        
        
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <form onSubmit={handleSubmit}>
           
           <input  value={info.name}  type="text" placeholder="name"  name="name" onChange={handleChange}/><br/>
           <input  value={info.lname}   type="text" placeholder="lname"   name="lname" onChange={handleChange}/><br/>
           <input   value={info.age}  type="text"  placeholder="age"  name="age" onChange={handleChange}/><br/>
           <input   value={info.email}   type="text" placeholder="a@b.com"  name="email" onChange={handleChange}/><br/>
           <input   value={info.password}   type="text" placeholder="********"  name="password" onChange={handleChange}/><br/>
           <button> Click </button>

        </form>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  */