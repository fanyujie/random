        const settings={ 
            method:"GET",
            crossDomain:true,
            // mode:'no-cors',
            headers:{
                // 'Content-Type': 'application/json'
                'Accept':'application/json, text/plain, */*',
                "Access-Control-Allow-Origin":"*",
                
            }
        }
        fetch(`http://1.15.184.52:8080/commentque?articleid=${Rarticleid}&page_offset=${getPageOffset}`,settings)
        
        .then((response)=>(response.json()))
        .then((response)=>{
            if(response!=null)
            {
                
                var get_json=response;
                console.log(get_json);
                var get=get_json.array;
                console.log(get);
                //console.log(getPageOffset);
               

        })
        .catch(()=>{
            
        })
        .finally()
