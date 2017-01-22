function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ mouse.count }}</div>',
			'</div>'
		].join(''),
		controller: function () {
			this.count = 0;
		},
		controllerAs: "mouse",
		link: function (scope, elem, attrs, ctrl) {
			elem.on("click", function () {
				ctrl.count += 1;
				scope.$apply()
			})
			scope.$on("$destroy", function () {
				elem.off();
			})
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);