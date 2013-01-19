'use strict';

/* Controllers */

function UserController($scope,$resource){
         $scope.Model = $resource('http://galaxy-osmosis.appspot.com/login',
                                {},
                                {'send': {method: 'JSONP', isArray: false, params:{callback: 'JSON_CALLBACK'}}}
                        );

         $scope.getLink = function(){

            $scope.Model.send({},function(response) {

              $scope.user_profile = response.toString();

            });
         };
}

/*function LoginCtrl($scope,$resource){
        var data = {};
        $scope.user_type = "user";
        $scope.login_type = "login";
        $scope.Model = $resource('http://galaxy-osmosis.appspot.com/:user_type/:ftn',
                                {},
                                {'send': {method: 'JSONP', isArray: false, params:{callback: 'JSON_CALLBACK'}}}
                        );

        //User login
        $scope.login = function(){
          
          data = {'user_type':$scope.user_type,
              'ftn':$scope.login_type,
              'email':$scope.c_email,
              'password':$scope.c_password
          };
          
          $scope.Model.send(data,function(response) {

              if($scope.login_status){
                  
                  window.location.assign("/main");
              }
              $scope.login_status = "Login Failed.";

          });
        };
}

function SignupCtrl($scope,$resource){
        var data = {};
        $scope.Model = $resource('http://galaxy-osmosis.appspot.com/:user_type/:ftn',
                                {},
                                {'send': {method: 'JSONP', isArray: false, params:{callback: 'JSON_CALLBACK'}}}
                        );

        //User sign up
        $scope.signup = function(){
          
           data = {'user_type':$scope.user_type,
              'ftn':'signup',
              'email':$scope.c_email,
              'password':$scope.c_password
          };
                
          $scope.Model.send(data,function(response) {

            $scope.signup_status = response.signup_result;
            
            if($scope.user_type == "user"){

                window.location.href("#/main");
            }

          });

        };
}*/

function ProfileCtrl($scope,$resource,$http){
        var data = {};
        $scope.Model = $resource('http://galaxy-osmosis.appspot.com/:user_type/:ftn',
                                {},
                                {'send': {method: 'JSONP', isArray: false, params:{callback: 'JSON_CALLBACK'}}}
                        );

        $scope.team_profile = {};
        $scope.skill = {};
        $scope.member = {};
        $scope.certificate = {};
        $scope.user_type = user_type;
        $scope.username = username;
        $scope.team = {};
        $scope.project = {};
        
        $scope.getProfile = function(){

          if($scope.user_type == "user" || $scope.user_type == "company"){

            data = {'user_type':$scope.user_type,
                'ftn':'get_info',
                'email':$scope.username
            };

            $scope.Model.send(data,function(response) {

              $scope.user_profile = response;

            });
            
          }
          else{

            data = {'user_type':$scope.user_type,
                'ftn':'get_info',
                'id':$scope.username
            };

            $scope.Model.send(data,function(response) {

              $scope.team_profile = response;

            });
          }

        };

        $scope.updateProfile = function(){

          if($scope.user_type == "user"){

            data = {'user_type':$scope.user_type,
                'ftn':'update',
                'email':$scope.username,
                'f_name':$scope.f_name,
                'l_name':$scope.l_name,
                'qualification':$scope.qualification,
                'c_location':$scope.c_location,
                'about_user':$scope.about_user,
                'skill':$scope.skill,
                'project':$scope.project,
                'team':$scope.team,
                'certificate':$scope.certificate,
                'company':$scope.company
            };

            $scope.Model.send(data,function(response) {

              $scope.user_profile = response;

            });
          }
          else if($scope.user_type == "company"){

            data = {'user_type':$scope.user_type,
                'ftn':'update',
                'email':$scope.username,
                'name':$scope.c_name,
                'reg_num':$scope.reg_num,
                'website':$scope.website,
                'industry':$scope.industry,
                'c_type':$scope.c_type,
                'about_company':$scope.about_company
            };

            $scope.Model.send(data,function(response) {

              $scope.user_profile = response;

            });
          }
          else{

            data = {'user_type':$scope.user_type,
                'ftn':'update',
                'id':$scope.username,
                'name':$scope.t_name,
                'description':$scope.t_description,
                'email':$scope.t_email,
                'website':$scope.t_website,
                'skill':$scope.skill,
                'member':$scope.member,
                'leader_email':$scope.leader_email
            };

            $scope.Model.send(data,function(response) {

              $scope.team_profile = response;

            });
          }
          
        };

        $scope.getTeams = function(){

        };
}


