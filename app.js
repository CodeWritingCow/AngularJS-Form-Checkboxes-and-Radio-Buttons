var formApp = angular.module('formApp', [])

.controller('formController', function ($scope) {

    $scope.formData = {};

    $scope.submitForm = function (isValid) {

        if (isValid) {
            alert('Thanks for the submission!');
        }

    };

});