/* global angular */
(function() {
  angular.module("app").controller("peopleCtrl", function($scope) {

    $scope.people = [
      {
        name: "Jim Lahey",
        bio: "I'm mowing the air!",
        bioVisible: true
      },
      {
        name: "Father Badass",
        bio: "Don't ask",
        bioVisible: true
      },
      {
        name: "Satan",
        bio: "I feel very misunderstood",
        bioVisible: true
      }
    ];

    $scope.toggleBio = function(inputPerson) {
      inputPerson.bioVisible = !inputPerson.bioVisible;
    };

    $scope.addPerson = function(inputPersonName, inputPersonBio) {
      $scope.people.push({
        name: inputPersonName,
        bio: inputPersonBio,
        bioVisible: true
      });
    };

    $scope.deletePerson = function(inputIndex) {
      $scope.people.splice(inputIndex, 1);
    };

    window.$scope = $scope;
  });
})();