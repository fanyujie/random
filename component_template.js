import {forwardRef, Fragment, ReactDOM, useCallback, useEffect, useImperativeHandle, useRef, useState} from "react"

const Template=forwardRef(
  ({...props},ref)=>
  {
    
    useImperativeHandle(ref,()=>({
         funname:()=>{},//.....functions
                                 
        }));
    useEffect(
      ()=>{
        //....code
      }
     ,[/*...arg*/])//....object to be listened
    
    
    return (...);
  },
  
)



const FancyButton = React.forwardRef(({...props}, ref) => {

      useImperativeHandle(ref,()=>({
      funname:()=>{},//.....functions

      }));
      useEffect(
      ()=>{
        //....code
      }
      ,[/*...arg*/]);//....object to be listened
  return (<div>{props.children}</div>);
});

