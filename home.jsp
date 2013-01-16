<%@include file="authenticate.jsp"%><!-- MUST PUT THIS IN -->
<html lang="en" ng-app="app"><!-- MUST PUT THIS IN -->
  <head>
    <meta charset="utf-8">
    <title>Bootstrap, from Twitter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

    <!-- Le styles -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <style type="text/css">
      body {
        padding-top: 60px;
        padding-bottom: 40px;
      }
      
     page-header {
	     	font-size:100pt;
      }
       
      #welcome_msg{
	      position:relative;
	      top: 5px;
	      float:right;
	      color:grey;

      }
      
      #plus_sign{
	      position:relative;
	      top: -5px;
	      left:-10px;
	      color:red;

      }
      
      #notify_btn{
	      position:relative;
	      top: 0px;
	      left:10px;
      
      }
      
      #notify_badge{
	      position:relative;
	      top: -5px;
	      left:-90px;

      }
      
      #logo_img{
	      position:relative;
	      top: 10px;
	      left: 0px;
      }
    </style>
    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

  </head>

  <body>

    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <img src="assets/img/OsmosisLogo.png" width=9% id="logo_img">
          <div id="welcome_msg">Welcome, {{name}} | <a href="#" onclick="document['logout_form'].submit();">Logout</a></div><form name="logout_form"action="LogoutServlet"method="post"></form><!-- MUST PUT THIS IN -->
            <ul class="nav" >
              <li class="active"><a href="#" id="tabcolor"><i class="icon-home icon-white"></i> HOME</a></li>
              <li><a href="#about" >PROFILE</a></li>
              <li><a href="#contact">PROJECT CATALOG</a></li>
              <li><a href="#contact">TEAM CATALOG</a></li>
              <li><a href="#contact">FAQ</a></li>
              
            </ul>
            
            <div align="right">
            <button class="btn btn-small btn-warning" type="button" id="notify_btn"><b>Notification</b></button><span class="badge badge-important" id="notify_badge">1</span>
            <button class="btn btn-small btn-primary" type="button">Create Proposal</button>
            <i class="icon-white icon-plus" id="plus_sign"></i><button class="btn btn-small btn-primary" type="button">Create Project</button>
            <i class="icon-white icon-plus" id="plus_sign"></i><button class="btn btn-small btn-primary" type="button">Create Team</button>
            <i class="icon-white icon-plus" id="plus_sign"></i>
            </div>
            
         </div>
      </div>
    </div>

  
    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/angular/angular.min.js"></script>
    <script src="assets/js/angular/angular-resource.min.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="assets/js/controllers.js"></script>

    <script src="assets/js/bootstrap/bootstrap-transition.js"></script>
    <script src="assets/js/bootstrap/bootstrap-alert.js"></script>
    <script src="assets/js/bootstrap/bootstrap-modal.js"></script>
    <script src="assets/js/bootstrap/bootstrap-dropdown.js"></script>
    <script src="assets/js/bootstrap/bootstrap-scrollspy.js"></script>
    <script src="assets/js/bootstrap/bootstrap-tab.js"></script>
    <script src="assets/js/bootstrap/bootstrap-tooltip.js"></script>
    <script src="assets/js/bootstrap/bootstrap-popover.js"></script>
    <script src="assets/js/bootstrap/bootstrap-button.js"></script>
    <script src="assets/js/bootstrap/bootstrap-collapse.js"></script>
    <script src="assets/js/bootstrap/bootstrap-carousel.js"></script>
    <script src="assets/js/bootstrap/bootstrap-typeahead.js"></script>

  </body>
</html>