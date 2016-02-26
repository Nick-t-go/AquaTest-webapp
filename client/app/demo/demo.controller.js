app.controller('demoCTRL', function($scope, $timeout, $mdSidenav, $log, $rootScope) {
        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.something = "false";
        $scope.toggleRight = buildToggler('right');
        $scope.isOpenRight = function(){
            return $mdSidenav('right').isOpen();
        };
        $scope.menuSelection= false;

        $scope.changeSomething = function(){
            $scope.something = !$scope.something;
            console.log($scope.something);
        };
        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function() {
                $scope.something = true;
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 200);
        }
        function buildToggler(navID) {
            return function() {
                $mdSidenav(navID)
                    .toggle()
                    .isLockedOpen()
                    .then(function () {
                        $mdSidenav(navID).isLockedOpen()
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }

    $scope.close = function () {
        $mdSidenav('left').close()
            .then(function () {
                $log.debug("close LEFT is done");
            });
    };

    $scope.menuSelect = function(select){
        $scope.close();
        $scope.menuSelection = select;
        $scope.$digest()
    };

    //$scope.close = function () {
    //    $mdSidenav('right').close()
    //        .then(function () {
    //            $log.debug("close RIGHT is done");
    //        });
    //};
});
