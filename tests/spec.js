'use strict';

describe('ngTouchstart', function () {

	var element;

	beforeEach(function () {
		module('ngTouchstart');
	});

	it('should get called on touchstart', inject(function($rootScope, $compile) {
		element = $compile('<div ng-touchstart="started = true"></div>')($rootScope);
		$rootScope.$digest();
		expect($rootScope.started).toBeUndefined();
		element.triggerHandler('touchstart');
		expect($rootScope.started).toEqual(true);
	}));
});
