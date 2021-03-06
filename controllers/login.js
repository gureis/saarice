angular.module('login',[])

.controller('loginCtrl', function($scope, $request, $helper, $location){
    $(document).ready(function(){
        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true,
          }
        );
        $('.collapsible').collapsible();
    });

    $scope.goToHome = function(){
        $('.button-collapse').sideNav('hide');
        $location.path('/');
    };

    $scope.usuario = {
        login:'',
        senha:''
    };

    $scope.doLogin = function(){
       // $scope.usuario.senha = md5.createHash($scope.usuario.senha);
        $request.login($scope.usuario)
            .then(function(response) {
                console.log(response);
                if(response.status  === "Ok"){
                    $('#ModalLogin').modal('close');
                    $scope.usuario.nome = response.nome;
                    $scope.usuario.senha = response.senha;
                    $helper.setUsuario($scope.usuario);
                    $location.path('/');
                    Materialize.toast('Bem vindo ' + $scope.usuario.nome, 4000, 'green');
                }else{
                    Materialize.toast(response.status, 4000,'red');
                }
            }, function(error) {
                Materialize.toast('Erro de login', 'red');
                console.log("erro de requisicao", error);
            }
        );
    };
    
})