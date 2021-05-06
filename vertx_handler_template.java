

public void xxx_handler(RoutingContext ctx)
	{
    HttpServerRequest request=ctx.request();
	    request.response().putHeader("content-type","application/json;charset=UTF-8");
	    
	    String acao= request.getHeader("Origin");
	    request.response().putHeader("Access-Control-Allow-Origin",acao);
		JsonObject fetcher=ctx.getBodyAsJson();
  
    String keys=Md5Utils.getJsonKeys(fetcher);
		String values=Md5Utils.getJsonValues(fetcher);
		
		String cmd=String.format("INSERT INTO spuser (%s) VALUES (%s)"
                              , keys,values);
		JsonObject jsonObject=new JsonObject();
		
		pool.query(cmd).execute(
			handler->{
				if(handler.failed())
				{
					
					
					request.response().end(Json.encodePrettily(jsonObject));
					return;
				}
				else {
					
					request.response().end(Json.encodePrettily(jsonObject));
					return;
				}
				
			}
        );
}
