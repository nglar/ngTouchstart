> __No longer maintained, would you be our new maintainer? Let us know at [mark@ulties.com](mailto:mark@ulties.com).__

![nglar - ngTouchstart](https://raw.githubusercontent.com/nglar/ngTouchstart/master/resources/logo.png)

A angular module to add directives for touch devices.

[![Build Status](https://travis-ci.org/nglar/ngTouchstart.svg?branch=master)](https://travis-ci.org/nglar/ngTouchstart)
[![StyleCI Status](https://styleci.io/repos/30239459/shield?style=flat)](https://styleci.io/repos/30239459)
[![Dependencies](https://img.shields.io/david/nglar/ngTouchstart.svg)](https://github.com/nglar/ngTouchstart)
[![Dev Dependencies](https://img.shields.io/david/dev/nglar/ngTouchstart.svg)](https://github.com/nglar/ngTouchstart)
[![License](https://img.shields.io/bower/l/ngtouchstart.svg)](https://github.com/nglar/ngTouchstart)

* [Info](#info)
* [Installing/Loading](#installingloading)
    * [Install using Bower](#install-using-bower)
    * [Install using NPM](#install-using-npm)
    * [Loading](#loading)
* [Usage](#usage)
* [Links](#links)
* [Tests](#tests)
* [Contributing](#contributing)
* [Security Vulnerabilities](#security-vulnerabilities)
* [License](#license)

## Info

Version: 1.0.1    
Author: Mark Topper [[Facebook](https://facebook.com/marktopper)] [[Github](https://github.com/marktopper)] [[Twitter](https://twitter.com/webman.io)]    
Website: [ulties.com](https://ulties.com)    
Email: [mark@ulties.com](mailto:mark@ulties.com)

## Installing/Loading

### Install using Bower

Install using bower:
```
bower install ngtouchstart --save
```

### Install using NPM

Install using npm:
```
npm install ngtouchstart --save
```

[Go to NPM page for this package.](https://www.npmjs.com/package/ngtouchstart)

### Loading

Load the file to you HTML header:
```
<script type="text/javascript" src="path/to/components/ngtouchstart/build/ngTouchstart.min.js"></script>
```

## Usage

You must include the ngTouchstart dependency on your angular module:
````
var app = angular.module("demoapp", ["ngTouchstart"]);
````

Then in your controller:

```
$scope.onTouchmove = function($event) {
   console.log('touchmove event called');
}
```

Then in your HTML:
```
<div ng-touchmove="onTouchmove($event)"></div>
```

This will trigger whenever a touch device is touched and moving.

[__Get the whole ngTouch package.__](https://github.com/nglar/ngTouch)

## Links

The following is a list of libraries that extend ngTouchstart:

 * None yet

*Contact me at [mark@ulties.com](mailto:mark@ulties.com) to get yours added.*

The following is a list of libraries that requires by ngTouchstart:

 * [Angular](https://github.com/angular/angular.js):
HTML enhanced for web apps

The following is a list of alternatives for ngTouchstart:
* [ngTouch](https://github.com/nglar/ngTouch):
A angular module to add directives for touch devices.

## Tests

From the project directory, tests can be ran using `gulp test`

## Contributing

Thank you for considering contributing! The contribution guide can be found in the [contributions.md](https://github.com/nglar/ngTouchstart/blob/master/contributions.md).

## Security Vulnerabilities

If you discover a security vulnerability within ngTouch, please send an e-mail to Mark Topper at [mark@ulties.com](mailto:mark@ulties.com). All security vulnerabilities will be promptly addressed.

## License

Released under the MIT License - see [`license.txt`](https://github.com/nglar/ngTouchstart/blob/master/license) for details.
