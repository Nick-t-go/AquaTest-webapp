app.controller('demoRecordCTRL',  function($scope, $timeout,  $mdSidenav, $log, Demo, $rootScope, $cookies) {
    $scope.tanks = [];
    $scope.tests = [];
    $scope.clicked = false;

    var demoUser = $cookies.getObject('demoUser');
    console.log(demoUser);


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
        console.log(typeof tank);

        //$scope.time = new Date().getTime();
        //$scope.clicked = true;
        //testsResults.forEach(function (testResult) {
        //    Demo.addToFire(tank, testResult.type, testResult.value, $scope.time, demoUser.uid);
        //});
        //
        //Demo.recordTime($scope.time,$rootScope.user.uid, tank);
        //
        ////$rootScope.userCredentials.feed.push({subCat:"watertest", category:"watertests",action:"create", value: tank.$id, detail:"New Test Results Recorded", date: $scope.time});
        ////$rootScope.userCredentials.$save();
        //
        //$mdToast.show(
        //    $mdToast.simple()
        //        .content('Test Successfully Submitted!')
        //        .position('top right')
        //        .theme("success-toast")
        //        .hideDelay(3000)
        //);


        //$cordovaToast.show("New Report Submitted", 'long', 'top').then(function(success) {
        //    console.log("The toast was shown");
        //    $scope.clicked = false;
        //}, function (error) {
        //    console.log("The toast was not shown due to " + error);
        //    $scope.clicked = false;
        //});

    };



})