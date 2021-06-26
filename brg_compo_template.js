const SurfaceCover = React.forwardRef(({...props}, ref) => {
  const refs=useRef()
  const table=[
    { name:"",label:"",dict:[{"":0},{"":50},{"":50}] }
  ]
  
  return (<Temp lable={""} name={""} table={table}
  ref={ref}
  ></Temp>);
});
