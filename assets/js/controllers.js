'use strict';

/* Controllers */

function UserController($scope,$resource){
        $scope.user = $resource('/api/user').get();
}

function LoginCtrl($scope,$resource){
        $scope.user_type = "user";
        $scope.login_type = "login";
        $scope.Model = $resource('http://galaxy-osmosis.appspot.com/:user_type/:ftn',
                                {},
                                {'send': {method: 'JSONP', isArray: false, params:{callback: 'JSON_CALLBACK'}}}
                        );

        //User login
        $scope.login = function(){
          
          if($scope.user_type == "user"){

              var data = {'user_type':$scope.user_type,
                  'ftn':$scope.login_type,
                  'email':$scope.c_email,
                  'password':$scope.c_password
              };
          }
          else{

              var data = {'user_type':$scope.user_type,
                  'ftn':'login',
                  'reg_num':$scope.reg_num,
                  'password':$scope.password
              };
          }
                
          $scope.Model.send(data,function(response) {

              if($scope.login_status){
                  
                  window.location.assign("/main");
              }
              $scope.login_status = "Login Failed.";

          });
        };
}

function SignupCtrl($scope,$resource){

        $scope.Model = $resource('http://galaxy-osmosis.appspot.com/:user_type/:ftn',
                                {},
                                {'send': {method: 'JSONP', isArray: false, params:{callback: 'JSON_CALLBACK'}}}
                        );

        //User sign up
        $scope.signup = function(){
          
          if($scope.user_type == "user"){

              data = {'user_type':$scope.user_type,
                  'ftn':'signup',
                  'email':$scope.new_email,
                  'password':$scope.new_password
              };
          }
          data = {'user_type':$scope.user_type,
                  'ftn':'signup',
                  'reg_num':$scope.new_reg_num,
                  'password':$scope.new_password
          };
                
          $scope.Model.send(data,function(response) {

            $scope.signup_status = response.signup_result;
            
            if($scope.user_type == "user"){

                window.location.href("#/main");
            }

          });

        };
}
