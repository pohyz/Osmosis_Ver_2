<%
  Boolean loggedin = (Boolean)request.getSession().getAttribute("loggedIn");

  if(loggedin == null || loggedin == false){

    response.sendRedirect("/login.html");
  }
  else{
  	
  	String user_type = (String)request.getSession().getAttribute("user_type");
  	String username = (String)request.getSession().getAttribute("username");
  }
%>