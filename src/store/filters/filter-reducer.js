import {ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER} from './filter-actions';

export const filterReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_FILTER: {
      console.log(action)
      if (state.includes(action.payload)) {
        return state;
      }
      
      return [...state, action.payload];
    }
    case REMOVE_FILTER: {
      return state.filter(item => item !== action.payload);
    }
    case CLEAR_FILTER: {
      return [];
    }
    default: {
      return state;
    }
  }
}