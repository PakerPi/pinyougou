//控制层 
app.controller('userController', function($scope, $controller, userService) {

	// 注册
	$scope.reg = function() {
		if ($scope.entity.password != $scope.password) {
			alert("两次密码输入不一致，请重新输入");
			$scope.entity.password = "";
			$scope.password = "";
			return;
		}
		// 新增
		userService.add($scope.entity,$scope.smscode).success(function(response) {
			alert(response.message);
		});
		location.href='http://localhost:9100/cas/login.html';
	}
	
	$scope.sendCode=function(){
		if($scope.entity.phone==null){
			alert("请输入手机号！");
			return;
		}
		userService.sendCode($scope.entity.phone).success(
			function(response){
				alert(response.message);
			} 
		);
	}
});
