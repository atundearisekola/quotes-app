import { handleAction, combineActions } from 'redux-actions';
import{
   
    GET_QOUTES,
    LOADER,


    getQoutes,
    setLoader,
    requestQoutes,
    

}from '../actions/QoutesAction';


var defaultState = {

    isAuthenticated: false,
    user:{},
    error:[],
    data:[],
    response:[],
    access_token:[],
    loader:false,
    
   


};
    const QoutesReducer = handleAction(
       
           combineActions( getQoutes,requestQoutes),
            
        
        {
       next(state, action){
        switch(action.type){

             case GET_QOUTES:
               console.log(action.payload)
            return {
                ...state,
                 data: action.payload,
                 loader:false,
            };
            break;

            
            case LOADER:
           
            return {
                ...state, loader:action.payload
            };
            break;


            default:
                return state;
            break;

        }
    },
    throw(state,action){

         switch(action.type){

            case GET_QOUTES:
               
            return {
                ...state,   error: action.payload,
                loader:false,
               
            };
            break;
             
              

            default:
                return state;
            break;

        }

    }
  },
  defaultState
    )
    
    export default QoutesReducer;
    