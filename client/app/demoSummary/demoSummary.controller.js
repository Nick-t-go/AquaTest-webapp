app.controller('demoSummaryCTRL',  function($scope, $mdToast,  $mdSidenav, $log, Demo, $rootScope, $cookies) {
    $scope.tanks = [];
    $scope.tests = [];
    $scope.clicked = false;


    var demoUser = $cookies.getObject('demoUser');


    Demo.getTestTypes(demoUser.uid)
        .then(function(testTypes){
            $scope.tests = testTypes;
        });

    Demo.getTanks(demoUser.uid)
        .then(function(tanks){
            $scope.tanks = tanks;
        });

    $scope.data = [
        {
            "key" : "Quantity" ,
            "bar": true,
            "values" : []
        }];

    $scope.summarize = function(tank, testType){
        Demo.getOneTest(tank, testType, demoUser.uid)
            .then(function(result){
                $scope.data[0].values = result.map(function(test){
                    return [test.date, parseFloat(test.val)];
                });
            });
    };

});