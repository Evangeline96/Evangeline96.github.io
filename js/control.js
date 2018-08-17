(function () {
    var app = angular.module("demoapp", []);
    app.controller("democontroller", function ($scope, $http) {
        var responseCallback = function (response) {
            $scope.data = response.data;
            $scope.details = response.data;
             var datac = [];
             var labelc = [];
             var vcredit=0;
             var vdebit=0;
             for (var i = 0; i < $scope.details.length; i++) {
                 if($scope.details[i].account_id==52000140129)
                 {
                 if($scope.details[i].transaction_type == "CREDIT")
                 vcredit =vcredit+$scope.details[i].transaction_amount;
                 else
                 vdebit =vdebit+$scope.details[i].transaction_amount;
                 }
             }
             datac.push(vcredit);
             datac.push(vdebit);
             f1( datac);
             $scope.creditval=vcredit;
             $scope.debitval=vdebit;
        }
        $http.get('TransactionDetails.json').then(responseCallback);
        console.log($scope.details);

    });
})();