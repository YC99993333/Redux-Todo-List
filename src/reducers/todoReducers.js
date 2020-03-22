import omit from 'lodash/omit';
import mapKeys from 'lodash/mapKeys';

export default (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.text];
            
        
//         case 'DELETE_TODO':
//             return omit(state, action.payload);

        default:
            return state;
    }
} 