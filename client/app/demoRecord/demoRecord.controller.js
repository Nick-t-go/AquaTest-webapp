app.controller('demoRecordCTRL',  function($scope, $mdToast,  $mdSidenav, $log, Demo, $rootScope, $cookies) {
    $scope.tanks = [];
    $scope.tests = [];
    $scope.clicked = false;

    var demoUser = $cookies.getObject('demoUser');


    Demo.getTestTypes(demoUser.uid)
        .then(function(testTypes){
            $scope.tests = testTypes;
            console.log('tests',$scope.tests)
        });

    Demo.getTanks(demoUser.uid)
        .then(function(tanks){
            $scope.tanks = tanks;
        });


    $scope.submitForm = function(tank, testResults) {

        console.log('tank:', tank, 'testResults:', testResults)

        $scope.time = new Date().getTime();
        $scope.clicked = true;
        testResults.forEach(function (testResult) {
            console.log(tank, testResult.type, testResult.value, $scope.time, demoUser.uid)
            Demo.addToFire(tank, testResult.type, testResult.value, $scope.time, demoUser.uid);
        });

        Demo.recordTime($scope.time,demoUser.uid, tank);

        //$rootScope.userCredentials.feed.push({subCat:"watertest", category:"watertests",action:"create", value: tank.$id, detail:"New Test Results Recorded", date: $scope.time});
        //$rootScope.userCredentials.$save();

        $mdToast.show(
            $mdToast.simple()
                .content('Test Successfully Submitted!')
                .position('top right')
                .theme("success-toast")
                .hideDelay(3000)
        )
            .then(function(){
            console.log('shown')
        });
    };

    $scope.cancel=function(){
        $mdToast.show(
            $mdToast.simple()
                .content('Test Successfully Submitted!')
                .position('top right')
                .theme("success-toast")
                .hideDelay(300000)
        )
            .then(function(){
                console.log('shown')
            });

    }



})