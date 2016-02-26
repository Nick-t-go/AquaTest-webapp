app.controller('demoReportsCTRL',  function($scope, $mdToast,  $mdSidenav, $log, Demo, $rootScope, $cookies) {
    $scope.tanks = [];
    $scope.dates = [];
    $scope.clicked = false;


    var demoUser = $cookies.getObject('demoUser');


    Demo.getDates(demoUser.uid)
        .then(function(times){
            times.forEach(function(time){
                $scope.dates.push({time:time.$id, tank:time.$value});
            });
        });

    Demo.getTanks(demoUser.uid)
        .then(function(tanks){
            $scope.tanks = tanks;
        });

    $scope.filterDates= function(tank){
        $scope.filteredDates = null;
        $scope.filteredDates = $scope.dates.filter(function(time){
            return time.tank === tank.name
        })
    };

    $scope.console = function(){
        console.log($scope.reports);
    };


    $scope.getReport = function(tank, date) {
        console.log(tank, date);
        Demo.getTestsByDate(tank, date.time, demoUser.uid)
            .then(function(result){
                console.log(result);
                $scope.reports = result;
            });
    };





})