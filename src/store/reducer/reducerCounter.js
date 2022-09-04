import {UP,DOWN,MULTI,RESTART,UPDATE} from '../../store/action/counter-type'
const counterReduce = (state,action)=>{
    switch (action.type) {
        case UP:
        return state + 1 
            
            
        case DOWN:
        return state -1 
            
            
        case MULTI:
        return state * 2 
            
            
        case RESTART:
        return 0
            
            
        case UPDATE:
        return action.payload 
            
            
    
        default:
            return state;
    }
}