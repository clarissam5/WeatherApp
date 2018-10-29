/**
 * Converting WeatherApp written in jquery to angular framework
 */
/*$(document).ready(function () {
    let zipcode = $("#zipcode");

    $("#show-weather").click(function () {
        console.log(zipcode);
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode.val() + ",us&units=imperial&appid=c2f8212a26a7a84d3ab42886d3861a88",
            type: 'GET',
            success: function (data) {
                console.log(data);
                $("#city-name").text(data.name);
                $("#lat").text(data.coord.lat);
                $("#lon").text(data.coord.lon);
                $("#weather-main").text(data.weather[0].main);
                $("#weather-desc").text(data.weather[0].description);
                $("#wind-speed").text(data.wind.speed);
                $("#wind-degree").text(data.wind.deg);
                $("#temp-current").text(data.main.temp);
                $("#temp-min").text(data.main.temp_min);
                $("#temp-max").text(data.main.temp_max);
                $("#humidity").text(data.main.humidity);

            },
            error: function (error) {
                console.log(error);
            },
        });
    });
});*/
angular.module('myWeatherApp', []).controller('weatherController', ['$scope', '$http', function($scope, $http){
	
	$scope.zipCode = '';
	console.log($scope.zipCode);
	
	$scope.showWeather = function (zipCode) {
		$http.get('https://api.openweathermap.org/data/2.5/weather?zip=' + $scope.zipCode + ',us&units=imperial&appid=c2f8212a26a7a84d3ab42886d3861a88')
		.then(function(response) {
			console.log($scope.zipCode);
			$scope.myData = response.data;
			$scope.zipCode = '';
		}, function(response) {
			$scope.content = "Error.";
		});
    };	
}]);
