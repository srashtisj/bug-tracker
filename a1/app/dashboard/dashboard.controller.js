(function(window, angular, undefined){
    DashboardController.$inject = [];

    function DashboardController() {
        var dashboard = this;
    }

    angular.module('bug-tracker')
        .controller('dashboardController', DashboardController);
})(window, angular);