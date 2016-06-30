
(function(){
  var app = angular.module('checklist', [ ]);

  app.controller('checklistController', function($scope){
    this.default = All;

    this.categs = [All];

    this.nums = [1];

    this.catSubmit = function(cat){
      var group = new Category(cat);
      if (cat != null) {
        this.categs.push(group);
      }
    };

    this.taskSubmit = function(task,cat){
      if (task != "") {
        All.toDo.push(task);
        if (cat.name != All.name) {
          cat.toDo.push(task);
        }
      }
    };

    this.completeTask = function(task,category){
      if (category.name != All.name) {
        var ind = All.toDo.indexOf(task);
        if (ind > -1) {
          All.toDo.splice(ind, 1);
        }
        All.completed.push(task);
      }

      var index = category.toDo.indexOf(task);
      if (index > -1) {
        category.toDo.splice(index, 1);
      }
      category.completed.push(task);
      
    };

    this.tab = 0;

    this.header = All;

    this.setTab = function(cat){
      this.tab = this.categs.indexOf(cat);
      this.header = cat;
    };

    this.isSet = function(cat){
      return cat === this.header;
    }
  });

  function Category(name){
    this.name = name;
    this.toDo = [];
    this.completed = [];
  }

  var All = new Category("All");


})();


