/**
 * Created by uzer-y on 2/3/16.
 */
app.controller('loginCTRL', function($scope,$mdDialog, $mdMedia){


    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');


    $scope.showTabDialog = function(ev, button) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
        $mdDialog.show({
            controller: 'SignUpCTRL',
            templateUrl: 'app/login/signup.modal.html',
            parent: angular.element(document.h1),
            targetEvent: ev,
            clickOutsideToClose:true,
            openFrom: '#center',
            fullscreen: useFullScreen
        })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    };


    $scope.intro = {
        infoBox: [
            {
                name: "Record",
                imgUrl: "media/images/ic_backup_black_48px.svg",
                line: "Record Test Results Right on Your Computer"
            },
            {
                name: "Summarize",
                imgUrl: "media/images/ic_assignment_black_48px.svg",
                line: "Get a Quick Glance at Daily Reports"
            },
            {
                name: "Visualize",
                imgUrl: "media/images/ic_insert_chart_black_48px.svg",
                line: "Visualize Results to Identify Trends"
            }
            ],
        contact: "nickteach888@gmail.com",
        video: "media/bubbles.mp4",
        about: [
            {
                header: "Who",
                description: "AquaTest is Family. Designed, developed and field tested by father and sons for use in our geodesic dome in upstate New York." +
                " Now we are giving AquaTest to whoever can benefit from it. Whether it be hobbyists, professionals or people somewhere in between. If you monitor aquatic life" +
                " or have plant life that is dependent on water quality then you can take advantage of our digital tools. Let us help you maintain homeostasis."
            },
            {
                header: "What",
                description: "AquaTest is both a mobile and web application for recording, storing, reviewing, summarizing and visualizing water test results" +
                " Data is stored in the cloud and zapped down to whatever device you need it on so you can make better decisions regarding your aquatic systems. "
            },
            {
                header: "Where",
                description: "Use AquaTest for your freshwater and saltwater aquariums. Use it for your aquaponic or hydroponic garden. If you own fish, AquaTest can help you." +
                "If you own aquatic plants, AquaTest can help you."
            },
            {
                header: "Why",
                description: "Our application helps you maintain a stable ecosystem which is essential for the sustainability of fish, hydrophytes, and coral. " +
                "  It also helps you ditch the wet sticky paper you been recording your test results on. No more messing around in excel. No more searching through " +
                "old notebooks trying to figure out why your PH drastically changed. AquaTest will help you keep track of all your historic data and help you compare " +
                "test results to other events so that you can determine the cause of any inconsistencies and quickly rectify them. Spend more time solving problems and less" +
                " time figuring out what the catalysts are."
            }
        ]
       }

});