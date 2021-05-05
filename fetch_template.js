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
            }
               

        })
        .catch(()=>{
            
        })
        .finally()
       //when post
       {
               let params=
                   {
                           /*......*/
                   };
               
               body:JSON.stringify(params);
       }

       /*fetch withcookie must without localhost::*/
      let params=
          {
              email:emailaddress_ref.current.value,
              password:password_ref.current.value,
          };
          const settings={ 
            method:"POST",
            crossDomain:true,
            // mode:'no-cors',
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json',
                // 'Accept':'application/json, text/plain, */*',
                "Access-Control-Allow-Origin":`${process.env.REACT_APP_SERVER}/*`,
                'Access-Control-Allow-Credentials':'true',
                
                
            },
            body:JSON.stringify(params),
            
        }
        
        fetch(`${process.env.REACT_APP_SERVER}/login`,settings)
        
        .then((response)=>(response.json()))
        .then((response)=>{
            if(response!=null)
            {
                
                var get_json=response;
                console.log(get_json);
                // var get=get_json.array;
                // console.log(get);
                if(get_json.info==undefined)
                {
                  if(get_json.loginstate=="success")
                  {
                    infobox_ref.current.openWith("login succeeded");
                  }
                  else if(get_json.loginstate=="fail")
                  {
                    infobox_ref.current.openWith("login failed");
                  }

                  
                }
                else
                {
                  infobox_ref.current.openWith("login server error");
                }
                  


                
            }
          })
        .catch((error_)=>{
            infobox_ref.current.openWith("connect fail:"+error_);
        })
        .finally()
        }
