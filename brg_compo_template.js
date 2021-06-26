const SurfaceCover = React.forwardRef(({...props}, ref) => {
  const refs=useRef()
  const table=[
    { name:"",label:"",dict:[{"无":0},{"":1},{"":2}] }
  ]
  
  return (<Temp lable={""} name={""} table={table}
  ref={ref}
  ></Temp>);
});
