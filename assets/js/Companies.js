function CompanyController($scope) {
  $scope.projectsAvailable = [
    {"name": "Project A",
     "objective": "Look here"},
    {"name": "Project B",
     "objective": "Smile"},
    {"name": "Project C",
     "objective": "Look at that"}
  ];

    $scope.projectsInvolvement = [
    {"name": "Project A",
     "objective": "Look down"},
    {"name": "Project B",
     "objective": "Look up"},
    {"name": "Project C",
     "objective": "Look right"}
  ];
}