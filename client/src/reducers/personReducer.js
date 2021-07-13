import {LOADING,SUCCESS,FAILED} from '../actions/types'
const initState={
    loading:false,
    pepole:[],
    error:""
}
const personReducer=(state=initState,action)=>{
   switch(action.type){
   case LOADING:return {
       ...state,
       loading:true
   }
   case SUCCESS:return {
       ...state,
       loading:false,
       pepole:action.payload
   }
   case FAILED:return{
       ...state,
       loading:false,
       error:action.payload
   }

    default:return state
   }
}

export default personReducer