const BeamBridge = React.forwardRef(({piernum=1,...props}, ref) => {
  const  refs=useRef({})
  useImperativeHandle(ref,()=>({
    funname:()=>{},//.....functions

    genJson:()=>{
      let obj={}
      obj.上部结构=[]
      obj.下部结构={}
      obj.桥面系={}

      let 上部结构=obj.上部结构;
      let 下部结构=obj.下部结构;
      let 桥面系=obj.桥面系;


      下部结构["桥墩"]=[]
      下部结构["桥台1"]={}
      下部结构["桥台2"]={}




      for (let i = 0; i < refs.current["桥跨"].length; i++) {
        let dict=refs.current["桥跨"][i]
        上部结构[i]={}

        for (const [key, value] of Object.entries(dict)) {


          Object.assign(上部结构[i],value.get())

        }

      }

      for (let i = 0; i < refs.current["桥墩"].length; i++) {
        let dict=refs.current["桥墩"][i]
        下部结构["桥墩"][i]={}

        for (const [key, value] of Object.entries(dict)) {

          Object.assign(下部结构["桥墩"][i],value.get())

        }

      }
      for (const [key, value] of Object.entries(refs.current["桥台1"])) {



        Object.assign(下部结构["桥台1"],value.get())

      }

      for (const [key, value] of Object.entries(refs.current["桥台2"])) {


        Object.assign(下部结构["桥台2"],value.get())
      }

      for (const [key, value] of Object.entries(refs.current["桥面系"])) {


        Object.assign(桥面系,value.get())
      }

      console.log("beam:", JSON.stringify(obj))
      return obj
    },


    parseJson:(dic_)=>{
      let obj=dic_


      let 上部结构=obj.上部结构;
      let 下部结构=obj.下部结构;
      let 桥面系=obj.桥面系;





      for (let i = 0; i < refs.current["桥跨"].length; i++) {
        let dict=refs.current["桥跨"][i]


        for (const [key, value] of Object.entries(dict)) {


          let [name_,value_]=Object.entries(value.get())[0]
          value.set(上部结构[i][name_])
        }

      }

      for (let i = 0; i < refs.current["桥墩"].length; i++) {
        let dict=refs.current["桥墩"][i]


        for (const [key, value] of Object.entries(dict)) {

          let [name_,value_]=Object.entries(value.get())[0]


          // console.log(下部结构["桥墩"])
          value.set(下部结构["桥墩"][i][name_])


        }

      }
      for (const [key, value] of Object.entries(refs.current["桥台1"])) {


       let [name_,value_]=Object.entries(value.get())[0]
        value.set(下部结构["桥台1"][name_])

      }

      for (const [key, value] of Object.entries(refs.current["桥台2"])) {



        let [name_,value_]=Object.entries(value.get())[0]
        value.set(下部结构["桥台2"][name_])
      }

      for (const [key, value] of Object.entries(refs.current["桥面系"])) {

        let [name_,value_]=Object.entries(value.get())[0]
        value.set(桥面系[name_])

      }


    },


  }));

  refs.current["桥墩"]=[]
  refs.current["桥跨"]=[]
  refs.current["桥面系"]={}
  refs.current["桥台1"]={}
  refs.current["桥台2"]={}

  useEffect(
    ()=>{
      //....code


    }
    ,[/*...arg*/]);//....object to be listened
  return (<div>{props.children}
    <Typography variant={"h2"} align={"center"}>上部结构</Typography>
    {

      new Array(piernum+1).fill(0).map((data,index)=>{
        // console.log("index:",index)
        refs.current["桥跨"][index]={}

        return(
          <div key={index}>
            <Typography variant={"h4"} align={"center"} paragraph={true} style={{marginTop:"3%"}} noWrap>{`跨${index+1}`}</Typography>
            <Upper.HorizontalTies ref={instance => {refs.current["桥跨"][index]["HorizontalTies"]=instance}}></Upper.HorizontalTies>
          </div>
        )
      })
    }


    <Typography variant={"h2"} align={"center"}>下部结构</Typography>

    {

      new Array(piernum).fill(0).map((data,index)=>{

        // console.log("index:",index)
        refs.current["桥墩"][index]={}

        return(
          <div key={index}>
            <Typography variant={"h4"} align={"center"} paragraph={true} style={{marginTop:"3%"}} noWrap>{`桥墩${index+1}`}</Typography>
            <Lower.CappingBeam ref={instance => {refs.current["桥墩"][index]["CappingBeam"]=instance}}></Lower.CappingBeam>
            <Lower.AbutmentBody ref={instance => {refs.current["桥墩"][index]["AbutmentBody"]=instance}}></Lower.AbutmentBody>
            <Lower.Base ref={instance => {refs.current["桥墩"][index]["Base"]=instance}}></Lower.Base>
            <Lower.Bearer ref={instance => {refs.current["桥墩"][index]["Bearer"]=instance}}></Lower.Bearer>
          </div>
        )
      })
    }
    <div>
      <Typography variant={"h4"} align={"center"} paragraph={true} style={{marginTop:"3%"}}>桥台1</Typography>
      <Lower.CappingBeam ref={instance => {refs.current["桥台1"]["CappingBeam"]=instance}}></Lower.CappingBeam>
      <Lower.AbutmentBody ref={instance => {refs.current["桥台1"]["AbutmentBody"]=instance}}></Lower.AbutmentBody>
      <Lower.Base ref={instance => {refs.current["桥台1"]["Base"]=instance}}></Lower.Base>
      <Lower.EarWingWall ref={instance => {refs.current["桥台1"]["EarWingWall"]=instance}}></Lower.EarWingWall>
      <Lower.Bearer ref={instance => {refs.current["桥台1"]["Bearer"]=instance}}></Lower.Bearer>
    </div>
    <div>
      <Typography variant={"h4"} align={"center"} paragraph={true} style={{marginTop:"3%"}}>桥台2</Typography>
      <Lower.CappingBeam ref={instance => {refs.current["桥台2"]["CappingBeam"]=instance}}></Lower.CappingBeam>
      <Lower.AbutmentBody ref={instance => {refs.current["桥台2"]["AbutmentBody"]=instance}}></Lower.AbutmentBody>
      <Lower.Base ref={instance => {refs.current["桥台2"]["Base"]=instance}}></Lower.Base>
      <Lower.EarWingWall ref={instance => {refs.current["桥台2"]["EarWingWall"]=instance}}></Lower.EarWingWall>
      <Lower.Bearer ref={instance => {refs.current["桥台2"]["Bearer"]=instance}}></Lower.Bearer>
    </div>

    <Typography variant={"h2"} align={"center"} style={{marginTop:"3%"}}>桥面系</Typography>
    <Surface.SurfaceCover  ref={instance => {refs.current["桥面系"]["SurfaceCover"]=instance}}></Surface.SurfaceCover>
    <Surface.DrainSystem  ref={instance => {refs.current["桥面系"]["DrainSystem"]=instance}}></Surface.DrainSystem>
    <Surface.BridgeSmooth  ref={instance => {refs.current["桥面系"]["BridgeSmooth"]=instance}}></Surface.BridgeSmooth>
    <Surface.WalkPass  ref={instance => {refs.current["桥面系"]["WalkPass"]=instance}}></Surface.WalkPass>
    <Surface.StrechSlot  ref={instance => {refs.current["桥面系"]["StrechSlot"]=instance}}></Surface.StrechSlot>
    <Surface.Protector ref={instance => {refs.current["桥面系"]["Protector"]=instance}}></Surface.Protector>

  </div>);
});
