app.controller('CustomerDetailController', function($scope, customer, CustomerFactory, $state){
    $scope.customer = customer;

    $scope.updateCustomer = function(){
        CustomerFactory.updateCustomer($scope.customer._id, $scope.customer)
            .then(function(){
                $state.go('customer');
            });
    };

    $scope.delete = function(){
        CustomerFactory.deleteCustomer($scope.customer._id)
            .then(function(){
                $state.go('customer');
            });
    }
});