<%
  Boolean loggedin = (Boolean)request.getSession().getAttribute("loggedIn");

  if(loggedin == null || loggedin == false){

    response.sendRedirect("/login.html");
  }
%>