'user strict';

app.factory('CustomerFactory', function($http){
    return{

          getCustomers: function(){
            return $http.get('api/customer')
                .then(function(results){
                    return results.data;
                })
        },

        createCustomer: function(info){
            return $http.post('api/customer', info)
                .then(function(results){
                    return results.data;
                })
        },
        getCustomer: function(id){
            return $http.get('/api/customer/' + id)
                .then(function(results){
                    return results.data;
                })
        },
        updateCustomer: function(id, updateInfo){
        return $http.put('/api/customer/' + id, updateInfo)
            .then(function(results){
                return results.data;
            })
        },

        deleteCustomer: function(id){
        return $http.delete('/api/customer/' + id)
            .then(function(results) {
                return results.data;
            })
        }
    };
});
