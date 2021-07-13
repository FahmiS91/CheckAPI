import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getPepole,deletePerson} from '../actions/actions'
import Example from './Modal'
 const Comp=()=> {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPepole())
        
    },[])
    const {loading,pepole}=useSelector(state=>state.person)
    
    
    return (
        <div>
            {
               loading ? <h1> loading... </h1>:
               pepole.map((person)=><p key={person._id}>{person.name}{person.age} 
               <Example person={person}/>
               <button onClick={()=>dispatch(deletePerson(person._id))}>Delete</button></p>)
               
            }
        </div>
    )
}

export default Comp
