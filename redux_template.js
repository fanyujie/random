//single redux funtion

const singleredux =(state={/*...*/},action)=>
{
      let new_state=state;
       switch(action.type)
       {
           case:
           {
              return new_state;
           }
         default:
           {
             return new_state;
           }
       }
}

//combine
import {createStore,combineReducers} from 'redux'

const AllRedux=combineReducers(
    {...{/*singleredux*/},});

export default AllRedux;
