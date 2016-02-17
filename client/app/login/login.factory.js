
app.factory("Auth", function($firebaseArray, $firebaseAuth) {
    return {
        getAuth: function () {
            var usersRef = new Firebase("https://domemonitor.firebaseio.com/");
            return $firebaseAuth(usersRef);
        },

        addNewUser: function (user) {
            var ref = new Firebase('https://domemonitor.firebaseio.com/');
            var authObject = $firebaseAuth(ref);
            return authObject.$createUser({email: user.email, password: user.password})
                .then(function (userData) {
                    console.log("User " + userData.uid + " created successfully!");
                })
                .catch(function (error) {
                    console.error("Error: ", error);
                });
        }
    }
});