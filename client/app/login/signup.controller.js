app.controller('SignUpCTRL', function($scope,$mdDialog, $mdMedia, locals, Auth, $rootScope){


    $scope.gLogin = function() {
        Auth.getAuth().$authWithOAuthPopup("google").then(function(authData) {
            console.log(authData);
            // User successfully logged in
        }).catch(function(error) {
            if (error.code === "TRANSPORT_UNAVAILABLE") {
                Auth.getAuth().$authWithOAuthPopup("google").then(function(authData) {
                    console.log("authenticated");
                });
            } else {
                console.log(error);
            }
        });

    };

    Auth.getAuth().$onAuth(function(authData) {
        if (authData === null) {
            console.log("Not logged in yet");
        } else {
            $rootScope.user = authData;
            $rootScope.authData = authData;
            console.log(authData);
        }
    });


    $scope.active = locals.pushed;
    console.log( $scope.active);

    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
});