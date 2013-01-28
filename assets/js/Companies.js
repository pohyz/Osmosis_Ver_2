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

      $scope.projects = [
    {"id": "111",
     "title": "title for 111",
     "description": "content for 111"},

     {"id": "222",
     "title": "title for 222",
     "description": "content for 222"},

      {"id": "333",
     "title": "title for 333",
     "description": "content for 333"},
  ];
}