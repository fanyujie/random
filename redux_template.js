//single redux funtion

const singleredux =(state={/*...*/},action)=>
{
       switch(action.type)
       {
           case:
           {
              return {...state,/*...*/};
           }
         default:
           {
             return state;
           }
       }
}

//combine
import {createStore,combineReducers} from 'redux'

const AllRedux=combineReducers(
    {...{/*singleredux*/},});

export default AllRedux;


//use
import {useSelector,useDispatch} from 'react-redux'

const xxx_state =useSelector(state =>(state.xxx/*singleredux_name*/));

const  xxx_dispatch = useDispatch();
xxx_dispatch(/*your action*/); // (()=>({/*dict*/})) ()

//redux-persist
import {persistStore, persistReducer,persistCombineReducers} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
const reduce_config=
{
    key: 'root',
    version: 0,
    storage:storageSession,
    // storage,
    stateReconciler: autoMergeLevel2,
    debug:true,
    

};
const AllRedux = createStore(persistCombineReducers(reduce_config,
    {LogRedux:LogRedux,}));

