/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _popmotion = __webpack_require__(1);
	
	var popmotion = _interopRequireWildcard(_popmotion);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	window.popmotion = popmotion;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7SUFBWSxTOzs7O0FBQ1osT0FBTyxTQUFQLEdBQW1CLFNBQW5CIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvcG1vdGlvbiBmcm9tICcuL3BvcG1vdGlvbic7XG53aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuIl19

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.svgPath = exports.svg = exports.css = exports.Renderer = exports.value = exports.stagger = exports.tween = exports.pointer = exports.physics = exports.parallel = exports.offset = exports.delay = exports.crossFade = exports.composite = exports.chain = exports.blendTweens = exports.Action = exports.valueTypes = exports.transform = exports.easing = exports.calc = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _framesync = __webpack_require__(18);
	
	Object.defineProperty(exports, 'onFrameStart', {
	  enumerable: true,
	  get: function () {
	    return _framesync.onFrameStart;
	  }
	});
	Object.defineProperty(exports, 'onFrameUpdate', {
	  enumerable: true,
	  get: function () {
	    return _framesync.onFrameUpdate;
	  }
	});
	Object.defineProperty(exports, 'onFrameRender', {
	  enumerable: true,
	  get: function () {
	    return _framesync.onFrameRender;
	  }
	});
	Object.defineProperty(exports, 'onFrameEnd', {
	  enumerable: true,
	  get: function () {
	    return _framesync.onFrameEnd;
	  }
	});
	Object.defineProperty(exports, 'cancelOnFrameStart', {
	  enumerable: true,
	  get: function () {
	    return _framesync.cancelOnFrameStart;
	  }
	});
	Object.defineProperty(exports, 'cancelOnFrameUpdate', {
	  enumerable: true,
	  get: function () {
	    return _framesync.cancelOnFrameUpdate;
	  }
	});
	Object.defineProperty(exports, 'cancelOnFrameRender', {
	  enumerable: true,
	  get: function () {
	    return _framesync.cancelOnFrameRender;
	  }
	});
	Object.defineProperty(exports, 'cancelOnFrameEnd', {
	  enumerable: true,
	  get: function () {
	    return _framesync.cancelOnFrameEnd;
	  }
	});
	Object.defineProperty(exports, 'timeSinceLastFrame', {
	  enumerable: true,
	  get: function () {
	    return _framesync.timeSinceLastFrame;
	  }
	});
	Object.defineProperty(exports, 'currentFrameTimestamp', {
	  enumerable: true,
	  get: function () {
	    return _framesync.currentFrameTimestamp;
	  }
	});
	
	var _calc2 = __webpack_require__(2);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _easing2 = __webpack_require__(3);
	
	var _easing = _interopRequireWildcard(_easing2);
	
	var _transformers = __webpack_require__(4);
	
	var _transform = _interopRequireWildcard(_transformers);
	
	var _valueTypes2 = __webpack_require__(5);
	
	var _valueTypes = _interopRequireWildcard(_valueTypes2);
	
	var _actions = __webpack_require__(19);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _blendTweens2 = __webpack_require__(6);
	
	var _blendTweens3 = _interopRequireDefault(_blendTweens2);
	
	var _chain2 = __webpack_require__(7);
	
	var _chain3 = _interopRequireDefault(_chain2);
	
	var _composite2 = __webpack_require__(8);
	
	var _composite3 = _interopRequireDefault(_composite2);
	
	var _crossFade2 = __webpack_require__(9);
	
	var _crossFade3 = _interopRequireDefault(_crossFade2);
	
	var _delay2 = __webpack_require__(10);
	
	var _delay3 = _interopRequireDefault(_delay2);
	
	var _offset2 = __webpack_require__(11);
	
	var _offset3 = _interopRequireDefault(_offset2);
	
	var _parallel2 = __webpack_require__(12);
	
	var _parallel3 = _interopRequireDefault(_parallel2);
	
	var _physics2 = __webpack_require__(13);
	
	var _physics3 = _interopRequireDefault(_physics2);
	
	var _pointer2 = __webpack_require__(14);
	
	var _pointer3 = _interopRequireDefault(_pointer2);
	
	var _tween2 = __webpack_require__(15);
	
	var _tween3 = _interopRequireDefault(_tween2);
	
	var _stagger2 = __webpack_require__(16);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _value2 = __webpack_require__(17);
	
	var _value3 = _interopRequireDefault(_value2);
	
	var _renderers = __webpack_require__(20);
	
	var _renderers2 = _interopRequireDefault(_renderers);
	
	var _css2 = __webpack_require__(21);
	
	var _css3 = _interopRequireDefault(_css2);
	
	var _svg2 = __webpack_require__(22);
	
	var _svg3 = _interopRequireDefault(_svg2);
	
	var _svgPath2 = __webpack_require__(23);
	
	var _svgPath3 = _interopRequireDefault(_svgPath2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.calc = _calc;
	exports.easing = _easing;
	exports.transform = _transform;
	exports.valueTypes = _valueTypes;
	
	// Actions
	
	exports.Action = _actions2.default;
	exports.blendTweens = _blendTweens3.default;
	exports.chain = _chain3.default;
	exports.composite = _composite3.default;
	exports.crossFade = _crossFade3.default;
	exports.delay = _delay3.default;
	exports.offset = _offset3.default;
	exports.parallel = _parallel3.default;
	exports.physics = _physics3.default;
	exports.pointer = _pointer3.default;
	exports.tween = _tween3.default;
	exports.stagger = _stagger3.default;
	exports.value = _value3.default;
	
	// Renderers
	
	exports.Renderer = _renderers2.default;
	exports.css = _css3.default;
	exports.svg = _svg3.default;
	exports.svgPath = _svgPath3.default;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFFRSxZOzs7Ozs7c0JBQ0EsYTs7Ozs7O3NCQUNBLGE7Ozs7OztzQkFDQSxVOzs7Ozs7c0JBQ0Esa0I7Ozs7OztzQkFDQSxtQjs7Ozs7O3NCQUNBLG1COzs7Ozs7c0JBQ0EsZ0I7Ozs7OztzQkFDQSxrQjs7Ozs7O3NCQUNBLHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUdVLEk7UUFDQSxNO1FBQ0EsUztRQUNBLFU7Ozs7UUFHTCxNO1FBQ0EsVztRQUNBLEs7UUFDQSxTO1FBQ0EsUztRQUNBLEs7UUFDQSxNO1FBQ0EsUTtRQUNBLE87UUFDQSxPO1FBQ0EsSztRQUNBLE87UUFDQSxLOzs7O1FBR0EsUTtRQUNBLEc7UUFDQSxHO1FBQ0EsTyIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGcmFtZXN5bmMgc2NoZWR1bGVyc1xuZXhwb3J0IHtcbiAgb25GcmFtZVN0YXJ0LFxuICBvbkZyYW1lVXBkYXRlLFxuICBvbkZyYW1lUmVuZGVyLFxuICBvbkZyYW1lRW5kLFxuICBjYW5jZWxPbkZyYW1lU3RhcnQsXG4gIGNhbmNlbE9uRnJhbWVVcGRhdGUsXG4gIGNhbmNlbE9uRnJhbWVSZW5kZXIsXG4gIGNhbmNlbE9uRnJhbWVFbmQsXG4gIHRpbWVTaW5jZUxhc3RGcmFtZSxcbiAgY3VycmVudEZyYW1lVGltZXN0YW1wXG59IGZyb20gJy4vZnJhbWVzeW5jJztcblxuZXhwb3J0ICogYXMgY2FsYyBmcm9tICcuL2luYy9jYWxjJztcbmV4cG9ydCAqIGFzIGVhc2luZyBmcm9tICcuL2luYy9lYXNpbmcnO1xuZXhwb3J0ICogYXMgdHJhbnNmb3JtIGZyb20gJy4vaW5jL3RyYW5zZm9ybWVycyc7XG5leHBvcnQgKiBhcyB2YWx1ZVR5cGVzIGZyb20gJy4vaW5jL3ZhbHVlLXR5cGVzJztcblxuLy8gQWN0aW9uc1xuZXhwb3J0IEFjdGlvbiBmcm9tICcuL2FjdGlvbnMnO1xuZXhwb3J0IGJsZW5kVHdlZW5zIGZyb20gJy4vYWN0aW9ucy9ibGVuZC10d2VlbnMnO1xuZXhwb3J0IGNoYWluIGZyb20gJy4vYWN0aW9ucy9jaGFpbic7XG5leHBvcnQgY29tcG9zaXRlIGZyb20gJy4vYWN0aW9ucy9jb21wb3NpdGUnO1xuZXhwb3J0IGNyb3NzRmFkZSBmcm9tICcuL2FjdGlvbnMvY3Jvc3MtZmFkZSc7XG5leHBvcnQgZGVsYXkgZnJvbSAnLi9hY3Rpb25zL2RlbGF5JztcbmV4cG9ydCBvZmZzZXQgZnJvbSAnLi9hY3Rpb25zL29mZnNldCc7XG5leHBvcnQgcGFyYWxsZWwgZnJvbSAnLi9hY3Rpb25zL3BhcmFsbGVsJztcbmV4cG9ydCBwaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9waHlzaWNzJztcbmV4cG9ydCBwb2ludGVyIGZyb20gJy4vYWN0aW9ucy9wb2ludGVyJztcbmV4cG9ydCB0d2VlbiBmcm9tICcuL2FjdGlvbnMvdHdlZW4nO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9hY3Rpb25zL3N0YWdnZXInO1xuZXhwb3J0IHZhbHVlIGZyb20gJy4vYWN0aW9ucy92YWx1ZSc7XG5cbi8vIFJlbmRlcmVyc1xuZXhwb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXJzJztcbmV4cG9ydCBjc3MgZnJvbSAnLi9yZW5kZXJlcnMvY3NzJztcbmV4cG9ydCBzdmcgZnJvbSAnLi9yZW5kZXJlcnMvc3ZnJztcbmV4cG9ydCBzdmdQYXRoIGZyb20gJy4vcmVuZGVyZXJzL3N2Zy1wYXRoJztcbiJdfQ==

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.getValueFromProgress = exports.getProgressFromValue = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(24);
	
	/*
	  Convert number to x decimal places
	
	  @param [number]
	  @param [number]
	  @return [number]
	*/
	var toDecimal = function (num) {
	  var precision = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
	
	  precision = Math.pow(10, precision);
	  return Math.round(num * precision) / precision;
	};
	
	var ZERO_POINT = {
	  x: 0,
	  y: 0,
	  z: 0
	};
	
	var distance1D = function (a, b) {
	  return Math.abs(a - b);
	};
	
	/*
	  Angle between points
	  
	  Translates the hypothetical line so that the 'from' coordinates
	  are at 0,0
	  
	  @param [object]: X and Y coordinates of from point
	  @param [object]: X and Y cordinates of to point
	  @return [radian]: Angle between the two points in radians
	*/
	var angle = exports.angle = function (a) {
	  var b = arguments.length <= 1 || arguments[1] === undefined ? ZERO_POINT : arguments[1];
	  return radiansToDegrees(Math.atan2(a.x - b.x, a.y - b.y));
	};
	
	/*
	  Convert degrees to radians
	  
	  @param [number]: Value in degrees
	  @return [number]: Value in radians
	*/
	var degreesToRadians = exports.degreesToRadians = function (degrees) {
	  return degrees * Math.PI / 180;
	};
	
	/*
	  Dilate
	  
	  Change the progression between a and b according to dilation.
	  
	  So dilation = 0.5 would change
	  
	  a --------- b
	  
	  to
	  
	  a ---- b
	  
	  @param [number]: Previous value
	  @param [number]: Current value
	  @param [number]: Dilate progress by x
	  @return [number]: Previous value plus the dilated difference
	*/
	var dilate = exports.dilate = function (a, b, dilation) {
	  return a + (b - a) * dilation;
	};
	
	/*
	  Distance
	  
	  Returns the distance between two n dimensional points.
	  
	  @param [object/number]: x and y or just x of point A
	  @param [object/number]: (optional): x and y or just x of point B
	  @return [number]: The distance between the two points
	*/
	var distance = exports.distance = function (a) {
	  var b = arguments.length <= 1 || arguments[1] === undefined ? ZERO_POINT : arguments[1];
	
	  // 1D dimensions
	  if ((0, _utils.isNum)(a)) {
	    return distance1D(a, b);
	
	    // Multi-dimensional
	  } else {
	    var xDelta = distance1D(a.x, b.x);
	    var yDelta = distance1D(a.y, b.y);
	    var zDelta = (0, _utils.isNum)(a.z) ? distance1D(a.z, b.z) : 0;
	
	    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
	  }
	};
	
	/*
	  Progress within given range
	  
	  Given a lower limit and an upper limit, we return the progress
	  (expressed as a number 0-1) represented by the given value, and
	  limit that progress to within 0-1.
	  
	  @param [number]: Lower limit 
	  @param [number]: Upper limit
	  @param [number]: Value to find progress within given range
	  @return [number]: Progress of value within range as expressed 0-1
	*/
	var getProgressFromValue = exports.getProgressFromValue = function (from, to, value) {
	  return (value - from) / (to - from);
	};
	
	/*
	  Value in range from progress
	  
	  Given a lower limit and an upper limit, we return the value within
	  that range as expressed by progress (a number from 0-1)
	  
	  @param [number]: Lower limit of range
	  @param [number]: Upper limit of range
	  @param [number]: The progress between lower and upper limits expressed 0-1
	  @return [number]: Value as calculated from progress within range (not limited within range)
	*/
	var getValueFromProgress = exports.getValueFromProgress = function (from, to, progress) {
	  return -progress * from + progress * to + from;
	};
	
	/*
	  Point from angle and distance
	  
	  @param [object]: 2D point of origin
	  @param [number]: Angle from origin
	  @param [number]: Distance from origin
	  @return [object]: Calculated 2D point
	*/
	var pointFromAngleAndDistance = exports.pointFromAngleAndDistance = function (origin, angle, distance) {
	  angle = degreesToRadians(angle);
	
	  return {
	    x: distance * Math.cos(angle) + origin.x,
	    y: distance * Math.sin(angle) + origin.y
	  };
	};
	
	/*
	  Convert radians to degrees
	  
	  @param [number]: Value in radians
	  @return [number]: Value in degrees
	*/
	var radiansToDegrees = exports.radiansToDegrees = function (radians) {
	  return radians * 180 / Math.PI;
	};
	
	/*
	  Framerate-independent smoothing
	
	  @param [number]: New value
	  @param [number]: Old value
	  @param [number]: Frame duration
	  @param [number] (optional): Smoothing (0 is none)
	*/
	var smooth = exports.smooth = function (newValue, oldValue, duration) {
	  var smoothing = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	  return toDecimal(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
	};
	
	/*
	  Convert x per second to per frame velocity based on fps
	  
	  @param [number]: Unit per second
	  @param [number]: Frame duration in ms
	*/
	var speedPerFrame = exports.speedPerFrame = function (xps, frameDuration) {
	  return (0, _utils.isNum)(xps) ? xps / (1000 / frameDuration) : 0;
	};
	
	/*
	  Convert velocity into velicity per second
	  
	  @param [number]: Unit per frame
	  @param [number]: Frame duration in ms
	*/
	var speedPerSecond = exports.speedPerSecond = function (velocity, frameDuration) {
	  return velocity * (1000 / frameDuration);
	};
	
	/*
	  Create stepped version of 0-1 progress
	  
	  @param [int]: Number of steps
	  @param [number]: Current value
	  @return [number]: Stepped value
	*/
	var stepProgress = exports.stepProgress = function (steps, progress) {
	  var segment = 1 / (steps - 1);
	  var target = 1 - 1 / steps;
	  var progressOfTarget = Math.min(progress / target, 1);
	
	  return Math.floor(progressOfTarget / segment) * segment;
	};
	//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7OztBQVVBLElBQU0sMEJBQVMsVUFBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixRQUFyQjtBQUFBLE1BQStCLFNBQS9CLHlEQUEyQyxDQUEzQztBQUFBLFNBQWlELFVBQVUsV0FBWSxZQUFZLFdBQVcsUUFBdkIsSUFBbUMsS0FBSyxHQUFMLENBQVMsU0FBVCxFQUFvQixRQUFwQixDQUF6RCxDQUFqRDtBQUFBLENBQWY7Ozs7Ozs7O0FBUUEsSUFBTSx3Q0FBZ0IsVUFBQyxHQUFELEVBQU0sYUFBTjtBQUFBLFNBQXlCLGtCQUFNLEdBQU4sQ0FBRCxHQUFlLE9BQU8sT0FBTyxhQUFkLENBQWYsR0FBOEMsQ0FBdEU7QUFBQSxDQUF0Qjs7Ozs7Ozs7QUFRQSxJQUFNLDBDQUFpQixVQUFDLFFBQUQsRUFBVyxhQUFYO0FBQUEsU0FBNkIsWUFBWSxPQUFPLGFBQW5CLENBQTdCO0FBQUEsQ0FBdkI7Ozs7Ozs7OztBQVNBLElBQU0sc0NBQWUsVUFBQyxLQUFELEVBQVEsUUFBUixFQUFxQjtBQUMvQyxNQUFNLFVBQVUsS0FBSyxRQUFRLENBQWIsQ0FBaEI7QUFDQSxNQUFNLFNBQVMsSUFBSyxJQUFJLEtBQXhCO0FBQ0EsTUFBTSxtQkFBbUIsS0FBSyxHQUFMLENBQVMsV0FBVyxNQUFwQixFQUE0QixDQUE1QixDQUF6Qjs7QUFFQSxTQUFPLEtBQUssS0FBTCxDQUFXLG1CQUFtQixPQUE5QixJQUF5QyxPQUFoRDtBQUNELENBTk0iLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG5jb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gIHByZWNpc2lvbiA9IDEwICoqIHByZWNpc2lvbjtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKGlzTnVtKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbmV4cG9ydCBjb25zdCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IChmcm9tLCB0bywgdmFsdWUpID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IChmcm9tLCB0bywgcHJvZ3Jlc3MpID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tO1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG5leHBvcnQgY29uc3QgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG5leHBvcnQgY29uc3QgcmFkaWFuc1RvRGVncmVlcyA9IChyYWRpYW5zKSA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChzdGVwcywgcHJvZ3Jlc3MpID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuIl19

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
	
	var createReversedEasing = exports.createReversedEasing = function (easing) {
	  return function (p) {
	    return 1 - easing(1 - p);
	  };
	};
	var createMirroredEasing = exports.createMirroredEasing = function (easing) {
	  return function (p) {
	    return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
	  };
	};
	
	var linear = exports.linear = function (p) {
	  return p;
	};
	
	var createExpoIn = exports.createExpoIn = function (power) {
	  return function (p) {
	    return Math.pow(p, power);
	  };
	};
	var easeIn = exports.easeIn = createExpoIn(2);
	var easeOut = exports.easeOut = createReversedEasing(easeIn);
	var easeInOut = exports.easeInOut = createMirroredEasing(easeIn);
	
	var circIn = exports.circIn = function (p) {
	  return 1 - Math.sin(Math.acos(p));
	};
	var circOut = exports.circOut = createReversedEasing(circIn);
	var circInOut = exports.circInOut = createMirroredEasing(circOut);
	
	var createBackIn = exports.createBackIn = function (power) {
	  return function (p) {
	    return p * p * ((power + 1) * p - power);
	  };
	};
	var backIn = exports.backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
	var backOut = exports.backOut = createReversedEasing(backIn);
	var backInOut = exports.backInOut = createMirroredEasing(backIn);
	
	var createAnticipateEasing = exports.createAnticipateEasing = function (power) {
	  var backEasing = createBackIn(power);
	  return function (p) {
	    return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
	  };
	};
	
	var anticipate = exports.anticipate = createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sNkJBQTZCLEtBQW5DOztBQUVPLElBQU0sc0RBQXVCLFVBQUMsTUFBRDtBQUFBLFNBQVksVUFBQyxDQUFEO0FBQUEsV0FBTyxJQUFJLE9BQU8sSUFBSSxDQUFYLENBQVg7QUFBQSxHQUFaO0FBQUEsQ0FBN0I7QUFDQSxJQUFNLHNEQUF1QixVQUFDLE1BQUQ7QUFBQSxTQUFZLFVBQUMsQ0FBRDtBQUFBLFdBQVEsS0FBSyxHQUFOLEdBQWEsT0FBTyxJQUFJLENBQVgsSUFBZ0IsQ0FBN0IsR0FBaUMsQ0FBQyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQVQsQ0FBUCxDQUFMLElBQTRCLENBQXBFO0FBQUEsR0FBWjtBQUFBLENBQTdCOztBQUVBLElBQU0sMEJBQVMsVUFBQyxDQUFEO0FBQUEsU0FBTyxDQUFQO0FBQUEsQ0FBZjs7QUFFQSxJQUFNLHNDQUFlLFVBQUMsS0FBRDtBQUFBLFNBQVcsVUFBQyxDQUFEO0FBQUEsb0JBQU8sQ0FBUCxFQUFZLEtBQVo7QUFBQSxHQUFYO0FBQUEsQ0FBckI7QUFDQSxJQUFNLDBCQUFTLGFBQWEsQ0FBYixDQUFmO0FBQ0EsSUFBTSw0QkFBVSxxQkFBcUIsTUFBckIsQ0FBaEI7QUFDQSxJQUFNLGdDQUFZLHFCQUFxQixNQUFyQixDQUFsQjs7QUFFQSxJQUFNLDBCQUFTLFVBQUMsQ0FBRDtBQUFBLFNBQU8sSUFBSSxLQUFLLEdBQUwsQ0FBUyxLQUFLLElBQUwsQ0FBVSxDQUFWLENBQVQsQ0FBWDtBQUFBLENBQWY7QUFDQSxJQUFNLDRCQUFVLHFCQUFxQixNQUFyQixDQUFoQjtBQUNBLElBQU0sZ0NBQVkscUJBQXFCLE9BQXJCLENBQWxCOztBQUVBLElBQU0sc0NBQWUsVUFBQyxLQUFEO0FBQUEsU0FBVyxVQUFDLENBQUQ7QUFBQSxXQUFRLElBQUksQ0FBTCxJQUFXLENBQUMsUUFBUSxDQUFULElBQWMsQ0FBZCxHQUFrQixLQUE3QixDQUFQO0FBQUEsR0FBWDtBQUFBLENBQXJCO0FBQ0EsSUFBTSwwQkFBUyxhQUFhLDBCQUFiLENBQWY7QUFDQSxJQUFNLDRCQUFVLHFCQUFxQixNQUFyQixDQUFoQjtBQUNBLElBQU0sZ0NBQVkscUJBQXFCLE1BQXJCLENBQWxCOztBQUVBLElBQU0sMERBQXlCLFVBQUMsS0FBRCxFQUFXO0FBQy9DLE1BQU0sYUFBYSxhQUFhLEtBQWIsQ0FBbkI7QUFDQSxTQUFPLFVBQUMsQ0FBRDtBQUFBLFdBQVEsQ0FBQyxLQUFLLENBQU4sSUFBVyxDQUFaLEdBQWlCLE1BQU0sV0FBVyxDQUFYLENBQXZCLEdBQXVDLE9BQU8sSUFBSSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU8sSUFBSSxDQUFYLENBQVosQ0FBWCxDQUE5QztBQUFBLEdBQVA7QUFDRCxDQUhNOztBQUtBLElBQU0sa0NBQWEsdUJBQXVCLDBCQUF2QixDQUFuQiIsImZpbGUiOiJlYXNpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCA9IDEuNTI1O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSAoZWFzaW5nKSA9PiAocCkgPT4gMSAtIGVhc2luZygxIC0gcCk7XG5leHBvcnQgY29uc3QgY3JlYXRlTWlycm9yZWRFYXNpbmcgPSAoZWFzaW5nKSA9PiAocCkgPT4gKHAgPD0gMC41KSA/IGVhc2luZygyICogcCkgLyAyIDogKDIgLSBlYXNpbmcoMiAqICgxIC0gcCkpKSAvIDI7XG5cbmV4cG9ydCBjb25zdCBsaW5lYXIgPSAocCkgPT4gcDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4cG9JbiA9IChwb3dlcikgPT4gKHApID0+IHAgKiogcG93ZXI7XG5leHBvcnQgY29uc3QgZWFzZUluID0gY3JlYXRlRXhwb0luKDIpO1xuZXhwb3J0IGNvbnN0IGVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGVhc2VJbik7XG5cbmV4cG9ydCBjb25zdCBjaXJjSW4gPSAocCkgPT4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwKSk7XG5leHBvcnQgY29uc3QgY2lyY091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGNpcmNJbik7XG5leHBvcnQgY29uc3QgY2lyY0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoY2lyY091dCk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCYWNrSW4gPSAocG93ZXIpID0+IChwKSA9PiAocCAqIHApICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbmV4cG9ydCBjb25zdCBiYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuZXhwb3J0IGNvbnN0IGJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xuZXhwb3J0IGNvbnN0IGJhY2tJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGJhY2tJbik7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gKHBvd2VyKSA9PiB7XG4gIGNvbnN0IGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gKHApID0+ICgocCAqPSAyKSA8IDEpID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFudGljaXBhdGUgPSBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbiJdfQ==

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.transformChildValues = exports.steps = exports.wrap = exports.interpolate = exports.flow = exports.clamp = exports.clampMin = exports.clampMax = exports.appendUnit = undefined;
	
	var _calc = __webpack_require__(2);
	
	/**
	 * Append Unit
	 * A function that will append
	 * appendUnit('px', 20) -> '20px'
	 * @param  {string} unit)
	 * @return {number}
	 */
	var appendUnit = exports.appendUnit = function (unit) {
	  return function (v) {
	    return '' + v + unit;
	  };
	};
	
	/**
	 * Clamp value between
	 * Creates a function that will restrict a given value between `min` and `max`
	 * @param  {number} min
	 * @param  {number} max
	 * @return {number}
	 */
	var clampMax = exports.clampMax = function (max) {
	  return function (v) {
	    return Math.min(v, max);
	  };
	};
	var clampMin = exports.clampMin = function (min) {
	  return function (v) {
	    return Math.max(v, min);
	  };
	};
	var clamp = exports.clamp = function (min, max) {
	  var _min = clampMin(min);
	  var _max = clampMax(max);
	  return function (v) {
	    return _min(_max(v));
	  };
	};
	
	/**
	 * Flow
	 * Compose other transformers to run linearily
	 * flow(min(20), max(40))
	 * @param  {...functions} transformers
	 * @return {function}
	 */
	var flow = exports.flow = function () {
	  for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
	    transformers[_key] = arguments[_key];
	  }
	
	  var numTransformers = transformers.length;
	  var i = 0;
	
	  return function (acc) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }
	
	    var v = acc;
	    for (i = 0; i < numTransformers; i++) {
	      v = transformers[i].apply(transformers, [v].concat(args));
	    }
	
	    return v;
	  };
	};
	
	var interpolate = exports.interpolate = function (input, output, rangeEasing) {
	  var rangeLength = input.length;
	  var finalIndex = rangeLength - 1;
	
	  return function (v) {
	    // If value outside minimum range, quickly return
	    if (v <= input[0]) {
	      return output[0];
	    }
	
	    // If value outside maximum range, quickly return
	    if (v >= input[finalIndex]) {
	      return output[finalIndex];
	    }
	
	    var i = 1;
	
	    // Find index of range start
	    for (; i < rangeLength; i++) {
	      if (input[i] > v || i === finalIndex) {
	        break;
	      }
	    }
	
	    var progressInRange = (0, _calc.getProgressFromValue)(input[i - 1], input[i], v);
	    var easedProgress = rangeEasing ? rangeEasing[i](progressInRange) : progressInRange;
	    return (0, _calc.getValueFromProgress)(output[i - 1], output[i], easedProgress);
	  };
	};
	
	var wrap = exports.wrap = function (min, max) {
	  return function (v) {
	    var rangeSize = max - min;
	    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
	  };
	};
	
	var steps = exports.steps = function (steps, min, max) {
	  return function (v) {
	    var progress = (0, _calc.getProgressFromValue)(min, max, v);
	    return (0, _calc.stepProgress)(steps, progress);
	  };
	};
	
	var transformChildValues = exports.transformChildValues = function (childTransformers) {
	  return function (v) {
	    for (var key in v) {
	      var childTransformer = childTransformers[key];
	      if (childTransformer) {
	        v[key] = childTransformer(v[key]);
	      }
	    }
	
	    return v;
	  };
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNPLElBQU0sa0NBQWEsVUFBQyxJQUFEO0FBQUEsU0FBVSxVQUFDLENBQUQ7QUFBQSxnQkFBVSxDQUFWLEdBQWMsSUFBZDtBQUFBLEdBQVY7QUFBQSxDQUFuQjs7Ozs7Ozs7O0FBU0EsSUFBTSw4QkFBVyxVQUFDLEdBQUQ7QUFBQSxTQUFTLFVBQUMsQ0FBRDtBQUFBLFdBQU8sS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLEdBQVosQ0FBUDtBQUFBLEdBQVQ7QUFBQSxDQUFqQjtBQUNBLElBQU0sOEJBQVcsVUFBQyxHQUFEO0FBQUEsU0FBUyxVQUFDLENBQUQ7QUFBQSxXQUFPLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxHQUFaLENBQVA7QUFBQSxHQUFUO0FBQUEsQ0FBakI7QUFDQSxJQUFNLHdCQUFRLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUNqQyxNQUFNLE9BQU8sU0FBUyxHQUFULENBQWI7QUFDQSxNQUFNLE9BQU8sU0FBUyxHQUFULENBQWI7QUFDQSxTQUFPLFVBQUMsQ0FBRDtBQUFBLFdBQU8sS0FBSyxLQUFLLENBQUwsQ0FBTCxDQUFQO0FBQUEsR0FBUDtBQUNELENBSk07Ozs7Ozs7OztBQWFBLElBQU0sc0JBQU8sWUFBcUI7QUFBQSxvQ0FBakIsWUFBaUI7QUFBakIsZ0JBQWlCO0FBQUE7O0FBQ3ZDLE1BQU0sa0JBQWtCLGFBQWEsTUFBckM7QUFDQSxNQUFJLElBQUksQ0FBUjs7QUFFQSxTQUFPLFVBQUMsR0FBRCxFQUFrQjtBQUFBLHVDQUFULElBQVM7QUFBVCxVQUFTO0FBQUE7O0FBQ3ZCLFFBQUksSUFBSSxHQUFSO0FBQ0EsU0FBSyxJQUFJLENBQVQsRUFBWSxJQUFJLGVBQWhCLEVBQWlDLEdBQWpDLEVBQXNDO0FBQ3BDLFVBQUksYUFBYSxDQUFiLHVCQUFnQixDQUFoQixTQUFzQixJQUF0QixFQUFKO0FBQ0Q7O0FBRUQsV0FBTyxDQUFQO0FBQ0QsR0FQRDtBQVFELENBWk07O0FBY0EsSUFBTSxvQ0FBYyxVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFdBQWhCLEVBQWdDO0FBQ3pELE1BQU0sY0FBYyxNQUFNLE1BQTFCO0FBQ0EsTUFBTSxhQUFhLGNBQWMsQ0FBakM7O0FBRUEsU0FBTyxVQUFDLENBQUQsRUFBTzs7QUFFWixRQUFJLEtBQUssTUFBTSxDQUFOLENBQVQsRUFBbUI7QUFDakIsYUFBTyxPQUFPLENBQVAsQ0FBUDtBQUNEOzs7QUFHRCxRQUFJLEtBQUssTUFBTSxVQUFOLENBQVQsRUFBNEI7QUFDMUIsYUFBTyxPQUFPLFVBQVAsQ0FBUDtBQUNEOztBQUVELFFBQUksSUFBSSxDQUFSOzs7QUFHQSxXQUFPLElBQUksV0FBWCxFQUF3QixHQUF4QixFQUE2QjtBQUMzQixVQUFJLE1BQU0sQ0FBTixJQUFXLENBQVgsSUFBZ0IsTUFBTSxVQUExQixFQUFzQztBQUNwQztBQUNEO0FBQ0Y7O0FBRUQsUUFBTSxrQkFBa0IsZ0NBQXFCLE1BQU0sSUFBSSxDQUFWLENBQXJCLEVBQW1DLE1BQU0sQ0FBTixDQUFuQyxFQUE2QyxDQUE3QyxDQUF4QjtBQUNBLFFBQU0sZ0JBQWlCLFdBQUQsR0FBZ0IsWUFBWSxDQUFaLEVBQWUsZUFBZixDQUFoQixHQUFrRCxlQUF4RTtBQUNBLFdBQU8sZ0NBQXFCLE9BQU8sSUFBSSxDQUFYLENBQXJCLEVBQW9DLE9BQU8sQ0FBUCxDQUFwQyxFQUErQyxhQUEvQyxDQUFQO0FBQ0QsR0F2QkQ7QUF3QkQsQ0E1Qk07O0FBOEJBLElBQU0sc0JBQU8sVUFBQyxHQUFELEVBQU0sR0FBTjtBQUFBLFNBQWMsVUFBQyxDQUFELEVBQU87QUFDdkMsUUFBTSxZQUFZLE1BQU0sR0FBeEI7QUFDQSxXQUFPLENBQUMsQ0FBQyxJQUFJLEdBQUwsSUFBWSxTQUFaLEdBQXdCLFNBQXpCLElBQXNDLFNBQXRDLEdBQWtELEdBQXpEO0FBQ0QsR0FIbUI7QUFBQSxDQUFiOztBQUtBLElBQU0sd0JBQVEsVUFBQyxLQUFELEVBQVEsR0FBUixFQUFhLEdBQWI7QUFBQSxTQUFxQixVQUFDLENBQUQsRUFBTztBQUMvQyxRQUFNLFdBQVcsZ0NBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLENBQS9CLENBQWpCO0FBQ0EsV0FBTyx3QkFBYSxLQUFiLEVBQW9CLFFBQXBCLENBQVA7QUFDRCxHQUhvQjtBQUFBLENBQWQ7O0FBS0EsSUFBTSxzREFBdUIsVUFBQyxpQkFBRDtBQUFBLFNBQXVCLFVBQUMsQ0FBRCxFQUFPO0FBQ2hFLFNBQUssSUFBSSxHQUFULElBQWdCLENBQWhCLEVBQW1CO0FBQ2pCLFVBQU0sbUJBQW1CLGtCQUFrQixHQUFsQixDQUF6QjtBQUNBLFVBQUksZ0JBQUosRUFBc0I7QUFDcEIsVUFBRSxHQUFGLElBQVMsaUJBQWlCLEVBQUUsR0FBRixDQUFqQixDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPLENBQVA7QUFDRCxHQVRtQztBQUFBLENBQTdCIiwiZmlsZSI6InRyYW5zZm9ybWVycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcywgc3RlcFByb2dyZXNzIH0gZnJvbSAnLi9jYWxjJztcblxuLyoqXG4gKiBBcHBlbmQgVW5pdFxuICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYXBwZW5kXG4gKiBhcHBlbmRVbml0KCdweCcsIDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGVuZFVuaXQgPSAodW5pdCkgPT4gKHYpID0+IGAke3Z9JHt1bml0fWA7XG5cbi8qKlxuICogQ2xhbXAgdmFsdWUgYmV0d2VlblxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXN0cmljdCBhIGdpdmVuIHZhbHVlIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pblxuICogQHBhcmFtICB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGNsYW1wTWF4ID0gKG1heCkgPT4gKHYpID0+IE1hdGgubWluKHYsIG1heCk7XG5leHBvcnQgY29uc3QgY2xhbXBNaW4gPSAobWluKSA9PiAodikgPT4gTWF0aC5tYXgodiwgbWluKTtcbmV4cG9ydCBjb25zdCBjbGFtcCA9IChtaW4sIG1heCkgPT4ge1xuICBjb25zdCBfbWluID0gY2xhbXBNaW4obWluKTtcbiAgY29uc3QgX21heCA9IGNsYW1wTWF4KG1heCk7XG4gIHJldHVybiAodikgPT4gX21pbihfbWF4KHYpKTtcbn07XG5cbi8qKlxuICogRmxvd1xuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogZmxvdyhtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgZmxvdyA9ICguLi50cmFuc2Zvcm1lcnMpID0+IHtcbiAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIHJldHVybiAoYWNjLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IHYgPSBhY2M7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGludGVycG9sYXRlID0gKGlucHV0LCBvdXRwdXQsIHJhbmdlRWFzaW5nKSA9PiB7XG4gIGNvbnN0IHJhbmdlTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICBjb25zdCBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiAodikgPT4ge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgbGV0IGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb2dyZXNzSW5SYW5nZSA9IGdldFByb2dyZXNzRnJvbVZhbHVlKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIGNvbnN0IGVhc2VkUHJvZ3Jlc3MgPSAocmFuZ2VFYXNpbmcpID8gcmFuZ2VFYXNpbmdbaV0ocHJvZ3Jlc3NJblJhbmdlKSA6IHByb2dyZXNzSW5SYW5nZTtcbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3Mob3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldLCBlYXNlZFByb2dyZXNzKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB3cmFwID0gKG1pbiwgbWF4KSA9PiAodikgPT4ge1xuICBjb25zdCByYW5nZVNpemUgPSBtYXggLSBtaW47XG4gIHJldHVybiAoKHYgLSBtaW4pICUgcmFuZ2VTaXplICsgcmFuZ2VTaXplKSAlIHJhbmdlU2l6ZSArIG1pbjtcbn07XG5cbmV4cG9ydCBjb25zdCBzdGVwcyA9IChzdGVwcywgbWluLCBtYXgpID0+ICh2KSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUobWluLCBtYXgsIHYpO1xuICByZXR1cm4gc3RlcFByb2dyZXNzKHN0ZXBzLCBwcm9ncmVzcyk7XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSAoY2hpbGRUcmFuc2Zvcm1lcnMpID0+ICh2KSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiB2KSB7XG4gICAgY29uc3QgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgaWYgKGNoaWxkVHJhbnNmb3JtZXIpIHtcbiAgICAgIHZba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdjtcbn07XG4iXX0=

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.color = exports.hsla = exports.hex = exports.rgba = exports.rgbUnit = exports.scale = exports.px = exports.percent = exports.degrees = exports.alpha = exports.number = undefined;
	
	var _transformChildValues, _transformChildValues2;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Value types
	                                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                                   * alpha
	                                                                                                                                                                                                                                                                   * degrees
	                                                                                                                                                                                                                                                                   * hex
	                                                                                                                                                                                                                                                                   * hsla
	                                                                                                                                                                                                                                                                   * percent
	                                                                                                                                                                                                                                                                   * px
	                                                                                                                                                                                                                                                                   * rgbUnit
	                                                                                                                                                                                                                                                                   * rgb
	                                                                                                                                                                                                                                                                   * scale
	                                                                                                                                                                                                                                                                   */
	
	
	var _transformers = __webpack_require__(4);
	
	var _utils = __webpack_require__(24);
	
	var _utils2 = __webpack_require__(24);
	
	// String properties
	var RED = 'red';
	var GREEN = 'green';
	var BLUE = 'blue';
	var ALPHA = 'alpha';
	var HUE = 'hue';
	var SATURATION = 'saturation';
	var LIGHTNESS = 'lightness';
	
	// Templates
	var rgbaTemplate = function (_ref) {
	  var red = _ref.red;
	  var green = _ref.green;
	  var blue = _ref.blue;
	  var _ref$alpha = _ref.alpha;
	  var alpha = _ref$alpha === undefined ? 1 : _ref$alpha;
	  return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
	};
	
	var hslaTemplate = function (_ref2) {
	  var hue = _ref2.hue;
	  var saturation = _ref2.saturation;
	  var lightness = _ref2.lightness;
	  var _ref2$alpha = _ref2.alpha;
	  var alpha = _ref2$alpha === undefined ? 1 : _ref2$alpha;
	  return 'hsla(' + hue + ', ' + saturation + ', ' + lightness + ', ' + alpha + ')';
	};
	
	var number = exports.number = {
	  test: _utils2.isNum,
	  parse: parseFloat
	};
	
	// Value types
	var alpha = exports.alpha = _extends({}, number, {
	  transform: (0, _transformers.clamp)(0, 1)
	});
	
	var degrees = exports.degrees = (0, _utils.createUnitType)('deg');
	var percent = exports.percent = (0, _utils.createUnitType)('%');
	var px = exports.px = (0, _utils.createUnitType)('px');
	
	var scale = exports.scale = _extends({}, number, {
	  default: 1
	});
	
	var rgbUnit = exports.rgbUnit = _extends({}, number, {
	  transform: (0, _transformers.flow)(
	  //http://codepen.io/osublake/full/xGVVaN/
	  // (v, value, action) => {
	  //   if (action) {
	  //     const fromColor = action.from * action.from;
	  //     const toColor = action.to * action.to;
	  //     return Math.sqrt(action.progress * (toColor - fromColor) + fromColor);
	  //   }
	
	  //   return v;
	  // },
	  (0, _transformers.clamp)(0, 255), Math.round)
	});
	
	var rgba = exports.rgba = {
	  test: (0, _utils.isFirstChars)('rgb'),
	
	  parse: (0, _utils.splitColorValues)([RED, GREEN, BLUE, ALPHA]),
	
	  transform: (0, _transformers.flow)((0, _transformers.transformChildValues)((_transformChildValues = {}, _transformChildValues[RED] = rgbUnit.transform, _transformChildValues[GREEN] = rgbUnit.transform, _transformChildValues[BLUE] = rgbUnit.transform, _transformChildValues[ALPHA] = alpha.transform, _transformChildValues)), rgbaTemplate)
	};
	
	var hex = exports.hex = _extends({}, rgba, {
	
	  test: (0, _utils.isFirstChars)('#'),
	
	  parse: function (v) {
	    var _ref3;
	
	    var r = void 0,
	        g = void 0,
	        b = void 0;
	
	    // If we have 6 characters, ie #FF0000
	    if (v.length > 4) {
	      r = v.substr(1, 2);
	      g = v.substr(3, 2);
	      b = v.substr(5, 2);
	
	      // Or we have 3 characters, ie #F00
	    } else {
	      r = v.substr(1, 1);
	      g = v.substr(2, 1);
	      b = v.substr(3, 1);
	      r += r;
	      g += g;
	      b += b;
	    }
	
	    return _ref3 = {}, _ref3[RED] = parseInt(r, 16), _ref3[GREEN] = parseInt(g, 16), _ref3[BLUE] = parseInt(b, 16), _ref3[ALPHA] = 1, _ref3;
	  }
	});
	
	var hsla = exports.hsla = {
	  test: (0, _utils.isFirstChars)('hsl'),
	
	  parse: (0, _utils.splitColorValues)([HUE, SATURATION, LIGHTNESS, ALPHA]),
	
	  transform: (0, _transformers.flow)((0, _transformers.transformChildValues)((_transformChildValues2 = {}, _transformChildValues2[HUE] = number.transform, _transformChildValues2[SATURATION] = percent.transform, _transformChildValues2[LIGHTNESS] = percent.transform, _transformChildValues2[ALPHA] = alpha.transform, _transformChildValues2)), hslaTemplate)
	};
	
	var color = exports.color = {
	  childTypes: _extends({}, hsla.childTypes, rgba.childTypes),
	
	  test: function (value) {
	    return rgba.test(value) || hex.test(value) || hsla.test(value);
	  },
	
	  transform: function (v) {
	    if (v.hasOwnProperty('red')) {
	      return rgba.transform(v);
	    } else if (v.hasOwnProperty('hue')) {
	      return hsla.transform(v);
	    }
	    return v;
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdmFsdWUtdHlwZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBOztBQUNBOztBQUNBOzs7QUFHQSxJQUFNLE1BQU0sS0FBWjtBQUNBLElBQU0sUUFBUSxPQUFkO0FBQ0EsSUFBTSxPQUFPLE1BQWI7QUFDQSxJQUFNLFFBQVEsT0FBZDtBQUNBLElBQU0sTUFBTSxLQUFaO0FBQ0EsSUFBTSxhQUFhLFlBQW5CO0FBQ0EsSUFBTSxZQUFZLFdBQWxCOzs7QUFHQSxJQUFNLGVBQWU7QUFBQSxNQUFHLEdBQUgsUUFBRyxHQUFIO0FBQUEsTUFBUSxLQUFSLFFBQVEsS0FBUjtBQUFBLE1BQWUsSUFBZixRQUFlLElBQWY7QUFBQSx3QkFBcUIsS0FBckI7QUFBQSxNQUFxQixLQUFyQiw4QkFBNkIsQ0FBN0I7QUFBQSxtQkFDWCxHQURXLFVBQ0gsS0FERyxVQUNPLElBRFAsVUFDZ0IsS0FEaEI7QUFBQSxDQUFyQjs7QUFHQSxJQUFNLGVBQWU7QUFBQSxNQUFHLEdBQUgsU0FBRyxHQUFIO0FBQUEsTUFBUSxVQUFSLFNBQVEsVUFBUjtBQUFBLE1BQW9CLFNBQXBCLFNBQW9CLFNBQXBCO0FBQUEsMEJBQStCLEtBQS9CO0FBQUEsTUFBK0IsS0FBL0IsK0JBQXVDLENBQXZDO0FBQUEsbUJBQ1gsR0FEVyxVQUNILFVBREcsVUFDWSxTQURaLFVBQzBCLEtBRDFCO0FBQUEsQ0FBckI7O0FBR08sSUFBTSwwQkFBUztBQUNwQixxQkFEb0I7QUFFcEIsU0FBTztBQUZhLENBQWY7OztBQU1BLElBQU0scUNBQ1IsTUFEUTtBQUVYLGFBQVcseUJBQU0sQ0FBTixFQUFTLENBQVQ7QUFGQSxFQUFOOztBQUtBLElBQU0sNEJBQVUsMkJBQWUsS0FBZixDQUFoQjtBQUNBLElBQU0sNEJBQVUsMkJBQWUsR0FBZixDQUFoQjtBQUNBLElBQU0sa0JBQUssMkJBQWUsSUFBZixDQUFYOztBQUVBLElBQU0scUNBQ1IsTUFEUTtBQUVYLFdB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b3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFZhbHVlIHR5cGVzXG4gKlxuICogYWxwaGFcbiAqIGRlZ3JlZXNcbiAqIGhleFxuICogaHNsYVxuICogcGVyY2VudFxuICogcHhcbiAqIHJnYlVuaXRcbiAqIHJnYlxuICogc2NhbGVcbiAqL1xuaW1wb3J0IHsgY2xhbXAsIGZsb3csIHRyYW5zZm9ybUNoaWxkVmFsdWVzIH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyBjcmVhdGVVbml0VHlwZSwgaXNGaXJzdENoYXJzLCBzcGxpdENvbG9yVmFsdWVzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBpc051bSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbi8vIFN0cmluZyBwcm9wZXJ0aWVzXG5jb25zdCBSRUQgPSAncmVkJztcbmNvbnN0IEdSRUVOID0gJ2dyZWVuJztcbmNvbnN0IEJMVUUgPSAnYmx1ZSc7XG5jb25zdCBBTFBIQSA9ICdhbHBoYSc7XG5jb25zdCBIVUUgPSAnaHVlJztcbmNvbnN0IFNBVFVSQVRJT04gPSAnc2F0dXJhdGlvbic7XG5jb25zdCBMSUdIVE5FU1MgPSAnbGlnaHRuZXNzJztcblxuLy8gVGVtcGxhdGVzXG5jb25zdCByZ2JhVGVtcGxhdGUgPSAoeyByZWQsIGdyZWVuLCBibHVlLCBhbHBoYSA9IDEgfSkgPT4gXG4gIGByZ2JhKCR7cmVkfSwgJHtncmVlbn0sICR7Ymx1ZX0sICR7YWxwaGF9KWA7XG5cbmNvbnN0IGhzbGFUZW1wbGF0ZSA9ICh7IGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSA9IDEgfSkgPT4gXG4gIGBoc2xhKCR7aHVlfSwgJHtzYXR1cmF0aW9ufSwgJHtsaWdodG5lc3N9LCAke2FscGhhfSlgO1xuXG5leHBvcnQgY29uc3QgbnVtYmVyID0ge1xuICB0ZXN0OiBpc051bSxcbiAgcGFyc2U6IHBhcnNlRmxvYXRcbn07XG5cbi8vIFZhbHVlIHR5cGVzXG5leHBvcnQgY29uc3QgYWxwaGEgPSB7XG4gIC4uLm51bWJlcixcbiAgdHJhbnNmb3JtOiBjbGFtcCgwLCAxKVxufTtcblxuZXhwb3J0IGNvbnN0IGRlZ3JlZXMgPSBjcmVhdGVVbml0VHlwZSgnZGVnJyk7XG5leHBvcnQgY29uc3QgcGVyY2VudCA9IGNyZWF0ZVVuaXRUeXBlKCclJyk7XG5leHBvcnQgY29uc3QgcHggPSBjcmVhdGVVbml0VHlwZSgncHgnKTtcblxuZXhwb3J0IGNvbnN0IHNjYWxlID0ge1xuICAuLi5udW1iZXIsXG4gIGRlZmF1bHQ6IDFcbn07XG5cbmV4cG9ydCBjb25zdCByZ2JVbml0ID0ge1xuICAuLi5udW1iZXIsXG4gIHRyYW5zZm9ybTogZmxvdyhcbiAgICAvL2h0dHA6Ly9jb2RlcGVuLmlvL29zdWJsYWtlL2Z1bGwveEdWVmFOL1xuICAgIC8vICh2LCB2YWx1ZSwgYWN0aW9uKSA9PiB7XG4gICAgLy8gICBpZiAoYWN0aW9uKSB7XG4gICAgLy8gICAgIGNvbnN0IGZyb21Db2xvciA9IGFjdGlvbi5mcm9tICogYWN0aW9uLmZyb207XG4gICAgLy8gICAgIGNvbnN0IHRvQ29sb3IgPSBhY3Rpb24udG8gKiBhY3Rpb24udG87XG4gICAgLy8gICAgIHJldHVybiBNYXRoLnNxcnQoYWN0aW9uLnByb2dyZXNzICogKHRvQ29sb3IgLSBmcm9tQ29sb3IpICsgZnJvbUNvbG9yKTtcbiAgICAvLyAgIH1cblxuICAgIC8vICAgcmV0dXJuIHY7XG4gICAgLy8gfSxcbiAgICBjbGFtcCgwLCAyNTUpLFxuICAgIE1hdGgucm91bmRcbiAgKVxufTtcblxuZXhwb3J0IGNvbnN0IHJnYmEgPSB7XG4gIHRlc3Q6IGlzRmlyc3RDaGFycygncmdiJyksXG5cbiAgcGFyc2U6IHNwbGl0Q29sb3JWYWx1ZXMoW1JFRCwgR1JFRU4sIEJMVUUsIEFMUEhBXSksXG5cbiAgdHJhbnNmb3JtOiBmbG93KFxuICAgIHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgICAgIFtSRURdOiByZ2JVbml0LnRyYW5zZm9ybSxcbiAgICAgIFtHUkVFTl06IHJnYlVuaXQudHJhbnNmb3JtLFxuICAgICAgW0JMVUVdOiByZ2JVbml0LnRyYW5zZm9ybSxcbiAgICAgIFtBTFBIQV06IGFscGhhLnRyYW5zZm9ybVxuICAgIH0pLFxuICAgIHJnYmFUZW1wbGF0ZVxuICApXG59O1xuXG5leHBvcnQgY29uc3QgaGV4ID0ge1xuICAuLi5yZ2JhLFxuXG4gIHRlc3Q6IGlzRmlyc3RDaGFycygnIycpLFxuXG4gIHBhcnNlOiAodikgPT4ge1xuICAgIGxldCByLCBnLCBiO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICBpZiAodi5sZW5ndGggPiA0KSB7XG4gICAgICByID0gdi5zdWJzdHIoMSwgMik7XG4gICAgICBnID0gdi5zdWJzdHIoMywgMik7XG4gICAgICBiID0gdi5zdWJzdHIoNSwgMik7XG5cbiAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgIH0gZWxzZSB7XG4gICAgICByID0gdi5zdWJzdHIoMSwgMSk7XG4gICAgICBnID0gdi5zdWJzdHIoMiwgMSk7XG4gICAgICBiID0gdi5zdWJzdHIoMywgMSk7XG4gICAgICByICs9IHI7XG4gICAgICBnICs9IGc7XG4gICAgICBiICs9IGI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIFtSRURdOiBwYXJzZUludChyLCAxNiksXG4gICAgICBbR1JFRU5dOiBwYXJzZUludChnLCAxNiksXG4gICAgICBbQkxVRV06IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgIFtBTFBIQV06IDFcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaHNsYSA9IHtcbiAgdGVzdDogaXNGaXJzdENoYXJzKCdoc2wnKSxcblxuICBwYXJzZTogc3BsaXRDb2xvclZhbHVlcyhbSFVFLCBTQVRVUkFUSU9OLCBMSUdIVE5FU1MsIEFMUEhBXSksXG5cbiAgdHJhbnNmb3JtOiBmbG93KFxuICAgIHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgICAgIFtIVUVdOiBudW1iZXIudHJhbnNmb3JtLFxuICAgICAgW1NBVFVSQVRJT05dOiBwZXJjZW50LnRyYW5zZm9ybSxcbiAgICAgIFtMSUdIVE5FU1NdOiBwZXJjZW50LnRyYW5zZm9ybSxcbiAgICAgIFtBTFBIQV06IGFscGhhLnRyYW5zZm9ybVxuICAgIH0pLFxuICAgIGhzbGFUZW1wbGF0ZVxuICApXG59O1xuXG5leHBvcnQgY29uc3QgY29sb3IgPSB7XG4gIGNoaWxkVHlwZXM6IHtcbiAgICAuLi5oc2xhLmNoaWxkVHlwZXMsXG4gICAgLi4ucmdiYS5jaGlsZFR5cGVzXG4gIH0sXG5cbiAgdGVzdDogKHZhbHVlKSA9PiByZ2JhLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2xhLnRlc3QodmFsdWUpLFxuXG4gIHRyYW5zZm9ybTogKHYpID0+IHtcbiAgICBpZiAodi5oYXNPd25Qcm9wZXJ0eSgncmVkJykpIHtcbiAgICAgIHJldHVybiByZ2JhLnRyYW5zZm9ybSh2KTtcbiAgICB9IGVsc2UgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2h1ZScpKSB7XG4gICAgICByZXR1cm4gaHNsYS50cmFuc2Zvcm0odik7XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9XG59O1xuIl19

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _calc = __webpack_require__(2);
	
	var _transformers = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var clampProgress = (0, _transformers.clamp)(0, 1);
	
	function calcValueAtTime(from, to, duration, elapsed, ease) {
	  var progressAtTime = ease(clampProgress((0, _calc.getProgressFromValue)(0, duration, elapsed)));
	  return (0, _calc.getValueFromProgress)(from, to, progressAtTime);
	}
	
	var TweenBlend = function (_Action) {
	  _inherits(TweenBlend, _Action);
	
	  function TweenBlend() {
	    _classCallCheck(this, TweenBlend);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  TweenBlend.prototype.onStart = function onStart() {
	    var _props = this.props;
	    var from = _props.from;
	    var to = _props.to;
	    var duration = _props.duration;
	    var accuracy = _props.accuracy;
	
	    var a = from;
	    var b = to;
	    var aDuration = a.getDuration();
	    var bDuration = b.getDuration();
	
	    this.duration = duration || Math.min(aDuration - a.getElapsed(), bDuration);
	
	    var aEase = a.getProp('ease');
	    var bEase = b.getProp('ease');
	    var aFrom = a.getProp('from');
	    var bFrom = b.getProp('from');
	    var aTo = a.getProp('to');
	    var bTo = b.getProp('to');
	    var bValueAtBlendComplete = calcValueAtTime(bFrom, bTo, bDuration, this.duration, bEase);
	    var bStartsHigherThanA = bFrom > a.get();
	
	    this.blendPoints = [[0, a.get()], [this.duration, bValueAtBlendComplete]];
	
	    // Find tween intersection
	    var timestep = this.duration / accuracy;
	
	    var foundP1 = false;
	    var foundP2 = false;
	
	    for (var i = 0; i < accuracy; i++) {
	      var totalTime = i * timestep;
	
	      var aValueAtTime = calcValueAtTime(aFrom, aTo, aDuration, a.elapsed + totalTime, aEase);
	      var bValueAtTime = calcValueAtTime(bFrom, bTo, bDuration, b.elapsed + totalTime, bEase);
	
	      var hasIntersected = bStartsHigherThanA && aValueAtTime < bValueAtTime || !bStartsHigherThanA && aValueAtTime > bValueAtTime;
	
	      if (!foundP1 && hasIntersected) {
	        this.blendPoints.splice(0, 1, [totalTime, bValueAtTime]);
	        foundP1 = true;
	      }
	
	      // TODO go back through and comment
	      var hasIntersectedB = bStartsHigherThanA && aValueAtTime < bValueAtTime || !bStartsHigherThanA && aValueAtTime > bValueAtTime;
	
	      if (foundP1 && hasIntersectedB) {
	        this.blendPoints[2] = [totalTime, bValueAtTime];
	        foundP2 = true;
	      }
	
	      if (foundP2) {
	        return;
	      }
	    }
	
	    to.start();
	  };
	
	  TweenBlend.prototype.update = function update() {
	    var _props2 = this.props;
	    var from = _props2.from;
	    var to = _props2.to;
	
	    var a = from;
	    var b = to;
	
	    var progress = clampProgress((0, _calc.getProgressFromValue)(this.blendPoints[0][0], this.blendPoints[2][0], a.getElapsed()));
	    if (progress >= 1) {
	      return b.get();
	    } else {
	      var aP = (0, _calc.getValueFromProgress)(this.blendPoints[0][1], this.blendPoints[1][1], progress);
	      var bP = (0, _calc.getValueFromProgress)(this.blendPoints[1][1], this.blendPoints[2][1], progress);
	      return (0, _calc.getValueFromProgress)(aP, bP, progress);
	    }
	  };
	
	  return TweenBlend;
	}(_2.default);
	
	TweenBlend.defaultProps = {
	  accuracy: 60
	};
	
	exports.default = function (props) {
	  return new TweenBlend(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLHlCQUFNLENBQU4sRUFBUyxDQUFULENBQXRCOztBQUVBLFNBQVMsZUFBVCxDQUF5QixJQUF6QixFQUErQixFQUEvQixFQUFtQyxRQUFuQyxFQUE2QyxPQUE3QyxFQUFzRCxJQUF0RCxFQUE0RDtBQUMxRCxNQUFNLGlCQUFpQixLQUFLLGNBQWMsZ0NBQXFCLENBQXJCLEVBQXdCLFFBQXhCLEVBQWtDLE9BQWxDLENBQWQsQ0FBTCxDQUF2QjtBQUNBLFNBQU8sZ0NBQXFCLElBQXJCLEVBQTJCLEVBQTNCLEVBQStCLGNBQS9CLENBQVA7QUFDRDs7SUFFSyxVOzs7Ozs7Ozs7dUJBS0osTyxzQkFBVTtBQUFBLGlCQUNpQyxLQUFLLEtBRHRDO0FBQUEsUUFDQSxJQURBLFVBQ0EsSUFEQTtBQUFBLFFBQ00sRUFETixVQUNNLEVBRE47QUFBQSxRQUNVLFFBRFYsVUFDVSxRQURWO0FBQUEsUUFDb0IsUUFEcEIsVUFDb0IsUUFEcEI7O0FBRVIsUUFBTSxJQUFJLElBQVY7QUFDQSxRQUFNLElBQUksRUFBVjtBQUNBLFFBQU0sWUFBWSxFQUFFLFdBQUYsRUFBbEI7QUFDQSxRQUFNLFlBQVksRUFBRSxXQUFGLEVBQWxCOztBQUVBLFNBQUssUUFBTCxHQUFnQixZQUFZLEtBQUssR0FBTCxDQUMxQixZQUFZLEVBQUUsVUFBRixFQURjLEVBRTFCLFNBRjBCLENBQTVCOztBQUtBLFFBQU0sUUFBUSxFQUFFLE9BQUYsQ0FBVSxNQUFWLENBQWQ7QUFDQSxRQUFNLFFBQVEsRUFBRSxPQUFGLENBQVUsTUFBVixDQUFkO0FBQ0EsUUFBTSxRQUFRLEVBQUUsT0FBRixDQUFVLE1BQVYsQ0FBZDtBQUNBLFFBQU0sUUFBUSxFQUFFLE9BQUYsQ0FBVSxNQUFWLENBQWQ7QUFDQSxRQUFNLE1BQU0sRUFBRSxPQUFG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Qzs7a0JBdUZULFVBQUMsS0FBRDtBQUFBLFNBQVcsSUFBSSxVQUFKLENBQWUsS0FBZixDQUFYO0FBQUEsQyIsImZpbGUiOiJibGVuZC10d2VlbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5cbmNvbnN0IGNsYW1wUHJvZ3Jlc3MgPSBjbGFtcCgwLCAxKTtcblxuZnVuY3Rpb24gY2FsY1ZhbHVlQXRUaW1lKGZyb20sIHRvLCBkdXJhdGlvbiwgZWxhcHNlZCwgZWFzZSkge1xuICBjb25zdCBwcm9ncmVzc0F0VGltZSA9IGVhc2UoY2xhbXBQcm9ncmVzcyhnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgZWxhcHNlZCkpKTtcbiAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb20sIHRvLCBwcm9ncmVzc0F0VGltZSk7XG59XG5cbmNsYXNzIFR3ZWVuQmxlbmQgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjY3VyYWN5OiA2MFxuICB9O1xuXG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBmcm9tLCB0bywgZHVyYXRpb24sIGFjY3VyYWN5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGEgPSBmcm9tO1xuICAgIGNvbnN0IGIgPSB0bztcbiAgICBjb25zdCBhRHVyYXRpb24gPSBhLmdldER1cmF0aW9uKCk7XG4gICAgY29uc3QgYkR1cmF0aW9uID0gYi5nZXREdXJhdGlvbigpO1xuXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IE1hdGgubWluKFxuICAgICAgYUR1cmF0aW9uIC0gYS5nZXRFbGFwc2VkKCksXG4gICAgICBiRHVyYXRpb25cbiAgICApO1xuXG4gICAgY29uc3QgYUVhc2UgPSBhLmdldFByb3AoJ2Vhc2UnKTtcbiAgICBjb25zdCBiRWFzZSA9IGIuZ2V0UHJvcCgnZWFzZScpO1xuICAgIGNvbnN0IGFGcm9tID0gYS5nZXRQcm9wKCdmcm9tJyk7XG4gICAgY29uc3QgYkZyb20gPSBiLmdldFByb3AoJ2Zyb20nKTtcbiAgICBjb25zdCBhVG8gPSBhLmdldFByb3AoJ3RvJyk7XG4gICAgY29uc3QgYlRvID0gYi5nZXRQcm9wKCd0bycpO1xuICAgIGNvbnN0IGJWYWx1ZUF0QmxlbmRDb21wbGV0ZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIHRoaXMuZHVyYXRpb24sIGJFYXNlKTtcbiAgICBjb25zdCBiU3RhcnRzSGlnaGVyVGhhbkEgPSBiRnJvbSA+IGEuZ2V0KCk7XG5cbiAgICB0aGlzLmJsZW5kUG9pbnRzID0gW1xuICAgICAgWzAsIGEuZ2V0KCldLFxuICAgICAgW3RoaXMuZHVyYXRpb24sIGJWYWx1ZUF0QmxlbmRDb21wbGV0ZV1cbiAgICBdO1xuXG4gICAgLy8gRmluZCB0d2VlbiBpbnRlcnNlY3Rpb25cbiAgICBjb25zdCB0aW1lc3RlcCA9IHRoaXMuZHVyYXRpb24gLyBhY2N1cmFjeTtcblxuICAgIGxldCBmb3VuZFAxID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kUDIgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjdXJhY3k7IGkrKykge1xuICAgICAgY29uc3QgdG90YWxUaW1lID0gaSAqIHRpbWVzdGVwO1xuXG4gICAgICBjb25zdCBhVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYUZyb20sIGFUbywgYUR1cmF0aW9uLCBhLmVsYXBzZWQgKyB0b3RhbFRpbWUsIGFFYXNlKTtcbiAgICAgIGNvbnN0IGJWYWx1ZUF0VGltZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIGIuZWxhcHNlZCArIHRvdGFsVGltZSwgYkVhc2UpO1xuXG4gICAgICBjb25zdCBoYXNJbnRlcnNlY3RlZCA9IChcbiAgICAgICAgKGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUpIHx8XG4gICAgICAgICghYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA+IGJWYWx1ZUF0VGltZSlcbiAgICAgICk7XG5cbiAgICAgIGlmICghZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZCkge1xuICAgICAgICB0aGlzLmJsZW5kUG9pbnRzLnNwbGljZSgwLCAxLCBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdKTtcbiAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE8gZ28gYmFjayB0aHJvdWdoIGFuZCBjb21tZW50XG4gICAgICBjb25zdCBoYXNJbnRlcnNlY3RlZEIgPSAoXG4gICAgICAgIChiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lIDwgYlZhbHVlQXRUaW1lKSB8fFxuICAgICAgICAoIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWUpXG4gICAgICApO1xuXG4gICAgICBpZiAoZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZEIpIHtcbiAgICAgICAgdGhpcy5ibGVuZFBvaW50c1syXSA9IFt0b3RhbFRpbWUsIGJWYWx1ZUF0VGltZV07XG4gICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG8uc3RhcnQoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGEgPSBmcm9tO1xuICAgIGNvbnN0IGIgPSB0bztcblxuICAgIGNvbnN0IHByb2dyZXNzID0gY2xhbXBQcm9ncmVzcyhnZXRQcm9ncmVzc0Zyb21WYWx1ZSh0aGlzLmJsZW5kUG9pbnRzWzBdWzBdLCB0aGlzLmJsZW5kUG9pbnRzWzJdWzBdLCBhLmdldEVsYXBzZWQoKSkpO1xuICAgIGlmIChwcm9ncmVzcyA+PSAxKSB7XG4gICAgICByZXR1cm4gYi5nZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYVAgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyh0aGlzLmJsZW5kUG9pbnRzWzBdWzFdLCB0aGlzLmJsZW5kUG9pbnRzWzFdWzFdLCBwcm9ncmVzcyk7XG4gICAgICBjb25zdCBiUCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKHRoaXMuYmxlbmRQb2ludHNbMV1bMV0sIHRoaXMuYmxlbmRQb2ludHNbMl1bMV0sIHByb2dyZXNzKTtcbiAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhhUCwgYlAsIHByb2dyZXNzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgVHdlZW5CbGVuZChwcm9wcyk7XG4iXX0=

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chain = function (_Action) {
	  _inherits(Chain, _Action);
	
	  function Chain(props) {
	    _classCallCheck(this, Chain);
	
	    var _this = _possibleConstructorReturn(this, _Action.call(this, props));
	
	    _this.playNext = _this.playNext.bind(_this);
	    return _this;
	  }
	
	  Chain.prototype.onStart = function onStart() {
	    this.props.i = 0;
	    this.playCurrent();
	  };
	
	  Chain.prototype.playNext = function playNext() {
	    var _props = this.props;
	    var i = _props.i;
	    var order = _props.order;
	
	    if (i < order.length - 1) {
	      this.props.i++;
	      this.playCurrent();
	    } else {
	      this.complete();
	    }
	  };
	
	  Chain.prototype.playCurrent = function playCurrent() {
	    var _props2 = this.props;
	    var i = _props2.i;
	    var order = _props2.order;
	
	    order[i].props._onComplete = this.playNext;
	    order[i].start();
	  };
	
	  Chain.prototype.onStop = function onStop() {
	    var _props3 = this.props;
	    var i = _props3.i;
	    var order = _props3.order;
	
	    order[i].stop();
	  };
	
	  return Chain;
	}(_2.default);
	
	exports.default = function (order, onComplete) {
	  return new Chain({ order: order, onComplete: onComplete });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NoYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU0sSzs7O0FBQ0osaUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixtQkFBTSxLQUFOLENBRGlCOztBQUVqQixVQUFLLFFBQUwsR0FBZ0IsTUFBSyxRQUFMLENBQWMsSUFBZCxPQUFoQjtBQUZpQjtBQUdsQjs7a0JBRUQsTyxzQkFBVTtBQUNSLFNBQUssS0FBTCxDQUFXLENBQVgsR0FBZSxDQUFmO0FBQ0EsU0FBSyxXQUFMO0FBQ0QsRzs7a0JBRUQsUSx1QkFBVztBQUFBLGlCQUNZLEtBQUssS0FEakI7QUFBQSxRQUNELENBREMsVUFDRCxDQURDO0FBQUEsUUFDRSxLQURGLFVBQ0UsS0FERjs7QUFFVCxRQUFJLElBQUksTUFBTSxNQUFOLEdBQWUsQ0FBdkIsRUFBMEI7QUFDeEIsV0FBSyxLQUFMLENBQVcsQ0FBWDtBQUNBLFdBQUssV0FBTDtBQUNELEtBSEQsTUFHTztBQUNMLFdBQUssUUFBTDtBQUNEO0FBQ0YsRzs7a0JBRUQsVywwQkFBYztBQUFBLGtCQUNTLEtBQUssS0FEZDtBQUFBLFFBQ0osQ0FESSxXQUNKLENBREk7QUFBQSxRQUNELEtBREMsV0FDRCxLQURDOztBQUVaLFVBQU0sQ0FBTixFQUFTLEtBQVQsQ0FBZSxXQUFmLEdBQTZCLEtBQUssUUFBbEM7QUFDQSxVQUFNLENBQU4sRUFBUyxLQUFUO0FBQ0QsRzs7a0JBRUQsTSxxQkFBUztBQUFBLGtCQUNjLEtBQUssS0FEbkI7QUFBQSxRQUNDLENBREQsV0FDQyxDQUREO0FBQUEsUUFDSSxLQURKLFdBQ0ksS0FESjs7QUFFUCxVQUFNLENBQU4sRUFBUyxJQUFUO0FBQ0QsRzs7Ozs7a0JBR1ksVUFBQyxLQUFELEVBQVEsVUFBUjtBQUFBLFNBQXVCLElBQUksS0FBSixDQUFVLEVBQUUsWUFBRixFQUFTLHNCQUFULEVBQVYsQ0FBdkI7QUFBQSxDIiwiZmlsZSI6ImNoYWluLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIENoYWluIGV4dGVuZHMgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wbGF5TmV4dCA9IHRoaXMucGxheU5leHQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH1cblxuICBwbGF5TmV4dCgpIHtcbiAgICBjb25zdCB7IGksIG9yZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpIDwgb3JkZXIubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5wcm9wcy5pKys7XG4gICAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBwbGF5Q3VycmVudCgpIHtcbiAgICBjb25zdCB7IGksIG9yZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIG9yZGVyW2ldLnByb3BzLl9vbkNvbXBsZXRlID0gdGhpcy5wbGF5TmV4dDtcbiAgICBvcmRlcltpXS5zdGFydCgpO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIGNvbnN0IHsgaSwgb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChvcmRlciwgb25Db21wbGV0ZSkgPT4gbmV3IENoYWluKHsgb3JkZXIsIG9uQ29tcGxldGUgfSk7XG4iXX0=

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CompositeAction = function (_Action) {
	  _inherits(CompositeAction, _Action);
	
	  function CompositeAction(props) {
	    _classCallCheck(this, CompositeAction);
	
	    var actions = props.actions;
	
	    var remainingProps = _objectWithoutProperties(props, ['actions']);
	
	    var _this = _possibleConstructorReturn(this, _Action.call(this, remainingProps));
	
	    _this.current = {};
	    _this.actionKeys = [];
	    _this.addActions(props.actions);
	    return _this;
	  }
	
	  CompositeAction.prototype.addActions = function addActions(actions) {
	    var _this2 = this;
	
	    var _loop = function (key) {
	      if (_this2.actionKeys.indexOf(key) === -1) {
	        _this2.actionKeys.push(key);
	      }
	
	      _this2[key] = actions[key];
	
	      var onUpdate = function (v, action) {
	        return _this2.current[key] = action.get();
	      };
	
	      // Immediately update with the current action state
	      onUpdate(null, _this2[key]);
	
	      _this2[key].setProps({
	        _onStop: function () {
	          return _this2.numActiveActions--;
	        }
	      }).addListener(onUpdate);
	    };
	
	    for (var key in actions) {
	      _loop(key);
	    }
	  };
	
	  CompositeAction.prototype.onStart = function onStart() {
	    var _this3 = this;
	
	    this.numActiveActions = this.actionKeys.length;
	    this.actionKeys.forEach(function (key) {
	      return _this3[key].start();
	    });
	  };
	
	  CompositeAction.prototype.onStop = function onStop() {
	    var _this4 = this;
	
	    this.actionKeys.forEach(function (key) {
	      return _this4[key].stop();
	    });
	  };
	
	  CompositeAction.prototype.getVelocity = function getVelocity() {
	    var _this5 = this;
	
	    var velocity = {};
	    this.actionKeys.forEach(function (key) {
	      return velocity[key] = _this5[key].getVelocity();
	    });
	    return velocity;
	  };
	
	  CompositeAction.prototype.isActionComplete = function isActionComplete() {
	    return this.numActiveActions === 0;
	  };
	
	  return CompositeAction;
	}(_2.default);
	
	exports.default = function (actions, props) {
	  return new CompositeAction(_extends({
	    actions: actions
	  }, props));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFFTSxlOzs7QUFDSiwyQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsUUFDVCxPQURTLEdBQ3NCLEtBRHRCLENBQ1QsT0FEUzs7QUFBQSxRQUNHLGNBREgsNEJBQ3NCLEtBRHRCOztBQUFBLGlEQUVqQixtQkFBTSxjQUFOLENBRmlCOztBQUdqQixVQUFLLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBSyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsVUFBSyxVQUFMLENBQWdCLE1BQU0sT0FBdEI7QUFMaUI7QUFNbEI7OzRCQUVELFUsdUJBQVcsTyxFQUFTO0FBQUE7O0FBQUEsMEJBQ1AsR0FETztBQUVoQixVQUFJLE9BQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixHQUF4QixNQUFpQyxDQUFDLENBQXRDLEVBQXlDO0FBQ3ZDLGVBQUssVUFBTCxDQUFnQixJQUFoQixDQUFxQixHQUFyQjtBQUNEOztBQUVELGFBQUssR0FBTCxJQUFZLFFBQVEsR0FBUixDQUFaOztBQUVBLFVBQU0sV0FBVyxVQUFDLENBQUQsRUFBSSxNQUFKO0FBQUEsZUFBZSxPQUFLLE9BQUwsQ0FBYSxHQUFiLElBQW9CLE9BQU8sR0FBUCxFQUFuQztBQUFBLE9BQWpCOzs7QUFHQSxlQUFTLElBQVQsRUFBZSxPQUFLLEdBQUwsQ0FBZjs7QUFFQSxhQUFLLEdBQUwsRUFDRyxRQURILENBQ1k7QUFDUixpQkFBUztBQUFBLGlCQUFNLE9BQUssZ0JBQUwsRUFBTjtBQUFBO0FBREQsT0FEWixFQUlHLFdBSkgsQ0FJZSxRQUpmO0FBYmdCOztBQUNsQixTQUFLLElBQU0sR0FBWCxJQUFrQixPQUFsQixFQUEyQjtBQUFBLFlBQWhCLEdBQWdCO0FBaUIxQjtBQUNGLEc7OzRCQUVELE8sc0JBQVU7QUFBQTs7QUFDUixTQUFLLGdCQUFMLEdBQXdCLEtBQUssVUFBTCxDQUFnQixNQUF4QztBQUNBLFNBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixVQUFDLEdBQUQ7QUFBQSxhQUFTLE9BQUssR0FBTCxFQUFVLEtBQVYsRUFBVDtBQUFBLEtBQXhCO0FBQ0QsRzs7NEJBRUQsTSxxQkFBUztBQUFBOztBQUNQLFNBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixVQUFDLEdBQUQ7QUFBQSxhQUFTLE9BQUssR0FBTCxFQUFVLElBQVYsRUFBVDtBQUFBLEtBQXhCO0FBQ0QsRzs7NEJBRUQsVywwQkFBYztBQUFBOztBQUNaLFFBQU0sV0FBVyxFQUFqQjtBQUNBLFNBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixVQUFDLEdBQUQ7QUFBQSxhQUFTLFNBQVMsR0FBVCxJQUFnQixPQUFLLEdBQUwsRUFBVSxXQUFWLEVBQXpCO0FBQUEsS0FBeEI7QUFDQSxXQUFPLFFBQVA7QUFDRCxHOzs0QkFFRCxnQiwrQkFBbUI7QUFDakIsV0FBUSxLQUFLLGdCQUFMLEtBQTBCLENBQWxDO0FBQ0QsRzs7Ozs7a0JBR1ksVUFBQyxPQUFELEVBQVUsS0FBVixFQUFvQjtBQUNqQyxTQUFPLElBQUksZUFBSjtBQUNMO0FBREssS0FFRixLQUZFLEVBQVA7QUFJRCxDIiwiZmlsZSI6ImNvbXBvc2l0ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuXG5jbGFzcyBDb21wb3NpdGVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IHsgYWN0aW9ucywgLi4ucmVtYWluaW5nUHJvcHMgfSA9IHByb3BzO1xuICAgIHN1cGVyKHJlbWFpbmluZ1Byb3BzKTtcbiAgICB0aGlzLmN1cnJlbnQgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMgPSBbXTtcbiAgICB0aGlzLmFkZEFjdGlvbnMocHJvcHMuYWN0aW9ucyk7XG4gIH1cblxuICBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhY3Rpb25zKSB7XG4gICAgICBpZiAodGhpcy5hY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgdGhpc1trZXldID0gYWN0aW9uc1trZXldO1xuXG4gICAgICBjb25zdCBvblVwZGF0ZSA9ICh2LCBhY3Rpb24pID0+IHRoaXMuY3VycmVudFtrZXldID0gYWN0aW9uLmdldCgpO1xuXG4gICAgICAvLyBJbW1lZGlhdGVseSB1cGRhdGUgd2l0aCB0aGUgY3VycmVudCBhY3Rpb24gc3RhdGVcbiAgICAgIG9uVXBkYXRlKG51bGwsIHRoaXNba2V5XSk7XG5cbiAgICAgIHRoaXNba2V5XVxuICAgICAgICAuc2V0UHJvcHMoe1xuICAgICAgICAgIF9vblN0b3A6ICgpID0+IHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tXG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRMaXN0ZW5lcihvblVwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSB0aGlzLmFjdGlvbktleXMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKChrZXkpID0+IHRoaXNba2V5XS5zdGFydCgpKTtcbiAgfVxuXG4gIG9uU3RvcCgpIHtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaCgoa2V5KSA9PiB0aGlzW2tleV0uc3RvcCgpKTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIGNvbnN0IHZlbG9jaXR5ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goKGtleSkgPT4gdmVsb2NpdHlba2V5XSA9IHRoaXNba2V5XS5nZXRWZWxvY2l0eSgpKTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiAodGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoYWN0aW9ucywgcHJvcHMpID0+IHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oe1xuICAgIGFjdGlvbnMsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59O1xuIl19

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _tween = __webpack_require__(15);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _easing = __webpack_require__(3);
	
	var _calc = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CrossFade = function (_Action) {
	  _inherits(CrossFade, _Action);
	
	  function CrossFade() {
	    _classCallCheck(this, CrossFade);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  CrossFade.prototype.onStart = function onStart() {
	    var _props = this.props;
	    var duration = _props.duration;
	    var ease = _props.ease;
	    var fader = _props.fader;
	
	
	    this.fader = fader || (0, _tween2.default)({
	      to: 1,
	      duration: duration,
	      ease: ease
	    }).start();
	  };
	
	  CrossFade.prototype.update = function update() {
	    var _props2 = this.props;
	    var from = _props2.from;
	    var to = _props2.to;
	
	    var balance = this.fader.get();
	    var latestFromValue = from.get();
	    var latestToValue = to.get();
	    return (0, _calc.getValueFromProgress)(latestFromValue, latestToValue, balance);
	  };
	
	  return CrossFade;
	}(_2.default);
	
	CrossFade.defaultProps = {
	  ease: _easing.linear
	};
	
	exports.default = function (props) {
	  return new CrossFade(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNLFM7Ozs7Ozs7OztzQkFLSixPLHNCQUFVO0FBQUEsaUJBQzBCLEtBQUssS0FEL0I7QUFBQSxRQUNBLFFBREEsVUFDQSxRQURBO0FBQUEsUUFDVSxJQURWLFVBQ1UsSUFEVjtBQUFBLFFBQ2dCLEtBRGhCLFVBQ2dCLEtBRGhCOzs7QUFHUixTQUFLLEtBQUwsR0FBYSxTQUFTLHFCQUFNO0FBQzFCLFVBQUksQ0FEc0I7QUFFMUIsd0JBRjBCO0FBRzFCO0FBSDBCLEtBQU4sRUFJbkIsS0FKbUIsRUFBdEI7QUFLRCxHOztzQkFFRCxNLHFCQUFTO0FBQUEsa0JBQ2MsS0FBSyxLQURuQjtBQUFBLFFBQ0MsSUFERCxXQUNDLElBREQ7QUFBQSxRQUNPLEVBRFAsV0FDTyxFQURQOztBQUVQLFFBQU0sVUFBVSxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWhCO0FBQ0EsUUFBTSxrQkFBa0IsS0FBSyxHQUFMLEVBQXhCO0FBQ0EsUUFBTSxnQkFBZ0IsR0FBRyxHQUFILEVBQXRCO0FBQ0EsV0FBTyxnQ0FBcUIsZUFBckIsRUFBc0MsYUFBdEMsRUFBcUQsT0FBckQsQ0FBUDtBQUNELEc7Ozs7O0FBckJHLFMsQ0FDRyxZLEdBQWU7QUFDcEI7QUFEb0IsQzs7a0JBdUJULFVBQUMsS0FBRDtBQUFBLFNBQVcsSUFBSSxTQUFKLENBQWMsS0FBZCxDQUFYO0FBQUEsQyIsImZpbGUiOiJjcm9zcy1mYWRlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgdHdlZW4gZnJvbSAnLi90d2Vlbic7XG5pbXBvcnQgeyBsaW5lYXIgfSBmcm9tICcuLi9pbmMvZWFzaW5nJztcbmltcG9ydCB7IGdldFZhbHVlRnJvbVByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jbGFzcyBDcm9zc0ZhZGUgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGVhc2U6IGxpbmVhclxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBlYXNlLCBmYWRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuZmFkZXIgPSBmYWRlciB8fCB0d2Vlbih7XG4gICAgICB0bzogMSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZWFzZVxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyBmcm9tLCB0byB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBiYWxhbmNlID0gdGhpcy5mYWRlci5nZXQoKTtcbiAgICBjb25zdCBsYXRlc3RGcm9tVmFsdWUgPSBmcm9tLmdldCgpO1xuICAgIGNvbnN0IGxhdGVzdFRvVmFsdWUgPSB0by5nZXQoKTtcbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MobGF0ZXN0RnJvbVZhbHVlLCBsYXRlc3RUb1ZhbHVlLCBiYWxhbmNlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBDcm9zc0ZhZGUocHJvcHMpO1xuIl19

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _tween = __webpack_require__(15);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (duration, onComplete) {
	  return (0, _tween2.default)({ duration: duration, onComplete: onComplete });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2RlbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O2tCQUVlLFVBQUMsUUFBRCxFQUFXLFVBQVg7QUFBQSxTQUEwQixxQkFBTSxFQUFFLGtCQUFGLEVBQVksc0JBQVosRUFBTixDQUExQjtBQUFBLEMiLCJmaWxlIjoiZGVsYXkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHdlZW4gZnJvbSAnLi90d2Vlbic7XG5cbmV4cG9ydCBkZWZhdWx0IChkdXJhdGlvbiwgb25Db21wbGV0ZSkgPT4gdHdlZW4oeyBkdXJhdGlvbiwgb25Db21wbGV0ZSB9KTtcbiJdfQ==

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Offset = function (_Action) {
	  _inherits(Offset, _Action);
	
	  function Offset() {
	    _classCallCheck(this, Offset);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Offset.prototype.onStart = function onStart() {
	    var _this2 = this;
	
	    var input = this.props.input;
	
	    this.inputOrigin = input.get();
	
	    this.scheduleUpdate = function () {
	      (0, _framesync.onFrameUpdate)(_this2.scheduledUpdate);
	    };
	
	    input.addListener(this.scheduleUpdate);
	  };
	
	  Offset.prototype.onStop = function onStop() {
	    var input = this.props.input;
	
	    input.removeListener(this.scheduleUpdate);
	  };
	
	  Offset.prototype.update = function update() {
	    var _props = this.props;
	    var input = _props.input;
	    var from = _props.from;
	
	    var offset = input.get() - this.inputOrigin;
	    return from + offset;
	  };
	
	  return Offset;
	}(_2.default);
	
	Offset.defaultProps = {
	  from: 0,
	  passive: true
	};
	
	exports.default = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  if (args.length === 1) {
	    var props = args[0];
	
	    return new Offset(props);
	  } else {
	    var input = args[0];
	    var onUpdate = args[1];
	    var _props2 = args[2];
	
	    return new Offset(_extends({
	      input: input,
	      onUpdate: onUpdate
	    }, _props2));
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL29mZnNldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU0sTTs7Ozs7Ozs7O21CQU1KLE8sc0JBQVU7QUFBQTs7QUFBQSxRQUNBLEtBREEsR0FDVSxLQUFLLEtBRGYsQ0FDQSxLQURBOztBQUVSLFNBQUssV0FBTCxHQUFtQixNQUFNLEdBQU4sRUFBbkI7O0FBRUEsU0FBSyxjQUFMLEdBQXNCLFlBQU07QUFDMUIsb0NBQWMsT0FBSyxlQUFuQjtBQUNELEtBRkQ7O0FBSUEsVUFBTSxXQUFOLENBQWtCLEtBQUssY0FBdkI7QUFDRCxHOzttQkFFRCxNLHFCQUFTO0FBQUEsUUFDQyxLQURELEdBQ1csS0FBSyxLQURoQixDQUNDLEtBREQ7O0FBRVAsVUFBTSxjQUFOLENBQXFCLEtBQUssY0FBMUI7QUFDRCxHOzttQkFFRCxNLHFCQUFTO0FBQUEsaUJBQ2lCLEtBQUssS0FEdEI7QUFBQSxRQUNDLEtBREQsVUFDQyxLQUREO0FBQUEsUUFDUSxJQURSLFVBQ1EsSUFEUjs7QUFFUCxRQUFNLFNBQVMsTUFBTSxHQUFOLEtBQWMsS0FBSyxXQUFsQztBQUNBLFdBQU8sT0FBTyxNQUFkO0FBQ0QsRzs7Ozs7QUExQkcsTSxDQUNHLFksR0FBZTtBQUNwQixRQUFNLENBRGM7QUFFcEIsV0FBUztBQUZXLEM7O2tCQTRCVCxZQUFhO0FBQUEsb0NBQVQsSUFBUztBQUFULFFBQVM7QUFBQTs7QUFDMUIsTUFBSSxLQUFLLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFBQSxRQUNiLEtBRGEsR0FDSCxJQURHOztBQUVyQixXQUFPLElBQUksTUFBSixDQUFXLEtBQVgsQ0FBUDtBQUNELEdBSEQsTUFHTztBQUFBLFFBQ0csS0FESCxHQUM4QixJQUQ5QjtBQUFBLFFBQ1UsUUFEVixHQUM4QixJQUQ5QjtBQUFBLFFBQ29CLE9BRHBCLEdBQzhCLElBRDlCOztBQUVMLFdBQU8sSUFBSSxNQUFKO0FBQ0wsa0JBREs7QUFFTDtBQUZLLE9BR0YsT0FIRSxFQUFQO0FBS0Q7QUFDRixDIiwiZmlsZSI6Im9mZnNldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5cbmNsYXNzIE9mZnNldCBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZnJvbTogMCxcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG5cbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGlucHV0IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuaW5wdXRPcmlnaW4gPSBpbnB1dC5nZXQoKTtcblxuICAgIHRoaXMuc2NoZWR1bGVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuYWRkTGlzdGVuZXIodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gIH1cblxuICBvblN0b3AoKSB7XG4gICAgY29uc3QgeyBpbnB1dCB9ID0gdGhpcy5wcm9wcztcbiAgICBpbnB1dC5yZW1vdmVMaXN0ZW5lcih0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGlucHV0LCBmcm9tIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9mZnNldCA9IGlucHV0LmdldCgpIC0gdGhpcy5pbnB1dE9yaWdpbjtcbiAgICByZXR1cm4gZnJvbSArIG9mZnNldDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBbIHByb3BzIF0gPSBhcmdzO1xuICAgIHJldHVybiBuZXcgT2Zmc2V0KHByb3BzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBbIGlucHV0LCBvblVwZGF0ZSwgcHJvcHMgXSA9IGFyZ3M7XG4gICAgcmV0dXJuIG5ldyBPZmZzZXQoe1xuICAgICAgaW5wdXQsXG4gICAgICBvblVwZGF0ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSk7XG4gIH1cbn07XG4iXX0=

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Parallel = function (_Action) {
	  _inherits(Parallel, _Action);
	
	  function Parallel() {
	    _classCallCheck(this, Parallel);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Parallel.prototype.onStart = function onStart() {
	    var _this2 = this;
	
	    var actions = this.props.actions;
	
	    this.numActiveActions = actions.length;
	
	    actions.forEach(function (action) {
	      action.setProps({
	        _onStop: function () {
	          return _this2.numActiveActions--;
	        }
	      }).start();
	    });
	  };
	
	  Parallel.prototype.onStop = function onStop() {
	    this.props.actions.forEach(function (action) {
	      return action.stop();
	    });
	  };
	
	  Parallel.prototype.addAction = function addAction(action) {
	    var actions = this.props.actions;
	
	
	    if (actions.indexOf(action) === -1) {
	      actions.push(action);
	    }
	  };
	
	  Parallel.prototype.isActionComplete = function isActionComplete() {
	    return this.numActiveActions === 0;
	  };
	
	  return Parallel;
	}(_2.default);
	
	exports.default = function (actions, props) {
	  return new Parallel(_extends({ actions: actions }, props));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BhcmFsbGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTSxROzs7Ozs7Ozs7cUJBQ0osTyxzQkFBVTtBQUFBOztBQUFBLFFBQ0EsT0FEQSxHQUNZLEtBQUssS0FEakIsQ0FDQSxPQURBOztBQUVSLFNBQUssZ0JBQUwsR0FBd0IsUUFBUSxNQUFoQzs7QUFFQSxZQUFRLE9BQVIsQ0FBZ0IsVUFBQyxNQUFELEVBQVk7QUFDMUIsYUFBTyxRQUFQLENBQWdCO0FBQ2QsaUJBQVM7QUFBQSxpQkFBTSxPQUFLLGdCQUFMLEVBQU47QUFBQTtBQURLLE9BQWhCLEVBRUcsS0FGSDtBQUdELEtBSkQ7QUFLRCxHOztxQkFFRCxNLHFCQUFTO0FBQ1AsU0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixPQUFuQixDQUEyQixVQUFDLE1BQUQ7QUFBQSxhQUFZLE9BQU8sSUFBUCxFQUFaO0FBQUEsS0FBM0I7QUFDRCxHOztxQkFFRCxTLHNCQUFVLE0sRUFBUTtBQUFBLFFBQ1IsT0FEUSxHQUNJLEtBQUssS0FEVCxDQUNSLE9BRFE7OztBQUdoQixRQUFJLFFBQVEsT0FBUixDQUFnQixNQUFoQixNQUE0QixDQUFDLENBQWpDLEVBQW9DO0FBQ2xDLGNBQVEsSUFBUixDQUFhLE1BQWI7QUFDRDtBQUNGLEc7O3FCQUVELGdCLCtCQUFtQjtBQUNqQixXQUFRLEtBQUssZ0JBQUwsS0FBMEIsQ0FBbEM7QUFDRCxHOzs7OztrQkFHWSxVQUFDLE9BQUQsRUFBVSxLQUFWO0FBQUEsU0FBb0IsSUFBSSxRQUFKLFlBQWUsZ0JBQWYsSUFBMkIsS0FBM0IsRUFBcEI7QUFBQSxDIiwiZmlsZSI6InBhcmFsbGVsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIFBhcmFsbGVsIGV4dGVuZHMgQWN0aW9uIHtcbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGFjdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gYWN0aW9ucy5sZW5ndGg7XG5cbiAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgYWN0aW9uLnNldFByb3BzKHtcbiAgICAgICAgX29uU3RvcDogKCkgPT4gdGhpcy5udW1BY3RpdmVBY3Rpb25zLS1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBvblN0b3AoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4gYWN0aW9uLnN0b3AoKSk7XG4gIH1cblxuICBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pID09PSAtMSkge1xuICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbnMsIHByb3BzKSA9PiBuZXcgUGFyYWxsZWwoeyBhY3Rpb25zLCAuLi5wcm9wcyB9KTtcbiJdfQ==

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(18);
	
	var _calc = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Physics = function (_Action) {
	  _inherits(Physics, _Action);
	
	  function Physics() {
	    _classCallCheck(this, Physics);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Physics.prototype.update = function update() {
	    var _props = this.props;
	    var autoStopSpeed = _props.autoStopSpeed;
	    var acceleration = _props.acceleration;
	    var friction = _props.friction;
	    var velocity = _props.velocity;
	    var spring = _props.spring;
	    var to = _props.to;
	
	    var newVelocity = velocity;
	    var elapsed = (0, _framesync.timeSinceLastFrame)();
	
	    // Apply acceleration to velocity
	    if (acceleration) {
	      newVelocity += (0, _calc.speedPerFrame)(acceleration, elapsed);
	    }
	
	    // Apply friction to velocity
	    if (friction) {
	      newVelocity *= Math.pow(1 - friction, elapsed / 100);
	    }
	
	    if (spring && to !== undefined) {
	      var distanceToTarget = to - this.current;
	      newVelocity += distanceToTarget * (0, _calc.speedPerFrame)(spring, elapsed);
	    }
	
	    // Apply velocity
	    this.current += (0, _calc.speedPerFrame)(newVelocity, elapsed);
	    this.props.velocity = newVelocity;
	
	    // Check if simulation is complete
	    // We do this here instead of `isActionComplete` as it allows us
	    // to clamp during this update
	    this.isComplete = autoStopSpeed !== false && (!newVelocity || Math.abs(newVelocity) <= autoStopSpeed);
	
	    if (this.isComplete && spring) {
	      this.current = to;
	    }
	
	    return this.current;
	  };
	
	  Physics.prototype.isActionComplete = function isActionComplete() {
	    return this.isComplete;
	  };
	
	  return Physics;
	}(_2.default);
	
	Physics.defaultProps = {
	  acceleration: 0,
	  friction: 0,
	  velocity: 0,
	  autoStopSpeed: 0.001
	};
	
	exports.default = function (props) {
	  return new Physics(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTSxPOzs7Ozs7Ozs7b0JBUUosTSxxQkFBUztBQUFBLGlCQUNpRSxLQUFLLEtBRHRFO0FBQUEsUUFDQyxhQURELFVBQ0MsYUFERDtBQUFBLFFBQ2dCLFlBRGhCLFVBQ2dCLFlBRGhCO0FBQUEsUUFDOEIsUUFEOUIsVUFDOEIsUUFEOUI7QUFBQSxRQUN3QyxRQUR4QyxVQUN3QyxRQUR4QztBQUFBLFFBQ2tELE1BRGxELFVBQ2tELE1BRGxEO0FBQUEsUUFDMEQsRUFEMUQsVUFDMEQsRUFEMUQ7O0FBRVAsUUFBSSxjQUFjLFFBQWxCO0FBQ0EsUUFBTSxVQUFVLG9DQUFoQjs7O0FBR0EsUUFBSSxZQUFKLEVBQWtCO0FBQ2hCLHFCQUFlLHlCQUFjLFlBQWQsRUFBNEIsT0FBNUIsQ0FBZjtBQUNEOzs7QUFHRCxRQUFJLFFBQUosRUFBYztBQUNaLDhCQUFnQixJQUFJLFFBQXBCLEVBQWtDLFVBQVUsR0FBNUM7QUFDRDs7QUFFRCxRQUFJLFVBQVUsT0FBTyxTQUFyQixFQUFnQztBQUM5QixVQUFNLG1CQUFtQixLQUFLLEtBQUssT0FBbkM7QUFDQSxxQkFBZSxtQkFBbUIseUJBQWMsTUFBZCxFQUFzQixPQUF0QixDQUFsQztBQUNEOzs7QUFHRCxTQUFLLE9BQUwsSUFBZ0IseUJBQWMsV0FBZCxFQUEyQixPQUEzQixDQUFoQjtBQUNBLFNBQUssS0FBTCxDQUFXLFFBQVgsR0FBc0IsV0FBdEI7Ozs7O0FBS0EsU0FBSyxVQUFMLEdBQW1CLGtCQUFrQixLQUFsQixLQUE0QixDQUFDLFdBQUQsSUFBZ0IsS0FBSyxHQUFMLENBQVMsV0FBVCxLQUF5QixhQUFyRSxDQUFuQjs7QUFFQSxRQUFJLEtBQUssVUFBTCxJQUFtQixNQUF2QixFQUErQjtBQUM3QixXQUFLLE9BQUwsR0FBZSxFQUFmO0FBQ0Q7O0FBRUQsV0FBTyxLQUFLLE9BQVo7QUFDRCxHOztvQkFFRCxnQiwrQkFBbUI7QUFDakIsV0FBTyxLQUFLLFVBQVo7QUFDRCxHOzs7OztBQTlDRyxPLENBQ0csWSxHQUFlO0FBQ3BCLGdCQUFjLENBRE07QUFFcEIsWUFBVSxDQUZVO0FBR3BCLFlBQVUsQ0FIVTtBQUlwQixpQkFBZTtBQUpLLEM7O2tCQWdEVCxVQUFDLEtBQUQ7QUFBQSxTQUFXLElBQUksT0FBSixDQUFZLEtBQVosQ0FBWDtBQUFBLEMiLCJmaWxlIjoicGh5c2ljcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IHNwZWVkUGVyRnJhbWUgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIFBoeXNpY3MgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjY2VsZXJhdGlvbjogMCxcbiAgICBmcmljdGlvbjogMCxcbiAgICB2ZWxvY2l0eTogMCxcbiAgICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgYXV0b1N0b3BTcGVlZCwgYWNjZWxlcmF0aW9uLCBmcmljdGlvbiwgdmVsb2NpdHksIHNwcmluZywgdG8gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG5ld1ZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgY29uc3QgZWxhcHNlZCA9IHRpbWVTaW5jZUxhc3RGcmFtZSgpO1xuXG4gICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGFjY2VsZXJhdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKz0gc3BlZWRQZXJGcmFtZShhY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZyaWN0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGZyaWN0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSAqPSAoMSAtIGZyaWN0aW9uKSAqKiAoZWxhcHNlZCAvIDEwMCk7XG4gICAgfVxuXG4gICAgaWYgKHNwcmluZyAmJiB0byAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZVRvVGFyZ2V0ID0gdG8gLSB0aGlzLmN1cnJlbnQ7XG4gICAgICBuZXdWZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogc3BlZWRQZXJGcmFtZShzcHJpbmcsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHZlbG9jaXR5XG4gICAgdGhpcy5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIC8vIENoZWNrIGlmIHNpbXVsYXRpb24gaXMgY29tcGxldGVcbiAgICAvLyBXZSBkbyB0aGlzIGhlcmUgaW5zdGVhZCBvZiBgaXNBY3Rpb25Db21wbGV0ZWAgYXMgaXQgYWxsb3dzIHVzXG4gICAgLy8gdG8gY2xhbXAgZHVyaW5nIHRoaXMgdXBkYXRlXG4gICAgdGhpcy5pc0NvbXBsZXRlID0gKGF1dG9TdG9wU3BlZWQgIT09IGZhbHNlICYmICghbmV3VmVsb2NpdHkgfHwgTWF0aC5hYnMobmV3VmVsb2NpdHkpIDw9IGF1dG9TdG9wU3BlZWQpKTtcblxuICAgIGlmICh0aGlzLmlzQ29tcGxldGUgJiYgc3ByaW5nKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0bztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gbmV3IFBoeXNpY3MocHJvcHMpOyJdfQ==

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _value = __webpack_require__(17);
	
	var _value2 = _interopRequireDefault(_value);
	
	var _composite = __webpack_require__(8);
	
	var _composite2 = _interopRequireDefault(_composite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function createPointer(_ref2, _ref) {
	  var x = _ref2.x;
	  var y = _ref2.y;
	  var eventToPoints = _ref.eventToPoints;
	  var moveEvent = _ref.moveEvent;
	
	  var props = _objectWithoutProperties(_ref, ['eventToPoints', 'moveEvent']);
	
	  var pointer = (0, _composite2.default)({
	    x: (0, _value2.default)(x),
	    y: (0, _value2.default)(y)
	  }, _extends({
	    passive: true,
	    preventDefault: true
	  }, props));
	
	  var updatePointer = function (e) {
	    if (props.preventDefault) {
	      e.preventDefault();
	    }
	
	    var points = eventToPoints(e);
	    pointer.x.set(points.x);
	    pointer.y.set(points.y);
	  };
	
	  pointer.setProps({
	    _onStart: function () {
	      return document.documentElement.addEventListener(moveEvent, updatePointer);
	    },
	    _onStop: function () {
	      return document.documentElement.removeEventListener(moveEvent, updatePointer);
	    }
	  });
	
	  return pointer;
	}
	
	var mouseEventToPoint = function (e) {
	  return {
	    x: e.pageX,
	    y: e.pageY
	  };
	};
	
	var touchEventToPoint = function (_ref3) {
	  var changedTouches = _ref3.changedTouches;
	  return {
	    x: changedTouches[0].clientX,
	    y: changedTouches[0].clientY
	  };
	};
	
	var getNativeEvent = function (e) {
	  return e.originalEvent || e.nativeEvent || e;
	};
	
	exports.default = function (e, props) {
	  var nativeEvent = getNativeEvent(e);
	  return nativeEvent.touches ? createPointer(touchEventToPoint(e), _extends({
	    moveEvent: 'touchmove',
	    eventToPoints: touchEventToPoint
	  }, props)) : createPointer(mouseEventToPoint(e), _extends({
	    moveEvent: 'mousemove',
	    eventToPoints: mouseEventToPoint
	  }, props));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BvaW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTLGFBQVQsY0FBeUU7QUFBQSxNQUFoRCxDQUFnRCxTQUFoRCxDQUFnRDtBQUFBLE1BQTdDLENBQTZDLFNBQTdDLENBQTZDO0FBQUEsTUFBdEMsYUFBc0MsUUFBdEMsYUFBc0M7QUFBQSxNQUF2QixTQUF1QixRQUF2QixTQUF1Qjs7QUFBQSxNQUFULEtBQVM7O0FBQ3ZFLE1BQU0sVUFBVSx5QkFBVTtBQUN4QixPQUFHLHFCQUFNLENBQU4sQ0FEcUI7QUFFeEIsT0FBRyxxQkFBTSxDQUFOO0FBRnFCLEdBQVY7QUFJZCxhQUFTLElBSks7QUFLZCxvQkFBZ0I7QUFMRixLQU1YLEtBTlcsRUFBaEI7O0FBU0EsTUFBTSxnQkFBZ0IsVUFBQyxDQUFELEVBQU87QUFDM0IsUUFBSSxNQUFNLGNBQVYsRUFBMEI7QUFDeEIsUUFBRSxjQUFGO0FBQ0Q7O0FBRUQsUUFBTSxTQUFTLGNBQWMsQ0FBZCxDQUFmO0FBQ0EsWUFBUSxDQUFSLENBQVUsR0FBVixDQUFjLE9BQU8sQ0FBckI7QUFDQSxZQUFRLENBQVIsQ0FBVSxHQUFWLENBQWMsT0FBTyxDQUFyQjtBQUNELEdBUkQ7O0FBVUEsVUFBUSxRQUFSLENBQWlCO0FBQ2YsY0FBVTtBQUFBLGFBQU0sU0FBUyxlQUFULENBQXlCLGdCQUF6QixDQUEwQyxTQUExQyxFQUFxRCxhQUFyRCxDQUFOO0FBQUEsS0FESztBQUVmLGFBQVM7QUFBQSxhQUFNLFNBQVMsZUFBVCxDQUF5QixtQkFBekIsQ0FBNkMsU0FBN0MsRUFBd0QsYUFBeEQsQ0FBTjtBQUFBO0FBRk0sR0FBakI7O0FBS0EsU0FBTyxPQUFQO0FBQ0Q7O0FBRUQsSUFBTSxvQkFBb0IsVUFBQyxDQUFEO0FBQUEsU0FBUTtBQUNoQyxPQUFHLEVBQUUsS0FEMkI7QUFFaEMsT0FBRyxFQUFFO0FBRjJCLEdBQVI7QUFBQSxDQUExQjs7QUFLQSxJQUFNLG9CQUFvQjtBQUFBLE1BQUcsY0FBSCxTQUFHLGNBQUg7QUFBQSxTQUF5QjtBQUNqRCxPQUFHLGVBQWUsQ0FBZixFQUFrQixPQUQ0QjtBQUVqRCxPQUFHLGVBQWUsQ0FBZixFQUFrQjtBQUY0QixHQUF6QjtBQUFBLENBQTFCOztBQUtBLElBQU0saUJBQWlCLFVBQUMsQ0FBRDtBQUFBLFNBQU8sRUFBRSxhQUFGLElBQW1CLEVBQUUsV0FBckIsSUFBb0MsQ0FBM0M7QUFBQSxDQUF2Qjs7a0JBRWUsVUFBQyxDQUFELEVBQUksS0FBSixFQUFjO0FBQzNCLE1BQU0sY0FBYyxlQUFlLENBQWYsQ0FBcEI7QUFDQSxTQUFRLFlBQVksT0FBYixHQUNMLGNBQWMsa0JBQWtCLENBQWxCLENBQWQ7QUFDRSxlQUFXLFdBRGI7QUFFRSxtQkFBZTtBQUZqQixLQUdLLEtBSEwsRUFESyxHQU1MLGNBQWMsa0JBQWtCLENBQWxCLENBQWQ7QUFDRSxlQUFXLFdBRGI7QUFFRSxtQkFBZTtBQUZqQixLQUdLLEtBSEwsRUFORjtBQVdELEMiLCJmaWxlIjoicG9pbnRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2YWx1ZSBmcm9tICcuL3ZhbHVlJztcbmltcG9ydCBjb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuXG5mdW5jdGlvbiBjcmVhdGVQb2ludGVyKHsgeCwgeSB9LCB7IGV2ZW50VG9Qb2ludHMsIG1vdmVFdmVudCwgLi4ucHJvcHMgfSkge1xuICBjb25zdCBwb2ludGVyID0gY29tcG9zaXRlKHtcbiAgICB4OiB2YWx1ZSh4KSxcbiAgICB5OiB2YWx1ZSh5KVxuICB9LCB7XG4gICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgICAuLi5wcm9wc1xuICB9KTtcblxuICBjb25zdCB1cGRhdGVQb2ludGVyID0gKGUpID0+IHtcbiAgICBpZiAocHJvcHMucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludHMgPSBldmVudFRvUG9pbnRzKGUpO1xuICAgIHBvaW50ZXIueC5zZXQocG9pbnRzLngpO1xuICAgIHBvaW50ZXIueS5zZXQocG9pbnRzLnkpO1xuICB9O1xuXG4gIHBvaW50ZXIuc2V0UHJvcHMoe1xuICAgIF9vblN0YXJ0OiAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpLFxuICAgIF9vblN0b3A6ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcilcbiAgfSk7XG5cbiAgcmV0dXJuIHBvaW50ZXI7XG59XG5cbmNvbnN0IG1vdXNlRXZlbnRUb1BvaW50ID0gKGUpID0+ICh7XG4gIHg6IGUucGFnZVgsXG4gIHk6IGUucGFnZVlcbn0pO1xuXG5jb25zdCB0b3VjaEV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbn0pO1xuXG5jb25zdCBnZXROYXRpdmVFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xuXG5leHBvcnQgZGVmYXVsdCAoZSwgcHJvcHMpID0+IHtcbiAgY29uc3QgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIChuYXRpdmVFdmVudC50b3VjaGVzKSA/XG4gICAgY3JlYXRlUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwge1xuICAgICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICAgIGV2ZW50VG9Qb2ludHM6IHRvdWNoRXZlbnRUb1BvaW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9KSA6XG4gICAgY3JlYXRlUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwge1xuICAgICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICAgIGV2ZW50VG9Qb2ludHM6IG1vdXNlRXZlbnRUb1BvaW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9KTtcbn07XG4iXX0=

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(18);
	
	var _transformers = __webpack_require__(4);
	
	var _calc = __webpack_require__(2);
	
	var _easing = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var clampProgress = (0, _transformers.clamp)(0, 1);
	
	var NEXT_STEPS = {
	  loop: function (tween) {
	    return tween.start();
	  },
	  yoyo: function (tween) {
	    return tween.reverse().start();
	  },
	  flip: function (tween) {
	    return tween.flip().start();
	  }
	};
	
	var Tween = function (_Action) {
	  _inherits(Tween, _Action);
	
	  function Tween() {
	    _classCallCheck(this, Tween);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Tween.prototype.onStart = function onStart() {
	    var _props = this.props;
	    var duration = _props.duration;
	    var playDirection = _props.playDirection;
	
	
	    this.elapsed = playDirection === 1 ? 0 : duration;
	  };
	
	  Tween.prototype.update = function update() {
	    var _props2 = this.props;
	    var duration = _props2.duration;
	    var ease = _props2.ease;
	    var from = _props2.from;
	    var to = _props2.to;
	    var playDirection = _props2.playDirection;
	
	
	    this.elapsed += (0, _framesync.timeSinceLastFrame)() * playDirection;
	
	    return (0, _calc.getValueFromProgress)(from, to, ease(clampProgress((0, _calc.getProgressFromValue)(0, duration, this.elapsed))));
	  };
	
	  Tween.prototype.isActionComplete = function isActionComplete() {
	    var _props3 = this.props;
	    var duration = _props3.duration;
	    var playDirection = _props3.playDirection;
	    var yoyo = _props3.yoyo;
	    var loop = _props3.loop;
	    var flip = _props3.flip;
	
	    var isComplete = playDirection === 1 ? this.elapsed >= duration : this.elapsed <= 0;
	
	    if (isComplete && (yoyo || loop || flip)) {
	      var isStepTaken = false;
	
	      for (var key in NEXT_STEPS) {
	        var nextStep = NEXT_STEPS[key];
	        var countProp = key + 'Count';
	        var stepMax = this.getProp(key);
	        var stepCount = this.getProp(countProp);
	
	        if (stepMax > stepCount) {
	          var _setProps;
	
	          this.setProps((_setProps = {}, _setProps[countProp] = stepCount + 1, _setProps));
	          nextStep(this);
	          isStepTaken = true;
	        }
	      }
	
	      if (isStepTaken) isComplete = false;
	    }
	
	    return isComplete;
	  };
	
	  Tween.prototype.getElapsed = function getElapsed() {
	    return this.elapsed;
	  };
	
	  Tween.prototype.flip = function flip() {
	    this.elapsed = this.props.duration - this.elapsed;
	    var _ref = [this.props.to, this.props.from];
	    this.props.from = _ref[0];
	    this.props.to = _ref[1];
	
	    return this;
	  };
	
	  Tween.prototype.reverse = function reverse() {
	    this.props.playDirection *= -1;
	    return this;
	  };
	
	  return Tween;
	}(_2.default);
	
	Tween.defaultProps = {
	  duration: 300,
	  ease: _easing.easeOut,
	  from: 0,
	  to: 1,
	  flip: 0,
	  flipCount: 0,
	  yoyo: 0,
	  yoyoCount: 0,
	  loop: 0,
	  loopCount: 0,
	  playDirection: 1
	};
	
	exports.default = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  if (args.length === 1) {
	    var props = args[0];
	
	    return new Tween(props);
	  } else {
	    var from = args[0];
	    var to = args[1];
	    var duration = args[2];
	    var ease = args[3];
	    var _props4 = args[4];
	
	    return new Tween(_extends({ from: from, to: to, duration: duration, ease: ease }, _props4));
	  }
	};
	//# sourceMappingURL=data:application/json;base64,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Qjs7QUFHTCxXQUFPLElBQVA7QUFDRCxHOztrQkFFRCxPLHNCQUFVO0FBQ1IsU0FBSyxLQUFMLENBQVcsYUFBWCxJQUE0QixDQUFDLENBQTdCO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsRzs7Ozs7QUF0RUcsSyxDQUNHLFksR0FBZTtBQUNwQixZQUFVLEdBRFU7QUFFcEIsdUJBRm9CO0FBR3BCLFFBQU0sQ0FIYztBQUlwQixNQUFJLENBSmdCO0FBS3BCLFFBQU0sQ0FMYztBQU1wQixhQUFXLENBTlM7QUFPcEIsUUFBTSxDQVBjO0FBUXBCLGFBQVcsQ0FSUztBQVNwQixRQUFNLENBVGM7QUFVcEIsYUFBVyxDQVZTO0FBV3BCLGlCQUFlO0FBWEssQzs7a0JBd0VULFlBQWE7QUFBQSxvQ0FBVCxJQUFTO0FBQVQsUUFBUztBQUFBOztBQUMxQixNQUFJLEtBQUssTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUFBLFFBQ2IsS0FEYSxHQUNILElBREc7O0FBRXJCLFdBQU8sSUFBSSxLQUFKLENBQVUsS0FBVixDQUFQO0FBQ0QsR0FIRCxNQUdPO0FBQUEsUUFDRyxJQURILEdBQ3VDLElBRHZDO0FBQUEsUUFDUyxFQURULEdBQ3VDLElBRHZDO0FBQUEsUUFDYSxRQURiLEdBQ3VDLElBRHZDO0FBQUEsUUFDdUIsSUFEdkIsR0FDdUMsSUFEdkM7QUFBQSxRQUM2QixPQUQ3QixHQUN1QyxJQUR2Qzs7QUFFTCxXQUFPLElBQUksS0FBSixZQUFZLFVBQVosRUFBa0IsTUFBbEIsRUFBc0Isa0JBQXRCLEVBQWdDLFVBQWhDLElBQXlDLE9BQXpDLEVBQVA7QUFDRDtBQUNGLEMiLCJmaWxlIjoidHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gJy4uL2luYy90cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgZWFzZU91dCB9IGZyb20gJy4uL2luYy9lYXNpbmcnO1xuXG5jb25zdCBjbGFtcFByb2dyZXNzID0gY2xhbXAoMCwgMSk7XG5cbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gIGxvb3A6ICh0d2VlbikgPT4gdHdlZW4uc3RhcnQoKSxcbiAgeW95bzogKHR3ZWVuKSA9PiB0d2Vlbi5yZXZlcnNlKCkuc3RhcnQoKSxcbiAgZmxpcDogKHR3ZWVuKSA9PiB0d2Vlbi5mbGlwKCkuc3RhcnQoKVxufTtcblxuY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgZWFzZTogZWFzZU91dCxcbiAgICBmcm9tOiAwLFxuICAgIHRvOiAxLFxuICAgIGZsaXA6IDAsXG4gICAgZmxpcENvdW50OiAwLFxuICAgIHlveW86IDAsXG4gICAgeW95b0NvdW50OiAwLFxuICAgIGxvb3A6IDAsXG4gICAgbG9vcENvdW50OiAwLFxuICAgIHBsYXlEaXJlY3Rpb246IDFcbiAgfTtcblxuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIHBsYXlEaXJlY3Rpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmVsYXBzZWQgPSAocGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogZHVyYXRpb247XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgZWFzZSwgZnJvbSwgdG8sIHBsYXlEaXJlY3Rpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmVsYXBzZWQgKz0gdGltZVNpbmNlTGFzdEZyYW1lKCkgKiBwbGF5RGlyZWN0aW9uO1xuXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb20sIHRvLCBlYXNlKGNsYW1wUHJvZ3Jlc3MoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoMCwgZHVyYXRpb24sIHRoaXMuZWxhcHNlZCkpKSk7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIHBsYXlEaXJlY3Rpb24sIHlveW8sIGxvb3AsIGZsaXAgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGlzQ29tcGxldGUgPSAocGxheURpcmVjdGlvbiA9PT0gMSkgPyAodGhpcy5lbGFwc2VkID49IGR1cmF0aW9uKSA6ICh0aGlzLmVsYXBzZWQgPD0gMCk7XG5cbiAgICBpZiAoaXNDb21wbGV0ZSAmJiAoeW95byB8fCBsb29wIHx8IGZsaXApKSB7XG4gICAgICBsZXQgaXNTdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgY29uc3QgbmV4dFN0ZXAgPSBORVhUX1NURVBTW2tleV07XG4gICAgICAgIGNvbnN0IGNvdW50UHJvcCA9IGtleSArICdDb3VudCc7XG4gICAgICAgIGNvbnN0IHN0ZXBNYXggPSB0aGlzLmdldFByb3Aoa2V5KTtcbiAgICAgICAgY29uc3Qgc3RlcENvdW50ID0gdGhpcy5nZXRQcm9wKGNvdW50UHJvcCk7XG5cbiAgICAgICAgaWYgKHN0ZXBNYXggPiBzdGVwQ291bnQpIHtcbiAgICAgICAgICB0aGlzLnNldFByb3BzKHtcbiAgICAgICAgICAgIFtjb3VudFByb3BdOiBzdGVwQ291bnQgKyAxXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbmV4dFN0ZXAodGhpcyk7XG4gICAgICAgICAgaXNTdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0ZXBUYWtlbikgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0NvbXBsZXRlO1xuICB9XG5cbiAgZ2V0RWxhcHNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICB9XG5cbiAgZmxpcCgpIHtcbiAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnByb3BzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuICAgIFt0aGlzLnByb3BzLmZyb20sIHRoaXMucHJvcHMudG9dID0gW3RoaXMucHJvcHMudG8sIHRoaXMucHJvcHMuZnJvbV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXZlcnNlKCkge1xuICAgIHRoaXMucHJvcHMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBbIHByb3BzIF0gPSBhcmdzO1xuICAgIHJldHVybiBuZXcgVHdlZW4ocHJvcHMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IFsgZnJvbSwgdG8sIGR1cmF0aW9uLCBlYXNlLCBwcm9wcyBdID0gYXJncztcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHsgZnJvbSwgdG8sIGR1cmF0aW9uLCBlYXNlLCAuLi5wcm9wcyB9KTtcbiAgfVxufTtcbiJdfQ==

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _chain = __webpack_require__(7);
	
	var _chain2 = _interopRequireDefault(_chain);
	
	var _parallel = __webpack_require__(12);
	
	var _parallel2 = _interopRequireDefault(_parallel);
	
	var _delay = __webpack_require__(10);
	
	var _delay2 = _interopRequireDefault(_delay);
	
	var _utils = __webpack_require__(24);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates a new parallel Action composed of chained
	 * delay and actions. Interval can be either a number
	 * to multiply by `i` or a function that will be provided `i`
	 *
	 * Straight cribbed from https://github.com/facebook/react-native/blob/24c72f513e48f0bdc40820b43262328fe2c301d4/Libraries/Animated/src/AnimatedImplementation.js#L2031
	 * ^ This function sold a previously-conflicted me on the merit of moving from
	 * jQuery-style multi-property animations to single-property.
	 * @param  {array} actions
	 * @param  {function | number} interval
	 * @return {Action}
	 */
	
	exports.default = function (actions, interval, onComplete) {
	  var intervalIsFunction = (0, _utils.isFunc)(interval);
	
	  return (0, _parallel2.default)(actions.map(function (action, i) {
	    var timeToDelay = intervalIsFunction ? interval(i) : i * interval;
	    return (0, _chain2.default)([(0, _delay2.default)(timeToDelay), action]);
	  }), { onComplete: onComplete });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3N0YWdnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztrQkFjZSxVQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLFVBQXBCLEVBQW1DO0FBQ2hELE1BQU0scUJBQXFCLG1CQUFPLFFBQVAsQ0FBM0I7O0FBRUEsU0FBTyx3QkFBUyxRQUFRLEdBQVIsQ0FBWSxVQUFDLE1BQUQsRUFBUyxDQUFULEVBQWU7QUFDekMsUUFBTSxjQUFlLGtCQUFELEdBQXVCLFNBQVMsQ0FBVCxDQUF2QixHQUFxQyxJQUFJLFFBQTdEO0FBQ0EsV0FBTyxxQkFBTSxDQUNYLHFCQUFNLFdBQU4sQ0FEVyxFQUVYLE1BRlcsQ0FBTixDQUFQO0FBSUQsR0FOZSxDQUFULEVBTUgsRUFBRSxzQkFBRixFQU5HLENBQVA7QUFPRCxDIiwiZmlsZSI6InN0YWdnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaW4gZnJvbSAnLi9jaGFpbic7XG5pbXBvcnQgcGFyYWxsZWwgZnJvbSAnLi9wYXJhbGxlbCc7XG5pbXBvcnQgZGVsYXkgZnJvbSAnLi9kZWxheSc7XG5pbXBvcnQgeyBpc0Z1bmMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcGFyYWxsZWwgQWN0aW9uIGNvbXBvc2VkIG9mIGNoYWluZWRcbiAqIGRlbGF5IGFuZCBhY3Rpb25zLiBJbnRlcnZhbCBjYW4gYmUgZWl0aGVyIGEgbnVtYmVyXG4gKiB0byBtdWx0aXBseSBieSBgaWAgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgYGlgXG4gKlxuICogU3RyYWlnaHQgY3JpYmJlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi8yNGM3MmY1MTNlNDhmMGJkYzQwODIwYjQzMjYyMzI4ZmUyYzMwMWQ0L0xpYnJhcmllcy9BbmltYXRlZC9zcmMvQW5pbWF0ZWRJbXBsZW1lbnRhdGlvbi5qcyNMMjAzMVxuICogXiBUaGlzIGZ1bmN0aW9uIHNvbGQgYSBwcmV2aW91c2x5LWNvbmZsaWN0ZWQgbWUgb24gdGhlIG1lcml0IG9mIG1vdmluZyBmcm9tXG4gKiBqUXVlcnktc3R5bGUgbXVsdGktcHJvcGVydHkgYW5pbWF0aW9ucyB0byBzaW5nbGUtcHJvcGVydHkuXG4gKiBAcGFyYW0gIHthcnJheX0gYWN0aW9uc1xuICogQHBhcmFtICB7ZnVuY3Rpb24gfCBudW1iZXJ9IGludGVydmFsXG4gKiBAcmV0dXJuIHtBY3Rpb259XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChhY3Rpb25zLCBpbnRlcnZhbCwgb25Db21wbGV0ZSkgPT4ge1xuICBjb25zdCBpbnRlcnZhbElzRnVuY3Rpb24gPSBpc0Z1bmMoaW50ZXJ2YWwpO1xuXG4gIHJldHVybiBwYXJhbGxlbChhY3Rpb25zLm1hcCgoYWN0aW9uLCBpKSA9PiB7XG4gICAgY29uc3QgdGltZVRvRGVsYXkgPSAoaW50ZXJ2YWxJc0Z1bmN0aW9uKSA/IGludGVydmFsKGkpIDogaSAqIGludGVydmFsO1xuICAgIHJldHVybiBjaGFpbihbXG4gICAgICBkZWxheSh0aW1lVG9EZWxheSksXG4gICAgICBhY3Rpb25cbiAgICBdKTtcbiAgfSksIHsgb25Db21wbGV0ZSB9KTtcbn07XG4iXX0=

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Value = function (_Action) {
	  _inherits(Value, _Action);
	
	  function Value() {
	    _classCallCheck(this, Value);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Value.prototype.set = function set(v) {
	    this.toUpdate = v;
	    (0, _framesync.onFrameUpdate)(this.scheduledUpdate);
	  };
	
	  Value.prototype.update = function update() {
	    return this.toUpdate;
	  };
	
	  return Value;
	}(_2.default);
	
	Value.defaultProps = {
	  passive: true
	};
	
	exports.default = function (current, onUpdate) {
	  return new Value({ current: current, onUpdate: onUpdate });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3ZhbHVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU0sSzs7Ozs7Ozs7O2tCQUtKLEcsZ0JBQUksQyxFQUFHO0FBQ0wsU0FBSyxRQUFMLEdBQWdCLENBQWhCO0FBQ0Esa0NBQWMsS0FBSyxlQUFuQjtBQUNELEc7O2tCQUVELE0scUJBQVM7QUFDUCxXQUFPLEtBQUssUUFBWjtBQUNELEc7Ozs7O0FBWkcsSyxDQUNHLFksR0FBZTtBQUNwQixXQUFTO0FBRFcsQzs7a0JBY1QsVUFBQyxPQUFELEVBQVUsUUFBVjtBQUFBLFNBQXVCLElBQUksS0FBSixDQUFVLEVBQUUsZ0JBQUYsRUFBVyxrQkFBWCxFQUFWLENBQXZCO0FBQUEsQyIsImZpbGUiOiJ2YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5cbmNsYXNzIFZhbHVlIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG5cbiAgc2V0KHYpIHtcbiAgICB0aGlzLnRvVXBkYXRlID0gdjtcbiAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50b1VwZGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VycmVudCwgb25VcGRhdGUpID0+IG5ldyBWYWx1ZSh7IGN1cnJlbnQsIG9uVXBkYXRlIH0pO1xuIl19

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _onNextFrame = __webpack_require__(25);
	
	var _onNextFrame2 = _interopRequireDefault(_onNextFrame);
	
	var _createRenderStep = __webpack_require__(26);
	
	var _createRenderStep2 = _interopRequireDefault(_createRenderStep);
	
	var _utils = __webpack_require__(24);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var willRenderNextFrame = false;
	
	/**
	 * Maximum permitted ms since last frame
	 * @type {Number}
	 */
	var MAX_ELAPSED = 20;
	
	/**
	 * Current framestamp
	 * @type {Number}
	 */
	var currentFramestamp = (0, _utils.currentTime)();
	
	var elapsed = 0;
	
	/**
	 * Factor to multiply `elapsed` by - 
	 * 0.5 would be slow motion, 2 would be fast
	 * @type {Number}
	 */
	var dilation = 1;
	
	function startRenderLoop() {
	  if (!willRenderNextFrame) {
	    willRenderNextFrame = true;
	    (0, _onNextFrame2.default)(processFrame);
	  }
	}
	
	var frameStart = (0, _createRenderStep2.default)(startRenderLoop);
	var frameUpdate = (0, _createRenderStep2.default)(startRenderLoop);
	var frameRender = (0, _createRenderStep2.default)(startRenderLoop);
	var frameEnd = (0, _createRenderStep2.default)(startRenderLoop);
	
	function processFrame(framestamp) {
	  willRenderNextFrame = false;
	  elapsed = Math.max(Math.min(framestamp - currentFramestamp, MAX_ELAPSED), 1) * dilation;
	  currentFramestamp = framestamp;
	
	  frameStart.process();
	  frameUpdate.process();
	  frameRender.process();
	  frameEnd.process();
	}
	
	var onFrameStart = exports.onFrameStart = frameStart.schedule;
	var onFrameUpdate = exports.onFrameUpdate = frameUpdate.schedule;
	var onFrameRender = exports.onFrameRender = frameRender.schedule;
	var onFrameEnd = exports.onFrameEnd = frameEnd.schedule;
	var cancelOnFrameStart = exports.cancelOnFrameStart = frameStart.cancel;
	var cancelOnFrameUpdate = exports.cancelOnFrameUpdate = frameUpdate.cancel;
	var cancelOnFrameRender = exports.cancelOnFrameRender = frameRender.cancel;
	var cancelOnFrameEnd = exports.cancelOnFrameEnd = frameEnd.cancel;
	
	var timeSinceLastFrame = exports.timeSinceLastFrame = function () {
	  return elapsed;
	};
	var currentFrameTimestamp = exports.currentFrameTimestamp = function () {
	  return currentFramestamp;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFJLHNCQUFzQixLQUExQjs7Ozs7O0FBTUEsSUFBTSxjQUFjLEVBQXBCOzs7Ozs7QUFNQSxJQUFJLG9CQUFvQix5QkFBeEI7O0FBRUEsSUFBSSxVQUFVLENBQWQ7Ozs7Ozs7QUFPQSxJQUFJLFdBQVcsQ0FBZjs7QUFFQSxTQUFTLGVBQVQsR0FBMkI7QUFDekIsTUFBSSxDQUFDLG1CQUFMLEVBQTBCO0FBQ3hCLDBCQUFzQixJQUF0QjtBQUNBLCtCQUFZLFlBQVo7QUFDRDtBQUNGOztBQUVELElBQU0sYUFBYSxnQ0FBaUIsZUFBakIsQ0FBbkI7QUFDQSxJQUFNLGNBQWMsZ0NBQWlCLGVBQWpCLENBQXBCO0FBQ0EsSUFBTSxjQUFjLGdDQUFpQixlQUFqQixDQUFwQjtBQUNBLElBQU0sV0FBVyxnQ0FBaUIsZUFBakIsQ0FBakI7O0FBRUEsU0FBUyxZQUFULENBQXNCLFVBQXRCLEVBQWtDO0FBQ2hDLHdCQUFzQixLQUF0QjtBQUNBLFlBQVUsS0FBSyxHQUFMLENBQVMsS0FBSyxHQUFMLENBQVMsYUFBYSxpQkFBdEIsRUFBeUMsV0FBekMsQ0FBVCxFQUFnRSxDQUFoRSxJQUFxRSxRQUEvRTtBQUNBLHNCQUFvQixVQUFwQjs7QUFFQSxhQUFXLE9BQVg7QUFDQSxjQUFZLE9BQVo7QUFDQSxjQUFZLE9BQVo7QUFDQSxXQUFTLE9BQVQ7QUFDRDs7QUFFTSxJQUFNLHNDQUFlLFdBQVcsUUFBaEM7QUFDQSxJQUFNLHdDQUFnQixZQUFZLFFBQWxDO0FBQ0EsSUFBTSx3Q0FBZ0IsWUFBWSxRQUFsQztBQUNBLElBQU0sa0NBQWEsU0FBUyxRQUE1QjtBQUNBLElBQU0sa0RBQXFCLFdBQVcsTUFBdEM7QUFDQSxJQUFNLG9EQUFzQixZQUFZLE1BQXhDO0FBQ0EsSUFBTSxvREFBc0IsWUFBWSxNQUF4QztBQUNBLElBQU0sOENBQW1CLFNBQVMsTUFBbEM7O0FBRUEsSUFBTSxrREFBcUI7QUFBQSxTQUFNLE9BQU47QUFBQSxDQUEzQjtBQUNBLElBQU0sd0RBQXdCO0FBQUEsU0FBTSxpQkFBTjtBQUFBLENBQTlCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9uTmV4dEZyYW1lIGZyb20gJy4vb24tbmV4dC1mcmFtZSc7XG5pbXBvcnQgY3JlYXRlUmVuZGVyU3RlcCBmcm9tICcuL2NyZWF0ZS1yZW5kZXItc3RlcCc7XG5pbXBvcnQgeyBjdXJyZW50VGltZSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmxldCB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG5cbi8qKlxuICogTWF4aW11bSBwZXJtaXR0ZWQgbXMgc2luY2UgbGFzdCBmcmFtZVxuICogQHR5cGUge051bWJlcn1cbiAqL1xuY29uc3QgTUFYX0VMQVBTRUQgPSAyMDtcblxuLyoqXG4gKiBDdXJyZW50IGZyYW1lc3RhbXBcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbmxldCBjdXJyZW50RnJhbWVzdGFtcCA9IGN1cnJlbnRUaW1lKCk7XG5cbmxldCBlbGFwc2VkID0gMDtcblxuLyoqXG4gKiBGYWN0b3IgdG8gbXVsdGlwbHkgYGVsYXBzZWRgIGJ5IC0gXG4gKiAwLjUgd291bGQgYmUgc2xvdyBtb3Rpb24sIDIgd291bGQgYmUgZmFzdFxuICogQHR5cGUge051bWJlcn1cbiAqL1xubGV0IGRpbGF0aW9uID0gMTtcblxuZnVuY3Rpb24gc3RhcnRSZW5kZXJMb29wKCkge1xuICBpZiAoIXdpbGxSZW5kZXJOZXh0RnJhbWUpIHtcbiAgICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICBvbk5leHRGcmFtZShwcm9jZXNzRnJhbWUpO1xuICB9XG59XG5cbmNvbnN0IGZyYW1lU3RhcnQgPSBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCk7XG5jb25zdCBmcmFtZVVwZGF0ZSA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcbmNvbnN0IGZyYW1lUmVuZGVyID0gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApO1xuY29uc3QgZnJhbWVFbmQgPSBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NGcmFtZShmcmFtZXN0YW1wKSB7XG4gIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcbiAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50RnJhbWVzdGFtcCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICBjdXJyZW50RnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG5cbiAgZnJhbWVTdGFydC5wcm9jZXNzKCk7XG4gIGZyYW1lVXBkYXRlLnByb2Nlc3MoKTtcbiAgZnJhbWVSZW5kZXIucHJvY2VzcygpO1xuICBmcmFtZUVuZC5wcm9jZXNzKCk7XG59XG5cbmV4cG9ydCBjb25zdCBvbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LnNjaGVkdWxlO1xuZXhwb3J0IGNvbnN0IG9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5zY2hlZHVsZTtcbmV4cG9ydCBjb25zdCBvbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuc2NoZWR1bGU7XG5leHBvcnQgY29uc3Qgb25GcmFtZUVuZCA9IGZyYW1lRW5kLnNjaGVkdWxlO1xuZXhwb3J0IGNvbnN0IGNhbmNlbE9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuY2FuY2VsO1xuZXhwb3J0IGNvbnN0IGNhbmNlbE9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5jYW5jZWw7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVJlbmRlciA9IGZyYW1lUmVuZGVyLmNhbmNlbDtcbmV4cG9ydCBjb25zdCBjYW5jZWxPbkZyYW1lRW5kID0gZnJhbWVFbmQuY2FuY2VsO1xuXG5leHBvcnQgY29uc3QgdGltZVNpbmNlTGFzdEZyYW1lID0gKCkgPT4gZWxhcHNlZDtcbmV4cG9ydCBjb25zdCBjdXJyZW50RnJhbWVUaW1lc3RhbXAgPSAoKSA9PiBjdXJyZW50RnJhbWVzdGFtcDtcbiJdfQ==

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(18);
	
	var _calc = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Action = function () {
	  function Action(props) {
	    _classCallCheck(this, Action);
	
	    this.scheduledUpdate = this.scheduledUpdate.bind(this);
	
	    this.props = _extends({}, this.constructor.defaultProps);
	
	    this.setProps(props);
	
	    this.current = props.current || props.from || 0;
	  }
	
	  Action.prototype.start = function start() {
	    var _props = this.props;
	    var onStart = _props.onStart;
	    var _onStart = _props._onStart;
	    var passive = _props.passive;
	
	
	    if (!passive) {
	      this.isActive = true;
	      (0, _framesync.onFrameUpdate)(this.scheduledUpdate);
	    }
	
	    if (this.onStart) this.onStart();
	    if (onStart) onStart(this);
	    if (_onStart) _onStart(this);
	
	    return this;
	  };
	
	  Action.prototype.stop = function stop() {
	    var _props2 = this.props;
	    var onStop = _props2.onStop;
	    var _onStop = _props2._onStop;
	    var passive = _props2.passive;
	
	
	    if (!passive) {
	      this.isActive = false;
	      (0, _framesync.cancelOnFrameUpdate)(this.scheduledUpdate);
	    }
	
	    if (this.onStop) this.onStop();
	    if (onStop) onStop(this);
	    if (_onStop) _onStop(this);
	
	    return this;
	  };
	
	  Action.prototype.complete = function complete() {
	    var _props3 = this.props;
	    var onComplete = _props3.onComplete;
	    var _onComplete = _props3._onComplete;
	
	
	    this.stop();
	
	    if (this.onComplete) this.onComplete();
	    if (onComplete) onComplete(this);
	    if (_onComplete) _onComplete(this);
	
	    return this;
	  };
	
	  Action.prototype.scheduledUpdate = function scheduledUpdate() {
	    this.lastUpdated = (0, _framesync.timeSinceLastFrame)();
	    this.prev = this.current;
	
	    var _props4 = this.props;
	    var onUpdate = _props4.onUpdate;
	    var passive = _props4.passive;
	
	
	    if (this.update) {
	      this.current = this.update(this.current);
	    }
	
	    if (onUpdate) onUpdate(this.current, this);
	    this.fireListeners();
	
	    if (!passive && this.isActive) {
	      (0, _framesync.onFrameUpdate)(this.scheduledUpdate);
	    }
	
	    if (this.isActionComplete && this.isActionComplete()) {
	      this.complete();
	    }
	
	    return this;
	  };
	
	  Action.prototype.setProps = function setProps(props) {
	    this.props = _extends({}, this.props, props);
	    return this;
	  };
	
	  Action.prototype.get = function get() {
	    return this.current;
	  };
	
	  Action.prototype.set = function set(v) {
	    this.current = v;
	    return this;
	  };
	
	  Action.prototype.getProp = function getProp(key) {
	    return this.props[key];
	  };
	
	  Action.prototype.getVelocity = function getVelocity() {
	    return (0, _calc.speedPerSecond)(this.current - this.prev, this.lastUpdated);
	  };
	
	  Action.prototype.isActive = function isActive() {
	    return this.isActive;
	  };
	
	  Action.prototype.addListener = function addListener(listener) {
	    this.listeners = this.listeners || [];
	    this.numListeners = this.numListeners || 0;
	    if (this.listeners.indexOf(listener) === -1) {
	      this.listeners.push(listener);
	      this.numListeners++;
	    }
	    return this;
	  };
	
	  Action.prototype.removeListener = function removeListener(listener) {
	    var listenerIndex = this.listeners ? this.listeners.indexOf(listener) : -1;
	    if (listenerIndex !== -1) {
	      this.numListeners--;
	      this.listeners.splice(listenerIndex, 1);
	    }
	    return this;
	  };
	
	  Action.prototype.fireListeners = function fireListeners() {
	    var current = this.get();
	    for (var i = 0; i < this.numListeners; i++) {
	      this.listeners[i](current, this);
	    }
	    return this;
	  };
	
	  return Action;
	}();
	
	exports.default = Action;
	//# sourceMappingURL=data:application/json;base64,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RDtBQUNELFdBQU8sSUFBUDtBQUNELEc7Ozs7O2tCQUdZLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbkZyYW1lVXBkYXRlLCBjYW5jZWxPbkZyYW1lVXBkYXRlLCB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5zY2hlZHVsZWRVcGRhdGUgPSB0aGlzLnNjaGVkdWxlZFVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzXG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCBwcm9wcy5mcm9tIHx8IDA7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCB7IG9uU3RhcnQsIF9vblN0YXJ0LCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIG9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHRoaXMub25TdGFydCgpO1xuICAgIGlmIChvblN0YXJ0KSBvblN0YXJ0KHRoaXMpO1xuICAgIGlmIChfb25TdGFydCkgX29uU3RhcnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgY29uc3QgeyBvblN0b3AsIF9vblN0b3AsIHBhc3NpdmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGNhbmNlbE9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RvcCkgdGhpcy5vblN0b3AoKTtcbiAgICBpZiAob25TdG9wKSBvblN0b3AodGhpcyk7XG4gICAgaWYgKF9vblN0b3ApIF9vblN0b3AodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGNvbnN0IHsgb25Db21wbGV0ZSwgX29uQ29tcGxldGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKHRoaXMpO1xuICAgIGlmIChfb25Db21wbGV0ZSkgX29uQ29tcGxldGUodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNjaGVkdWxlZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmxhc3RVcGRhdGVkID0gdGltZVNpbmNlTGFzdEZyYW1lKCk7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuXG4gICAgY29uc3QgeyBvblVwZGF0ZSwgcGFzc2l2ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0aGlzLnVwZGF0ZSkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy51cGRhdGUodGhpcy5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBpZiAob25VcGRhdGUpIG9uVXBkYXRlKHRoaXMuY3VycmVudCwgdGhpcyk7XG4gICAgdGhpcy5maXJlTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAoIXBhc3NpdmUgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgb25GcmFtZVVwZGF0ZSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0UHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9XG5cbiAgc2V0KHYpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0UHJvcChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wc1trZXldO1xuICB9XG5cbiAgZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHNwZWVkUGVyU2Vjb25kKHRoaXMuY3VycmVudCAtIHRoaXMucHJldiwgdGhpcy5sYXN0VXBkYXRlZCk7XG4gIH1cblxuICBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZTtcbiAgfVxuXG4gIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCBbXTtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IHRoaXMubnVtTGlzdGVuZXJzIHx8IDA7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycysrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgbGlzdGVuZXJJbmRleCA9ICh0aGlzLmxpc3RlbmVycykgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmaXJlTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1MaXN0ZW5lcnM7IGkrKykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbaV0oY3VycmVudCwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcbiJdfQ==

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(18);
	
	var _utils = __webpack_require__(24);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Renderer = function () {
	  function Renderer(props) {
	    _classCallCheck(this, Renderer);
	
	    this.render = this.render.bind(this);
	
	    this.props = _extends({}, this.constructor.defaultProps, props);
	
	    this.state = {};
	    this.changedValues = [];
	  }
	
	  /**
	   * Get current state.
	   * If `key` is not defined, return entire cached state.
	   * If `key` is defined, return cached value if present.
	   * If `key` is defined and cached value is not present, read and return.
	   * @param  {string} (optional) key of value
	   * @return {value}
	   */
	
	
	  Renderer.prototype.get = function get(key) {
	    if (key) {
	      if (this.state[key] !== undefined) {
	        return this.state[key];
	      } else {
	        return this.read(key);
	      }
	    } else {
	      return this.state;
	    }
	  };
	
	  /**
	   * Read value according to `onRead`
	   * @param  {string} Name of property to read
	   * @return {[type]}
	   */
	
	
	  Renderer.prototype.read = function read(key) {
	    if (this.onRead) {
	      return this.onRead(key);
	    }
	  };
	
	  /**
	   * Update `state` with new values and schedule `render`.
	   * @param {object} values
	   * @param {value} value toset
	   */
	
	
	  Renderer.prototype.set = function set() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (typeof args[1] === 'undefined') {
	      var values = args[0];
	      // Set multiple values
	
	      for (var key in values) {
	        this.setValue(key, values[key]);
	      }
	    } else {
	      var _key2 = args[0];
	      var value = args[1];
	
	      this.setValue(_key2, value);
	    }
	
	    if (this.hasChanged) {
	      (0, _framesync.onFrameRender)(this.render);
	    }
	
	    return this;
	  };
	
	  // > Wiley - 6 in the Morning
	  /**
	   * Set a single value
	   * If a string or number, set directly.
	   * If an object or array, create new object or array
	   * if it doesn't already exist. Then shallow compare
	   * to set and compare individual values.
	   * One of the clearer drawbacks and annoyances with
	   * using mutable instead of immutable states.
	   * @param {[type]} key
	   * @param {[type]} value
	   */
	
	
	  Renderer.prototype.setValue = function setValue(key, value) {
	    var currentValue = this.state[key];
	
	    // If number or string, set directly
	    if ((0, _utils.isNum)(value) || (0, _utils.isString)(value)) {
	      if (currentValue !== value) {
	        this.state[key] = value;
	        this.hasChanged = true;
	      }
	    } else if ((0, _utils.isArray)(value)) {
	      if (!currentValue) {
	        this.state[key] = [];
	      }
	
	      var numValues = value.length;
	      for (var i = 0; i < numValues; i++) {
	        if (this.state[key][i] !== value[i]) {
	          this.state[key][i] = value[i];
	          this.hasChanged = true;
	        }
	      }
	    } else if ((0, _utils.isObj)(value)) {
	      if (!currentValue) {
	        this.state[key] = {};
	      }
	
	      for (var valueKey in value) {
	        if (this.state[key][valueKey] !== value[valueKey]) {
	          this.state[key][valueKey] = value[valueKey];
	          this.hasChanged = true;
	        }
	      }
	    }
	
	    if (this.hasChanged) {
	      this.changedValues.push(key);
	    }
	  };
	
	  /**
	   * Fires `onRender` if values have changed or `forceRender`
	   * is set to true.
	   * @return {this}
	   */
	
	
	  Renderer.prototype.render = function render() {
	    var forceRender = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	    if ((forceRender || this.hasChanged) && this.onRender) {
	      this.onRender();
	    }
	
	    this.changedValues.length = 0;
	    this.hasChanged = false;
	
	    return this;
	  };
	
	  return Renderer;
	}();
	
	exports.default = Renderer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFFTSxRO0FBQ0osb0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQWQ7O0FBRUEsU0FBSyxLQUFMLGdCQUNLLEtBQUssV0FBTCxDQUFpQixZQUR0QixFQUVLLEtBRkw7O0FBS0EsU0FBSyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUssYUFBTCxHQUFxQixFQUFyQjtBQUNEOzs7Ozs7Ozs7Ozs7cUJBVUQsRyxnQkFBSSxHLEVBQUs7QUFDUCxRQUFJLEdBQUosRUFBUztBQUNQLFVBQUksS0FBSyxLQUFMLENBQVcsR0FBWCxNQUFvQixTQUF4QixFQUFtQztBQUNqQyxlQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sS0FBSyxJQUFMLENBQVUsR0FBVixDQUFQO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTCxhQUFPLEtBQUssS0FBWjtBQUNEO0FBQ0YsRzs7Ozs7Ozs7O3FCQU9ELEksaUJBQUssRyxFQUFLO0FBQ1IsUUFBSSxLQUFLLE1BQVQsRUFBaUI7QUFDZixhQUFPLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUDtBQUNEO0FBQ0YsRzs7Ozs7Ozs7O3FCQU9ELEcsa0JBQWE7QUFBQSxzQ0FBTixJQUFNO0FBQU4sVUFBTTtBQUFBOztBQUNYLFFBQUksT0FBTyxLQUFLLENBQUwsQ0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUFBLFVBQzFCLE1BRDBCLEdBQ2YsSUFEZTs7O0FBR2xDLFdBQUssSUFBTSxHQUFYLElBQWtCLE1BQWxCLEVBQTBCO0FBQ3hCLGFBQUssUUFBTCxDQUFjLEdBQWQsRUFBbUIsT0FBTyxHQUFQLENBQW5CO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFBQSxVQUNHLEtBREgsR0FDa0IsSUFEbEI7QUFBQSxVQUNRLEtBRFIsR0FDa0IsSUFEbEI7O0FBRUwsV0FBSyxRQUFMLENBQWMsS0FBZCxFQUFtQixLQUFuQjtBQUNEOztBQUVELFFBQUksS0FBSyxVQUFULEVBQXFCO0FBQ25CLG9DQUFjLEtBQUssTUFBbkI7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRCxHOzs7Ozs7Ozs7Ozs7Ozs7O3FCQWNELFEscUJBQVMsRyxFQUFLLEssRUFBTztBQUNuQixRQUFNLGVBQWUsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFyQjs7O0FBR0EsUUFBSSxrQkFBTSxLQUFOLEtBQWdCLHFCQUFTLEtBQVQsQ0FBcEIsRUFBcUM7QUFDbkMsVUFBSSxpQkFBaUIsS0FBckIsRUFBNEI7QUFDMUIsYUFBSyxLQUFMLENBQVcsR0FBWCxJQUFrQixLQUFsQjtBQUNBLGFBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNEO0FBQ0YsS0FMRCxNQUtPLElBQUksb0JBQVEsS0FBUixDQUFKLEVBQW9CO0FBQ3pCLFVBQUksQ0FBQyxZQUFMLEVBQW1CO0FBQ2pCLGFBQUssS0FBTCxDQUFXLEdBQVgsSUFBa0IsRUFBbEI7QUFDRDs7QUFFRCxVQUFNLFlBQVksTUFBTSxNQUF4QjtBQUNBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxTQUFwQixFQUErQixHQUEvQixFQUFvQztBQUNsQyxZQUFJLEtBQUssS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsTUFBdUIsTUFBTSxDQUFOLENBQTNCLEVBQXFDO0FBQ25DLGVBQUssS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsSUFBcUIsTUFBTSxDQUFOLENBQXJCO0FBQ0EsZUFBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7QUFDRjtBQUNGLEtBWk0sTUFZQSxJQUFJLGtCQUFNLEtBQU4sQ0FBSixFQUFrQjtBQUN2QixVQUFJLENBQUMsWUFBTCxFQUFtQjtBQUNqQixhQUFLLEtBQUwsQ0FBVyxHQUFYLElBQWtCLEVBQWxCO0FBQ0Q7O0FBRUQsV0FBSyxJQUFJLFFBQVQsSUFBcUIsS0FBckIsRUFBNEI7QUFDMUIsWUFBSSxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLFFBQWhCLE1BQThCLE1BQU0sUUFBTixDQUFsQyxFQUFtRDtBQUNqRCxlQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLFFBQWhCLElBQTRCLE1BQU0sUUFBTixDQUE1QjtBQUNBLGVBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxRQUFJLEtBQUssVUFBVCxFQUFxQjtBQUNuQixXQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsR0FBeEI7QUFDRDtBQUNGLEc7Ozs7Ozs7OztxQkFPRCxNLHFCQUE0QjtBQUFBLFFBQXJCLFdBQXFCLHlEQUFQLEtBQU87O0FBQzFCLFFBQUksQ0FBQyxlQUFlLEtBQUssVUFBckIsS0FBb0MsS0FBSyxRQUE3QyxFQUF1RDtBQUNyRCxXQUFLLFFBQUw7QUFDRDs7QUFFRCxTQUFLLGFBQUwsQ0FBbUIsTUFBbkIsR0FBNEIsQ0FBNUI7QUFDQSxTQUFLLFVBQUwsR0FBa0IsS0FBbEI7O0FBRUEsV0FBTyxJQUFQO0FBQ0QsRzs7Ozs7a0JBR1ksUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9uRnJhbWVSZW5kZXIgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgaXNBcnJheSwgaXNPYmosIGlzTnVtLCBpc1N0cmluZyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMsXG4gICAgICAuLi5wcm9wc1xuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzID0gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIG5vdCBkZWZpbmVkLCByZXR1cm4gZW50aXJlIGNhY2hlZCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCwgcmV0dXJuIGNhY2hlZCB2YWx1ZSBpZiBwcmVzZW50LlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkIGFuZCBjYWNoZWQgdmFsdWUgaXMgbm90IHByZXNlbnQsIHJlYWQgYW5kIHJldHVybi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSAob3B0aW9uYWwpIGtleSBvZiB2YWx1ZVxuICAgKiBAcmV0dXJuIHt2YWx1ZX1cbiAgICovXG4gIGdldChrZXkpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQoa2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgdmFsdWUgYWNjb3JkaW5nIHRvIGBvblJlYWRgXG4gICAqIEBwYXJhbSAge3N0cmluZ30gTmFtZSBvZiBwcm9wZXJ0eSB0byByZWFkXG4gICAqIEByZXR1cm4ge1t0eXBlXX1cbiAgICovXG4gIHJlYWQoa2V5KSB7XG4gICAgaWYgKHRoaXMub25SZWFkKSB7XG4gICAgICByZXR1cm4gdGhpcy5vblJlYWQoa2V5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGBzdGF0ZWAgd2l0aCBuZXcgdmFsdWVzIGFuZCBzY2hlZHVsZSBgcmVuZGVyYC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xuICAgKiBAcGFyYW0ge3ZhbHVlfSB2YWx1ZSB0b3NldFxuICAgKi9cbiAgc2V0KC4uLmFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBbIHZhbHVlcyBdID0gYXJncztcbiAgICAgIC8vIFNldCBtdWx0aXBsZSB2YWx1ZXNcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlcykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGtleSwgdmFsdWVzW2tleV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBbIGtleSwgdmFsdWUgXSA9IGFyZ3M7XG4gICAgICB0aGlzLnNldFZhbHVlKGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgIG9uRnJhbWVSZW5kZXIodGhpcy5yZW5kZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gPiBXaWxleSAtIDYgaW4gdGhlIE1vcm5pbmdcbiAgLyoqXG4gICAqIFNldCBhIHNpbmdsZSB2YWx1ZVxuICAgKiBJZiBhIHN0cmluZyBvciBudW1iZXIsIHNldCBkaXJlY3RseS5cbiAgICogSWYgYW4gb2JqZWN0IG9yIGFycmF5LCBjcmVhdGUgbmV3IG9iamVjdCBvciBhcnJheVxuICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuIFRoZW4gc2hhbGxvdyBjb21wYXJlXG4gICAqIHRvIHNldCBhbmQgY29tcGFyZSBpbmRpdmlkdWFsIHZhbHVlcy5cbiAgICogT25lIG9mIHRoZSBjbGVhcmVyIGRyYXdiYWNrcyBhbmQgYW5ub3lhbmNlcyB3aXRoXG4gICAqIHVzaW5nIG11dGFibGUgaW5zdGVhZCBvZiBpbW11dGFibGUgc3RhdGVzLlxuICAgKiBAcGFyYW0ge1t0eXBlXX0ga2V5XG4gICAqIEBwYXJhbSB7W3R5cGVdfSB2YWx1ZVxuICAgKi9cbiAgc2V0VmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGVba2V5XTtcblxuICAgIC8vIElmIG51bWJlciBvciBzdHJpbmcsIHNldCBkaXJlY3RseVxuICAgIGlmIChpc051bSh2YWx1ZSkgfHwgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICBpZiAoY3VycmVudFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbnVtVmFsdWVzID0gdmFsdWUubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WYWx1ZXM7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldW2ldICE9PSB2YWx1ZVtpXSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVtpXSA9IHZhbHVlW2ldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzT2JqKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0ge307XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHZhbHVlS2V5IGluIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldICE9PSB2YWx1ZVt2YWx1ZUtleV0pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldID0gdmFsdWVbdmFsdWVLZXldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNoYW5nZWRWYWx1ZXMucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBgb25SZW5kZXJgIGlmIHZhbHVlcyBoYXZlIGNoYW5nZWQgb3IgYGZvcmNlUmVuZGVyYFxuICAgKiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHJlbmRlcihmb3JjZVJlbmRlciA9IGZhbHNlKSB7XG4gICAgaWYgKChmb3JjZVJlbmRlciB8fCB0aGlzLmhhc0NoYW5nZWQpICYmIHRoaXMub25SZW5kZXIpIHtcbiAgICAgIHRoaXMub25SZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuIl19

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new CSSRenderer(_extends({
	    element: element,
	    enableHardwareAcceleration: true
	  }, props));
	};
	
	var _ = __webpack_require__(20);
	
	var _2 = _interopRequireDefault(_);
	
	var _render = __webpack_require__(30);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _transformProps = __webpack_require__(28);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(31);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _prefixer = __webpack_require__(32);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CSSRenderer = function (_Renderer) {
	  _inherits(CSSRenderer, _Renderer);
	
	  function CSSRenderer() {
	    _classCallCheck(this, CSSRenderer);
	
	    return _possibleConstructorReturn(this, _Renderer.apply(this, arguments));
	  }
	
	  CSSRenderer.prototype.onRender = function onRender() {
	    var _props = this.props;
	    var element = _props.element;
	    var enableHardwareAcceleration = _props.enableHardwareAcceleration;
	
	    (0, _render2.default)(element, this.state, this.changedValues, enableHardwareAcceleration);
	  };
	
	  CSSRenderer.prototype.onRead = function onRead(key) {
	    var valueType = _valueTypes2.default[key];
	
	    if (!_transformProps2.default[key]) {
	      var element = this.props.element;
	
	      var domValue = window.getComputedStyle(element, null)[(0, _prefixer2.default)(key)] || 0;
	      return valueType && valueType.parse ? valueType.parse(domValue) : domValue;
	    } else {
	      if (valueType) {
	        return valueType.default || 0;
	      } else {
	        return 0;
	      }
	    }
	  };
	
	  return CSSRenderer;
	}(_2.default);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkE2QmUsVUFBVSxPQUFWLEVBQW1CLEtBQW5CLEVBQTBCO0FBQ3ZDLFNBQU8sSUFBSSxXQUFKO0FBQ0wsb0JBREs7QUFFTCxnQ0FBNEI7QUFGdkIsS0FHRixLQUhFLEVBQVA7QUFLRCxDOztBQW5DRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxXOzs7Ozs7Ozs7d0JBQ0osUSx1QkFBVztBQUFBLGlCQUN1QyxLQUFLLEtBRDVDO0FBQUEsUUFDRCxPQURDLFVBQ0QsT0FEQztBQUFBLFFBQ1EsMEJBRFIsVUFDUSwwQkFEUjs7QUFFVCwwQkFBVSxPQUFWLEVBQW1CLEtBQUssS0FBeEIsRUFBK0IsS0FBSyxhQUFwQyxFQUFtRCwwQkFBbkQ7QUFDRCxHOzt3QkFFRCxNLG1CQUFPLEcsRUFBSztBQUNWLFFBQU0sWUFBWSxxQkFBYyxHQUFkLENBQWxCOztBQUVBLFFBQUksQ0FBQyx5QkFBZSxHQUFmLENBQUwsRUFBMEI7QUFBQSxVQUNoQixPQURnQixHQUNKLEtBQUssS0FERCxDQUNoQixPQURnQjs7QUFFeEIsVUFBTSxXQUFXLE9BQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsSUFBakMsRUFBdUMsd0JBQVMsR0FBVCxDQUF2QyxLQUF5RCxDQUExRTtBQUNBLGFBQVEsYUFBYSxVQUFVLEtBQXhCLEdBQWlDLFVBQVUsS0FBVixDQUFnQixRQUFoQixDQUFqQyxHQUE2RCxRQUFwRTtBQUNELEtBSkQsTUFJTztBQUNMLFVBQUksU0FBSixFQUFlO0FBQ2IsZUFBTyxVQUFVLE9BQVYsSUFBcUIsQ0FBNUI7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLENBQVA7QUFDRDtBQUNGO0FBQ0YsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXJlciBmcm9tICcuLi8nO1xuaW1wb3J0IHJlbmRlckNTUyBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHZhbHVlVHlwZXNNYXAgZnJvbSAnLi92YWx1ZS10eXBlcyc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcic7XG5cbmNsYXNzIENTU1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBvblJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHJlbmRlckNTUyhlbGVtZW50LCB0aGlzLnN0YXRlLCB0aGlzLmNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKTtcbiAgfVxuXG4gIG9uUmVhZChrZXkpIHtcbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVzTWFwW2tleV07XG5cbiAgICBpZiAoIXRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGRvbVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbcHJlZml4ZXIoa2V5KV0gfHwgMDtcbiAgICAgIHJldHVybiAodmFsdWVUeXBlICYmIHZhbHVlVHlwZS5wYXJzZSkgPyB2YWx1ZVR5cGUucGFyc2UoZG9tVmFsdWUpIDogZG9tVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZS5kZWZhdWx0IHx8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ1NTUmVuZGVyZXIoe1xuICAgIGVsZW1lbnQsXG4gICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb246IHRydWUsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59XG4iXX0=

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new SVGRenderer(_extends({
	    element: element
	  }, props));
	};
	
	var _ = __webpack_require__(20);
	
	var _2 = _interopRequireDefault(_);
	
	var _build = __webpack_require__(27);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _transformProps = __webpack_require__(28);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(29);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _utils = __webpack_require__(24);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SVGRenderer = function (_Renderer) {
	  _inherits(SVGRenderer, _Renderer);
	
	  function SVGRenderer(props) {
	    _classCallCheck(this, SVGRenderer);
	
	    var _this = _possibleConstructorReturn(this, _Renderer.call(this, props));
	
	    var _props$element$getBBo = props.element.getBBox();
	
	    var x = _props$element$getBBo.x;
	    var y = _props$element$getBBo.y;
	    var width = _props$element$getBBo.width;
	    var height = _props$element$getBBo.height;
	
	    _this.elementDimensions = { x: x, y: y, width: width, height: height };
	    return _this;
	  }
	
	  SVGRenderer.prototype.onRender = function onRender() {
	    var element = this.props.element;
	
	    var attrs = (0, _build2.default)(this.state, this.elementDimensions);
	    (0, _utils.setDOMAttrs)(element, attrs);
	  };
	
	  SVGRenderer.prototype.onRead = function onRead(key) {
	    var element = this.props.element;
	
	
	    if (!_transformProps2.default[key]) {
	      return element.getAttribute(key);
	    } else {
	      var valueType = _valueTypes2.default[key];
	      return valueType ? valueType.default : 0;
	    }
	  };
	
	  return SVGRenderer;
	}(_2.default);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFnQ2UsVUFBVSxPQUFWLEVBQW1CLEtBQW5CLEVBQTBCO0FBQ3ZDLFNBQU8sSUFBSSxXQUFKO0FBQ0w7QUFESyxLQUVGLEtBRkUsRUFBUDtBQUlELEM7O0FBckNEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTSxXOzs7QUFDSix1QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLHFCQUFNLEtBQU4sQ0FEaUI7O0FBQUEsZ0NBR2UsTUFBTSxPQUFOLENBQWMsT0FBZCxFQUhmOztBQUFBLFFBR1QsQ0FIUyx5QkFHVCxDQUhTO0FBQUEsUUFHTixDQUhNLHlCQUdOLENBSE07QUFBQSxRQUdILEtBSEcseUJBR0gsS0FIRztBQUFBLFFBR0ksTUFISix5QkFHSSxNQUhKOztBQUlqQixVQUFLLGlCQUFMLEdBQXlCLEVBQUUsSUFBRixFQUFLLElBQUwsRUFBUSxZQUFSLEVBQWUsY0FBZixFQUF6QjtBQUppQjtBQUtsQjs7d0JBRUQsUSx1QkFBVztBQUFBLFFBQ0QsT0FEQyxHQUNXLEtBQUssS0FEaEIsQ0FDRCxPQURDOztBQUVULFFBQU0sUUFBUSxxQkFBTSxLQUFLLEtBQVgsRUFBa0IsS0FBSyxpQkFBdkIsQ0FBZDtBQUNBLDRCQUFZLE9BQVosRUFBcUIsS0FBckI7QUFDRCxHOzt3QkFFRCxNLG1CQUFPLEcsRUFBSztBQUFBLFFBQ0YsT0FERSxHQUNVLEtBQUssS0FEZixDQUNGLE9BREU7OztBQUdWLFFBQUksQ0FBQyx5QkFBZSxHQUFmLENBQUwsRUFBMEI7QUFDeEIsYUFBTyxRQUFRLFlBQVIsQ0FBcUIsR0FBckIsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLFVBQU0sWUFBWSxxQkFBYSxHQUFiLENBQWxCO0FBQ0EsYUFBUSxTQUFELEdBQWMsVUFBVSxPQUF4QixHQUFrQyxDQUF6QztBQUNEO0FBQ0YsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXJlciBmcm9tICcuLi8nO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vYnVpbGQnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL3ZhbHVlLXR5cGVzJztcbmltcG9ydCB7IHNldERPTUF0dHJzIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY2xhc3MgU1ZHUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKTtcbiAgICB0aGlzLmVsZW1lbnREaW1lbnNpb25zID0geyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH07XG4gIH1cblxuICBvblJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXR0cnMgPSBidWlsZCh0aGlzLnN0YXRlLCB0aGlzLmVsZW1lbnREaW1lbnNpb25zKTtcbiAgICBzZXRET01BdHRycyhlbGVtZW50LCBhdHRycyk7XG4gIH1cblxuICBvblJlYWQoa2V5KSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCF0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWVUeXBlTWFwW2tleV07XG4gICAgICByZXR1cm4gKHZhbHVlVHlwZSkgPyB2YWx1ZVR5cGUuZGVmYXVsdCA6IDA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1JlbmRlcmVyKHtcbiAgICBlbGVtZW50LFxuICAgIC4uLnByb3BzXG4gIH0pO1xufVxuIl19

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new SVGPathRenderer(_extends({
	    element: element
	  }, props));
	};
	
	var _ = __webpack_require__(20);
	
	var _2 = _interopRequireDefault(_);
	
	var _build = __webpack_require__(33);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _utils = __webpack_require__(24);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SVGPathRenderer = function (_Renderer) {
	  _inherits(SVGPathRenderer, _Renderer);
	
	  function SVGPathRenderer(props) {
	    _classCallCheck(this, SVGPathRenderer);
	
	    var _this = _possibleConstructorReturn(this, _Renderer.call(this, props));
	
	    var _props$element$getBBo = props.element.getBBox();
	
	    var x = _props$element$getBBo.x;
	    var y = _props$element$getBBo.y;
	    var width = _props$element$getBBo.width;
	    var height = _props$element$getBBo.height;
	
	    _this.elementDimensions = {
	      x: x,
	      y: y,
	      width: width,
	      height: height,
	      pathLength: props.element.getTotalLength()
	    };
	    return _this;
	  }
	
	  SVGPathRenderer.prototype.onRender = function onRender() {
	    var pathLength = this.elementDimensions.pathLength;
	    var element = this.props.element;
	
	    (0, _utils.setDOMAttrs)(element, (0, _build2.default)(this.state, pathLength));
	  };
	
	  SVGPathRenderer.prototype.onRead = function onRead(key) {
	    return this.props.element.getAttribute(key);
	  };
	
	  return SVGPathRenderer;
	}(_2.default);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQTZCZSxVQUFVLE9BQVYsRUFBbUIsS0FBbkIsRUFBMEI7QUFDdkMsU0FBTyxJQUFJLGVBQUo7QUFDTDtBQURLLEtBRUYsS0FGRSxFQUFQO0FBSUQsQzs7QUFsQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU0sZTs7O0FBQ0osMkJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixxQkFBTSxLQUFOLENBRGlCOztBQUFBLGdDQUdlLE1BQU0sT0FBTixDQUFjLE9BQWQsRUFIZjs7QUFBQSxRQUdULENBSFMseUJBR1QsQ0FIUztBQUFBLFFBR04sQ0FITSx5QkFHTixDQUhNO0FBQUEsUUFHSCxLQUhHLHlCQUdILEtBSEc7QUFBQSxRQUdJLE1BSEoseUJBR0ksTUFISjs7QUFJakIsVUFBSyxpQkFBTCxHQUF5QjtBQUN2QixVQUR1QjtBQUV2QixVQUZ1QjtBQUd2QixrQkFIdUI7QUFJdkIsb0JBSnVCO0FBS3ZCLGtCQUFZLE1BQU0sT0FBTixDQUFjLGNBQWQ7QUFMVyxLQUF6QjtBQUppQjtBQVdsQjs7NEJBRUQsUSx1QkFBVztBQUFBLFFBQ0QsVUFEQyxHQUNjLEtBQUssaUJBRG5CLENBQ0QsVUFEQztBQUFBLFFBRUQsT0FGQyxHQUVXLEtBQUssS0FGaEIsQ0FFRCxPQUZDOztBQUdULDRCQUFZLE9BQVosRUFBcUIscUJBQU0sS0FBSyxLQUFYLEVBQWtCLFVBQWxCLENBQXJCO0FBQ0QsRzs7NEJBRUQsTSxtQkFBTyxHLEVBQUs7QUFDVixXQUFPLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsWUFBbkIsQ0FBZ0MsR0FBaEMsQ0FBUDtBQUNELEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi4vJztcbmltcG9ydCBidWlsZCBmcm9tICcuL2J1aWxkJztcbmltcG9ydCB7IHNldERPTUF0dHJzIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY2xhc3MgU1ZHUGF0aFJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCk7XG4gICAgdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYXRoTGVuZ3RoOiBwcm9wcy5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKClcbiAgICB9O1xuICB9XG5cbiAgb25SZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYXRoTGVuZ3RoIH0gPSB0aGlzLmVsZW1lbnREaW1lbnNpb25zO1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBzZXRET01BdHRycyhlbGVtZW50LCBidWlsZCh0aGlzLnN0YXRlLCBwYXRoTGVuZ3RoKSk7XG4gIH1cblxuICBvblJlYWQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdQYXRoUmVuZGVyZXIoe1xuICAgIGVsZW1lbnQsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59XG4iXX0=

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getColorValues = exports.findValueAndUnit = exports.createUnitType = exports.isFirstChars = exports.contains = exports.splitCommaDelimited = exports.setDOMAttrs = exports.isString = exports.isObj = exports.isNum = exports.isFunc = exports.isArray = exports.hasProperty = exports.currentTime = exports.camelToDash = undefined;
	exports.splitColorValues = splitColorValues;
	
	var _transformers = __webpack_require__(4);
	
	var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
	var REPLACE_TEMPLATE = '$1-$2';
	var HAS_PERFORMANCE_NOW = typeof performance !== 'undefined' && performance.now;
	
	/*
	  Get var type as string
	  
	  @param: Variable to test
	  @return [string]: Returns, for instance 'Object' if [object Object]
	*/
	var varType = function (variable) {
	  return Object.prototype.toString.call(variable).slice(8, -1);
	};
	
	/*
	  Convert camelCase to dash-case
	
	  @param [string]
	  @return [string]
	*/
	var camelToDash = exports.camelToDash = function (string) {
	  return string.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
	};
	
	/*
	  Generate current timestamp
	  
	  @return [timestamp]: Current UNIX timestamp
	*/
	var currentTime = exports.currentTime = HAS_PERFORMANCE_NOW ? function () {
	  return performance.now();
	} : function () {
	  return new Date().getTime();
	};
	
	/*
	  Check if object has property and it isn't undefined
	
	  @param [object]
	  @param [string]
	  @return [boolean]
	*/
	var hasProperty = exports.hasProperty = function (object, propertyName) {
	  return object.hasOwnProperty(propertyName) && object[propertyName] !== undefined;
	};
	
	/*
	  Is utils var an array ? 
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if utils.varType === 'Array'
	*/
	var isArray = exports.isArray = function (arr) {
	  return varType(arr) === 'Array';
	};
	
	/*
	  Is utils var a function ? 
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if utils.varType === 'Function'
	*/
	var isFunc = exports.isFunc = function (obj) {
	  return varType(obj) === 'Function';
	};
	
	/*
	  Is utils var a number?
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if typeof === 'number'
	*/
	var isNum = exports.isNum = function (num) {
	  return typeof num === 'number';
	};
	
	/*
	  Is utils var an object?
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if typeof === 'object'
	*/
	var isObj = exports.isObj = function (obj) {
	  return typeof obj === 'object';
	};
	
	/*
	  Is utils var a string ? 
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if typeof str === 'string'
	*/
	var isString = exports.isString = function (str) {
	  return typeof str === 'string';
	};
	
	var setDOMAttrs = exports.setDOMAttrs = function (element, attrs) {
	  for (var key in attrs) {
	    if (attrs.hasOwnProperty(key)) {
	      element.setAttribute(key, attrs[key]);
	    }
	  }
	};
	/*
	  Split comma-delimited string
	
	  "foo,bar" -> ["foo", "bar"]
	
	  @param [string]
	  @return [array]
	*/
	var splitCommaDelimited = exports.splitCommaDelimited = function (value) {
	  return isString(value) ? value.split(/,\s*/) : [value];
	};
	
	/**
	 *  Returns a function that will check any argument for `term`
	 * `contains('needle')('haystack')`
	 */
	var contains = exports.contains = function (term) {
	  return function (v) {
	    return isString(term) && v.indexOf(term) !== -1;
	  };
	};
	
	/**
	 *  Returns a function that will check to see if an argument is
	 *  the first characters in the provided `term`
	 * `isFirstChars('needle')('haystack')`
	 */
	var isFirstChars = exports.isFirstChars = function (term) {
	  return function (v) {
	    return isString(term) && v.indexOf(term) === 0;
	  };
	};
	
	/**
	 * Create a unit value type
	 */
	var createUnitType = exports.createUnitType = function (type) {
	  return {
	    test: contains(type),
	    parse: parseFloat,
	    transform: (0, _transformers.appendUnit)(type)
	  };
	};
	
	/**
	 * Creates a function that will split color
	 * values from string into an object of properties
	 * `splitColorValues(['Red', 'Green', 'Blue'])('rgba(0,0,0)')`
	 */
	function splitColorValues(terms) {
	  var numTerms = terms.length;
	
	  return function (v) {
	    var values = {};
	    var valuesArray = splitCommaDelimited(getValueFromFunctionString(v));
	
	    for (var i = 0; i < numTerms; i++) {
	      values[terms[i]] = valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
	    }
	
	    return values;
	  };
	}
	
	/*
	  Split a value into a value/unit object
	  
	    "200px" -> { value: 200, unit: "px" }
	    
	  @param [string]: Value to split
	  @return [object]: Object with value and unit props
	*/
	var findValueAndUnit = exports.findValueAndUnit = function (value) {
	  if (value.match) {
	    var splitValue = value.match(/(-?\d*\.?\d*)(.*)/);
	
	    return {
	      value: parseFloat(splitValue[1]),
	      unit: splitValue[2]
	    };
	  } else {
	    return { value: value };
	  }
	};
	
	/*
	  Split color string into map of color properties
	
	  "rgba(255, 255, 255, 0)", ["Red", 'Green", "Blue", "Alpha"]
	
	  { Red: 255... }
	*/
	var getColorValues = exports.getColorValues = function (value, colorTerms) {
	  var numColorTerms = colorTerms.length;
	  var colorValues = {};
	  var colors = splitCommaDelimited(getValueFromFunctionString(value));
	
	  for (var i = 0; i < numColorTerms; i++) {
	    colorValues[colorTerms[i]] = colors[i] !== undefined ? colors[i] : 1;
	  }
	
	  return colorValues;
	};
	//# sourceMappingURL=data:application/json;base64,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LENBVk0iLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBlbmRVbml0IH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMnO1xuXG5jb25zdCBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbmNvbnN0IFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xuY29uc3QgSEFTX1BFUkZPUk1BTkNFX05PVyA9ICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdyk7XG5cbi8qXG4gIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xuY29uc3QgdmFyVHlwZSA9ICh2YXJpYWJsZSkgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuZXhwb3J0IGNvbnN0IGNhbWVsVG9EYXNoID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xuXG4vKlxuICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICBcbiAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbmV4cG9ydCBjb25zdCBjdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKSA6ICgpID0+IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4vKlxuICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICBAcGFyYW0gW29iamVjdF1cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xuZXhwb3J0IGNvbnN0IGhhc1Byb3BlcnR5ID0gKG9iamVjdCwgcHJvcGVydHlOYW1lKSA9PiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChhcnIpID0+IHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5JztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xuZXhwb3J0IGNvbnN0IGlzTnVtID0gKG51bSkgPT4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xuZXhwb3J0IGNvbnN0IGlzT2JqID0gKG9iaikgPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAoc3RyKSA9PiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcblxuZXhwb3J0IGNvbnN0IHNldERPTUF0dHJzID0gKGVsZW1lbnQsIGF0dHJzKSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbiAgfVxufTtcbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBhbnkgYXJndW1lbnQgZm9yIGB0ZXJtYFxuICogYGNvbnRhaW5zKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHRlcm0pID0+ICh2KSA9PiB7XG4gIHJldHVybiAoaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pICE9PSAtMSk7XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIHRvIHNlZSBpZiBhbiBhcmd1bWVudCBpc1xuICogIHRoZSBmaXJzdCBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBgdGVybWBcbiAqIGBpc0ZpcnN0Q2hhcnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG5leHBvcnQgY29uc3QgaXNGaXJzdENoYXJzID0gKHRlcm0pID0+ICh2KSA9PiB7XG4gIHJldHVybiAoaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pID09PSAwKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pdCB2YWx1ZSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVVbml0VHlwZSA9ICh0eXBlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVzdDogY29udGFpbnModHlwZSksXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXG4gICAgdHJhbnNmb3JtOiBhcHBlbmRVbml0KHR5cGUpXG4gIH07XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgc3BsaXQgY29sb3JcbiAqIHZhbHVlcyBmcm9tIHN0cmluZyBpbnRvIGFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG4gKiBgc3BsaXRDb2xvclZhbHVlcyhbJ1JlZCcsICdHcmVlbicsICdCbHVlJ10pKCdyZ2JhKDAsMCwwKScpYFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRDb2xvclZhbHVlcyh0ZXJtcykge1xuICBjb25zdCBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcbiAgICBjb25zdCB2YWx1ZXNBcnJheSA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodikpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICB2YWx1ZXNbdGVybXNbaV1dID0gKHZhbHVlc0FycmF5W2ldICE9PSB1bmRlZmluZWQpID8gcGFyc2VGbG9hdCh2YWx1ZXNBcnJheVtpXSkgOiAxO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG59XG5cbi8qXG4gIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gIFxuICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgXG4gIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG5leHBvcnQgY29uc3QgZmluZFZhbHVlQW5kVW5pdCA9ICh2YWx1ZSkgPT4ge1xuICBpZiAodmFsdWUubWF0Y2gpIHtcbiAgICBjb25zdCBzcGxpdFZhbHVlID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWx1ZVsxXSksXG4gICAgICB1bml0OiAgc3BsaXRWYWx1ZVsyXVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgfVxufTtcblxuLypcbiAgU3BsaXQgY29sb3Igc3RyaW5nIGludG8gbWFwIG9mIGNvbG9yIHByb3BlcnRpZXNcblxuICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gIHsgUmVkOiAyNTUuLi4gfVxuKi9cbmV4cG9ydCBjb25zdCBnZXRDb2xvclZhbHVlcyA9ICh2YWx1ZSwgY29sb3JUZXJtcykgPT4ge1xuICBjb25zdCBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gIGNvbnN0IGNvbG9yVmFsdWVzID0ge307XG4gIGNvbnN0IGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDE7XG4gIH1cblxuICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4iXX0=

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	/*
	  Detect and load an appropriate clock setting for the environment
	*/
	var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame ? true : false;
	
	var onNextFrame = void 0;
	
	if (hasRAF) {
	  onNextFrame = function (callback) {
	    return window.requestAnimationFrame(callback);
	  };
	} else {
	  (function () {
	    /*
	      requestAnimationFrame polyfill
	      
	      For IE8/9 Flinstones and non-browser environments
	       Taken from Paul Irish. We've stripped out cancelAnimationFrame checks because we don't fox with that
	      
	      http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	      http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	       
	      requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	       
	      MIT license
	    */
	    var lastTime = 0;
	
	    onNextFrame = function (callback) {
	      var currentTime = new Date().getTime();
	      var timeToCall = Math.max(0, 16.7 - (currentTime - lastTime));
	
	      lastTime = currentTime + timeToCall;
	
	      setTimeout(function () {
	        return callback(lastTime);
	      }, timeToCall);
	    };
	  })();
	}
	
	exports.default = onNextFrame;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxJQUFNLFNBQVUsT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLE9BQU8scUJBQXpDLEdBQWtFLElBQWxFLEdBQXlFLEtBQXhGOztBQUVBLElBQUksb0JBQUo7O0FBRUEsSUFBSSxNQUFKLEVBQVk7QUFDVixnQkFBYyxVQUFDLFFBQUQ7QUFBQSxXQUFjLE9BQU8scUJBQVAsQ0FBNkIsUUFBN0IsQ0FBZDtBQUFBLEdBQWQ7QUFFRCxDQUhELE1BR087QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFlTCxRQUFJLFdBQVcsQ0FBZjs7QUFFQSxrQkFBYyxVQUFDLFFBQUQsRUFBYztBQUMxQixVQUFNLGNBQWMsSUFBSSxJQUFKLEdBQVcsT0FBWCxFQUFwQjtBQUNBLFVBQU0sYUFBYSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksUUFBUSxjQUFjLFFBQXRCLENBQVosQ0FBbkI7O0FBRUEsaUJBQVcsY0FBYyxVQUF6Qjs7QUFFQSxpQkFBVztBQUFBLGVBQU0sU0FBUyxRQUFULENBQU47QUFBQSxPQUFYLEVBQXFDLFVBQXJDO0FBQ0QsS0FQRDtBQWpCSztBQXlCTjs7a0JBRWMsVyIsImZpbGUiOiJvbi1uZXh0LWZyYW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cbmNvbnN0IGhhc1JBRiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSA/IHRydWUgOiBmYWxzZTtcblxubGV0IG9uTmV4dEZyYW1lO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gKGNhbGxiYWNrKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcblxufSBlbHNlIHtcbiAgLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICBcbiAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG5cbiAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgXG4gICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgXG4gICAgTUlUIGxpY2Vuc2VcbiAgKi9cbiAgbGV0IGxhc3RUaW1lID0gMDtcblxuICBvbk5leHRGcmFtZSA9IChjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2LjcgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKGxhc3RUaW1lKSwgdGltZVRvQ2FsbCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uTmV4dEZyYW1lOyJdfQ==

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = createRenderStep;
	function createRenderStep(startRenderLoop) {
	  /**
	   * We use two arrays, one for this frame and one to queue for the
	   * next frame, reusing each to avoid GC.
	   * @type {Array}
	   */
	  var functionsToRun = [];
	  var functionsToRunNextFrame = [];
	
	  return {
	    schedule: function (callback) {
	      startRenderLoop();
	      // If this callback isn't already scheduled to run next frame
	      if (functionsToRunNextFrame.indexOf(callback) === -1) {
	        functionsToRunNextFrame.push(callback);
	      }
	    },
	
	    cancel: function (callback) {
	      var indexOfCallback = functionsToRunNextFrame.indexOf(callback);
	      if (indexOfCallback !== -1) {
	        functionsToRunNextFrame.splice(indexOfCallback, 1);
	      }
	    },
	
	    process: function () {
	
	      // Clear next frame list
	      var _ref = [functionsToRunNextFrame, functionsToRun];
	      // Swap this frame and next frame arrays to avoid GC
	
	      functionsToRun = _ref[0];
	      functionsToRunNextFrame = _ref[1];
	      functionsToRunNextFrame.length = 0;
	
	      // Execute all of this frame's functions
	      var numThisFrame = functionsToRun.length;
	      for (var i = 0; i < numThisFrame; i++) {
	        functionsToRun[i]();
	      }
	    }
	  };
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFBd0IsZ0I7QUFBVCxTQUFTLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDOzs7Ozs7QUFNeEQsTUFBSSxpQkFBaUIsRUFBckI7QUFDQSxNQUFJLDBCQUEwQixFQUE5Qjs7QUFFQSxTQUFPO0FBQ0wsY0FBVSxVQUFDLFFBQUQsRUFBYztBQUN0Qjs7QUFFQSxVQUFJLHdCQUF3QixPQUF4QixDQUFnQyxRQUFoQyxNQUE4QyxDQUFDLENBQW5ELEVBQXNEO0FBQ3BELGdDQUF3QixJQUF4QixDQUE2QixRQUE3QjtBQUNEO0FBQ0YsS0FQSTs7QUFTTCxZQUFRLFVBQUMsUUFBRCxFQUFjO0FBQ3BCLFVBQU0sa0JBQWtCLHdCQUF3QixPQUF4QixDQUFnQyxRQUFoQyxDQUF4QjtBQUNBLFVBQUksb0JBQW9CLENBQUMsQ0FBekIsRUFBNEI7QUFDMUIsZ0NBQXdCLE1BQXhCLENBQStCLGVBQS9CLEVBQWdELENBQWhEO0FBQ0Q7QUFDRixLQWRJOztBQWdCTCxhQUFTLFlBQU07OztBQUFBLGlCQUUrQixDQUFDLHVCQUFELEVBQTBCLGNBQTFCLENBRi9COzs7QUFFWixvQkFGWTtBQUVJLDZCQUZKO0FBS2IsOEJBQXdCLE1BQXhCLEdBQWlDLENBQWpDOzs7QUFHQSxVQUFNLGVBQWUsZUFBZSxNQUFwQztBQUNBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxZQUFwQixFQUFrQyxHQUFsQyxFQUF1QztBQUNyQyx1QkFBZSxDQUFmO0FBQ0Q7QUFDRjtBQTVCSSxHQUFQO0FBOEJEIiwiZmlsZSI6ImNyZWF0ZS1yZW5kZXItc3RlcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKSB7XG4gIC8qKlxuICAgKiBXZSB1c2UgdHdvIGFycmF5cywgb25lIGZvciB0aGlzIGZyYW1lIGFuZCBvbmUgdG8gcXVldWUgZm9yIHRoZVxuICAgKiBuZXh0IGZyYW1lLCByZXVzaW5nIGVhY2ggdG8gYXZvaWQgR0MuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIGxldCBmdW5jdGlvbnNUb1J1biA9IFtdO1xuICBsZXQgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBbXTtcblxuICByZXR1cm4ge1xuICAgIHNjaGVkdWxlOiAoY2FsbGJhY2spID0+IHtcbiAgICAgIHN0YXJ0UmVuZGVyTG9vcCgpO1xuICAgICAgLy8gSWYgdGhpcyBjYWxsYmFjayBpc24ndCBhbHJlYWR5IHNjaGVkdWxlZCB0byBydW4gbmV4dCBmcmFtZVxuICAgICAgaWYgKGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2FuY2VsOiAoY2FsbGJhY2spID0+IHtcbiAgICAgIGNvbnN0IGluZGV4T2ZDYWxsYmFjayA9IGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGluZGV4T2ZDYWxsYmFjayAhPT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuc3BsaWNlKGluZGV4T2ZDYWxsYmFjaywgMSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHByb2Nlc3M6ICgpID0+IHtcbiAgICAgIC8vIFN3YXAgdGhpcyBmcmFtZSBhbmQgbmV4dCBmcmFtZSBhcnJheXMgdG8gYXZvaWQgR0NcbiAgICAgIFtmdW5jdGlvbnNUb1J1biwgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWVdID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG5cbiAgICAgIC8vIENsZWFyIG5leHQgZnJhbWUgbGlzdFxuICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUubGVuZ3RoID0gMDtcblxuICAgICAgLy8gRXhlY3V0ZSBhbGwgb2YgdGhpcyBmcmFtZSdzIGZ1bmN0aW9uc1xuICAgICAgY29uc3QgbnVtVGhpc0ZyYW1lID0gZnVuY3Rpb25zVG9SdW4ubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UaGlzRnJhbWU7IGkrKykge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bltpXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0iXX0=

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(24);
	
	var _transformProps = __webpack_require__(28);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ZERO_NOT_ZERO = 0.0001;
	
	function build(state, data) {
	  var hasTransform = false;
	  var props = {};
	  var scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
	  var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1;
	  var transformOriginX = data.width * ((state.originX || 50) / 100) + data.x;
	  var transformOriginY = data.height * ((state.originY || 50) / 100) + data.y;
	  var scaleTransformX = -transformOriginX * (scale * 1);
	  var scaleTransformY = -transformOriginY * (scaleY * 1);
	  var scaleReplaceX = transformOriginX / scale;
	  var scaleReplaceY = transformOriginY / scaleY;
	  var transform = {
	    translate: 'translate(' + state.translateX + ', ' + state.translateY + ') ',
	    scale: 'translate(' + scaleTransformX + ', ' + scaleTransformY + ') scale(' + scale + ', ' + scaleY + ') translate(' + scaleReplaceX + ', ' + scaleReplaceY + ') ',
	    rotate: 'rotate(' + state.rotate + ', ' + transformOriginX + ', ' + transformOriginY + ') ',
	    skewX: 'skewX(' + state.skewX + ') ',
	    skewY: 'skewY(' + state.skewY + ') '
	  };
	
	  for (var key in state) {
	    if (state.hasOwnProperty(key)) {
	      if (_transformProps2.default[key]) {
	        hasTransform = true;
	      } else {
	        props[(0, _utils.camelToDash)(key)] = state[key];
	      }
	    }
	  }
	
	  if (hasTransform) {
	    props.transform = '';
	
	    for (var _key in transform) {
	      if (transform.hasOwnProperty(_key)) {
	        var defaultValue = _key === 'scale' ? '1' : '0';
	        props.transform += transform[_key].replace(/undefined/g, defaultValue);
	      }
	    }
	  }
	
	  return props;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFLd0IsSzs7QUFMeEI7O0FBQ0E7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLE1BQXRCOztBQUVlLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0IsSUFBdEIsRUFBNEI7QUFDekMsTUFBSSxlQUFlLEtBQW5CO0FBQ0EsTUFBTSxRQUFRLEVBQWQ7QUFDQSxNQUFNLFFBQVEsTUFBTSxLQUFOLEtBQWdCLFNBQWhCLEdBQTRCLE1BQU0sS0FBTixJQUFlLGFBQTNDLEdBQTJELE1BQU0sTUFBTixJQUFnQixDQUF6RjtBQUNBLE1BQU0sU0FBUyxNQUFNLE1BQU4sS0FBaUIsU0FBakIsR0FBNkIsTUFBTSxNQUFOLElBQWdCLGFBQTdDLEdBQTZELFNBQVMsQ0FBckY7QUFDQSxNQUFNLG1CQUFtQixLQUFLLEtBQUwsSUFBYyxDQUFDLE1BQU0sT0FBTixJQUFpQixFQUFsQixJQUF3QixHQUF0QyxJQUE2QyxLQUFLLENBQTNFO0FBQ0EsTUFBTSxtQkFBbUIsS0FBSyxNQUFMLElBQWUsQ0FBQyxNQUFNLE9BQU4sSUFBaUIsRUFBbEIsSUFBd0IsR0FBdkMsSUFBOEMsS0FBSyxDQUE1RTtBQUNBLE1BQU0sa0JBQWtCLENBQUUsZ0JBQUYsSUFBc0IsUUFBUSxDQUE5QixDQUF4QjtBQUNBLE1BQU0sa0JBQWtCLENBQUUsZ0JBQUYsSUFBc0IsU0FBUyxDQUEvQixDQUF4QjtBQUNBLE1BQU0sZ0JBQWdCLG1CQUFtQixLQUF6QztBQUNBLE1BQU0sZ0JBQWdCLG1CQUFtQixNQUF6QztBQUNBLE1BQU0sWUFBWTtBQUNoQiw4QkFBd0IsTUFBTSxVQUE5QixVQUE2QyxNQUFNLFVBQW5ELE9BRGdCO0FBRWhCLDBCQUFvQixlQUFwQixVQUF3QyxlQUF4QyxnQkFBa0UsS0FBbEUsVUFBNEUsTUFBNUUsb0JBQWlHLGFBQWpHLFVBQW1ILGFBQW5ILE9BRmdCO0FBR2hCLHdCQUFrQixNQUFNLE1BQXhCLFVBQW1DLGdCQUFuQyxVQUF3RCxnQkFBeEQsT0FIZ0I7QUFJaEIsc0JBQWdCLE1BQU0sS0FBdEIsT0FKZ0I7QUFLaEIsc0JBQWdCLE1BQU0sS0FBdEI7QUFMZ0IsR0FBbEI7O0FBUUEsT0FBSyxJQUFJLEdBQVQsSUFBZ0IsS0FBaEIsRUFBdUI7QUFDckIsUUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUM3QixVQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUN2Qix1QkFBZSxJQUFmO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBTSx3QkFBWSxHQUFaLENBQU4sSUFBMEIsTUFBTSxHQUFOLENBQTFCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELE1BQUksWUFBSixFQUFrQjtBQUNoQixVQUFNLFNBQU4sR0FBa0IsRUFBbEI7O0FBRUEsU0FBSyxJQUFJLElBQVQsSUFBZ0IsU0FBaEIsRUFBMkI7QUFDekIsVUFBSSxVQUFVLGNBQVYsQ0FBeUIsSUFBekIsQ0FBSixFQUFtQztBQUNqQyxZQUFNLGVBQWdCLFNBQVEsT0FBVCxHQUFvQixHQUFwQixHQUEwQixHQUEvQztBQUNBLGNBQU0sU0FBTixJQUFtQixVQUFVLElBQVYsRUFBZSxPQUFmLENBQXVCLFlBQXZCLEVBQXFDLFlBQXJDLENBQW5CO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQU8sS0FBUDtBQUNEIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuXG5jb25zdCBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICBsZXQgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIGNvbnN0IHByb3BzID0ge307XG4gIGNvbnN0IHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMTtcbiAgY29uc3Qgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDE7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSBkYXRhLmhlaWdodCAqICgoc3RhdGUub3JpZ2luWSB8fCA1MCkgLyAxMDApICsgZGF0YS55O1xuICBjb25zdCBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgY29uc3Qgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICBjb25zdCBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICBjb25zdCBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgY29uc3QgdHJhbnNmb3JtID0ge1xuICAgIHRyYW5zbGF0ZTogYHRyYW5zbGF0ZSgke3N0YXRlLnRyYW5zbGF0ZVh9LCAke3N0YXRlLnRyYW5zbGF0ZVl9KSBgLFxuICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICByb3RhdGU6IGByb3RhdGUoJHtzdGF0ZS5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgIHNrZXdYOiBgc2tld1goJHtzdGF0ZS5za2V3WH0pIGAsXG4gICAgc2tld1k6IGBza2V3WSgke3N0YXRlLnNrZXdZfSkgYFxuICB9O1xuXG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHNbY2FtZWxUb0Rhc2goa2V5KV0gPSBzdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgIGZvciAobGV0IGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAoa2V5ID09PSAnc2NhbGUnKSA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtrZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn0iXX0=

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var axes = ['X', 'Y', 'Z'];
	
	var transformProps = {
	  x: true,
	  y: true,
	  z: true
	};
	
	var SCALE = 'scale';
	var ROTATE = 'rotate';
	var TRANSFORM_PERSPECTIVE = 'transformPerspective';
	var TERMS = ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE];
	
	transformProps[ROTATE] = transformProps[SCALE] = transformProps[TRANSFORM_PERSPECTIVE] = true;
	
	TERMS.forEach(function (term) {
	  return axes.forEach(function (axis) {
	    return transformProps[term + axis] = true;
	  });
	});
	
	exports.default = transformProps;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLE9BQU8sQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBYjs7QUFFQSxJQUFJLGlCQUFpQjtBQUNuQixLQUFHLElBRGdCO0FBRW5CLEtBQUcsSUFGZ0I7QUFHbkIsS0FBRztBQUhnQixDQUFyQjs7QUFNQSxJQUFNLFFBQVEsT0FBZDtBQUNBLElBQU0sU0FBUyxRQUFmO0FBQ0EsSUFBTSx3QkFBd0Isc0JBQTlCO0FBQ0EsSUFBTSxRQUFRLENBQUMsV0FBRCxFQUFjLEtBQWQsRUFBcUIsTUFBckIsRUFBNkIsTUFBN0IsRUFBcUMscUJBQXJDLENBQWQ7O0FBRUEsZUFBZSxNQUFmLElBQXlCLGVBQWUsS0FBZixJQUF3QixlQUFlLHFCQUFmLElBQXdDLElBQXpGOztBQUVBLE1BQU0sT0FBTixDQUFjLFVBQUMsSUFBRDtBQUFBLFNBQVUsS0FBSyxPQUFMLENBQWEsVUFBQyxJQUFEO0FBQUEsV0FBVSxlQUFlLE9BQU8sSUFBdEIsSUFBOEIsSUFBeEM7QUFBQSxHQUFiLENBQVY7QUFBQSxDQUFkOztrQkFFZSxjIiwiZmlsZSI6InRyYW5zZm9ybS1wcm9wcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4ZXMgPSBbJ1gnLCAnWScsICdaJ107XG5cbmxldCB0cmFuc2Zvcm1Qcm9wcyA9IHtcbiAgeDogdHJ1ZSxcbiAgeTogdHJ1ZSxcbiAgejogdHJ1ZVxufTtcblxuY29uc3QgU0NBTEUgPSAnc2NhbGUnO1xuY29uc3QgUk9UQVRFID0gJ3JvdGF0ZSc7XG5jb25zdCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xuY29uc3QgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKCh0ZXJtKSA9PiBheGVzLmZvckVhY2goKGF4aXMpID0+IHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWUpKTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNmb3JtUHJvcHM7Il19

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _valueTypes = __webpack_require__(5);
	
	exports.default = {
	  fill: _valueTypes.color,
	  stroke: _valueTypes.color,
	  scale: _valueTypes.scale,
	  scaleX: _valueTypes.scale,
	  scaleY: _valueTypes.scale,
	  d: _valueTypes.complex,
	  points: _valueTypes.complex,
	  opacity: _valueTypes.alpha,
	  fillOpacity: _valueTypes.alpha,
	  strokeOpacity: _valueTypes.alpha
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7a0JBRWU7QUFDYix5QkFEYTtBQUViLDJCQUZhO0FBR2IsMEJBSGE7QUFJYiwyQkFKYTtBQUtiLDJCQUxhO0FBTWIsd0JBTmE7QUFPYiw2QkFQYTtBQVFiLDRCQVJhO0FBU2IsZ0NBVGE7QUFVYjtBQVZhLEMiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbHBoYSwgY29sb3IsIGNvbXBsZXgsIHNjYWxlIH0gZnJvbSAnLi4vLi4vaW5jL3ZhbHVlLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaWxsOiBjb2xvcixcbiAgc3Ryb2tlOiBjb2xvcixcbiAgc2NhbGU6IHNjYWxlLFxuICBzY2FsZVg6IHNjYWxlLFxuICBzY2FsZVk6IHNjYWxlLFxuICBkOiBjb21wbGV4LFxuICBwb2ludHM6IGNvbXBsZXgsXG4gIG9wYWNpdHk6IGFscGhhLFxuICBmaWxsT3BhY2l0eTogYWxwaGEsXG4gIHN0cm9rZU9wYWNpdHk6IGFscGhhXG59OyJdfQ==

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = buildStylePropertyString;
	
	var _transformProps = __webpack_require__(28);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(31);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _prefixer = __webpack_require__(32);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _utils = __webpack_require__(24);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TRANSLATE = 'translate';
	var translateMap = {
	  x: TRANSLATE + 'X',
	  y: TRANSLATE + 'Y',
	  z: TRANSLATE + 'Z'
	};
	
	function buildStylePropertyString(element, state, changedValues, enableHardwareAcceleration) {
	  var propertyString = '';
	  var transformString = '';
	  var hasTransform = false;
	  var transformHasZ = false;
	
	  // First check if there are any changed transform values
	  // and if true add all transform values
	  var numChangedValues = changedValues.length;
	  for (var i = 0; i < numChangedValues; i++) {
	    var key = changedValues[i];
	
	    // If this is a transform property, add all other transform props
	    // to changedValues and then break
	    if (_transformProps2.default[key]) {
	      hasTransform = true;
	
	      for (var _key in state) {
	        if (_transformProps2.default[_key] && changedValues.indexOf(_key) === -1) {
	          changedValues.push(_key);
	        }
	      }
	
	      break;
	    }
	  }
	
	  var totalNumChangedValues = changedValues.length;
	  for (var _i = 0; _i < totalNumChangedValues; _i++) {
	    var _key2 = changedValues[_i];
	    var value = state[_key2];
	
	    if (translateMap[_key2]) {
	      _key2 = translateMap[_key2];
	    }
	
	    // If this is a number or object and we have filter, apply filter
	    if (_valueTypes2.default[_key2] && ((0, _utils.isNum)(value) || (0, _utils.isObj)(value)) && _valueTypes2.default[_key2].transform) {
	      value = _valueTypes2.default[_key2].transform(value);
	    }
	
	    if (_transformProps2.default[_key2]) {
	      transformString += _key2 + '(' + value + ') ';
	      transformHasZ = _key2 === translateMap.z ? true : transformHasZ;
	    } else {
	      propertyString += ';' + (0, _prefixer2.default)(_key2, true) + ':' + value;
	    }
	  }
	
	  // If we have transform props, build a transform string
	  if (hasTransform) {
	    if (!transformHasZ && enableHardwareAcceleration) {
	      transformString += translateMap.z + '(0)';
	    }
	
	    propertyString += ';' + (0, _prefixer2.default)('transform', true) + ':' + transformString;
	  }
	
	  element.style.cssText += propertyString;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBWXdCLHdCOztBQVp4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU0sWUFBWSxXQUFsQjtBQUNBLElBQU0sZUFBZTtBQUNuQixLQUFHLFlBQVksR0FESTtBQUVuQixLQUFHLFlBQVksR0FGSTtBQUduQixLQUFHLFlBQVk7QUFISSxDQUFyQjs7QUFNZSxTQUFTLHdCQUFULENBQWtDLE9BQWxDLEVBQTJDLEtBQTNDLEVBQWtELGFBQWxELEVBQWlFLDBCQUFqRSxFQUE2RjtBQUMxRyxNQUFJLGlCQUFpQixFQUFyQjtBQUNBLE1BQUksa0JBQWtCLEVBQXRCO0FBQ0EsTUFBSSxlQUFlLEtBQW5CO0FBQ0EsTUFBSSxnQkFBZ0IsS0FBcEI7Ozs7QUFJQSxNQUFNLG1CQUFtQixjQUFjLE1BQXZDO0FBQ0EsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLGdCQUFwQixFQUFzQyxHQUF0QyxFQUEyQztBQUN6QyxRQUFNLE1BQU0sY0FBYyxDQUFkLENBQVo7Ozs7QUFJQSxRQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUN2QixxQkFBZSxJQUFmOztBQUVBLFdBQUssSUFBSSxJQUFULElBQWdCLEtBQWhCLEVBQXVCO0FBQ3JCLFlBQUkseUJBQWUsSUFBZixLQUF1QixjQUFjLE9BQWQsQ0FBc0IsSUFBdEIsTUFBK0IsQ0FBQyxDQUEzRCxFQUE4RDtBQUM1RCx3QkFBYyxJQUFkLENBQW1CLElBQW5CO0FBQ0Q7QUFDRjs7QUFFRDtBQUNEO0FBQ0Y7O0FBRUQsTUFBTSx3QkFBd0IsY0FBYyxNQUE1QztBQUNBLE9BQUssSUFBSSxLQUFJLENBQWIsRUFBZ0IsS0FBSSxxQkFBcEIsRUFBMkMsSUFBM0MsRUFBZ0Q7QUFDOUMsUUFBSSxRQUFNLGNBQWMsRUFBZCxDQUFWO0FBQ0EsUUFBSSxRQUFRLE1BQU0sS0FBTixDQUFaOztBQUVBLFFBQUksYUFBYSxLQUFiLENBQUosRUFBdUI7QUFDckIsY0FBTSxhQUFhLEtBQWIsQ0FBTjtBQUNEOzs7QUFHRCxRQUFJLHFCQUFXLEtBQVgsTUFBb0Isa0JBQU0sS0FBTixLQUFnQixrQkFBTSxLQUFOLENBQXBDLEtBQXFELHFCQUFXLEtBQVgsRUFBZ0IsU0FBekUsRUFBb0Y7QUFDbEYsY0FBUSxxQkFBVyxLQUFYLEVBQWdCLFNBQWhCLENBQTBCLEtBQTFCLENBQVI7QUFDRDs7QUFFRCxRQUFJLHlCQUFlLEtBQWYsQ0FBSixFQUF5QjtBQUN2Qix5QkFBbUIsUUFBTSxHQUFOLEdBQVksS0FBWixHQUFvQixJQUF2QztBQUNBLHNCQUFpQixVQUFRLGFBQWEsQ0FBdEIsR0FBMkIsSUFBM0IsR0FBa0MsYUFBbEQ7QUFFRCxLQUpELE1BSU87QUFDTCx3QkFBa0IsTUFBTSx3QkFBUyxLQUFULEVBQWMsSUFBZCxDQUFOLEdBQTRCLEdBQTVCLEdBQWtDLEtBQXBEO0FBQ0Q7QUFDRjs7O0FBR0QsTUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFFBQUksQ0FBQyxhQUFELElBQWtCLDBCQUF0QixFQUFrRDtBQUNoRCx5QkFBbUIsYUFBYSxDQUFiLEdBQWlCLEtBQXBDO0FBQ0Q7O0FBRUQsc0JBQWtCLE1BQU0sd0JBQVMsV0FBVCxFQUFzQixJQUF0QixDQUFOLEdBQW9DLEdBQXBDLEdBQTBDLGVBQTVEO0FBQ0Q7O0FBRUQsVUFBUSxLQUFSLENBQWMsT0FBZCxJQUF5QixjQUF6QjtBQUNEIiwiZmlsZSI6InJlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgdmFsdWVUeXBlcyBmcm9tICcuL3ZhbHVlLXR5cGVzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcbmltcG9ydCB7IGlzTnVtLCBpc09iaiB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNvbnN0IFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuY29uc3QgdHJhbnNsYXRlTWFwID0ge1xuICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gIHk6IFRSQU5TTEFURSArICdZJyxcbiAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmcoZWxlbWVudCwgc3RhdGUsIGNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gIGxldCBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIGxldCBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgbGV0IHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGNoYW5nZWQgdHJhbnNmb3JtIHZhbHVlc1xuICAvLyBhbmQgaWYgdHJ1ZSBhZGQgYWxsIHRyYW5zZm9ybSB2YWx1ZXNcbiAgY29uc3QgbnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdHJhbnNmb3JtIHByb3BlcnR5LCBhZGQgYWxsIG90aGVyIHRyYW5zZm9ybSBwcm9wc1xuICAgIC8vIHRvIGNoYW5nZWRWYWx1ZXMgYW5kIHRoZW4gYnJlYWtcbiAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldICYmIGNoYW5nZWRWYWx1ZXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRvdGFsTnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsTnVtQ2hhbmdlZFZhbHVlczsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG4gICAgbGV0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgIGlmICh0cmFuc2xhdGVNYXBba2V5XSkge1xuICAgICAga2V5ID0gdHJhbnNsYXRlTWFwW2tleV07XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIG51bWJlciBvciBvYmplY3QgYW5kIHdlIGhhdmUgZmlsdGVyLCBhcHBseSBmaWx0ZXJcbiAgICBpZiAodmFsdWVUeXBlc1trZXldICYmIChpc051bSh2YWx1ZSkgfHwgaXNPYmoodmFsdWUpKSAmJiB2YWx1ZVR5cGVzW2tleV0udHJhbnNmb3JtKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlVHlwZXNba2V5XS50cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IHRyYW5zbGF0ZU1hcC56KSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKGtleSwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wcywgYnVpbGQgYSB0cmFuc2Zvcm0gc3RyaW5nXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSB0cmFuc2xhdGVNYXAueiArICcoMCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKCd0cmFuc2Zvcm0nLCB0cnVlKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBwcm9wZXJ0eVN0cmluZztcbn1cbiJdfQ==

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _valueTypes = __webpack_require__(5);
	
	exports.default = {
	  // Color props
	  color: _valueTypes.color,
	  backgroundColor: _valueTypes.color,
	  outlineColor: _valueTypes.color,
	  fill: _valueTypes.color,
	  stroke: _valueTypes.color,
	
	  // Border props
	  borderColor: _valueTypes.color,
	  borderTopColor: _valueTypes.color,
	  borderRightColor: _valueTypes.color,
	  borderBottomColor: _valueTypes.color,
	  borderLeftColor: _valueTypes.color,
	  borderRadius: _valueTypes.px,
	
	  // Positioning
	  width: _valueTypes.px,
	  height: _valueTypes.px,
	
	  // Transform properties
	  rotate: _valueTypes.degrees,
	  rotateX: _valueTypes.degrees,
	  rotateY: _valueTypes.degrees,
	  rotateZ: _valueTypes.degrees,
	  scale: _valueTypes.scale,
	  scaleX: _valueTypes.scale,
	  scaleY: _valueTypes.scale,
	  scaleZ: _valueTypes.scale,
	  skewX: _valueTypes.degrees,
	  skewY: _valueTypes.degrees,
	  distance: _valueTypes.px,
	  translateX: _valueTypes.px,
	  translateY: _valueTypes.px,
	  translateZ: _valueTypes.px,
	  perspective: _valueTypes.px,
	  opacity: _valueTypes.alpha
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7a0JBQ2U7O0FBRWIsMEJBRmE7QUFHYixvQ0FIYTtBQUliLGlDQUphO0FBS2IseUJBTGE7QUFNYiwyQkFOYTs7O0FBU2IsZ0NBVGE7QUFVYixtQ0FWYTtBQVdiLHFDQVhhO0FBWWIsc0NBWmE7QUFhYixvQ0FiYTtBQWNiLDhCQWRhOzs7QUFpQmIsdUJBakJhO0FBa0JiLHdCQWxCYTs7O0FBcUJiLDZCQXJCYTtBQXNCYiw4QkF0QmE7QUF1QmIsOEJBdkJhO0FBd0JiLDhCQXhCYTtBQXlCYiwwQkF6QmE7QUEwQmIsMkJBMUJhO0FBMkJiLDJCQTNCYTtBQTRCYiwyQkE1QmE7QUE2QmIsNEJBN0JhO0FBOEJiLDRCQTlCYTtBQStCYiwwQkEvQmE7QUFnQ2IsNEJBaENhO0FBaUNiLDRCQWpDYTtBQWtDYiw0QkFsQ2E7QUFtQ2IsNkJBbkNhO0FBb0NiO0FBcENhLEMiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbHBoYSwgY29sb3IsIGRlZ3JlZXMsIHNjYWxlLCBweCB9IGZyb20gJy4uLy4uL2luYy92YWx1ZS10eXBlcyc7IFxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gIG91dGxpbmVDb2xvcjogY29sb3IsXG4gIGZpbGw6IGNvbG9yLFxuICBzdHJva2U6IGNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBweCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogcHgsXG4gIGhlaWdodDogcHgsICBcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IGRlZ3JlZXMsXG4gIHJvdGF0ZVg6IGRlZ3JlZXMsXG4gIHJvdGF0ZVk6IGRlZ3JlZXMsXG4gIHJvdGF0ZVo6IGRlZ3JlZXMsXG4gIHNjYWxlOiBzY2FsZSxcbiAgc2NhbGVYOiBzY2FsZSxcbiAgc2NhbGVZOiBzY2FsZSxcbiAgc2NhbGVaOiBzY2FsZSxcbiAgc2tld1g6IGRlZ3JlZXMsXG4gIHNrZXdZOiBkZWdyZWVzLFxuICBkaXN0YW5jZTogcHgsXG4gIHRyYW5zbGF0ZVg6IHB4LFxuICB0cmFuc2xhdGVZOiBweCxcbiAgdHJhbnNsYXRlWjogcHgsXG4gIHBlcnNwZWN0aXZlOiBweCxcbiAgb3BhY2l0eTogYWxwaGFcbn07XG4iXX0=

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(24);
	
	var camelCache = {};
	var dashCache = {};
	var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
	var numPrefixes = prefixes.length;
	var testElement = void 0;
	
	/*
	  Test style property for prefixed version
	  
	  @param [string]: Style property
	  @return [string]: Cached property name
	*/
	var testPrefix = function (key) {
	  testElement = testElement || document.createElement('div');
	
	  for (var i = 0; i < numPrefixes; i++) {
	    var prefix = prefixes[i];
	    var noPrefix = prefix === '';
	    var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
	
	    if (prefixedPropertyName in testElement.style) {
	      camelCache[key] = prefixedPropertyName;
	      dashCache[key] = '' + (noPrefix ? '' : '-') + (0, _utils.camelToDash)(prefixedPropertyName);
	    }
	  }
	};
	
	exports.default = function (key, asDashCase) {
	  var cache = asDashCase ? dashCache : camelCache;
	
	  if (!cache[key]) {
	    testPrefix(key);
	  }
	
	  return cache[key];
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNLGFBQWEsRUFBbkI7QUFDQSxJQUFNLFlBQVksRUFBbEI7QUFDQSxJQUFNLFdBQVcsQ0FBQyxRQUFELEVBQVUsS0FBVixFQUFnQixHQUFoQixFQUFvQixJQUFwQixFQUEwQixFQUExQixDQUFqQjtBQUNBLElBQU0sY0FBYyxTQUFTLE1BQTdCO0FBQ0EsSUFBSSxvQkFBSjs7Ozs7Ozs7QUFRQSxJQUFNLGFBQWEsVUFBQyxHQUFELEVBQVM7QUFDMUIsZ0JBQWMsZUFBZSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBN0I7O0FBRUEsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFdBQXBCLEVBQWlDLEdBQWpDLEVBQXNDO0FBQ3BDLFFBQU0sU0FBUyxTQUFTLENBQVQsQ0FBZjtBQUNBLFFBQU0sV0FBWSxXQUFXLEVBQTdCO0FBQ0EsUUFBTSx1QkFBdUIsV0FBVyxHQUFYLEdBQWlCLFNBQVMsSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLFdBQWQsRUFBVCxHQUF1QyxJQUFJLEtBQUosQ0FBVSxDQUFWLENBQXJGOztBQUVBLFFBQUksd0JBQXdCLFlBQVksS0FBeEMsRUFBK0M7QUFDN0MsaUJBQVcsR0FBWCxJQUFrQixvQkFBbEI7QUFDQSxnQkFBVSxHQUFWLFVBQXFCLFdBQVcsRUFBWCxHQUFnQixHQUFyQyxJQUE0Qyx3QkFBWSxvQkFBWixDQUE1QztBQUNEO0FBQ0Y7QUFDRixDQWJEOztrQkFlZSxVQUFDLEdBQUQsRUFBTSxVQUFOLEVBQXFCO0FBQ2xDLE1BQU0sUUFBUSxhQUFhLFNBQWIsR0FBeUIsVUFBdkM7O0FBRUEsTUFBSSxDQUFDLE1BQU0sR0FBTixDQUFMLEVBQWlCO0FBQ2YsZUFBVyxHQUFYO0FBQ0Q7O0FBRUQsU0FBTyxNQUFNLEdBQU4sQ0FBUDtBQUNELEMiLCJmaWxlIjoicHJlZml4ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbFRvRGFzaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNvbnN0IGNhbWVsQ2FjaGUgPSB7fTtcbmNvbnN0IGRhc2hDYWNoZSA9IHt9O1xuY29uc3QgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbmNvbnN0IG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xubGV0IHRlc3RFbGVtZW50O1xuXG4vKlxuICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xuY29uc3QgdGVzdFByZWZpeCA9IChrZXkpID0+IHtcbiAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICBjb25zdCBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICBjb25zdCBub1ByZWZpeCA9IChwcmVmaXggPT09ICcnKTtcbiAgICBjb25zdCBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgIGRhc2hDYWNoZVtrZXldID0gYCR7KG5vUHJlZml4ID8gJycgOiAnLScpfSR7Y2FtZWxUb0Rhc2gocHJlZml4ZWRQcm9wZXJ0eU5hbWUpfWA7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoa2V5LCBhc0Rhc2hDYXNlKSA9PiB7XG4gIGNvbnN0IGNhY2hlID0gYXNEYXNoQ2FzZSA/IGRhc2hDYWNoZSA6IGNhbWVsQ2FjaGU7XG5cbiAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgdGVzdFByZWZpeChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuIl19

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	/*
	  Convert percentage to pixels
	  
	  @param [number]: Percentage of total length
	  @param [number]: Total length
	*/
	var percentToPixels = function (percent, length) {
	  return parseFloat(percent) / 100 * length + 'px';
	};
	
	exports.default = function (state, length) {
	  var styles = {};
	  var dashArrayStyles = {
	    length: 0,
	    spacing: length + 'px'
	  };
	  var hasDashArray = false;
	
	  for (var key in state) {
	    if (state.hasOwnProperty(key)) {
	      var value = state[key];
	
	      switch (key) {
	        case 'length':
	        case 'spacing':
	          hasDashArray = true;
	          dashArrayStyles[key] = percentToPixels(value, length);
	          break;
	        case 'offset':
	          styles['stroke-dashoffset'] = percentToPixels(-value, length);
	          break;
	        default:
	          styles[key] = value;
	      }
	    }
	  }
	
	  if (hasDashArray) {
	    styles['stroke-dasharray'] = dashArrayStyles.length + ' ' + dashArrayStyles.spacing;
	  }
	
	  return styles;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsSUFBTSxrQkFBa0IsVUFBQyxPQUFELEVBQVUsTUFBVjtBQUFBLFNBQXNCLFdBQVcsT0FBWCxJQUFzQixHQUF2QixHQUE4QixNQUE5QixHQUF1QyxJQUE1RDtBQUFBLENBQXhCOztrQkFFZSxVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQ2hDLE1BQU0sU0FBUyxFQUFmO0FBQ0EsTUFBTSxrQkFBa0I7QUFDdEIsWUFBUSxDQURjO0FBRXRCLGFBQVMsU0FBUztBQUZJLEdBQXhCO0FBSUEsTUFBSSxlQUFlLEtBQW5COztBQUVBLE9BQUssSUFBSSxHQUFULElBQWdCLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDN0IsVUFBTSxRQUFRLE1BQU0sR0FBTixDQUFkOztBQUVBLGNBQVEsR0FBUjtBQUNBLGFBQUssUUFBTDtBQUNBLGFBQUssU0FBTDtBQUNFLHlCQUFlLElBQWY7QUFDQSwwQkFBZ0IsR0FBaEIsSUFBdUIsZ0JBQWdCLEtBQWhCLEVBQXVCLE1BQXZCLENBQXZCO0FBQ0E7QUFDRixhQUFLLFFBQUw7QUFDRSxpQkFBTyxtQkFBUCxJQUE4QixnQkFBZ0IsQ0FBQyxLQUFqQixFQUF3QixNQUF4QixDQUE5QjtBQUNBO0FBQ0Y7QUFDRSxpQkFBTyxHQUFQLElBQWMsS0FBZDtBQVZGO0FBWUQ7QUFDRjs7QUFFRCxNQUFJLFlBQUosRUFBa0I7QUFDaEIsV0FBTyxrQkFBUCxJQUE2QixnQkFBZ0IsTUFBaEIsR0FBeUIsR0FBekIsR0FBK0IsZ0JBQWdCLE9BQTVFO0FBQ0Q7O0FBRUQsU0FBTyxNQUFQO0FBQ0QsQyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG5jb25zdCBwZXJjZW50VG9QaXhlbHMgPSAocGVyY2VudCwgbGVuZ3RoKSA9PiAocGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCkgKiBsZW5ndGggKyAncHgnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGxlbmd0aCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB7fTtcbiAgY29uc3QgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgIGxlbmd0aDogMCxcbiAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gIH07XG4gIGxldCBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07Il19

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDEyMTExMzkzOTFjYjYxNTliZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGFyYWxsZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wb2ludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvdHJhbnNmb3JtLXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy92YWx1ZS10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTtBQUNBLDRDQUEyQyxtWDs7Ozs7O0FDVDNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyx1dkU7Ozs7OztBQ3ZMM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLCt0VDs7Ozs7O0FDak4zQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsY0FBYztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsK3JUOzs7Ozs7QUN0TjNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQywybUY7Ozs7OztBQzFDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxtOUUiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwMTIxMTEzOTM5MWNiNjE1OWJlMlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuL3BvcG1vdGlvbicpO1xuXG52YXIgcG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbndpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW5iRzlpWVd3dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVRzN1NVRkJXU3hUT3pzN08wRkJRMW9zVDBGQlR5eFRRVUZRTEVkQlFXMUNMRk5CUVc1Q0lpd2labWxzWlNJNkltZHNiMkpoYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0FxSUdGeklIQnZjRzF2ZEdsdmJpQm1jbTl0SUNjdUwzQnZjRzF2ZEdsdmJpYzdYRzUzYVc1a2IzY3VjRzl3Ylc5MGFXOXVJRDBnY0c5d2JXOTBhVzl1TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3ZnUGF0aCA9IGV4cG9ydHMuc3ZnID0gZXhwb3J0cy5jc3MgPSBleHBvcnRzLlJlbmRlcmVyID0gZXhwb3J0cy52YWx1ZSA9IGV4cG9ydHMuc3RhZ2dlciA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLnBvaW50ZXIgPSBleHBvcnRzLnBoeXNpY3MgPSBleHBvcnRzLnBhcmFsbGVsID0gZXhwb3J0cy5vZmZzZXQgPSBleHBvcnRzLmRlbGF5ID0gZXhwb3J0cy5jcm9zc0ZhZGUgPSBleHBvcnRzLmNvbXBvc2l0ZSA9IGV4cG9ydHMuY2hhaW4gPSBleHBvcnRzLmJsZW5kVHdlZW5zID0gZXhwb3J0cy5BY3Rpb24gPSBleHBvcnRzLnZhbHVlVHlwZXMgPSBleHBvcnRzLnRyYW5zZm9ybSA9IGV4cG9ydHMuZWFzaW5nID0gZXhwb3J0cy5jYWxjID0gZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi9mcmFtZXN5bmMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVTdGFydCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVN0YXJ0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZVVwZGF0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVVwZGF0ZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVSZW5kZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVSZW5kZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lRW5kJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lRW5kO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndGltZVNpbmNlTGFzdEZyYW1lJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJyZW50RnJhbWVUaW1lc3RhbXAnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmN1cnJlbnRGcmFtZVRpbWVzdGFtcDtcbiAgfVxufSk7XG5cbnZhciBfY2FsYzIgPSByZXF1aXJlKCcuL2luYy9jYWxjJyk7XG5cbnZhciBfY2FsYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jYWxjMik7XG5cbnZhciBfZWFzaW5nMiA9IHJlcXVpcmUoJy4vaW5jL2Vhc2luZycpO1xuXG52YXIgX2Vhc2luZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9lYXNpbmcyKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF90cmFuc2Zvcm0gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHJhbnNmb3JtZXJzKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IHJlcXVpcmUoJy4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF92YWx1ZVR5cGVzMik7XG5cbnZhciBfYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuXG52YXIgX2FjdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWN0aW9ucyk7XG5cbnZhciBfYmxlbmRUd2VlbnMyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2JsZW5kLXR3ZWVucycpO1xuXG52YXIgX2JsZW5kVHdlZW5zMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JsZW5kVHdlZW5zMik7XG5cbnZhciBfY2hhaW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NoYWluJyk7XG5cbnZhciBfY2hhaW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW4yKTtcblxudmFyIF9jb21wb3NpdGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUyKTtcblxudmFyIF9jcm9zc0ZhZGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Nyb3NzLWZhZGUnKTtcblxudmFyIF9jcm9zc0ZhZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Jvc3NGYWRlMik7XG5cbnZhciBfZGVsYXkyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkyKTtcblxudmFyIF9vZmZzZXQyID0gcmVxdWlyZSgnLi9hY3Rpb25zL29mZnNldCcpO1xuXG52YXIgX29mZnNldDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vZmZzZXQyKTtcblxudmFyIF9wYXJhbGxlbDIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbDIpO1xuXG52YXIgX3BoeXNpY3MyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BoeXNpY3MnKTtcblxudmFyIF9waHlzaWNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BoeXNpY3MyKTtcblxudmFyIF9wb2ludGVyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9wb2ludGVyJyk7XG5cbnZhciBfcG9pbnRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludGVyMik7XG5cbnZhciBfdHdlZW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4yKTtcblxudmFyIF9zdGFnZ2VyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfdmFsdWUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUyKTtcblxudmFyIF9yZW5kZXJlcnMgPSByZXF1aXJlKCcuL3JlbmRlcmVycycpO1xuXG52YXIgX3JlbmRlcmVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXJlcnMpO1xuXG52YXIgX2NzczIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9jc3MnKTtcblxudmFyIF9jc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzMik7XG5cbnZhciBfc3ZnMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2ZycpO1xuXG52YXIgX3N2ZzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmcyKTtcblxudmFyIF9zdmdQYXRoMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2Zy1wYXRoJyk7XG5cbnZhciBfc3ZnUGF0aDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmV4cG9ydHMuY2FsYyA9IF9jYWxjO1xuZXhwb3J0cy5lYXNpbmcgPSBfZWFzaW5nO1xuZXhwb3J0cy50cmFuc2Zvcm0gPSBfdHJhbnNmb3JtO1xuZXhwb3J0cy52YWx1ZVR5cGVzID0gX3ZhbHVlVHlwZXM7XG5cbi8vIEFjdGlvbnNcblxuZXhwb3J0cy5BY3Rpb24gPSBfYWN0aW9uczIuZGVmYXVsdDtcbmV4cG9ydHMuYmxlbmRUd2VlbnMgPSBfYmxlbmRUd2VlbnMzLmRlZmF1bHQ7XG5leHBvcnRzLmNoYWluID0gX2NoYWluMy5kZWZhdWx0O1xuZXhwb3J0cy5jb21wb3NpdGUgPSBfY29tcG9zaXRlMy5kZWZhdWx0O1xuZXhwb3J0cy5jcm9zc0ZhZGUgPSBfY3Jvc3NGYWRlMy5kZWZhdWx0O1xuZXhwb3J0cy5kZWxheSA9IF9kZWxheTMuZGVmYXVsdDtcbmV4cG9ydHMub2Zmc2V0ID0gX29mZnNldDMuZGVmYXVsdDtcbmV4cG9ydHMucGFyYWxsZWwgPSBfcGFyYWxsZWwzLmRlZmF1bHQ7XG5leHBvcnRzLnBoeXNpY3MgPSBfcGh5c2ljczMuZGVmYXVsdDtcbmV4cG9ydHMucG9pbnRlciA9IF9wb2ludGVyMy5kZWZhdWx0O1xuZXhwb3J0cy50d2VlbiA9IF90d2VlbjMuZGVmYXVsdDtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy52YWx1ZSA9IF92YWx1ZTMuZGVmYXVsdDtcblxuLy8gUmVuZGVyZXJzXG5cbmV4cG9ydHMuUmVuZGVyZXIgPSBfcmVuZGVyZXJzMi5kZWZhdWx0O1xuZXhwb3J0cy5jc3MgPSBfY3NzMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmcgPSBfc3ZnMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmdQYXRoID0gX3N2Z1BhdGgzLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdiM0J0YjNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenR6UWtGRlJTeFpPenM3T3pzN2MwSkJRMEVzWVRzN096czdPM05DUVVOQkxHRTdPenM3T3p0elFrRkRRU3hWT3pzN096czdjMEpCUTBFc2EwSTdPenM3T3p0elFrRkRRU3h0UWpzN096czdPM05DUVVOQkxHMUNPenM3T3pzN2MwSkJRMEVzWjBJN096czdPenR6UWtGRFFTeHJRanM3T3pzN08zTkNRVU5CTEhGQ096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dFJRVWRWTEVrN1VVRkRRU3hOTzFGQlEwRXNVenRSUVVOQkxGVTdPenM3VVVGSFRDeE5PMUZCUTBFc1Z6dFJRVU5CTEVzN1VVRkRRU3hUTzFGQlEwRXNVenRSUVVOQkxFczdVVUZEUVN4Tk8xRkJRMEVzVVR0UlFVTkJMRTg3VVVGRFFTeFBPMUZCUTBFc1N6dFJRVU5CTEU4N1VVRkRRU3hMT3pzN08xRkJSMEVzVVR0UlFVTkJMRWM3VVVGRFFTeEhPMUZCUTBFc1R5SXNJbVpwYkdVaU9pSndiM0J0YjNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJHY21GdFpYTjVibU1nYzJOb1pXUjFiR1Z5YzF4dVpYaHdiM0owSUh0Y2JpQWdiMjVHY21GdFpWTjBZWEowTEZ4dUlDQnZia1p5WVcxbFZYQmtZWFJsTEZ4dUlDQnZia1p5WVcxbFVtVnVaR1Z5TEZ4dUlDQnZia1p5WVcxbFJXNWtMRnh1SUNCallXNWpaV3hQYmtaeVlXMWxVM1JoY25Rc1hHNGdJR05oYm1ObGJFOXVSbkpoYldWVmNHUmhkR1VzWEc0Z0lHTmhibU5sYkU5dVJuSmhiV1ZTWlc1a1pYSXNYRzRnSUdOaGJtTmxiRTl1Um5KaGJXVkZibVFzWEc0Z0lIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTeGNiaUFnWTNWeWNtVnVkRVp5WVcxbFZHbHRaWE4wWVcxd1hHNTlJR1p5YjIwZ0p5NHZabkpoYldWemVXNWpKenRjYmx4dVpYaHdiM0owSUNvZ1lYTWdZMkZzWXlCbWNtOXRJQ2N1TDJsdVl5OWpZV3hqSnp0Y2JtVjRjRzl5ZENBcUlHRnpJR1ZoYzJsdVp5Qm1jbTl0SUNjdUwybHVZeTlsWVhOcGJtY25PMXh1Wlhod2IzSjBJQ29nWVhNZ2RISmhibk5tYjNKdElHWnliMjBnSnk0dmFXNWpMM1J5WVc1elptOXliV1Z5Y3ljN1hHNWxlSEJ2Y25RZ0tpQmhjeUIyWVd4MVpWUjVjR1Z6SUdaeWIyMGdKeTR2YVc1akwzWmhiSFZsTFhSNWNHVnpKenRjYmx4dUx5OGdRV04wYVc5dWMxeHVaWGh3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TDJGamRHbHZibk1uTzF4dVpYaHdiM0owSUdKc1pXNWtWSGRsWlc1eklHWnliMjBnSnk0dllXTjBhVzl1Y3k5aWJHVnVaQzEwZDJWbGJuTW5PMXh1Wlhod2IzSjBJR05vWVdsdUlHWnliMjBnSnk0dllXTjBhVzl1Y3k5amFHRnBiaWM3WEc1bGVIQnZjblFnWTI5dGNHOXphWFJsSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlqYjIxd2IzTnBkR1VuTzF4dVpYaHdiM0owSUdOeWIzTnpSbUZrWlNCbWNtOXRJQ2N1TDJGamRHbHZibk12WTNKdmMzTXRabUZrWlNjN1hHNWxlSEJ2Y25RZ1pHVnNZWGtnWm5KdmJTQW5MaTloWTNScGIyNXpMMlJsYkdGNUp6dGNibVY0Y0c5eWRDQnZabVp6WlhRZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDI5bVpuTmxkQ2M3WEc1bGVIQnZjblFnY0dGeVlXeHNaV3dnWm5KdmJTQW5MaTloWTNScGIyNXpMM0JoY21Gc2JHVnNKenRjYm1WNGNHOXlkQ0J3YUhsemFXTnpJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OXdhSGx6YVdOekp6dGNibVY0Y0c5eWRDQndiMmx1ZEdWeUlHWnliMjBnSnk0dllXTjBhVzl1Y3k5d2IybHVkR1Z5Snp0Y2JtVjRjRzl5ZENCMGQyVmxiaUJtY205dElDY3VMMkZqZEdsdmJuTXZkSGRsWlc0bk8xeHVaWGh3YjNKMElITjBZV2RuWlhJZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDNOMFlXZG5aWEluTzF4dVpYaHdiM0owSUhaaGJIVmxJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OTJZV3gxWlNjN1hHNWNiaTh2SUZKbGJtUmxjbVZ5YzF4dVpYaHdiM0owSUZKbGJtUmxjbVZ5SUdaeWIyMGdKeTR2Y21WdVpHVnlaWEp6Snp0Y2JtVjRjRzl5ZENCamMzTWdabkp2YlNBbkxpOXlaVzVrWlhKbGNuTXZZM056Snp0Y2JtVjRjRzl5ZENCemRtY2dabkp2YlNBbkxpOXlaVzVrWlhKbGNuTXZjM1puSnp0Y2JtVjRjRzl5ZENCemRtZFFZWFJvSUdaeWIyMGdKeTR2Y21WdVpHVnlaWEp6TDNOMlp5MXdZWFJvSnp0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGV4cG9ydHMuZGlsYXRlID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5hbmdsZSA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuLypcbiAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcGFyYW0gW251bWJlcl1cbiAgQHJldHVybiBbbnVtYmVyXVxuKi9cbnZhciB0b0RlY2ltYWwgPSBmdW5jdGlvbiAobnVtKSB7XG4gIHZhciBwcmVjaXNpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAyIDogYXJndW1lbnRzWzFdO1xuXG4gIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcblxudmFyIFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbnZhciBkaXN0YW5jZTFEID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKTtcbn07XG5cbi8qXG4gIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gIFxuICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgYXJlIGF0IDAsMFxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xudmFyIGFuZ2xlID0gZXhwb3J0cy5hbmdsZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcbiAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xudmFyIGRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbiAoZGVncmVlcykge1xuICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59O1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICByZXR1cm4gYSArIChiIC0gYSkgKiBkaWxhdGlvbjtcbn07XG5cbi8qXG4gIERpc3RhbmNlXG4gIFxuICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiAoYSkge1xuICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG5cbiAgLy8gMUQgZGltZW5zaW9uc1xuICBpZiAoKDAsIF91dGlscy5pc051bSkoYSkpIHtcbiAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gIH0gZWxzZSB7XG4gICAgdmFyIHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICB2YXIgekRlbHRhID0gKDAsIF91dGlscy5pc051bSkoYS56KSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeERlbHRhLCAyKSArIE1hdGgucG93KHlEZWx0YSwgMikgKyBNYXRoLnBvdyh6RGVsdGEsIDIpKTtcbiAgfVxufTtcblxuLypcbiAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xudmFyIGdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bywgdmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKGZyb20sIHRvLCBwcm9ncmVzcykge1xuICByZXR1cm4gLXByb2dyZXNzICogZnJvbSArIHByb2dyZXNzICogdG8gKyBmcm9tO1xufTtcblxuLypcbiAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xudmFyIHJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBmdW5jdGlvbiAocmFkaWFucykge1xuICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgdmFyIHNtb290aGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbM107XG4gIHJldHVybiB0b0RlY2ltYWwob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHhwcykgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG59O1xuXG4vKlxuICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICBcbiAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG52YXIgc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoc3RlcHMsIHByb2dyZXNzKSB7XG4gIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICB2YXIgdGFyZ2V0ID0gMSAtIDEgLyBzdGVwcztcbiAgdmFyIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WTJGc1l5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJPenM3T3pzN096czdRVUZUUVN4SlFVRk5MRmxCUVZrc1ZVRkJReXhIUVVGRUxFVkJRWGRDTzBGQlFVRXNUVUZCYkVJc1UwRkJhMElzZVVSQlFVNHNRMEZCVFRzN1FVRkRlRU1zZFVKQlFWa3NSVUZCV2l4RlFVRnJRaXhUUVVGc1FqdEJRVU5CTEZOQlFVOHNTMEZCU3l4TFFVRk1MRU5CUVZjc1RVRkJUU3hUUVVGcVFpeEpRVUU0UWl4VFFVRnlRenRCUVVORUxFTkJTRVE3TzBGQlMwRXNTVUZCVFN4aFFVRmhPMEZCUTJwQ0xFdEJRVWNzUTBGRVl6dEJRVVZxUWl4TFFVRkhMRU5CUm1NN1FVRkhha0lzUzBGQlJ6dEJRVWhqTEVOQlFXNUNPenRCUVUxQkxFbEJRVTBzWVVGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktPMEZCUVVFc1UwRkJWU3hMUVVGTExFZEJRVXdzUTBGQlV5eEpRVUZKTEVOQlFXSXNRMEZCVmp0QlFVRkJMRU5CUVc1Q096czdPenM3T3pzN096czdRVUZaVHl4SlFVRk5MSGRDUVVGUkxGVkJRVU1zUTBGQlJEdEJRVUZCTEUxQlFVa3NRMEZCU2l4NVJFRkJVU3hWUVVGU08wRkJRVUVzVTBGQmRVSXNhVUpCUVdsQ0xFdEJRVXNzUzBGQlRDeERRVUZYTEVWQlFVVXNRMEZCUml4SFFVRk5MRVZCUVVVc1EwRkJia0lzUlVGQmMwSXNSVUZCUlN4RFFVRkdMRWRCUVUwc1JVRkJSU3hEUVVFNVFpeERRVUZxUWl4RFFVRjJRanRCUVVGQkxFTkJRV1E3T3pzN096czdPMEZCVVVFc1NVRkJUU3c0UTBGQmJVSXNWVUZCUXl4UFFVRkVPMEZCUVVFc1UwRkJZU3hWUVVGVkxFdEJRVXNzUlVGQlppeEhRVUZ2UWl4SFFVRnFRenRCUVVGQkxFTkJRWHBDT3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFXOUNRU3hKUVVGTkxEQkNRVUZUTEZWQlFVTXNRMEZCUkN4RlFVRkpMRU5CUVVvc1JVRkJUeXhSUVVGUU8wRkJRVUVzVTBGQmIwSXNTVUZCU3l4RFFVRkRMRWxCUVVrc1EwRkJUQ3hKUVVGVkxGRkJRVzVETzBGQlFVRXNRMEZCWmpzN096czdPenM3T3pzN1FVRlhRU3hKUVVGTkxEaENRVUZYTEZWQlFVTXNRMEZCUkN4RlFVRjFRanRCUVVGQkxFMUJRVzVDTEVOQlFXMUNMSGxFUVVGbUxGVkJRV1U3T3p0QlFVVTNReXhOUVVGSkxHdENRVUZOTEVOQlFVNHNRMEZCU2l4RlFVRmpPMEZCUTFvc1YwRkJUeXhYUVVGWExFTkJRVmdzUlVGQll5eERRVUZrTEVOQlFWQTdPenRCUVVkRUxFZEJTa1FzVFVGSlR6dEJRVU5NTEZGQlFVMHNVMEZCVXl4WFFVRlhMRVZCUVVVc1EwRkJZaXhGUVVGblFpeEZRVUZGTEVOQlFXeENMRU5CUVdZN1FVRkRRU3hSUVVGTkxGTkJRVk1zVjBGQlZ5eEZRVUZGTEVOQlFXSXNSVUZCWjBJc1JVRkJSU3hEUVVGc1FpeERRVUZtTzBGQlEwRXNVVUZCVFN4VFFVRlZMR3RDUVVGTkxFVkJRVVVzUTBGQlVpeERRVUZFTEVkQlFXVXNWMEZCVnl4RlFVRkZMRU5CUVdJc1JVRkJaMElzUlVGQlJTeERRVUZzUWl4RFFVRm1MRWRCUVhORExFTkJRWEpFT3p0QlFVVkJMRmRCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzVTBGQlF5eE5RVUZFTEVWQlFWY3NRMEZCV0N4aFFVRnBRaXhOUVVGcVFpeEZRVUV5UWl4RFFVRXpRaXhoUVVGcFF5eE5RVUZxUXl4RlFVRXlReXhEUVVFelF5eERRVUZXTEVOQlFWQTdRVUZEUkR0QlFVTkdMRU5CWWswN096czdPenM3T3pzN096czdPMEZCTWtKQkxFbEJRVTBzYzBSQlFYVkNMRlZCUVVNc1NVRkJSQ3hGUVVGUExFVkJRVkFzUlVGQlZ5eExRVUZZTzBGQlFVRXNVMEZCY1VJc1EwRkJReXhSUVVGUkxFbEJRVlFzUzBGQmEwSXNTMEZCU3l4SlFVRjJRaXhEUVVGeVFqdEJRVUZCTEVOQlFUZENPenM3T3pzN096czdPenM3TzBGQllVRXNTVUZCVFN4elJFRkJkVUlzVlVGQlF5eEpRVUZFTEVWQlFVOHNSVUZCVUN4RlFVRlhMRkZCUVZnN1FVRkJRU3hUUVVGNVFpeERRVUZGTEZGQlFVWXNSMEZCWVN4SlFVRmtMRWRCUVhWQ0xGZEJRVmNzUlVGQmJFTXNSMEZCZDBNc1NVRkJhRVU3UVVGQlFTeERRVUUzUWpzN096czdPenM3T3p0QlFWVkJMRWxCUVUwc1owVkJRVFJDTEZWQlFVTXNUVUZCUkN4RlFVRlRMRXRCUVZRc1JVRkJaMElzVVVGQmFFSXNSVUZCTmtJN1FVRkRjRVVzVlVGQlVTeHBRa0ZCYVVJc1MwRkJha0lzUTBGQlVqczdRVUZGUVN4VFFVRlBPMEZCUTB3c1QwRkJSeXhYUVVGWExFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCV0N4SFFVRTJRaXhQUVVGUExFTkJSR3hETzBGQlJVd3NUMEZCUnl4WFFVRlhMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQldDeEhRVUUyUWl4UFFVRlBPMEZCUm14RExFZEJRVkE3UVVGSlJDeERRVkJOT3pzN096czdPenRCUVdWQkxFbEJRVTBzT0VOQlFXMUNMRlZCUVVNc1QwRkJSRHRCUVVGQkxGTkJRV0VzVlVGQlZTeEhRVUZXTEVkQlFXZENMRXRCUVVzc1JVRkJiRU03UVVGQlFTeERRVUY2UWpzN096czdPenM3T3p0QlFWVkJMRWxCUVUwc01FSkJRVk1zVlVGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0N4RlFVRnhRaXhSUVVGeVFqdEJRVUZCTEUxQlFTdENMRk5CUVM5Q0xIbEVRVUV5UXl4RFFVRXpRenRCUVVGQkxGTkJRV2xFTEZWQlFWVXNWMEZCV1N4WlFVRlpMRmRCUVZjc1VVRkJka0lzU1VGQmJVTXNTMEZCU3l4SFFVRk1MRU5CUVZNc1UwRkJWQ3hGUVVGdlFpeFJRVUZ3UWl4RFFVRjZSQ3hEUVVGcVJEdEJRVUZCTEVOQlFXWTdPenM3T3pzN08wRkJVVUVzU1VGQlRTeDNRMEZCWjBJc1ZVRkJReXhIUVVGRUxFVkJRVTBzWVVGQlRqdEJRVUZCTEZOQlFYbENMR3RDUVVGTkxFZEJRVTRzUTBGQlJDeEhRVUZsTEU5QlFVOHNUMEZCVHl4aFFVRmtMRU5CUVdZc1IwRkJPRU1zUTBGQmRFVTdRVUZCUVN4RFFVRjBRanM3T3pzN096czdRVUZSUVN4SlFVRk5MREJEUVVGcFFpeFZRVUZETEZGQlFVUXNSVUZCVnl4aFFVRllPMEZCUVVFc1UwRkJOa0lzV1VGQldTeFBRVUZQTEdGQlFXNUNMRU5CUVRkQ08wRkJRVUVzUTBGQmRrSTdPenM3T3pzN096dEJRVk5CTEVsQlFVMHNjME5CUVdVc1ZVRkJReXhMUVVGRUxFVkJRVkVzVVVGQlVpeEZRVUZ4UWp0QlFVTXZReXhOUVVGTkxGVkJRVlVzUzBGQlN5eFJRVUZSTEVOQlFXSXNRMEZCYUVJN1FVRkRRU3hOUVVGTkxGTkJRVk1zU1VGQlN5eEpRVUZKTEV0QlFYaENPMEZCUTBFc1RVRkJUU3h0UWtGQmJVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1YwRkJWeXhOUVVGd1FpeEZRVUUwUWl4RFFVRTFRaXhEUVVGNlFqczdRVUZGUVN4VFFVRlBMRXRCUVVzc1MwRkJUQ3hEUVVGWExHMUNRVUZ0UWl4UFFVRTVRaXhKUVVGNVF5eFBRVUZvUkR0QlFVTkVMRU5CVGswaUxDSm1hV3hsSWpvaVkyRnNZeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR2x6VG5WdElIMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2JuVnRZbVZ5SUhSdklIZ2daR1ZqYVcxaGJDQndiR0ZqWlhOY2JseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDFjYmlvdlhHNWpiMjV6ZENCMGIwUmxZMmx0WVd3Z1BTQW9iblZ0TENCd2NtVmphWE5wYjI0Z1BTQXlLU0E5UGlCN1hHNGdJSEJ5WldOcGMybHZiaUE5SURFd0lDb3FJSEJ5WldOcGMybHZianRjYmlBZ2NtVjBkWEp1SUUxaGRHZ3VjbTkxYm1Rb2JuVnRJQ29nY0hKbFkybHphVzl1S1NBdklIQnlaV05wYzJsdmJqdGNibjA3WEc1Y2JtTnZibk4wSUZwRlVrOWZVRTlKVGxRZ1BTQjdYRzRnSUhnNklEQXNYRzRnSUhrNklEQXNYRzRnSUhvNklEQmNibjA3WEc1Y2JtTnZibk4wSUdScGMzUmhibU5sTVVRZ1BTQW9ZU3dnWWlrZ1BUNGdUV0YwYUM1aFluTW9ZU0F0SUdJcE8xeHVYRzR2S2x4dUlDQkJibWRzWlNCaVpYUjNaV1Z1SUhCdmFXNTBjMXh1SUNCY2JpQWdWSEpoYm5Oc1lYUmxjeUIwYUdVZ2FIbHdiM1JvWlhScFkyRnNJR3hwYm1VZ2MyOGdkR2hoZENCMGFHVWdKMlp5YjIwbklHTnZiM0prYVc1aGRHVnpYRzRnSUdGeVpTQmhkQ0F3TERCY2JpQWdYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjI5eVpHbHVZWFJsY3lCdlppQm1jbTl0SUhCdmFXNTBYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjNKa2FXNWhkR1Z6SUc5bUlIUnZJSEJ2YVc1MFhHNGdJRUJ5WlhSMWNtNGdXM0poWkdsaGJsMDZJRUZ1WjJ4bElHSmxkSGRsWlc0Z2RHaGxJSFIzYnlCd2IybHVkSE1nYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCaGJtZHNaU0E5SUNoaExDQmlJRDBnV2tWU1QxOVFUMGxPVkNrZ1BUNGdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5aE5ZWFJvTG1GMFlXNHlLR0V1ZUNBdElHSXVlQ3dnWVM1NUlDMGdZaTU1S1NrN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ1pHVm5jbVZsY3lCMGJ5QnlZV1JwWVc1elhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6SUQwZ0tHUmxaM0psWlhNcElEMCtJR1JsWjNKbFpYTWdLaUJOWVhSb0xsQkpJQzhnTVRnd08xeHVYRzR2S2x4dUlDQkVhV3hoZEdWY2JpQWdYRzRnSUVOb1lXNW5aU0IwYUdVZ2NISnZaM0psYzNOcGIyNGdZbVYwZDJWbGJpQmhJR0Z1WkNCaUlHRmpZMjl5WkdsdVp5QjBieUJrYVd4aGRHbHZiaTVjYmlBZ1hHNGdJRk52SUdScGJHRjBhVzl1SUQwZ01DNDFJSGR2ZFd4a0lHTm9ZVzVuWlZ4dUlDQmNiaUFnWVNBdExTMHRMUzB0TFMwZ1lseHVJQ0JjYmlBZ2RHOWNiaUFnWEc0Z0lHRWdMUzB0TFNCaVhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYkdGMFpTQndjbTluY21WemN5QmllU0I0WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsSUhCc2RYTWdkR2hsSUdScGJHRjBaV1FnWkdsbVptVnlaVzVqWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FXeGhkR1VnUFNBb1lTd2dZaXdnWkdsc1lYUnBiMjRwSUQwK0lHRWdLeUFvS0dJZ0xTQmhLU0FxSUdScGJHRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ1JHbHpkR0Z1WTJWY2JpQWdYRzRnSUZKbGRIVnlibk1nZEdobElHUnBjM1JoYm1ObElHSmxkSGRsWlc0Z2RIZHZJRzRnWkdsdFpXNXphVzl1WVd3Z2NHOXBiblJ6TGx4dUlDQmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dlQ0JoYm1RZ2VTQnZjaUJxZFhOMElIZ2diMllnY0c5cGJuUWdRVnh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkQzl1ZFcxaVpYSmRPaUFvYjNCMGFXOXVZV3dwT2lCNElHRnVaQ0I1SUc5eUlHcDFjM1FnZUNCdlppQndiMmx1ZENCQ1hHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlJvWlNCa2FYTjBZVzVqWlNCaVpYUjNaV1Z1SUhSb1pTQjBkMjhnY0c5cGJuUnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1JwYzNSaGJtTmxJRDBnS0dFc0lHSWdQU0JhUlZKUFgxQlBTVTVVS1NBOVBpQjdYRzRnSUM4dklERkVJR1JwYldWdWMybHZibk5jYmlBZ2FXWWdLR2x6VG5WdEtHRXBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHUnBjM1JoYm1ObE1VUW9ZU3dnWWlrN1hHNWNiaUFnTHk4Z1RYVnNkR2t0WkdsdFpXNXphVzl1WVd4Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCamIyNXpkQ0I0UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVDd2dZaTU0S1R0Y2JpQWdJQ0JqYjI1emRDQjVSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZVN3Z1lpNTVLVHRjYmlBZ0lDQmpiMjV6ZENCNlJHVnNkR0VnUFNBb2FYTk9kVzBvWVM1NktTa2dQeUJrYVhOMFlXNWpaVEZFS0dFdWVpd2dZaTU2S1NBNklEQTdYRzVjYmlBZ0lDQnlaWFIxY200Z1RXRjBhQzV6Y1hKMEtDaDRSR1ZzZEdFZ0tpb2dNaWtnS3lBb2VVUmxiSFJoSUNvcUlESXBJQ3NnS0hwRVpXeDBZU0FxS2lBeUtTazdYRzRnSUgxY2JuMDdYRzVjYmk4cVhHNGdJRkJ5YjJkeVpYTnpJSGRwZEdocGJpQm5hWFpsYmlCeVlXNW5aVnh1SUNCY2JpQWdSMmwyWlc0Z1lTQnNiM2RsY2lCc2FXMXBkQ0JoYm1RZ1lXNGdkWEJ3WlhJZ2JHbHRhWFFzSUhkbElISmxkSFZ5YmlCMGFHVWdjSEp2WjNKbGMzTmNiaUFnS0dWNGNISmxjM05sWkNCaGN5QmhJRzUxYldKbGNpQXdMVEVwSUhKbGNISmxjMlZ1ZEdWa0lHSjVJSFJvWlNCbmFYWmxiaUIyWVd4MVpTd2dZVzVrWEc0Z0lHeHBiV2wwSUhSb1lYUWdjSEp2WjNKbGMzTWdkRzhnZDJsMGFHbHVJREF0TVM1Y2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEc5M1pYSWdiR2x0YVhRZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFJjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0IwYnlCbWFXNWtJSEJ5YjJkeVpYTnpJSGRwZEdocGJpQm5hWFpsYmlCeVlXNW5aVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCUWNtOW5jbVZ6Y3lCdlppQjJZV3gxWlNCM2FYUm9hVzRnY21GdVoyVWdZWE1nWlhod2NtVnpjMlZrSURBdE1WeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU0E5SUNobWNtOXRMQ0IwYnl3Z2RtRnNkV1VwSUQwK0lDaDJZV3gxWlNBdElHWnliMjBwSUM4Z0tIUnZJQzBnWm5KdmJTazdYRzVjYmk4cVhHNGdJRlpoYkhWbElHbHVJSEpoYm1kbElHWnliMjBnY0hKdlozSmxjM05jYmlBZ1hHNGdJRWRwZG1WdUlHRWdiRzkzWlhJZ2JHbHRhWFFnWVc1a0lHRnVJSFZ3Y0dWeUlHeHBiV2wwTENCM1pTQnlaWFIxY200Z2RHaGxJSFpoYkhWbElIZHBkR2hwYmx4dUlDQjBhR0YwSUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNCaWVTQndjbTluY21WemN5QW9ZU0J1ZFcxaVpYSWdabkp2YlNBd0xURXBYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlVhR1VnY0hKdlozSmxjM01nWW1WMGQyVmxiaUJzYjNkbGNpQmhibVFnZFhCd1pYSWdiR2x0YVhSeklHVjRjSEpsYzNObFpDQXdMVEZjYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnWVhNZ1kyRnNZM1ZzWVhSbFpDQm1jbTl0SUhCeWIyZHlaWE56SUhkcGRHaHBiaUJ5WVc1blpTQW9ibTkwSUd4cGJXbDBaV1FnZDJsMGFHbHVJSEpoYm1kbEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUE5SUNobWNtOXRMQ0IwYnl3Z2NISnZaM0psYzNNcElEMCtJQ2d0SUhCeWIyZHlaWE56SUNvZ1puSnZiU2tnS3lBb2NISnZaM0psYzNNZ0tpQjBieWtnS3lCbWNtOXRPMXh1WEc0dktseHVJQ0JRYjJsdWRDQm1jbTl0SUdGdVoyeGxJR0Z1WkNCa2FYTjBZVzVqWlZ4dUlDQmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUF5UkNCd2IybHVkQ0J2WmlCdmNtbG5hVzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCQmJtZHNaU0JtY205dElHOXlhV2RwYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBjM1JoYm1ObElHWnliMjBnYjNKcFoybHVYRzRnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUVOaGJHTjFiR0YwWldRZ01rUWdjRzlwYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHOXBiblJHY205dFFXNW5iR1ZCYm1SRWFYTjBZVzVqWlNBOUlDaHZjbWxuYVc0c0lHRnVaMnhsTENCa2FYTjBZVzVqWlNrZ1BUNGdlMXh1SUNCaGJtZHNaU0E5SUdSbFozSmxaWE5VYjFKaFpHbGhibk1vWVc1bmJHVXBPMXh1WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnZURvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG1OdmN5aGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVDeGNiaUFnSUNCNU9pQmthWE4wWVc1alpTQXFJRTFoZEdndWMybHVLR0Z1WjJ4bEtTQXJJRzl5YVdkcGJpNTVYRzRnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJSEpoWkdsaGJuTWdkRzhnWkdWbmNtVmxjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQnlZV1JwWVc1elhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5QTlJQ2h5WVdScFlXNXpLU0E5UGlCeVlXUnBZVzV6SUNvZ01UZ3dJQzhnVFdGMGFDNVFTVHRjYmx4dUx5cGNiaUFnUm5KaGJXVnlZWFJsTFdsdVpHVndaVzVrWlc1MElITnRiMjkwYUdsdVoxeHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVG1WM0lIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1QyeGtJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRk50YjI5MGFHbHVaeUFvTUNCcGN5QnViMjVsS1Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemJXOXZkR2dnUFNBb2JtVjNWbUZzZFdVc0lHOXNaRlpoYkhWbExDQmtkWEpoZEdsdmJpd2djMjF2YjNSb2FXNW5JRDBnTUNrZ1BUNGdkRzlFWldOcGJXRnNLRzlzWkZaaGJIVmxJQ3NnS0dSMWNtRjBhVzl1SUNvZ0tHNWxkMVpoYkhWbElDMGdiMnhrVm1Gc2RXVXBJQzhnVFdGMGFDNXRZWGdvYzIxdmIzUm9hVzVuTENCa2RYSmhkR2x2YmlrcEtUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQjRJSEJsY2lCelpXTnZibVFnZEc4Z2NHVnlJR1p5WVcxbElIWmxiRzlqYVhSNUlHSmhjMlZrSUc5dUlHWndjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQnpaV052Ym1SY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkdjbUZ0WlNCa2RYSmhkR2x2YmlCcGJpQnRjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Y0dWbFpGQmxja1p5WVcxbElEMGdLSGh3Y3l3Z1puSmhiV1ZFZFhKaGRHbHZiaWtnUFQ0Z0tHbHpUblZ0S0hod2N5a3BJRDhnZUhCeklDOGdLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1NBNklEQTdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdkbVZzYjJOcGRIa2dhVzUwYnlCMlpXeHBZMmwwZVNCd1pYSWdjMlZqYjI1a1hHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUdaeVlXMWxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKVFpXTnZibVFnUFNBb2RtVnNiMk5wZEhrc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lIWmxiRzlqYVhSNUlDb2dLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ1EzSmxZWFJsSUhOMFpYQndaV1FnZG1WeWMybHZiaUJ2WmlBd0xURWdjSEp2WjNKbGMzTmNiaUFnWEc0Z0lFQndZWEpoYlNCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhOMFpYQnpYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJUZEdWd2NHVmtJSFpoYkhWbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITjBaWEJRY205bmNtVnpjeUE5SUNoemRHVndjeXdnY0hKdlozSmxjM01wSUQwK0lIdGNiaUFnWTI5dWMzUWdjMlZuYldWdWRDQTlJREVnTHlBb2MzUmxjSE1nTFNBeEtUdGNiaUFnWTI5dWMzUWdkR0Z5WjJWMElEMGdNU0F0SUNneElDOGdjM1JsY0hNcE8xeHVJQ0JqYjI1emRDQndjbTluY21WemMwOW1WR0Z5WjJWMElEMGdUV0YwYUM1dGFXNG9jSEp2WjNKbGMzTWdMeUIwWVhKblpYUXNJREVwTzF4dVhHNGdJSEpsZEhWeWJpQk5ZWFJvTG1ac2IyOXlLSEJ5YjJkeVpYTnpUMlpVWVhKblpYUWdMeUJ6WldkdFpXNTBLU0FxSUhObFoyMWxiblE3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIID0gMS41MjU7XG5cbnZhciBjcmVhdGVSZXZlcnNlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzaW5nKDEgLSBwKTtcbiAgfTtcbn07XG52YXIgY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8PSAwLjUgPyBlYXNpbmcoMiAqIHApIC8gMiA6ICgyIC0gZWFzaW5nKDIgKiAoMSAtIHApKSkgLyAyO1xuICB9O1xufTtcblxudmFyIGxpbmVhciA9IGV4cG9ydHMubGluZWFyID0gZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHA7XG59O1xuXG52YXIgY3JlYXRlRXhwb0luID0gZXhwb3J0cy5jcmVhdGVFeHBvSW4gPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHAsIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgZWFzZUluID0gZXhwb3J0cy5lYXNlSW4gPSBjcmVhdGVFeHBvSW4oMik7XG52YXIgZWFzZU91dCA9IGV4cG9ydHMuZWFzZU91dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGVhc2VJbik7XG52YXIgZWFzZUluT3V0ID0gZXhwb3J0cy5lYXNlSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhlYXNlSW4pO1xuXG52YXIgY2lyY0luID0gZXhwb3J0cy5jaXJjSW4gPSBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwKSk7XG59O1xudmFyIGNpcmNPdXQgPSBleHBvcnRzLmNpcmNPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhjaXJjSW4pO1xudmFyIGNpcmNJbk91dCA9IGV4cG9ydHMuY2lyY0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoY2lyY091dCk7XG5cbnZhciBjcmVhdGVCYWNrSW4gPSBleHBvcnRzLmNyZWF0ZUJhY2tJbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCAqIHAgKiAoKHBvd2VyICsgMSkgKiBwIC0gcG93ZXIpO1xuICB9O1xufTtcbnZhciBiYWNrSW4gPSBleHBvcnRzLmJhY2tJbiA9IGNyZWF0ZUJhY2tJbihERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG52YXIgYmFja091dCA9IGV4cG9ydHMuYmFja091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGJhY2tJbik7XG52YXIgYmFja0luT3V0ID0gZXhwb3J0cy5iYWNrSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhiYWNrSW4pO1xuXG52YXIgY3JlYXRlQW50aWNpcGF0ZUVhc2luZyA9IGV4cG9ydHMuY3JlYXRlQW50aWNpcGF0ZUVhc2luZyA9IGZ1bmN0aW9uIChwb3dlcikge1xuICB2YXIgYmFja0Vhc2luZyA9IGNyZWF0ZUJhY2tJbihwb3dlcik7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAocCAqPSAyKSA8IDEgPyAwLjUgKiBiYWNrRWFzaW5nKHApIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocCAtIDEpKSk7XG4gIH07XG59O1xuXG52YXIgYW50aWNpcGF0ZSA9IGV4cG9ydHMuYW50aWNpcGF0ZSA9IGNyZWF0ZUFudGljaXBhdGVFYXNpbmcoREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEVsQlFVMHNOa0pCUVRaQ0xFdEJRVzVET3p0QlFVVlBMRWxCUVUwc2MwUkJRWFZDTEZWQlFVTXNUVUZCUkR0QlFVRkJMRk5CUVZrc1ZVRkJReXhEUVVGRU8wRkJRVUVzVjBGQlR5eEpRVUZKTEU5QlFVOHNTVUZCU1N4RFFVRllMRU5CUVZnN1FVRkJRU3hIUVVGYU8wRkJRVUVzUTBGQk4wSTdRVUZEUVN4SlFVRk5MSE5FUVVGMVFpeFZRVUZETEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVNc1EwRkJSRHRCUVVGQkxGZEJRVkVzUzBGQlN5eEhRVUZPTEVkQlFXRXNUMEZCVHl4SlFVRkpMRU5CUVZnc1NVRkJaMElzUTBGQk4wSXNSMEZCYVVNc1EwRkJReXhKUVVGSkxFOUJRVThzUzBGQlN5eEpRVUZKTEVOQlFWUXNRMEZCVUN4RFFVRk1MRWxCUVRSQ0xFTkJRWEJGTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVRkQ096dEJRVVZCTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhEUVVGRU8wRkJRVUVzVTBGQlR5eERRVUZRTzBGQlFVRXNRMEZCWmpzN1FVRkZRU3hKUVVGTkxITkRRVUZsTEZWQlFVTXNTMEZCUkR0QlFVRkJMRk5CUVZjc1ZVRkJReXhEUVVGRU8wRkJRVUVzYjBKQlFVOHNRMEZCVUN4RlFVRlpMRXRCUVZvN1FVRkJRU3hIUVVGWU8wRkJRVUVzUTBGQmNrSTdRVUZEUVN4SlFVRk5MREJDUVVGVExHRkJRV0VzUTBGQllpeERRVUZtTzBGQlEwRXNTVUZCVFN3MFFrRkJWU3h4UWtGQmNVSXNUVUZCY2tJc1EwRkJhRUk3UVVGRFFTeEpRVUZOTEdkRFFVRlpMSEZDUVVGeFFpeE5RVUZ5UWl4RFFVRnNRanM3UVVGRlFTeEpRVUZOTERCQ1FVRlRMRlZCUVVNc1EwRkJSRHRCUVVGQkxGTkJRVThzU1VGQlNTeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hEUVVGV0xFTkJRVlFzUTBGQldEdEJRVUZCTEVOQlFXWTdRVUZEUVN4SlFVRk5MRFJDUVVGVkxIRkNRVUZ4UWl4TlFVRnlRaXhEUVVGb1FqdEJRVU5CTEVsQlFVMHNaME5CUVZrc2NVSkJRWEZDTEU5QlFYSkNMRU5CUVd4Q096dEJRVVZCTEVsQlFVMHNjME5CUVdVc1ZVRkJReXhMUVVGRU8wRkJRVUVzVTBGQlZ5eFZRVUZETEVOQlFVUTdRVUZCUVN4WFFVRlJMRWxCUVVrc1EwRkJUQ3hKUVVGWExFTkJRVU1zVVVGQlVTeERRVUZVTEVsQlFXTXNRMEZCWkN4SFFVRnJRaXhMUVVFM1FpeERRVUZRTzBGQlFVRXNSMEZCV0R0QlFVRkJMRU5CUVhKQ08wRkJRMEVzU1VGQlRTd3dRa0ZCVXl4aFFVRmhMREJDUVVGaUxFTkJRV1k3UVVGRFFTeEpRVUZOTERSQ1FVRlZMSEZDUVVGeFFpeE5RVUZ5UWl4RFFVRm9RanRCUVVOQkxFbEJRVTBzWjBOQlFWa3NjVUpCUVhGQ0xFMUJRWEpDTEVOQlFXeENPenRCUVVWQkxFbEJRVTBzTUVSQlFYbENMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJReTlETEUxQlFVMHNZVUZCWVN4aFFVRmhMRXRCUVdJc1EwRkJia0k3UVVGRFFTeFRRVUZQTEZWQlFVTXNRMEZCUkR0QlFVRkJMRmRCUVZFc1EwRkJReXhMUVVGTExFTkJRVTRzU1VGQlZ5eERRVUZhTEVkQlFXbENMRTFCUVUwc1YwRkJWeXhEUVVGWUxFTkJRWFpDTEVkQlFYVkRMRTlCUVU4c1NVRkJTU3hMUVVGTExFZEJRVXdzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCUXl4RlFVRkVMRWxCUVU4c1NVRkJTU3hEUVVGWUxFTkJRVm9zUTBGQldDeERRVUU1UXp0QlFVRkJMRWRCUVZBN1FVRkRSQ3hEUVVoTk96dEJRVXRCTEVsQlFVMHNhME5CUVdFc2RVSkJRWFZDTERCQ1FVRjJRaXhEUVVGdVFpSXNJbVpwYkdVaU9pSmxZWE5wYm1jdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JFUlVaQlZVeFVYMDlXUlZKVFNFOVBWRjlUVkZKRlRrZFVTQ0E5SURFdU5USTFPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZM0psWVhSbFVtVjJaWEp6WldSRllYTnBibWNnUFNBb1pXRnphVzVuS1NBOVBpQW9jQ2tnUFQ0Z01TQXRJR1ZoYzJsdVp5Z3hJQzBnY0NrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxUV2x5Y205eVpXUkZZWE5wYm1jZ1BTQW9aV0Z6YVc1bktTQTlQaUFvY0NrZ1BUNGdLSEFnUEQwZ01DNDFLU0EvSUdWaGMybHVaeWd5SUNvZ2NDa2dMeUF5SURvZ0tESWdMU0JsWVhOcGJtY29NaUFxSUNneElDMGdjQ2twS1NBdklESTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnNhVzVsWVhJZ1BTQW9jQ2tnUFQ0Z2NEdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVWNGNHOUpiaUE5SUNod2IzZGxjaWtnUFQ0Z0tIQXBJRDArSUhBZ0tpb2djRzkzWlhJN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVbHVJRDBnWTNKbFlYUmxSWGh3YjBsdUtESXBPMXh1Wlhod2IzSjBJR052Ym5OMElHVmhjMlZQZFhRZ1BTQmpjbVZoZEdWU1pYWmxjbk5sWkVWaGMybHVaeWhsWVhObFNXNHBPMXh1Wlhod2IzSjBJR052Ym5OMElHVmhjMlZKYms5MWRDQTlJR055WldGMFpVMXBjbkp2Y21Wa1JXRnphVzVuS0dWaGMyVkpiaWs3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalNXNGdQU0FvY0NrZ1BUNGdNU0F0SUUxaGRHZ3VjMmx1S0UxaGRHZ3VZV052Y3lod0tTazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kybHlZMDkxZENBOUlHTnlaV0YwWlZKbGRtVnljMlZrUldGemFXNW5LR05wY21OSmJpazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kybHlZMGx1VDNWMElEMGdZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNvWTJseVkwOTFkQ2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVkNZV05yU1c0Z1BTQW9jRzkzWlhJcElEMCtJQ2h3S1NBOVBpQW9jQ0FxSUhBcElDb2dLQ2h3YjNkbGNpQXJJREVwSUNvZ2NDQXRJSEJ2ZDJWeUtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCaVlXTnJTVzRnUFNCamNtVmhkR1ZDWVdOclNXNG9SRVZHUVZWTVZGOVBWa1ZTVTBoUFQxUmZVMVJTUlU1SFZFZ3BPMXh1Wlhod2IzSjBJR052Ym5OMElHSmhZMnRQZFhRZ1BTQmpjbVZoZEdWU1pYWmxjbk5sWkVWaGMybHVaeWhpWVdOclNXNHBPMXh1Wlhod2IzSjBJR052Ym5OMElHSmhZMnRKYms5MWRDQTlJR055WldGMFpVMXBjbkp2Y21Wa1JXRnphVzVuS0dKaFkydEpiaWs3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVkJiblJwWTJsd1lYUmxSV0Z6YVc1bklEMGdLSEJ2ZDJWeUtTQTlQaUI3WEc0Z0lHTnZibk4wSUdKaFkydEZZWE5wYm1jZ1BTQmpjbVZoZEdWQ1lXTnJTVzRvY0c5M1pYSXBPMXh1SUNCeVpYUjFjbTRnS0hBcElEMCtJQ2dvY0NBcVBTQXlLU0E4SURFcElEOGdNQzQxSUNvZ1ltRmphMFZoYzJsdVp5aHdLU0E2SURBdU5TQXFJQ2d5SUMwZ1RXRjBhQzV3YjNjb01pd2dMVEV3SUNvZ0tIQWdMU0F4S1NrcE8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR0Z1ZEdsamFYQmhkR1VnUFNCamNtVmhkR1ZCYm5ScFkybHdZWFJsUldGemFXNW5LRVJGUmtGVlRGUmZUMVpGVWxOSVQwOVVYMU5VVWtWT1IxUklLVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZXhwb3J0cy5zdGVwcyA9IGV4cG9ydHMud3JhcCA9IGV4cG9ydHMuaW50ZXJwb2xhdGUgPSBleHBvcnRzLmZsb3cgPSBleHBvcnRzLmNsYW1wID0gZXhwb3J0cy5jbGFtcE1pbiA9IGV4cG9ydHMuY2xhbXBNYXggPSBleHBvcnRzLmFwcGVuZFVuaXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vY2FsYycpO1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmRcbiAqIGFwcGVuZFVuaXQoJ3B4JywgMjApIC0+ICcyMHB4J1xuICogQHBhcmFtICB7c3RyaW5nfSB1bml0KVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgYXBwZW5kVW5pdCA9IGV4cG9ydHMuYXBwZW5kVW5pdCA9IGZ1bmN0aW9uICh1bml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiAnJyArIHYgKyB1bml0O1xuICB9O1xufTtcblxuLyoqXG4gKiBDbGFtcCB2YWx1ZSBiZXR3ZWVuXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc3RyaWN0IGEgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBgbWluYCBhbmQgYG1heGBcbiAqIEBwYXJhbSAge251bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgY2xhbXBNYXggPSBleHBvcnRzLmNsYW1wTWF4ID0gZnVuY3Rpb24gKG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odiwgbWF4KTtcbiAgfTtcbn07XG52YXIgY2xhbXBNaW4gPSBleHBvcnRzLmNsYW1wTWluID0gZnVuY3Rpb24gKG1pbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgodiwgbWluKTtcbiAgfTtcbn07XG52YXIgY2xhbXAgPSBleHBvcnRzLmNsYW1wID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIHZhciBfbWluID0gY2xhbXBNaW4obWluKTtcbiAgdmFyIF9tYXggPSBjbGFtcE1heChtYXgpO1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gX21pbihfbWF4KHYpKTtcbiAgfTtcbn07XG5cbi8qKlxuICogRmxvd1xuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogZmxvdyhtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG52YXIgZmxvdyA9IGV4cG9ydHMuZmxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyYW5zZm9ybWVycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHRyYW5zZm9ybWVyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhY2MpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciB2ID0gYWNjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXS5hcHBseSh0cmFuc2Zvcm1lcnMsIFt2XS5jb25jYXQoYXJncykpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxudmFyIGludGVycG9sYXRlID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykge1xuICB2YXIgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIHZhciBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgdmFyIGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gcmFuZ2VFYXNpbmcgPyByYW5nZUVhc2luZ1tpXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG52YXIgd3JhcCA9IGV4cG9ydHMud3JhcCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgcmFuZ2VTaXplID0gbWF4IC0gbWluO1xuICAgIHJldHVybiAoKHYgLSBtaW4pICUgcmFuZ2VTaXplICsgcmFuZ2VTaXplKSAlIHJhbmdlU2l6ZSArIG1pbjtcbiAgfTtcbn07XG5cbnZhciBzdGVwcyA9IGV4cG9ydHMuc3RlcHMgPSBmdW5jdGlvbiAoc3RlcHMsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBwcm9ncmVzcyA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkobWluLCBtYXgsIHYpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShzdGVwcywgcHJvZ3Jlc3MpO1xuICB9O1xufTtcblxudmFyIHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZXhwb3J0cy50cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGZ1bmN0aW9uIChjaGlsZFRyYW5zZm9ybWVycykge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdikge1xuICAgICAgdmFyIGNoaWxkVHJhbnNmb3JtZXIgPSBjaGlsZFRyYW5zZm9ybWVyc1trZXldO1xuICAgICAgaWYgKGNoaWxkVHJhbnNmb3JtZXIpIHtcbiAgICAgICAgdltrZXldID0gY2hpbGRUcmFuc2Zvcm1lcih2W2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN096czdPenM3T3p0QlFWTlBMRWxCUVUwc2EwTkJRV0VzVlVGQlF5eEpRVUZFTzBGQlFVRXNVMEZCVlN4VlFVRkRMRU5CUVVRN1FVRkJRU3huUWtGQlZTeERRVUZXTEVkQlFXTXNTVUZCWkR0QlFVRkJMRWRCUVZZN1FVRkJRU3hEUVVGdVFqczdPenM3T3pzN08wRkJVMEVzU1VGQlRTdzRRa0ZCVnl4VlFVRkRMRWRCUVVRN1FVRkJRU3hUUVVGVExGVkJRVU1zUTBGQlJEdEJRVUZCTEZkQlFVOHNTMEZCU3l4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxFZEJRVm9zUTBGQlVEdEJRVUZCTEVkQlFWUTdRVUZCUVN4RFFVRnFRanRCUVVOQkxFbEJRVTBzT0VKQlFWY3NWVUZCUXl4SFFVRkVPMEZCUVVFc1UwRkJVeXhWUVVGRExFTkJRVVE3UVVGQlFTeFhRVUZQTEV0QlFVc3NSMEZCVEN4RFFVRlRMRU5CUVZRc1JVRkJXU3hIUVVGYUxFTkJRVkE3UVVGQlFTeEhRVUZVTzBGQlFVRXNRMEZCYWtJN1FVRkRRU3hKUVVGTkxIZENRVUZSTEZWQlFVTXNSMEZCUkN4RlFVRk5MRWRCUVU0c1JVRkJZenRCUVVOcVF5eE5RVUZOTEU5QlFVOHNVMEZCVXl4SFFVRlVMRU5CUVdJN1FVRkRRU3hOUVVGTkxFOUJRVThzVTBGQlV5eEhRVUZVTEVOQlFXSTdRVUZEUVN4VFFVRlBMRlZCUVVNc1EwRkJSRHRCUVVGQkxGZEJRVThzUzBGQlN5eExRVUZMTEVOQlFVd3NRMEZCVEN4RFFVRlFPMEZCUVVFc1IwRkJVRHRCUVVORUxFTkJTazA3T3pzN096czdPenRCUVdGQkxFbEJRVTBzYzBKQlFVOHNXVUZCY1VJN1FVRkJRU3h2UTBGQmFrSXNXVUZCYVVJN1FVRkJha0lzWjBKQlFXbENPMEZCUVVFN08wRkJRM1pETEUxQlFVMHNhMEpCUVd0Q0xHRkJRV0VzVFVGQmNrTTdRVUZEUVN4TlFVRkpMRWxCUVVrc1EwRkJVanM3UVVGRlFTeFRRVUZQTEZWQlFVTXNSMEZCUkN4RlFVRnJRanRCUVVGQkxIVkRRVUZVTEVsQlFWTTdRVUZCVkN4VlFVRlRPMEZCUVVFN08wRkJRM1pDTEZGQlFVa3NTVUZCU1N4SFFVRlNPMEZCUTBFc1UwRkJTeXhKUVVGSkxFTkJRVlFzUlVGQldTeEpRVUZKTEdWQlFXaENMRVZCUVdsRExFZEJRV3BETEVWQlFYTkRPMEZCUTNCRExGVkJRVWtzWVVGQllTeERRVUZpTEhWQ1FVRm5RaXhEUVVGb1FpeFRRVUZ6UWl4SlFVRjBRaXhGUVVGS08wRkJRMFE3TzBGQlJVUXNWMEZCVHl4RFFVRlFPMEZCUTBRc1IwRlFSRHRCUVZGRUxFTkJXazA3TzBGQlkwRXNTVUZCVFN4dlEwRkJZeXhWUVVGRExFdEJRVVFzUlVGQlVTeE5RVUZTTEVWQlFXZENMRmRCUVdoQ0xFVkJRV2RETzBGQlEzcEVMRTFCUVUwc1kwRkJZeXhOUVVGTkxFMUJRVEZDTzBGQlEwRXNUVUZCVFN4aFFVRmhMR05CUVdNc1EwRkJha003TzBGQlJVRXNVMEZCVHl4VlFVRkRMRU5CUVVRc1JVRkJUenM3UVVGRldpeFJRVUZKTEV0QlFVc3NUVUZCVFN4RFFVRk9MRU5CUVZRc1JVRkJiVUk3UVVGRGFrSXNZVUZCVHl4UFFVRlBMRU5CUVZBc1EwRkJVRHRCUVVORU96czdRVUZIUkN4UlFVRkpMRXRCUVVzc1RVRkJUU3hWUVVGT0xFTkJRVlFzUlVGQk5FSTdRVUZETVVJc1lVRkJUeXhQUVVGUExGVkJRVkFzUTBGQlVEdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1NVRkJTU3hEUVVGU096czdRVUZIUVN4WFFVRlBMRWxCUVVrc1YwRkJXQ3hGUVVGM1FpeEhRVUY0UWl4RlFVRTJRanRCUVVNelFpeFZRVUZKTEUxQlFVMHNRMEZCVGl4SlFVRlhMRU5CUVZnc1NVRkJaMElzVFVGQlRTeFZRVUV4UWl4RlFVRnpRenRCUVVOd1F6dEJRVU5FTzBGQlEwWTdPMEZCUlVRc1VVRkJUU3hyUWtGQmEwSXNaME5CUVhGQ0xFMUJRVTBzU1VGQlNTeERRVUZXTEVOQlFYSkNMRVZCUVcxRExFMUJRVTBzUTBGQlRpeERRVUZ1UXl4RlFVRTJReXhEUVVFM1F5eERRVUY0UWp0QlFVTkJMRkZCUVUwc1owSkJRV2xDTEZkQlFVUXNSMEZCWjBJc1dVRkJXU3hEUVVGYUxFVkJRV1VzWlVGQlppeERRVUZvUWl4SFFVRnJSQ3hsUVVGNFJUdEJRVU5CTEZkQlFVOHNaME5CUVhGQ0xFOUJRVThzU1VGQlNTeERRVUZZTEVOQlFYSkNMRVZCUVc5RExFOUJRVThzUTBGQlVDeERRVUZ3UXl4RlFVRXJReXhoUVVFdlF5eERRVUZRTzBGQlEwUXNSMEYyUWtRN1FVRjNRa1FzUTBFMVFrMDdPMEZCT0VKQkxFbEJRVTBzYzBKQlFVOHNWVUZCUXl4SFFVRkVMRVZCUVUwc1IwRkJUanRCUVVGQkxGTkJRV01zVlVGQlF5eERRVUZFTEVWQlFVODdRVUZEZGtNc1VVRkJUU3haUVVGWkxFMUJRVTBzUjBGQmVFSTdRVUZEUVN4WFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVXdzU1VGQldTeFRRVUZhTEVkQlFYZENMRk5CUVhwQ0xFbEJRWE5ETEZOQlFYUkRMRWRCUVd0RUxFZEJRWHBFTzBGQlEwUXNSMEZJYlVJN1FVRkJRU3hEUVVGaU96dEJRVXRCTEVsQlFVMHNkMEpCUVZFc1ZVRkJReXhMUVVGRUxFVkJRVkVzUjBGQlVpeEZRVUZoTEVkQlFXSTdRVUZCUVN4VFFVRnhRaXhWUVVGRExFTkJRVVFzUlVGQlR6dEJRVU12UXl4UlFVRk5MRmRCUVZjc1owTkJRWEZDTEVkQlFYSkNMRVZCUVRCQ0xFZEJRVEZDTEVWQlFTdENMRU5CUVM5Q0xFTkJRV3BDTzBGQlEwRXNWMEZCVHl4M1FrRkJZU3hMUVVGaUxFVkJRVzlDTEZGQlFYQkNMRU5CUVZBN1FVRkRSQ3hIUVVodlFqdEJRVUZCTEVOQlFXUTdPMEZCUzBFc1NVRkJUU3h6UkVGQmRVSXNWVUZCUXl4cFFrRkJSRHRCUVVGQkxGTkJRWFZDTEZWQlFVTXNRMEZCUkN4RlFVRlBPMEZCUTJoRkxGTkJRVXNzU1VGQlNTeEhRVUZVTEVsQlFXZENMRU5CUVdoQ0xFVkJRVzFDTzBGQlEycENMRlZCUVUwc2JVSkJRVzFDTEd0Q1FVRnJRaXhIUVVGc1FpeERRVUY2UWp0QlFVTkJMRlZCUVVrc1owSkJRVW9zUlVGQmMwSTdRVUZEY0VJc1ZVRkJSU3hIUVVGR0xFbEJRVk1zYVVKQlFXbENMRVZCUVVVc1IwRkJSaXhEUVVGcVFpeERRVUZVTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hYUVVGUExFTkJRVkE3UVVGRFJDeEhRVlJ0UXp0QlFVRkJMRU5CUVRkQ0lpd2labWxzWlNJNkluUnlZVzV6Wm05eWJXVnljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsTENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5d2djM1JsY0ZCeWIyZHlaWE56SUgwZ1puSnZiU0FuTGk5allXeGpKenRjYmx4dUx5b3FYRzRnS2lCQmNIQmxibVFnVlc1cGRGeHVJQ29nUVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1lYQndaVzVrWEc0Z0tpQmhjSEJsYm1SVmJtbDBLQ2R3ZUNjc0lESXdLU0F0UGlBbk1qQndlQ2RjYmlBcUlFQndZWEpoYlNBZ2UzTjBjbWx1WjMwZ2RXNXBkQ2xjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24xY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHRndjR1Z1WkZWdWFYUWdQU0FvZFc1cGRDa2dQVDRnS0hZcElEMCtJR0FrZTNaOUpIdDFibWwwZldBN1hHNWNiaThxS2x4dUlDb2dRMnhoYlhBZ2RtRnNkV1VnWW1WMGQyVmxibHh1SUNvZ1EzSmxZWFJsY3lCaElHWjFibU4wYVc5dUlIUm9ZWFFnZDJsc2JDQnlaWE4wY21samRDQmhJR2RwZG1WdUlIWmhiSFZsSUdKbGRIZGxaVzRnWUcxcGJtQWdZVzVrSUdCdFlYaGdYRzRnS2lCQWNHRnlZVzBnSUh0dWRXMWlaWEo5SUcxcGJseHVJQ29nUUhCaGNtRnRJQ0I3Ym5WdFltVnlmU0J0WVhoY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMWNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR05zWVcxd1RXRjRJRDBnS0cxaGVDa2dQVDRnS0hZcElEMCtJRTFoZEdndWJXbHVLSFlzSUcxaGVDazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyeGhiWEJOYVc0Z1BTQW9iV2x1S1NBOVBpQW9kaWtnUFQ0Z1RXRjBhQzV0WVhnb2Rpd2diV2x1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYkdGdGNDQTlJQ2h0YVc0c0lHMWhlQ2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQmZiV2x1SUQwZ1kyeGhiWEJOYVc0b2JXbHVLVHRjYmlBZ1kyOXVjM1FnWDIxaGVDQTlJR05zWVcxd1RXRjRLRzFoZUNrN1hHNGdJSEpsZEhWeWJpQW9kaWtnUFQ0Z1gyMXBiaWhmYldGNEtIWXBLVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dSbXh2ZDF4dUlDb2dRMjl0Y0c5elpTQnZkR2hsY2lCMGNtRnVjMlp2Y20xbGNuTWdkRzhnY25WdUlHeHBibVZoY21sc2VWeHVJQ29nWm14dmR5aHRhVzRvTWpBcExDQnRZWGdvTkRBcEtWeHVJQ29nUUhCaGNtRnRJQ0I3TGk0dVpuVnVZM1JwYjI1emZTQjBjbUZ1YzJadmNtMWxjbk5jYmlBcUlFQnlaWFIxY200Z2UyWjFibU4wYVc5dWZWeHVJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdabXh2ZHlBOUlDZ3VMaTUwY21GdWMyWnZjbTFsY25NcElEMCtJSHRjYmlBZ1kyOXVjM1FnYm5WdFZISmhibk5tYjNKdFpYSnpJRDBnZEhKaGJuTm1iM0p0WlhKekxteGxibWQwYUR0Y2JpQWdiR1YwSUdrZ1BTQXdPMXh1WEc0Z0lISmxkSFZ5YmlBb1lXTmpMQ0F1TGk1aGNtZHpLU0E5UGlCN1hHNGdJQ0FnYkdWMElIWWdQU0JoWTJNN1hHNGdJQ0FnWm05eUlDaHBJRDBnTURzZ2FTQThJRzUxYlZSeVlXNXpabTl5YldWeWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCMklEMGdkSEpoYm5ObWIzSnRaWEp6VzJsZEtIWXNJQzR1TG1GeVozTXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMk8xeHVJQ0I5TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHbHVkR1Z5Y0c5c1lYUmxJRDBnS0dsdWNIVjBMQ0J2ZFhSd2RYUXNJSEpoYm1kbFJXRnphVzVuS1NBOVBpQjdYRzRnSUdOdmJuTjBJSEpoYm1kbFRHVnVaM1JvSUQwZ2FXNXdkWFF1YkdWdVozUm9PMXh1SUNCamIyNXpkQ0JtYVc1aGJFbHVaR1Y0SUQwZ2NtRnVaMlZNWlc1bmRHZ2dMU0F4TzF4dVhHNGdJSEpsZEhWeWJpQW9kaWtnUFQ0Z2UxeHVJQ0FnSUM4dklFbG1JSFpoYkhWbElHOTFkSE5wWkdVZ2JXbHVhVzExYlNCeVlXNW5aU3dnY1hWcFkydHNlU0J5WlhSMWNtNWNiaUFnSUNCcFppQW9kaUE4UFNCcGJuQjFkRnN3WFNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUc5MWRIQjFkRnN3WFR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCSlppQjJZV3gxWlNCdmRYUnphV1JsSUcxaGVHbHRkVzBnY21GdVoyVXNJSEYxYVdOcmJIa2djbVYwZFhKdVhHNGdJQ0FnYVdZZ0tIWWdQajBnYVc1d2RYUmJabWx1WVd4SmJtUmxlRjBwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ2ZFhSd2RYUmJabWx1WVd4SmJtUmxlRjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiR1YwSUdrZ1BTQXhPMXh1WEc0Z0lDQWdMeThnUm1sdVpDQnBibVJsZUNCdlppQnlZVzVuWlNCemRHRnlkRnh1SUNBZ0lHWnZjaUFvT3lCcElEd2djbUZ1WjJWTVpXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdhV1lnS0dsdWNIVjBXMmxkSUQ0Z2RpQjhmQ0JwSUQwOVBTQm1hVzVoYkVsdVpHVjRLU0I3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHTnZibk4wSUhCeWIyZHlaWE56U1c1U1lXNW5aU0E5SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtHbHVjSFYwVzJrZ0xTQXhYU3dnYVc1d2RYUmJhVjBzSUhZcE8xeHVJQ0FnSUdOdmJuTjBJR1ZoYzJWa1VISnZaM0psYzNNZ1BTQW9jbUZ1WjJWRllYTnBibWNwSUQ4Z2NtRnVaMlZGWVhOcGJtZGJhVjBvY0hKdlozSmxjM05KYmxKaGJtZGxLU0E2SUhCeWIyZHlaWE56U1c1U1lXNW5aVHRjYmlBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9iM1YwY0hWMFcya2dMU0F4WFN3Z2IzVjBjSFYwVzJsZExDQmxZWE5sWkZCeWIyZHlaWE56S1R0Y2JpQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCM2NtRndJRDBnS0cxcGJpd2diV0Y0S1NBOVBpQW9kaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQnlZVzVuWlZOcGVtVWdQU0J0WVhnZ0xTQnRhVzQ3WEc0Z0lISmxkSFZ5YmlBb0tIWWdMU0J0YVc0cElDVWdjbUZ1WjJWVGFYcGxJQ3NnY21GdVoyVlRhWHBsS1NBbElISmhibWRsVTJsNlpTQXJJRzFwYmp0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpkR1Z3Y3lBOUlDaHpkR1Z3Y3l3Z2JXbHVMQ0J0WVhncElEMCtJQ2gyS1NBOVBpQjdYRzRnSUdOdmJuTjBJSEJ5YjJkeVpYTnpJRDBnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2JXbHVMQ0J0WVhnc0lIWXBPMXh1SUNCeVpYUjFjbTRnYzNSbGNGQnliMmR5WlhOektITjBaWEJ6TENCd2NtOW5jbVZ6Y3lrN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdkSEpoYm5ObWIzSnRRMmhwYkdSV1lXeDFaWE1nUFNBb1kyaHBiR1JVY21GdWMyWnZjbTFsY25NcElEMCtJQ2gyS1NBOVBpQjdYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIyS1NCN1hHNGdJQ0FnWTI5dWMzUWdZMmhwYkdSVWNtRnVjMlp2Y20xbGNpQTlJR05vYVd4a1ZISmhibk5tYjNKdFpYSnpXMnRsZVYwN1hHNGdJQ0FnYVdZZ0tHTm9hV3hrVkhKaGJuTm1iM0p0WlhJcElIdGNiaUFnSUNBZ0lIWmJhMlY1WFNBOUlHTm9hV3hrVkhKaGJuTm1iM0p0WlhJb2RsdHJaWGxkS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnZGp0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLmhleCA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMucmdiVW5pdCA9IGV4cG9ydHMuc2NhbGUgPSBleHBvcnRzLnB4ID0gZXhwb3J0cy5wZXJjZW50ID0gZXhwb3J0cy5kZWdyZWVzID0gZXhwb3J0cy5hbHBoYSA9IGV4cG9ydHMubnVtYmVyID0gdW5kZWZpbmVkO1xuXG52YXIgX3RyYW5zZm9ybUNoaWxkVmFsdWVzLCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMyO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFZhbHVlIHR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogYWxwaGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGRlZ3JlZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaHNsYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcGVyY2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJnYlVuaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJnYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogc2NhbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG4vLyBTdHJpbmcgcHJvcGVydGllc1xudmFyIFJFRCA9ICdyZWQnO1xudmFyIEdSRUVOID0gJ2dyZWVuJztcbnZhciBCTFVFID0gJ2JsdWUnO1xudmFyIEFMUEhBID0gJ2FscGhhJztcbnZhciBIVUUgPSAnaHVlJztcbnZhciBTQVRVUkFUSU9OID0gJ3NhdHVyYXRpb24nO1xudmFyIExJR0hUTkVTUyA9ICdsaWdodG5lc3MnO1xuXG4vLyBUZW1wbGF0ZXNcbnZhciByZ2JhVGVtcGxhdGUgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgcmVkID0gX3JlZi5yZWQ7XG4gIHZhciBncmVlbiA9IF9yZWYuZ3JlZW47XG4gIHZhciBibHVlID0gX3JlZi5ibHVlO1xuICB2YXIgX3JlZiRhbHBoYSA9IF9yZWYuYWxwaGE7XG4gIHZhciBhbHBoYSA9IF9yZWYkYWxwaGEgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmJGFscGhhO1xuICByZXR1cm4gJ3JnYmEoJyArIHJlZCArICcsICcgKyBncmVlbiArICcsICcgKyBibHVlICsgJywgJyArIGFscGhhICsgJyknO1xufTtcblxudmFyIGhzbGFUZW1wbGF0ZSA9IGZ1bmN0aW9uIChfcmVmMikge1xuICB2YXIgaHVlID0gX3JlZjIuaHVlO1xuICB2YXIgc2F0dXJhdGlvbiA9IF9yZWYyLnNhdHVyYXRpb247XG4gIHZhciBsaWdodG5lc3MgPSBfcmVmMi5saWdodG5lc3M7XG4gIHZhciBfcmVmMiRhbHBoYSA9IF9yZWYyLmFscGhhO1xuICB2YXIgYWxwaGEgPSBfcmVmMiRhbHBoYSA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYyJGFscGhhO1xuICByZXR1cm4gJ2hzbGEoJyArIGh1ZSArICcsICcgKyBzYXR1cmF0aW9uICsgJywgJyArIGxpZ2h0bmVzcyArICcsICcgKyBhbHBoYSArICcpJztcbn07XG5cbnZhciBudW1iZXIgPSBleHBvcnRzLm51bWJlciA9IHtcbiAgdGVzdDogX3V0aWxzMi5pc051bSxcbiAgcGFyc2U6IHBhcnNlRmxvYXRcbn07XG5cbi8vIFZhbHVlIHR5cGVzXG52YXIgYWxwaGEgPSBleHBvcnRzLmFscGhhID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICB0cmFuc2Zvcm06ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKVxufSk7XG5cbnZhciBkZWdyZWVzID0gZXhwb3J0cy5kZWdyZWVzID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJ2RlZycpO1xudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnJScpO1xudmFyIHB4ID0gZXhwb3J0cy5weCA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdweCcpO1xuXG52YXIgc2NhbGUgPSBleHBvcnRzLnNjYWxlID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICBkZWZhdWx0OiAxXG59KTtcblxudmFyIHJnYlVuaXQgPSBleHBvcnRzLnJnYlVuaXQgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm1lcnMuZmxvdykoXG4gIC8vaHR0cDovL2NvZGVwZW4uaW8vb3N1Ymxha2UvZnVsbC94R1ZWYU4vXG4gIC8vICh2LCB2YWx1ZSwgYWN0aW9uKSA9PiB7XG4gIC8vICAgaWYgKGFjdGlvbikge1xuICAvLyAgICAgY29uc3QgZnJvbUNvbG9yID0gYWN0aW9uLmZyb20gKiBhY3Rpb24uZnJvbTtcbiAgLy8gICAgIGNvbnN0IHRvQ29sb3IgPSBhY3Rpb24udG8gKiBhY3Rpb24udG87XG4gIC8vICAgICByZXR1cm4gTWF0aC5zcXJ0KGFjdGlvbi5wcm9ncmVzcyAqICh0b0NvbG9yIC0gZnJvbUNvbG9yKSArIGZyb21Db2xvcik7XG4gIC8vICAgfVxuXG4gIC8vICAgcmV0dXJuIHY7XG4gIC8vIH0sXG4gICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAyNTUpLCBNYXRoLnJvdW5kKVxufSk7XG5cbnZhciByZ2JhID0gZXhwb3J0cy5yZ2JhID0ge1xuICB0ZXN0OiAoMCwgX3V0aWxzLmlzRmlyc3RDaGFycykoJ3JnYicpLFxuXG4gIHBhcnNlOiAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFtSRUQsIEdSRUVOLCBCTFVFLCBBTFBIQV0pLFxuXG4gIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm1lcnMuZmxvdykoKDAsIF90cmFuc2Zvcm1lcnMudHJhbnNmb3JtQ2hpbGRWYWx1ZXMpKChfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSB7fSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzW1JFRF0gPSByZ2JVbml0LnRyYW5zZm9ybSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzW0dSRUVOXSA9IHJnYlVuaXQudHJhbnNmb3JtLCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXNbQkxVRV0gPSByZ2JVbml0LnRyYW5zZm9ybSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzW0FMUEhBXSA9IGFscGhhLnRyYW5zZm9ybSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzKSksIHJnYmFUZW1wbGF0ZSlcbn07XG5cbnZhciBoZXggPSBleHBvcnRzLmhleCA9IF9leHRlbmRzKHt9LCByZ2JhLCB7XG5cbiAgdGVzdDogKDAsIF91dGlscy5pc0ZpcnN0Q2hhcnMpKCcjJyksXG5cbiAgcGFyc2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIF9yZWYzO1xuXG4gICAgdmFyIHIgPSB2b2lkIDAsXG4gICAgICAgIGcgPSB2b2lkIDAsXG4gICAgICAgIGIgPSB2b2lkIDA7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICAgIHIgPSB2LnN1YnN0cigxLCAyKTtcbiAgICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcbiAgICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICB9IGVsc2Uge1xuICAgICAgciA9IHYuc3Vic3RyKDEsIDEpO1xuICAgICAgZyA9IHYuc3Vic3RyKDIsIDEpO1xuICAgICAgYiA9IHYuc3Vic3RyKDMsIDEpO1xuICAgICAgciArPSByO1xuICAgICAgZyArPSBnO1xuICAgICAgYiArPSBiO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVmMyA9IHt9LCBfcmVmM1tSRURdID0gcGFyc2VJbnQociwgMTYpLCBfcmVmM1tHUkVFTl0gPSBwYXJzZUludChnLCAxNiksIF9yZWYzW0JMVUVdID0gcGFyc2VJbnQoYiwgMTYpLCBfcmVmM1tBTFBIQV0gPSAxLCBfcmVmMztcbiAgfVxufSk7XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0ge1xuICB0ZXN0OiAoMCwgX3V0aWxzLmlzRmlyc3RDaGFycykoJ2hzbCcpLFxuXG4gIHBhcnNlOiAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFtIVUUsIFNBVFVSQVRJT04sIExJR0hUTkVTUywgQUxQSEFdKSxcblxuICB0cmFuc2Zvcm06ICgwLCBfdHJhbnNmb3JtZXJzLmZsb3cpKCgwLCBfdHJhbnNmb3JtZXJzLnRyYW5zZm9ybUNoaWxkVmFsdWVzKSgoX3RyYW5zZm9ybUNoaWxkVmFsdWVzMiA9IHt9LCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMyW0hVRV0gPSBudW1iZXIudHJhbnNmb3JtLCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMyW1NBVFVSQVRJT05dID0gcGVyY2VudC50cmFuc2Zvcm0sIF90cmFuc2Zvcm1DaGlsZFZhbHVlczJbTElHSFRORVNTXSA9IHBlcmNlbnQudHJhbnNmb3JtLCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMyW0FMUEhBXSA9IGFscGhhLnRyYW5zZm9ybSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzMikpLCBoc2xhVGVtcGxhdGUpXG59O1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0ge1xuICBjaGlsZFR5cGVzOiBfZXh0ZW5kcyh7fSwgaHNsYS5jaGlsZFR5cGVzLCByZ2JhLmNoaWxkVHlwZXMpLFxuXG4gIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiByZ2JhLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2xhLnRlc3QodmFsdWUpO1xuICB9LFxuXG4gIHRyYW5zZm9ybTogZnVuY3Rpb24gKHYpIHtcbiAgICBpZiAodi5oYXNPd25Qcm9wZXJ0eSgncmVkJykpIHtcbiAgICAgIHJldHVybiByZ2JhLnRyYW5zZm9ybSh2KTtcbiAgICB9IGVsc2UgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2h1ZScpKSB7XG4gICAgICByZXR1cm4gaHNsYS50cmFuc2Zvcm0odik7XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRtRnNkV1V0ZEhsd1pYTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFXRkJPenRCUVVOQk96dEJRVU5CT3pzN1FVRkhRU3hKUVVGTkxFMUJRVTBzUzBGQldqdEJRVU5CTEVsQlFVMHNVVUZCVVN4UFFVRmtPMEZCUTBFc1NVRkJUU3hQUVVGUExFMUJRV0k3UVVGRFFTeEpRVUZOTEZGQlFWRXNUMEZCWkR0QlFVTkJMRWxCUVUwc1RVRkJUU3hMUVVGYU8wRkJRMEVzU1VGQlRTeGhRVUZoTEZsQlFXNUNPMEZCUTBFc1NVRkJUU3haUVVGWkxGZEJRV3hDT3pzN1FVRkhRU3hKUVVGTkxHVkJRV1U3UVVGQlFTeE5RVUZITEVkQlFVZ3NVVUZCUnl4SFFVRklPMEZCUVVFc1RVRkJVU3hMUVVGU0xGRkJRVkVzUzBGQlVqdEJRVUZCTEUxQlFXVXNTVUZCWml4UlFVRmxMRWxCUVdZN1FVRkJRU3gzUWtGQmNVSXNTMEZCY2tJN1FVRkJRU3hOUVVGeFFpeExRVUZ5UWl3NFFrRkJOa0lzUTBGQk4wSTdRVUZCUVN4dFFrRkRXQ3hIUVVSWExGVkJRMGdzUzBGRVJ5eFZRVU5QTEVsQlJGQXNWVUZEWjBJc1MwRkVhRUk3UVVGQlFTeERRVUZ5UWpzN1FVRkhRU3hKUVVGTkxHVkJRV1U3UVVGQlFTeE5RVUZITEVkQlFVZ3NVMEZCUnl4SFFVRklPMEZCUVVFc1RVRkJVU3hWUVVGU0xGTkJRVkVzVlVGQlVqdEJRVUZCTEUxQlFXOUNMRk5CUVhCQ0xGTkJRVzlDTEZOQlFYQkNPMEZCUVVFc01FSkJRU3RDTEV0QlFTOUNPMEZCUVVFc1RVRkJLMElzUzBGQkwwSXNLMEpCUVhWRExFTkJRWFpETzBGQlFVRXNiVUpCUTFnc1IwRkVWeXhWUVVOSUxGVkJSRWNzVlVGRFdTeFRRVVJhTEZWQlF6QkNMRXRCUkRGQ08wRkJRVUVzUTBGQmNrSTdPMEZCUjA4c1NVRkJUU3d3UWtGQlV6dEJRVU53UWl4eFFrRkViMEk3UVVGRmNFSXNVMEZCVHp0QlFVWmhMRU5CUVdZN096dEJRVTFCTEVsQlFVMHNjVU5CUTFJc1RVRkVVVHRCUVVWWUxHRkJRVmNzZVVKQlFVMHNRMEZCVGl4RlFVRlRMRU5CUVZRN1FVRkdRU3hGUVVGT096dEJRVXRCTEVsQlFVMHNORUpCUVZVc01rSkJRV1VzUzBGQlppeERRVUZvUWp0QlFVTkJMRWxCUVUwc05FSkJRVlVzTWtKQlFXVXNSMEZCWml4RFFVRm9RanRCUVVOQkxFbEJRVTBzYTBKQlFVc3NNa0pCUVdVc1NVRkJaaXhEUVVGWU96dEJRVVZCTEVsQlFVMHNjVU5CUTFJc1RVRkVVVHRCUVVWWUxGZEJRVk03UVVGR1JTeEZRVUZPT3p0QlFVdEJMRWxCUVUwc2VVTkJRMUlzVFVGRVVUdEJRVVZZTEdGQlFWYzdPenM3T3pzN096czdPMEZCVjFRc01rSkJRVTBzUTBGQlRpeEZRVUZUTEVkQlFWUXNRMEZZVXl4RlFWbFVMRXRCUVVzc1MwRmFTVHRCUVVaQkxFVkJRVTQ3TzBGQmEwSkJMRWxCUVUwc2MwSkJRVTg3UVVGRGJFSXNVVUZCVFN4NVFrRkJZU3hMUVVGaUxFTkJSRms3TzBGQlIyeENMRk5CUVU4c05rSkJRV2xDTEVOQlFVTXNSMEZCUkN4RlFVRk5MRXRCUVU0c1JVRkJZU3hKUVVGaUxFVkJRVzFDTEV0QlFXNUNMRU5CUVdwQ0xFTkJTRmM3TzBGQlMyeENMR0ZCUVZjc2QwSkJRMVFzTWtaQlEwY3NSMEZFU0N4SlFVTlRMRkZCUVZFc1UwRkVha0lzZDBKQlJVY3NTMEZHU0N4SlFVVlhMRkZCUVZFc1UwRkdia0lzZDBKQlIwY3NTVUZJU0N4SlFVZFZMRkZCUVZFc1UwRkliRUlzZDBKQlNVY3NTMEZLU0N4SlFVbFhMRTFCUVUwc1UwRktha0lzZVVKQlJGTXNSVUZQVkN4WlFWQlRPMEZCVEU4c1EwRkJZanM3UVVGblFrRXNTVUZCVFN4cFEwRkRVaXhKUVVSUk96dEJRVWRZTEZGQlFVMHNlVUpCUVdFc1IwRkJZaXhEUVVoTE96dEJRVXRZTEZOQlFVOHNWVUZCUXl4RFFVRkVMRVZCUVU4N1FVRkJRVHM3UVVGRFdpeFJRVUZKTEZWQlFVbzdRVUZCUVN4UlFVRlBMRlZCUVZBN1FVRkJRU3hSUVVGVkxGVkJRVlk3T3p0QlFVZEJMRkZCUVVrc1JVRkJSU3hOUVVGR0xFZEJRVmNzUTBGQlppeEZRVUZyUWp0QlFVTm9RaXhWUVVGSkxFVkJRVVVzVFVGQlJpeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRmFMRU5CUVVvN1FVRkRRU3hWUVVGSkxFVkJRVVVzVFVGQlJpeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRmFMRU5CUVVvN1FVRkRRU3hWUVVGSkxFVkJRVVVzVFVGQlJpeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRmFMRU5CUVVvN096dEJRVWRFTEV0QlRrUXNUVUZOVHp0QlFVTk1MRlZCUVVrc1JVRkJSU3hOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJMRlZCUVVrc1JVRkJSU3hOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJMRlZCUVVrc1JVRkJSU3hOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJMRmRCUVVzc1EwRkJURHRCUVVOQkxGZEJRVXNzUTBGQlREdEJRVU5CTEZkQlFVc3NRMEZCVER0QlFVTkVPenRCUVVWRUxEWkNRVU5ITEVkQlJFZ3NTVUZEVXl4VFFVRlRMRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJSRlFzVVVGRlJ5eExRVVpJTEVsQlJWY3NVMEZCVXl4RFFVRlVMRVZCUVZrc1JVRkJXaXhEUVVaWUxGRkJSMGNzU1VGSVNDeEpRVWRWTEZOQlFWTXNRMEZCVkN4RlFVRlpMRVZCUVZvc1EwRklWaXhSUVVsSExFdEJTa2dzU1VGSlZ5eERRVXBZTzBGQlRVUTdRVUU1UWxVc1JVRkJUanM3UVVGcFEwRXNTVUZCVFN4elFrRkJUenRCUVVOc1FpeFJRVUZOTEhsQ1FVRmhMRXRCUVdJc1EwRkVXVHM3UVVGSGJFSXNVMEZCVHl3MlFrRkJhVUlzUTBGQlF5eEhRVUZFTEVWQlFVMHNWVUZCVGl4RlFVRnJRaXhUUVVGc1FpeEZRVUUyUWl4TFFVRTNRaXhEUVVGcVFpeERRVWhYT3p0QlFVdHNRaXhoUVVGWExIZENRVU5VTERaR1FVTkhMRWRCUkVnc1NVRkRVeXhQUVVGUExGTkJSR2hDTEhsQ1FVVkhMRlZCUmtnc1NVRkZaMElzVVVGQlVTeFRRVVo0UWl4NVFrRkhSeXhUUVVoSUxFbEJSMlVzVVVGQlVTeFRRVWgyUWl4NVFrRkpSeXhMUVVwSUxFbEJTVmNzVFVGQlRTeFRRVXBxUWl3d1FrRkVVeXhGUVU5VUxGbEJVRk03UVVGTVR5eERRVUZpT3p0QlFXZENRU3hKUVVGTkxIZENRVUZSTzBGQlEyNUNMREpDUVVOTExFdEJRVXNzVlVGRVZpeEZRVVZMTEV0QlFVc3NWVUZHVml4RFFVUnRRanM3UVVGTmJrSXNVVUZCVFN4VlFVRkRMRXRCUVVRN1FVRkJRU3hYUVVGWExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNTMEZCYjBJc1NVRkJTU3hKUVVGS0xFTkJRVk1zUzBGQlZDeERRVUZ3UWl4SlFVRjFReXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXeEVPMEZCUVVFc1IwRk9ZVHM3UVVGUmJrSXNZVUZCVnl4VlFVRkRMRU5CUVVRc1JVRkJUenRCUVVOb1FpeFJRVUZKTEVWQlFVVXNZMEZCUml4RFFVRnBRaXhMUVVGcVFpeERRVUZLTEVWQlFUWkNPMEZCUXpOQ0xHRkJRVThzUzBGQlN5eFRRVUZNTEVOQlFXVXNRMEZCWml4RFFVRlFPMEZCUTBRc1MwRkdSQ3hOUVVWUExFbEJRVWtzUlVGQlJTeGpRVUZHTEVOQlFXbENMRXRCUVdwQ0xFTkJRVW9zUlVGQk5rSTdRVUZEYkVNc1lVRkJUeXhMUVVGTExGTkJRVXdzUTBGQlpTeERRVUZtTEVOQlFWQTdRVUZEUkR0QlFVTkVMRmRCUVU4c1EwRkJVRHRCUVVORU8wRkJabXRDTEVOQlFXUWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2JpQXFJRlpoYkhWbElIUjVjR1Z6WEc0Z0tseHVJQ29nWVd4d2FHRmNiaUFxSUdSbFozSmxaWE5jYmlBcUlHaGxlRnh1SUNvZ2FITnNZVnh1SUNvZ2NHVnlZMlZ1ZEZ4dUlDb2djSGhjYmlBcUlISm5ZbFZ1YVhSY2JpQXFJSEpuWWx4dUlDb2djMk5oYkdWY2JpQXFMMXh1YVcxd2IzSjBJSHNnWTJ4aGJYQXNJR1pzYjNjc0lIUnlZVzV6Wm05eWJVTm9hV3hrVm1Gc2RXVnpJSDBnWm5KdmJTQW5MaTR2YVc1akwzUnlZVzV6Wm05eWJXVnljeWM3WEc1cGJYQnZjblFnZXlCamNtVmhkR1ZWYm1sMFZIbHdaU3dnYVhOR2FYSnpkRU5vWVhKekxDQnpjR3hwZEVOdmJHOXlWbUZzZFdWeklIMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2V5QnBjMDUxYlNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYmk4dklGTjBjbWx1WnlCd2NtOXdaWEowYVdWelhHNWpiMjV6ZENCU1JVUWdQU0FuY21Wa0p6dGNibU52Ym5OMElFZFNSVVZPSUQwZ0oyZHlaV1Z1Snp0Y2JtTnZibk4wSUVKTVZVVWdQU0FuWW14MVpTYzdYRzVqYjI1emRDQkJURkJJUVNBOUlDZGhiSEJvWVNjN1hHNWpiMjV6ZENCSVZVVWdQU0FuYUhWbEp6dGNibU52Ym5OMElGTkJWRlZTUVZSSlQwNGdQU0FuYzJGMGRYSmhkR2x2YmljN1hHNWpiMjV6ZENCTVNVZElWRTVGVTFNZ1BTQW5iR2xuYUhSdVpYTnpKenRjYmx4dUx5OGdWR1Z0Y0d4aGRHVnpYRzVqYjI1emRDQnlaMkpoVkdWdGNHeGhkR1VnUFNBb2V5QnlaV1FzSUdkeVpXVnVMQ0JpYkhWbExDQmhiSEJvWVNBOUlERWdmU2tnUFQ0Z1hHNGdJR0J5WjJKaEtDUjdjbVZrZlN3Z0pIdG5jbVZsYm4wc0lDUjdZbXgxWlgwc0lDUjdZV3h3YUdGOUtXQTdYRzVjYm1OdmJuTjBJR2h6YkdGVVpXMXdiR0YwWlNBOUlDaDdJR2gxWlN3Z2MyRjBkWEpoZEdsdmJpd2diR2xuYUhSdVpYTnpMQ0JoYkhCb1lTQTlJREVnZlNrZ1BUNGdYRzRnSUdCb2MyeGhLQ1I3YUhWbGZTd2dKSHR6WVhSMWNtRjBhVzl1ZlN3Z0pIdHNhV2RvZEc1bGMzTjlMQ0FrZTJGc2NHaGhmU2xnTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYm5WdFltVnlJRDBnZTF4dUlDQjBaWE4wT2lCcGMwNTFiU3hjYmlBZ2NHRnljMlU2SUhCaGNuTmxSbXh2WVhSY2JuMDdYRzVjYmk4dklGWmhiSFZsSUhSNWNHVnpYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXeHdhR0VnUFNCN1hHNGdJQzR1TG01MWJXSmxjaXhjYmlBZ2RISmhibk5tYjNKdE9pQmpiR0Z0Y0Nnd0xDQXhLVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdSbFozSmxaWE1nUFNCamNtVmhkR1ZWYm1sMFZIbHdaU2duWkdWbkp5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHVnlZMlZ1ZENBOUlHTnlaV0YwWlZWdWFYUlVlWEJsS0NjbEp5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NIZ2dQU0JqY21WaGRHVlZibWwwVkhsd1pTZ25jSGduS1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhOallXeGxJRDBnZTF4dUlDQXVMaTV1ZFcxaVpYSXNYRzRnSUdSbFptRjFiSFE2SURGY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMkpWYm1sMElEMGdlMXh1SUNBdUxpNXVkVzFpWlhJc1hHNGdJSFJ5WVc1elptOXliVG9nWm14dmR5aGNiaUFnSUNBdkwyaDBkSEE2THk5amIyUmxjR1Z1TG1sdkwyOXpkV0pzWVd0bEwyWjFiR3d2ZUVkV1ZtRk9MMXh1SUNBZ0lDOHZJQ2gyTENCMllXeDFaU3dnWVdOMGFXOXVLU0E5UGlCN1hHNGdJQ0FnTHk4Z0lDQnBaaUFvWVdOMGFXOXVLU0I3WEc0Z0lDQWdMeThnSUNBZ0lHTnZibk4wSUdaeWIyMURiMnh2Y2lBOUlHRmpkR2x2Ymk1bWNtOXRJQ29nWVdOMGFXOXVMbVp5YjIwN1hHNGdJQ0FnTHk4Z0lDQWdJR052Ym5OMElIUnZRMjlzYjNJZ1BTQmhZM1JwYjI0dWRHOGdLaUJoWTNScGIyNHVkRzg3WEc0Z0lDQWdMeThnSUNBZ0lISmxkSFZ5YmlCTllYUm9Mbk54Y25Rb1lXTjBhVzl1TG5CeWIyZHlaWE56SUNvZ0tIUnZRMjlzYjNJZ0xTQm1jbTl0UTI5c2IzSXBJQ3NnWm5KdmJVTnZiRzl5S1R0Y2JpQWdJQ0F2THlBZ0lIMWNibHh1SUNBZ0lDOHZJQ0FnY21WMGRYSnVJSFk3WEc0Z0lDQWdMeThnZlN4Y2JpQWdJQ0JqYkdGdGNDZ3dMQ0F5TlRVcExGeHVJQ0FnSUUxaGRHZ3VjbTkxYm1SY2JpQWdLVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhKblltRWdQU0I3WEc0Z0lIUmxjM1E2SUdselJtbHljM1JEYUdGeWN5Z25jbWRpSnlrc1hHNWNiaUFnY0dGeWMyVTZJSE53YkdsMFEyOXNiM0pXWVd4MVpYTW9XMUpGUkN3Z1IxSkZSVTRzSUVKTVZVVXNJRUZNVUVoQlhTa3NYRzVjYmlBZ2RISmhibk5tYjNKdE9pQm1iRzkzS0Z4dUlDQWdJSFJ5WVc1elptOXliVU5vYVd4a1ZtRnNkV1Z6S0h0Y2JpQWdJQ0FnSUZ0U1JVUmRPaUJ5WjJKVmJtbDBMblJ5WVc1elptOXliU3hjYmlBZ0lDQWdJRnRIVWtWRlRsMDZJSEpuWWxWdWFYUXVkSEpoYm5ObWIzSnRMRnh1SUNBZ0lDQWdXMEpNVlVWZE9pQnlaMkpWYm1sMExuUnlZVzV6Wm05eWJTeGNiaUFnSUNBZ0lGdEJURkJJUVYwNklHRnNjR2hoTG5SeVlXNXpabTl5YlZ4dUlDQWdJSDBwTEZ4dUlDQWdJSEpuWW1GVVpXMXdiR0YwWlZ4dUlDQXBYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUdWNElEMGdlMXh1SUNBdUxpNXlaMkpoTEZ4dVhHNGdJSFJsYzNRNklHbHpSbWx5YzNSRGFHRnljeWduSXljcExGeHVYRzRnSUhCaGNuTmxPaUFvZGlrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0J5TENCbkxDQmlPMXh1WEc0Z0lDQWdMeThnU1dZZ2QyVWdhR0YyWlNBMklHTm9ZWEpoWTNSbGNuTXNJR2xsSUNOR1JqQXdNREJjYmlBZ0lDQnBaaUFvZGk1c1pXNW5kR2dnUGlBMEtTQjdYRzRnSUNBZ0lDQnlJRDBnZGk1emRXSnpkSElvTVN3Z01pazdYRzRnSUNBZ0lDQm5JRDBnZGk1emRXSnpkSElvTXl3Z01pazdYRzRnSUNBZ0lDQmlJRDBnZGk1emRXSnpkSElvTlN3Z01pazdYRzVjYmlBZ0lDQXZMeUJQY2lCM1pTQm9ZWFpsSURNZ1kyaGhjbUZqZEdWeWN5d2dhV1VnSTBZd01GeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J5SUQwZ2RpNXpkV0p6ZEhJb01Td2dNU2s3WEc0Z0lDQWdJQ0JuSUQwZ2RpNXpkV0p6ZEhJb01pd2dNU2s3WEc0Z0lDQWdJQ0JpSUQwZ2RpNXpkV0p6ZEhJb015d2dNU2s3WEc0Z0lDQWdJQ0J5SUNzOUlISTdYRzRnSUNBZ0lDQm5JQ3M5SUdjN1hHNGdJQ0FnSUNCaUlDczlJR0k3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lGdFNSVVJkT2lCd1lYSnpaVWx1ZENoeUxDQXhOaWtzWEc0Z0lDQWdJQ0JiUjFKRlJVNWRPaUJ3WVhKelpVbHVkQ2huTENBeE5pa3NYRzRnSUNBZ0lDQmJRa3hWUlYwNklIQmhjbk5sU1c1MEtHSXNJREUyS1N4Y2JpQWdJQ0FnSUZ0QlRGQklRVjA2SURGY2JpQWdJQ0I5TzF4dUlDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUhOc1lTQTlJSHRjYmlBZ2RHVnpkRG9nYVhOR2FYSnpkRU5vWVhKektDZG9jMnduS1N4Y2JseHVJQ0J3WVhKelpUb2djM0JzYVhSRGIyeHZjbFpoYkhWbGN5aGJTRlZGTENCVFFWUlZVa0ZVU1U5T0xDQk1TVWRJVkU1RlUxTXNJRUZNVUVoQlhTa3NYRzVjYmlBZ2RISmhibk5tYjNKdE9pQm1iRzkzS0Z4dUlDQWdJSFJ5WVc1elptOXliVU5vYVd4a1ZtRnNkV1Z6S0h0Y2JpQWdJQ0FnSUZ0SVZVVmRPaUJ1ZFcxaVpYSXVkSEpoYm5ObWIzSnRMRnh1SUNBZ0lDQWdXMU5CVkZWU1FWUkpUMDVkT2lCd1pYSmpaVzUwTG5SeVlXNXpabTl5YlN4Y2JpQWdJQ0FnSUZ0TVNVZElWRTVGVTFOZE9pQndaWEpqWlc1MExuUnlZVzV6Wm05eWJTeGNiaUFnSUNBZ0lGdEJURkJJUVYwNklHRnNjR2hoTG5SeVlXNXpabTl5YlZ4dUlDQWdJSDBwTEZ4dUlDQWdJR2h6YkdGVVpXMXdiR0YwWlZ4dUlDQXBYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTI5c2IzSWdQU0I3WEc0Z0lHTm9hV3hrVkhsd1pYTTZJSHRjYmlBZ0lDQXVMaTVvYzJ4aExtTm9hV3hrVkhsd1pYTXNYRzRnSUNBZ0xpNHVjbWRpWVM1amFHbHNaRlI1Y0dWelhHNGdJSDBzWEc1Y2JpQWdkR1Z6ZERvZ0tIWmhiSFZsS1NBOVBpQnlaMkpoTG5SbGMzUW9kbUZzZFdVcElIeDhJR2hsZUM1MFpYTjBLSFpoYkhWbEtTQjhmQ0JvYzJ4aExuUmxjM1FvZG1Gc2RXVXBMRnh1WEc0Z0lIUnlZVzV6Wm05eWJUb2dLSFlwSUQwK0lIdGNiaUFnSUNCcFppQW9kaTVvWVhOUGQyNVFjbTl3WlhKMGVTZ25jbVZrSnlrcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCeVoySmhMblJ5WVc1elptOXliU2gyS1R0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0hZdWFHRnpUM2R1VUhKdmNHVnlkSGtvSjJoMVpTY3BLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdhSE5zWVM1MGNtRnVjMlp2Y20wb2RpazdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIyTzF4dUlDQjlYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY2xhbXBQcm9ncmVzcyA9ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKTtcblxuZnVuY3Rpb24gY2FsY1ZhbHVlQXRUaW1lKGZyb20sIHRvLCBkdXJhdGlvbiwgZWxhcHNlZCwgZWFzZSkge1xuICB2YXIgcHJvZ3Jlc3NBdFRpbWUgPSBlYXNlKGNsYW1wUHJvZ3Jlc3MoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSgwLCBkdXJhdGlvbiwgZWxhcHNlZCkpKTtcbiAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbSwgdG8sIHByb2dyZXNzQXRUaW1lKTtcbn1cblxudmFyIFR3ZWVuQmxlbmQgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHdlZW5CbGVuZCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHdlZW5CbGVuZCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW5CbGVuZCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFR3ZWVuQmxlbmQucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmcm9tID0gX3Byb3BzLmZyb207XG4gICAgdmFyIHRvID0gX3Byb3BzLnRvO1xuICAgIHZhciBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbjtcbiAgICB2YXIgYWNjdXJhY3kgPSBfcHJvcHMuYWNjdXJhY3k7XG5cbiAgICB2YXIgYSA9IGZyb207XG4gICAgdmFyIGIgPSB0bztcbiAgICB2YXIgYUR1cmF0aW9uID0gYS5nZXREdXJhdGlvbigpO1xuICAgIHZhciBiRHVyYXRpb24gPSBiLmdldER1cmF0aW9uKCk7XG5cbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb24gfHwgTWF0aC5taW4oYUR1cmF0aW9uIC0gYS5nZXRFbGFwc2VkKCksIGJEdXJhdGlvbik7XG5cbiAgICB2YXIgYUVhc2UgPSBhLmdldFByb3AoJ2Vhc2UnKTtcbiAgICB2YXIgYkVhc2UgPSBiLmdldFByb3AoJ2Vhc2UnKTtcbiAgICB2YXIgYUZyb20gPSBhLmdldFByb3AoJ2Zyb20nKTtcbiAgICB2YXIgYkZyb20gPSBiLmdldFByb3AoJ2Zyb20nKTtcbiAgICB2YXIgYVRvID0gYS5nZXRQcm9wKCd0bycpO1xuICAgIHZhciBiVG8gPSBiLmdldFByb3AoJ3RvJyk7XG4gICAgdmFyIGJWYWx1ZUF0QmxlbmRDb21wbGV0ZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIHRoaXMuZHVyYXRpb24sIGJFYXNlKTtcbiAgICB2YXIgYlN0YXJ0c0hpZ2hlclRoYW5BID0gYkZyb20gPiBhLmdldCgpO1xuXG4gICAgdGhpcy5ibGVuZFBvaW50cyA9IFtbMCwgYS5nZXQoKV0sIFt0aGlzLmR1cmF0aW9uLCBiVmFsdWVBdEJsZW5kQ29tcGxldGVdXTtcblxuICAgIC8vIEZpbmQgdHdlZW4gaW50ZXJzZWN0aW9uXG4gICAgdmFyIHRpbWVzdGVwID0gdGhpcy5kdXJhdGlvbiAvIGFjY3VyYWN5O1xuXG4gICAgdmFyIGZvdW5kUDEgPSBmYWxzZTtcbiAgICB2YXIgZm91bmRQMiA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY2N1cmFjeTsgaSsrKSB7XG4gICAgICB2YXIgdG90YWxUaW1lID0gaSAqIHRpbWVzdGVwO1xuXG4gICAgICB2YXIgYVZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGFGcm9tLCBhVG8sIGFEdXJhdGlvbiwgYS5lbGFwc2VkICsgdG90YWxUaW1lLCBhRWFzZSk7XG4gICAgICB2YXIgYlZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGJGcm9tLCBiVG8sIGJEdXJhdGlvbiwgYi5lbGFwc2VkICsgdG90YWxUaW1lLCBiRWFzZSk7XG5cbiAgICAgIHZhciBoYXNJbnRlcnNlY3RlZCA9IGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUgfHwgIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWU7XG5cbiAgICAgIGlmICghZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZCkge1xuICAgICAgICB0aGlzLmJsZW5kUG9pbnRzLnNwbGljZSgwLCAxLCBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdKTtcbiAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE8gZ28gYmFjayB0aHJvdWdoIGFuZCBjb21tZW50XG4gICAgICB2YXIgaGFzSW50ZXJzZWN0ZWRCID0gYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA8IGJWYWx1ZUF0VGltZSB8fCAhYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA+IGJWYWx1ZUF0VGltZTtcblxuICAgICAgaWYgKGZvdW5kUDEgJiYgaGFzSW50ZXJzZWN0ZWRCKSB7XG4gICAgICAgIHRoaXMuYmxlbmRQb2ludHNbMl0gPSBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdO1xuICAgICAgICBmb3VuZFAyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kUDIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvLnN0YXJ0KCk7XG4gIH07XG5cbiAgVHdlZW5CbGVuZC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZnJvbSA9IF9wcm9wczIuZnJvbTtcbiAgICB2YXIgdG8gPSBfcHJvcHMyLnRvO1xuXG4gICAgdmFyIGEgPSBmcm9tO1xuICAgIHZhciBiID0gdG87XG5cbiAgICB2YXIgcHJvZ3Jlc3MgPSBjbGFtcFByb2dyZXNzKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGhpcy5ibGVuZFBvaW50c1swXVswXSwgdGhpcy5ibGVuZFBvaW50c1syXVswXSwgYS5nZXRFbGFwc2VkKCkpKTtcbiAgICBpZiAocHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgcmV0dXJuIGIuZ2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhUCA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykodGhpcy5ibGVuZFBvaW50c1swXVsxXSwgdGhpcy5ibGVuZFBvaW50c1sxXVsxXSwgcHJvZ3Jlc3MpO1xuICAgICAgdmFyIGJQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKSh0aGlzLmJsZW5kUG9pbnRzWzFdWzFdLCB0aGlzLmJsZW5kUG9pbnRzWzJdWzFdLCBwcm9ncmVzcyk7XG4gICAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShhUCwgYlAsIHByb2dyZXNzKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuQmxlbmQ7XG59KF8yLmRlZmF1bHQpO1xuXG5Ud2VlbkJsZW5kLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWNjdXJhY3k6IDYwXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBUd2VlbkJsZW5kKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwySnNaVzVrTFhSM1pXVnVjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3UVVGRFFUczdPenM3T3pzN096dEJRVVZCTEVsQlFVMHNaMEpCUVdkQ0xIbENRVUZOTEVOQlFVNHNSVUZCVXl4RFFVRlVMRU5CUVhSQ096dEJRVVZCTEZOQlFWTXNaVUZCVkN4RFFVRjVRaXhKUVVGNlFpeEZRVUVyUWl4RlFVRXZRaXhGUVVGdFF5eFJRVUZ1UXl4RlFVRTJReXhQUVVFM1F5eEZRVUZ6UkN4SlFVRjBSQ3hGUVVFMFJEdEJRVU14UkN4TlFVRk5MR2xDUVVGcFFpeExRVUZMTEdOQlFXTXNaME5CUVhGQ0xFTkJRWEpDTEVWQlFYZENMRkZCUVhoQ0xFVkJRV3RETEU5QlFXeERMRU5CUVdRc1EwRkJUQ3hEUVVGMlFqdEJRVU5CTEZOQlFVOHNaME5CUVhGQ0xFbEJRWEpDTEVWQlFUSkNMRVZCUVROQ0xFVkJRU3RDTEdOQlFTOUNMRU5CUVZBN1FVRkRSRHM3U1VGRlN5eFZPenM3T3pzN096czdkVUpCUzBvc1R5eHpRa0ZCVlR0QlFVRkJMR2xDUVVOcFF5eExRVUZMTEV0QlJIUkRPMEZCUVVFc1VVRkRRU3hKUVVSQkxGVkJRMEVzU1VGRVFUdEJRVUZCTEZGQlEwMHNSVUZFVGl4VlFVTk5MRVZCUkU0N1FVRkJRU3hSUVVOVkxGRkJSRllzVlVGRFZTeFJRVVJXTzBGQlFVRXNVVUZEYjBJc1VVRkVjRUlzVlVGRGIwSXNVVUZFY0VJN08wRkJSVklzVVVGQlRTeEpRVUZKTEVsQlFWWTdRVUZEUVN4UlFVRk5MRWxCUVVrc1JVRkJWanRCUVVOQkxGRkJRVTBzV1VGQldTeEZRVUZGTEZkQlFVWXNSVUZCYkVJN1FVRkRRU3hSUVVGTkxGbEJRVmtzUlVGQlJTeFhRVUZHTEVWQlFXeENPenRCUVVWQkxGTkJRVXNzVVVGQlRDeEhRVUZuUWl4WlFVRlpMRXRCUVVzc1IwRkJUQ3hEUVVNeFFpeFpRVUZaTEVWQlFVVXNWVUZCUml4RlFVUmpMRVZCUlRGQ0xGTkJSakJDTEVOQlFUVkNPenRCUVV0QkxGRkJRVTBzVVVGQlVTeEZRVUZGTEU5QlFVWXNRMEZCVlN4TlFVRldMRU5CUVdRN1FVRkRRU3hSUVVGTkxGRkJRVkVzUlVGQlJTeFBRVUZHTEVOQlFWVXNUVUZCVml4RFFVRmtPMEZCUTBFc1VVRkJUU3hSUVVGUkxFVkJRVVVzVDBGQlJpeERRVUZWTEUxQlFWWXNRMEZCWkR0QlFVTkJMRkZCUVUwc1VVRkJVU3hGUVVGRkxFOUJRVVlzUTBGQlZTeE5RVUZXTEVOQlFXUTdRVUZEUVN4UlFVRk5MRTFCUVUwc1JVRkJSU3hQUVVGR0xFTkJRVlVzU1VGQlZpeERRVUZhTzBGQlEwRXNVVUZCVFN4TlFVRk5MRVZCUVVVc1QwRkJSaXhEUVVGVkxFbEJRVllzUTBGQldqdEJRVU5CTEZGQlFVMHNkMEpCUVhkQ0xHZENRVUZuUWl4TFFVRm9RaXhGUVVGMVFpeEhRVUYyUWl4RlFVRTBRaXhUUVVFMVFpeEZRVUYxUXl4TFFVRkxMRkZCUVRWRExFVkJRWE5FTEV0QlFYUkVMRU5CUVRsQ08wRkJRMEVzVVVGQlRTeHhRa0ZCY1VJc1VVRkJVU3hGUVVGRkxFZEJRVVlzUlVGQmJrTTdPMEZCUlVFc1UwRkJTeXhYUVVGTUxFZEJRVzFDTEVOQlEycENMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFVkJRVVVzUjBGQlJpeEZRVUZLTEVOQlJHbENMRVZCUldwQ0xFTkJRVU1zUzBGQlN5eFJRVUZPTEVWQlFXZENMSEZDUVVGb1FpeERRVVpwUWl4RFFVRnVRanM3TzBGQlRVRXNVVUZCVFN4WFFVRlhMRXRCUVVzc1VVRkJUQ3hIUVVGblFpeFJRVUZxUXpzN1FVRkZRU3hSUVVGSkxGVkJRVlVzUzBGQlpEdEJRVU5CTEZGQlFVa3NWVUZCVlN4TFFVRmtPenRCUVVWQkxGTkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3hSUVVGd1FpeEZRVUU0UWl4SFFVRTVRaXhGUVVGdFF6dEJRVU5xUXl4VlFVRk5MRmxCUVZrc1NVRkJTU3hSUVVGMFFqczdRVUZGUVN4VlFVRk5MR1ZCUVdVc1owSkJRV2RDTEV0QlFXaENMRVZCUVhWQ0xFZEJRWFpDTEVWQlFUUkNMRk5CUVRWQ0xFVkJRWFZETEVWQlFVVXNUMEZCUml4SFFVRlpMRk5CUVc1RUxFVkJRVGhFTEV0QlFUbEVMRU5CUVhKQ08wRkJRMEVzVlVGQlRTeGxRVUZsTEdkQ1FVRm5RaXhMUVVGb1FpeEZRVUYxUWl4SFFVRjJRaXhGUVVFMFFpeFRRVUUxUWl4RlFVRjFReXhGUVVGRkxFOUJRVVlzUjBGQldTeFRRVUZ1UkN4RlFVRTRSQ3hMUVVFNVJDeERRVUZ5UWpzN1FVRkZRU3hWUVVGTkxHbENRVU5JTEhOQ1FVRnpRaXhsUVVGbExGbEJRWFJETEVsQlEwTXNRMEZCUXl4clFrRkJSQ3hKUVVGMVFpeGxRVUZsTEZsQlJucERPenRCUVV0QkxGVkJRVWtzUTBGQlF5eFBRVUZFTEVsQlFWa3NZMEZCYUVJc1JVRkJaME03UVVGRE9VSXNZVUZCU3l4WFFVRk1MRU5CUVdsQ0xFMUJRV3BDTEVOQlFYZENMRU5CUVhoQ0xFVkJRVEpDTEVOQlFUTkNMRVZCUVRoQ0xFTkJRVU1zVTBGQlJDeEZRVUZaTEZsQlFWb3NRMEZCT1VJN1FVRkRRU3hyUWtGQlZTeEpRVUZXTzBGQlEwUTdPenRCUVVkRUxGVkJRVTBzYTBKQlEwZ3NjMEpCUVhOQ0xHVkJRV1VzV1VGQmRFTXNTVUZEUXl4RFFVRkRMR3RDUVVGRUxFbEJRWFZDTEdWQlFXVXNXVUZHZWtNN08wRkJTMEVzVlVGQlNTeFhRVUZYTEdWQlFXWXNSVUZCWjBNN1FVRkRPVUlzWVVGQlN5eFhRVUZNTEVOQlFXbENMRU5CUVdwQ0xFbEJRWE5DTEVOQlFVTXNVMEZCUkN4RlFVRlpMRmxCUVZvc1EwRkJkRUk3UVVGRFFTeHJRa0ZCVlN4SlFVRldPMEZCUTBRN08wRkJSVVFzVlVGQlNTeFBRVUZLTEVWQlFXRTdRVUZEV0R0QlFVTkVPMEZCUTBZN08wRkJSVVFzVDBGQlJ5eExRVUZJTzBGQlEwUXNSenM3ZFVKQlJVUXNUU3h4UWtGQlV6dEJRVUZCTEd0Q1FVTmpMRXRCUVVzc1MwRkVia0k3UVVGQlFTeFJRVU5ETEVsQlJFUXNWMEZEUXl4SlFVUkVPMEZCUVVFc1VVRkRUeXhGUVVSUUxGZEJRMDhzUlVGRVVEczdRVUZGVUN4UlFVRk5MRWxCUVVrc1NVRkJWanRCUVVOQkxGRkJRVTBzU1VGQlNTeEZRVUZXT3p0QlFVVkJMRkZCUVUwc1YwRkJWeXhqUVVGakxHZERRVUZ4UWl4TFFVRkxMRmRCUVV3c1EwRkJhVUlzUTBGQmFrSXNSVUZCYjBJc1EwRkJjRUlzUTBGQmNrSXNSVUZCTmtNc1MwRkJTeXhYUVVGTUxFTkJRV2xDTEVOQlFXcENMRVZCUVc5Q0xFTkJRWEJDTEVOQlFUZERMRVZCUVhGRkxFVkJRVVVzVlVGQlJpeEZRVUZ5UlN4RFFVRmtMRU5CUVdwQ08wRkJRMEVzVVVGQlNTeFpRVUZaTEVOQlFXaENMRVZCUVcxQ08wRkJRMnBDTEdGQlFVOHNSVUZCUlN4SFFVRkdMRVZCUVZBN1FVRkRSQ3hMUVVaRUxFMUJSVTg3UVVGRFRDeFZRVUZOTEV0QlFVc3NaME5CUVhGQ0xFdEJRVXNzVjBGQlRDeERRVUZwUWl4RFFVRnFRaXhGUVVGdlFpeERRVUZ3UWl4RFFVRnlRaXhGUVVFMlF5eExRVUZMTEZkQlFVd3NRMEZCYVVJc1EwRkJha0lzUlVGQmIwSXNRMEZCY0VJc1EwRkJOME1zUlVGQmNVVXNVVUZCY2tVc1EwRkJXRHRCUVVOQkxGVkJRVTBzUzBGQlN5eG5RMEZCY1VJc1MwRkJTeXhYUVVGTUxFTkJRV2xDTEVOQlFXcENMRVZCUVc5Q0xFTkJRWEJDTEVOQlFYSkNMRVZCUVRaRExFdEJRVXNzVjBGQlRDeERRVUZwUWl4RFFVRnFRaXhGUVVGdlFpeERRVUZ3UWl4RFFVRTNReXhGUVVGeFJTeFJRVUZ5UlN4RFFVRllPMEZCUTBFc1lVRkJUeXhuUTBGQmNVSXNSVUZCY2tJc1JVRkJlVUlzUlVGQmVrSXNSVUZCTmtJc1VVRkJOMElzUTBGQlVEdEJRVU5FTzBGQlEwWXNSenM3T3pzN1FVRnlSa2NzVlN4RFFVTkhMRmtzUjBGQlpUdEJRVU53UWl4WlFVRlZPMEZCUkZVc1F6czdhMEpCZFVaVUxGVkJRVU1zUzBGQlJEdEJRVUZCTEZOQlFWY3NTVUZCU1N4VlFVRktMRU5CUVdVc1MwRkJaaXhEUVVGWU8wRkJRVUVzUXlJc0ltWnBiR1VpT2lKaWJHVnVaQzEwZDJWbGJuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JtbHRjRzl5ZENCN0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibWx0Y0c5eWRDQjdJR05zWVcxd0lIMGdabkp2YlNBbkxpNHZhVzVqTDNSeVlXNXpabTl5YldWeWN5YzdYRzVjYm1OdmJuTjBJR05zWVcxd1VISnZaM0psYzNNZ1BTQmpiR0Z0Y0Nnd0xDQXhLVHRjYmx4dVpuVnVZM1JwYjI0Z1kyRnNZMVpoYkhWbFFYUlVhVzFsS0daeWIyMHNJSFJ2TENCa2RYSmhkR2x2Yml3Z1pXeGhjSE5sWkN3Z1pXRnpaU2tnZTF4dUlDQmpiMjV6ZENCd2NtOW5jbVZ6YzBGMFZHbHRaU0E5SUdWaGMyVW9ZMnhoYlhCUWNtOW5jbVZ6Y3loblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTZ3dMQ0JrZFhKaGRHbHZiaXdnWld4aGNITmxaQ2twS1R0Y2JpQWdjbVYwZFhKdUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLR1p5YjIwc0lIUnZMQ0J3Y205bmNtVnpjMEYwVkdsdFpTazdYRzU5WEc1Y2JtTnNZWE56SUZSM1pXVnVRbXhsYm1RZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQnpkR0YwYVdNZ1pHVm1ZWFZzZEZCeWIzQnpJRDBnZTF4dUlDQWdJR0ZqWTNWeVlXTjVPaUEyTUZ4dUlDQjlPMXh1WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbWNtOXRMQ0IwYnl3Z1pIVnlZWFJwYjI0c0lHRmpZM1Z5WVdONUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR052Ym5OMElHRWdQU0JtY205dE8xeHVJQ0FnSUdOdmJuTjBJR0lnUFNCMGJ6dGNiaUFnSUNCamIyNXpkQ0JoUkhWeVlYUnBiMjRnUFNCaExtZGxkRVIxY21GMGFXOXVLQ2s3WEc0Z0lDQWdZMjl1YzNRZ1lrUjFjbUYwYVc5dUlEMGdZaTVuWlhSRWRYSmhkR2x2YmlncE8xeHVYRzRnSUNBZ2RHaHBjeTVrZFhKaGRHbHZiaUE5SUdSMWNtRjBhVzl1SUh4OElFMWhkR2d1YldsdUtGeHVJQ0FnSUNBZ1lVUjFjbUYwYVc5dUlDMGdZUzVuWlhSRmJHRndjMlZrS0Nrc1hHNGdJQ0FnSUNCaVJIVnlZWFJwYjI1Y2JpQWdJQ0FwTzF4dVhHNGdJQ0FnWTI5dWMzUWdZVVZoYzJVZ1BTQmhMbWRsZEZCeWIzQW9KMlZoYzJVbktUdGNiaUFnSUNCamIyNXpkQ0JpUldGelpTQTlJR0l1WjJWMFVISnZjQ2duWldGelpTY3BPMXh1SUNBZ0lHTnZibk4wSUdGR2NtOXRJRDBnWVM1blpYUlFjbTl3S0NkbWNtOXRKeWs3WEc0Z0lDQWdZMjl1YzNRZ1lrWnliMjBnUFNCaUxtZGxkRkJ5YjNBb0oyWnliMjBuS1R0Y2JpQWdJQ0JqYjI1emRDQmhWRzhnUFNCaExtZGxkRkJ5YjNBb0ozUnZKeWs3WEc0Z0lDQWdZMjl1YzNRZ1lsUnZJRDBnWWk1blpYUlFjbTl3S0NkMGJ5Y3BPMXh1SUNBZ0lHTnZibk4wSUdKV1lXeDFaVUYwUW14bGJtUkRiMjF3YkdWMFpTQTlJR05oYkdOV1lXeDFaVUYwVkdsdFpTaGlSbkp2YlN3Z1lsUnZMQ0JpUkhWeVlYUnBiMjRzSUhSb2FYTXVaSFZ5WVhScGIyNHNJR0pGWVhObEtUdGNiaUFnSUNCamIyNXpkQ0JpVTNSaGNuUnpTR2xuYUdWeVZHaGhia0VnUFNCaVJuSnZiU0ErSUdFdVoyVjBLQ2s3WEc1Y2JpQWdJQ0IwYUdsekxtSnNaVzVrVUc5cGJuUnpJRDBnVzF4dUlDQWdJQ0FnV3pBc0lHRXVaMlYwS0NsZExGeHVJQ0FnSUNBZ1czUm9hWE11WkhWeVlYUnBiMjRzSUdKV1lXeDFaVUYwUW14bGJtUkRiMjF3YkdWMFpWMWNiaUFnSUNCZE8xeHVYRzRnSUNBZ0x5OGdSbWx1WkNCMGQyVmxiaUJwYm5SbGNuTmxZM1JwYjI1Y2JpQWdJQ0JqYjI1emRDQjBhVzFsYzNSbGNDQTlJSFJvYVhNdVpIVnlZWFJwYjI0Z0x5QmhZMk4xY21GamVUdGNibHh1SUNBZ0lHeGxkQ0JtYjNWdVpGQXhJRDBnWm1Gc2MyVTdYRzRnSUNBZ2JHVjBJR1p2ZFc1a1VESWdQU0JtWVd4elpUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZV05qZFhKaFkzazdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnZEc5MFlXeFVhVzFsSUQwZ2FTQXFJSFJwYldWemRHVndPMXh1WEc0Z0lDQWdJQ0JqYjI1emRDQmhWbUZzZFdWQmRGUnBiV1VnUFNCallXeGpWbUZzZFdWQmRGUnBiV1VvWVVaeWIyMHNJR0ZVYnl3Z1lVUjFjbUYwYVc5dUxDQmhMbVZzWVhCelpXUWdLeUIwYjNSaGJGUnBiV1VzSUdGRllYTmxLVHRjYmlBZ0lDQWdJR052Ym5OMElHSldZV3gxWlVGMFZHbHRaU0E5SUdOaGJHTldZV3gxWlVGMFZHbHRaU2hpUm5KdmJTd2dZbFJ2TENCaVJIVnlZWFJwYjI0c0lHSXVaV3hoY0hObFpDQXJJSFJ2ZEdGc1ZHbHRaU3dnWWtWaGMyVXBPMXh1WEc0Z0lDQWdJQ0JqYjI1emRDQm9ZWE5KYm5SbGNuTmxZM1JsWkNBOUlDaGNiaUFnSUNBZ0lDQWdLR0pUZEdGeWRITklhV2RvWlhKVWFHRnVRU0FtSmlCaFZtRnNkV1ZCZEZScGJXVWdQQ0JpVm1Gc2RXVkJkRlJwYldVcElIeDhYRzRnSUNBZ0lDQWdJQ2doWWxOMFlYSjBjMGhwWjJobGNsUm9ZVzVCSUNZbUlHRldZV3gxWlVGMFZHbHRaU0ErSUdKV1lXeDFaVUYwVkdsdFpTbGNiaUFnSUNBZ0lDazdYRzVjYmlBZ0lDQWdJR2xtSUNnaFptOTFibVJRTVNBbUppQm9ZWE5KYm5SbGNuTmxZM1JsWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Kc1pXNWtVRzlwYm5SekxuTndiR2xqWlNnd0xDQXhMQ0JiZEc5MFlXeFVhVzFsTENCaVZtRnNkV1ZCZEZScGJXVmRLVHRjYmlBZ0lDQWdJQ0FnWm05MWJtUlFNU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUZSUFJFOGdaMjhnWW1GamF5QjBhSEp2ZFdkb0lHRnVaQ0JqYjIxdFpXNTBYRzRnSUNBZ0lDQmpiMjV6ZENCb1lYTkpiblJsY25ObFkzUmxaRUlnUFNBb1hHNGdJQ0FnSUNBZ0lDaGlVM1JoY25SelNHbG5hR1Z5VkdoaGJrRWdKaVlnWVZaaGJIVmxRWFJVYVcxbElEd2dZbFpoYkhWbFFYUlVhVzFsS1NCOGZGeHVJQ0FnSUNBZ0lDQW9JV0pUZEdGeWRITklhV2RvWlhKVWFHRnVRU0FtSmlCaFZtRnNkV1ZCZEZScGJXVWdQaUJpVm1Gc2RXVkJkRlJwYldVcFhHNGdJQ0FnSUNBcE8xeHVYRzRnSUNBZ0lDQnBaaUFvWm05MWJtUlFNU0FtSmlCb1lYTkpiblJsY25ObFkzUmxaRUlwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYkdWdVpGQnZhVzUwYzFzeVhTQTlJRnQwYjNSaGJGUnBiV1VzSUdKV1lXeDFaVUYwVkdsdFpWMDdYRzRnSUNBZ0lDQWdJR1p2ZFc1a1VESWdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvWm05MWJtUlFNaWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkRzh1YzNSaGNuUW9LVHRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1p5YjIwc0lIUnZJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJR0VnUFNCbWNtOXRPMXh1SUNBZ0lHTnZibk4wSUdJZ1BTQjBienRjYmx4dUlDQWdJR052Ym5OMElIQnliMmR5WlhOeklEMGdZMnhoYlhCUWNtOW5jbVZ6Y3loblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaDBhR2x6TG1Kc1pXNWtVRzlwYm5Seld6QmRXekJkTENCMGFHbHpMbUpzWlc1a1VHOXBiblJ6V3pKZFd6QmRMQ0JoTG1kbGRFVnNZWEJ6WldRb0tTa3BPMXh1SUNBZ0lHbG1JQ2h3Y205bmNtVnpjeUErUFNBeEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1lpNW5aWFFvS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdZMjl1YzNRZ1lWQWdQU0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3loMGFHbHpMbUpzWlc1a1VHOXBiblJ6V3pCZFd6RmRMQ0IwYUdsekxtSnNaVzVrVUc5cGJuUnpXekZkV3pGZExDQndjbTluY21WemN5azdYRzRnSUNBZ0lDQmpiMjV6ZENCaVVDQTlJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0hSb2FYTXVZbXhsYm1SUWIybHVkSE5iTVYxYk1WMHNJSFJvYVhNdVlteGxibVJRYjJsdWRITmJNbDFiTVYwc0lIQnliMmR5WlhOektUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aGhVQ3dnWWxBc0lIQnliMmR5WlhOektUdGNiaUFnSUNCOVhHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tIQnliM0J6S1NBOVBpQnVaWGNnVkhkbFpXNUNiR1Z1WkNod2NtOXdjeWs3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvYmxlbmQtdHdlZW5zLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENoYWluID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENoYWluLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDaGFpbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFpbik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnBsYXlOZXh0ID0gX3RoaXMucGxheU5leHQuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgQ2hhaW4ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHRoaXMucHJvcHMuaSA9IDA7XG4gICAgdGhpcy5wbGF5Q3VycmVudCgpO1xuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5wbGF5TmV4dCA9IGZ1bmN0aW9uIHBsYXlOZXh0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBpID0gX3Byb3BzLmk7XG4gICAgdmFyIG9yZGVyID0gX3Byb3BzLm9yZGVyO1xuXG4gICAgaWYgKGkgPCBvcmRlci5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnByb3BzLmkrKztcbiAgICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheUN1cnJlbnQgPSBmdW5jdGlvbiBwbGF5Q3VycmVudCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGkgPSBfcHJvcHMyLmk7XG4gICAgdmFyIG9yZGVyID0gX3Byb3BzMi5vcmRlcjtcblxuICAgIG9yZGVyW2ldLnByb3BzLl9vbkNvbXBsZXRlID0gdGhpcy5wbGF5TmV4dDtcbiAgICBvcmRlcltpXS5zdGFydCgpO1xuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBpID0gX3Byb3BzMy5pO1xuICAgIHZhciBvcmRlciA9IF9wcm9wczMub3JkZXI7XG5cbiAgICBvcmRlcltpXS5zdG9wKCk7XG4gIH07XG5cbiAgcmV0dXJuIENoYWluO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9yZGVyLCBvbkNvbXBsZXRlKSB7XG4gIHJldHVybiBuZXcgQ2hhaW4oeyBvcmRlcjogb3JkZXIsIG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk5vWVdsdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenM3T3pzN096czdPMGxCUlUwc1N6czdPMEZCUTBvc2FVSkJRVmtzUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVGQkxHbEVRVU5xUWl4dFFrRkJUU3hMUVVGT0xFTkJSR2xDT3p0QlFVVnFRaXhWUVVGTExGRkJRVXdzUjBGQlowSXNUVUZCU3l4UlFVRk1MRU5CUVdNc1NVRkJaQ3hQUVVGb1FqdEJRVVpwUWp0QlFVZHNRanM3YTBKQlJVUXNUeXh6UWtGQlZUdEJRVU5TTEZOQlFVc3NTMEZCVEN4RFFVRlhMRU5CUVZnc1IwRkJaU3hEUVVGbU8wRkJRMEVzVTBGQlN5eFhRVUZNTzBGQlEwUXNSenM3YTBKQlJVUXNVU3gxUWtGQlZ6dEJRVUZCTEdsQ1FVTlpMRXRCUVVzc1MwRkVha0k3UVVGQlFTeFJRVU5FTEVOQlJFTXNWVUZEUkN4RFFVUkRPMEZCUVVFc1VVRkRSU3hMUVVSR0xGVkJRMFVzUzBGRVJqczdRVUZGVkN4UlFVRkpMRWxCUVVrc1RVRkJUU3hOUVVGT0xFZEJRV1VzUTBGQmRrSXNSVUZCTUVJN1FVRkRlRUlzVjBGQlN5eExRVUZNTEVOQlFWY3NRMEZCV0R0QlFVTkJMRmRCUVVzc1YwRkJURHRCUVVORUxFdEJTRVFzVFVGSFR6dEJRVU5NTEZkQlFVc3NVVUZCVER0QlFVTkVPMEZCUTBZc1J6czdhMEpCUlVRc1Z5d3dRa0ZCWXp0QlFVRkJMR3RDUVVOVExFdEJRVXNzUzBGRVpEdEJRVUZCTEZGQlEwb3NRMEZFU1N4WFFVTktMRU5CUkVrN1FVRkJRU3hSUVVORUxFdEJSRU1zVjBGRFJDeExRVVJET3p0QlFVVmFMRlZCUVUwc1EwRkJUaXhGUVVGVExFdEJRVlFzUTBGQlpTeFhRVUZtTEVkQlFUWkNMRXRCUVVzc1VVRkJiRU03UVVGRFFTeFZRVUZOTEVOQlFVNHNSVUZCVXl4TFFVRlVPMEZCUTBRc1J6czdhMEpCUlVRc1RTeHhRa0ZCVXp0QlFVRkJMR3RDUVVOakxFdEJRVXNzUzBGRWJrSTdRVUZCUVN4UlFVTkRMRU5CUkVRc1YwRkRReXhEUVVSRU8wRkJRVUVzVVVGRFNTeExRVVJLTEZkQlEwa3NTMEZFU2pzN1FVRkZVQ3hWUVVGTkxFTkJRVTRzUlVGQlV5eEpRVUZVTzBGQlEwUXNSenM3T3pzN2EwSkJSMWtzVlVGQlF5eExRVUZFTEVWQlFWRXNWVUZCVWp0QlFVRkJMRk5CUVhWQ0xFbEJRVWtzUzBGQlNpeERRVUZWTEVWQlFVVXNXVUZCUml4RlFVRlRMSE5DUVVGVUxFVkJRVllzUTBGQmRrSTdRVUZCUVN4RElpd2labWxzWlNJNkltTm9ZV2x1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVjYm1Oc1lYTnpJRU5vWVdsdUlHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITXBJSHRjYmlBZ0lDQnpkWEJsY2lod2NtOXdjeWs3WEc0Z0lDQWdkR2hwY3k1d2JHRjVUbVY0ZENBOUlIUm9hWE11Y0d4aGVVNWxlSFF1WW1sdVpDaDBhR2x6S1R0Y2JpQWdmVnh1WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ2RHaHBjeTV3Y205d2N5NXBJRDBnTUR0Y2JpQWdJQ0IwYUdsekxuQnNZWGxEZFhKeVpXNTBLQ2s3WEc0Z0lIMWNibHh1SUNCd2JHRjVUbVY0ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdrc0lHOXlaR1Z5SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHbG1JQ2hwSUR3Z2IzSmtaWEl1YkdWdVozUm9JQzBnTVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV3Y205d2N5NXBLeXM3WEc0Z0lDQWdJQ0IwYUdsekxuQnNZWGxEZFhKeVpXNTBLQ2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11WTI5dGNHeGxkR1VvS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCd2JHRjVRM1Z5Y21WdWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHa3NJRzl5WkdWeUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJRzl5WkdWeVcybGRMbkJ5YjNCekxsOXZia052YlhCc1pYUmxJRDBnZEdocGN5NXdiR0Y1VG1WNGREdGNiaUFnSUNCdmNtUmxjbHRwWFM1emRHRnlkQ2dwTzF4dUlDQjlYRzVjYmlBZ2IyNVRkRzl3S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVN3Z2IzSmtaWElnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2IzSmtaWEpiYVYwdWMzUnZjQ2dwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNodmNtUmxjaXdnYjI1RGIyMXdiR1YwWlNrZ1BUNGdibVYzSUVOb1lXbHVLSHNnYjNKa1pYSXNJRzl1UTI5dGNHeGxkR1VnZlNrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NoYWluLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ29tcG9zaXRlQWN0aW9uID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENvbXBvc2l0ZUFjdGlvbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ29tcG9zaXRlQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvc2l0ZUFjdGlvbik7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHByb3BzLmFjdGlvbnM7XG5cbiAgICB2YXIgcmVtYWluaW5nUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsnYWN0aW9ucyddKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCByZW1haW5pbmdQcm9wcykpO1xuXG4gICAgX3RoaXMuY3VycmVudCA9IHt9O1xuICAgIF90aGlzLmFjdGlvbktleXMgPSBbXTtcbiAgICBfdGhpcy5hZGRBY3Rpb25zKHByb3BzLmFjdGlvbnMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIGFkZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKF90aGlzMi5hY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgX3RoaXMyLmFjdGlvbktleXMucHVzaChrZXkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczJba2V5XSA9IGFjdGlvbnNba2V5XTtcblxuICAgICAgdmFyIG9uVXBkYXRlID0gZnVuY3Rpb24gKHYsIGFjdGlvbikge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmN1cnJlbnRba2V5XSA9IGFjdGlvbi5nZXQoKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIEltbWVkaWF0ZWx5IHVwZGF0ZSB3aXRoIHRoZSBjdXJyZW50IGFjdGlvbiBzdGF0ZVxuICAgICAgb25VcGRhdGUobnVsbCwgX3RoaXMyW2tleV0pO1xuXG4gICAgICBfdGhpczJba2V5XS5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuYWRkTGlzdGVuZXIob25VcGRhdGUpO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYWN0aW9ucykge1xuICAgICAgX2xvb3Aoa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9uS2V5cy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzM1trZXldLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXM0W2tleV0uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciB2ZWxvY2l0eSA9IHt9O1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2ZWxvY2l0eVtrZXldID0gX3RoaXM1W2tleV0uZ2V0VmVsb2NpdHkoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwO1xuICB9O1xuXG4gIHJldHVybiBDb21wb3NpdGVBY3Rpb247XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oX2V4dGVuZHMoe1xuICAgIGFjdGlvbnM6IGFjdGlvbnNcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnZiWEJ2YzJsMFpTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3pzN096czdPenM3T3pzN1NVRkZUU3hsT3pzN1FVRkRTaXd5UWtGQldTeExRVUZhTEVWQlFXMUNPMEZCUVVFN08wRkJRVUVzVVVGRFZDeFBRVVJUTEVkQlEzTkNMRXRCUkhSQ0xFTkJRMVFzVDBGRVV6czdRVUZCUVN4UlFVTkhMR05CUkVnc05FSkJRM05DTEV0QlJIUkNPenRCUVVGQkxHbEVRVVZxUWl4dFFrRkJUU3hqUVVGT0xFTkJSbWxDT3p0QlFVZHFRaXhWUVVGTExFOUJRVXdzUjBGQlpTeEZRVUZtTzBGQlEwRXNWVUZCU3l4VlFVRk1MRWRCUVd0Q0xFVkJRV3hDTzBGQlEwRXNWVUZCU3l4VlFVRk1MRU5CUVdkQ0xFMUJRVTBzVDBGQmRFSTdRVUZNYVVJN1FVRk5iRUk3T3pSQ1FVVkVMRlVzZFVKQlFWY3NUeXhGUVVGVE8wRkJRVUU3TzBGQlFVRXNNRUpCUTFBc1IwRkVUenRCUVVWb1FpeFZRVUZKTEU5QlFVc3NWVUZCVEN4RFFVRm5RaXhQUVVGb1FpeERRVUYzUWl4SFFVRjRRaXhOUVVGcFF5eERRVUZETEVOQlFYUkRMRVZCUVhsRE8wRkJRM1pETEdWQlFVc3NWVUZCVEN4RFFVRm5RaXhKUVVGb1FpeERRVUZ4UWl4SFFVRnlRanRCUVVORU96dEJRVVZFTEdGQlFVc3NSMEZCVEN4SlFVRlpMRkZCUVZFc1IwRkJVaXhEUVVGYU96dEJRVVZCTEZWQlFVMHNWMEZCVnl4VlFVRkRMRU5CUVVRc1JVRkJTU3hOUVVGS08wRkJRVUVzWlVGQlpTeFBRVUZMTEU5QlFVd3NRMEZCWVN4SFFVRmlMRWxCUVc5Q0xFOUJRVThzUjBGQlVDeEZRVUZ1UXp0QlFVRkJMRTlCUVdwQ096czdRVUZIUVN4bFFVRlRMRWxCUVZRc1JVRkJaU3hQUVVGTExFZEJRVXdzUTBGQlpqczdRVUZGUVN4aFFVRkxMRWRCUVV3c1JVRkRSeXhSUVVSSUxFTkJRMWs3UVVGRFVpeHBRa0ZCVXp0QlFVRkJMR2xDUVVGTkxFOUJRVXNzWjBKQlFVd3NSVUZCVGp0QlFVRkJPMEZCUkVRc1QwRkVXaXhGUVVsSExGZEJTa2dzUTBGSlpTeFJRVXBtTzBGQlltZENPenRCUVVOc1FpeFRRVUZMTEVsQlFVMHNSMEZCV0N4SlFVRnJRaXhQUVVGc1FpeEZRVUV5UWp0QlFVRkJMRmxCUVdoQ0xFZEJRV2RDTzBGQmFVSXhRanRCUVVOR0xFYzdPelJDUVVWRUxFOHNjMEpCUVZVN1FVRkJRVHM3UVVGRFVpeFRRVUZMTEdkQ1FVRk1MRWRCUVhkQ0xFdEJRVXNzVlVGQlRDeERRVUZuUWl4TlFVRjRRenRCUVVOQkxGTkJRVXNzVlVGQlRDeERRVUZuUWl4UFFVRm9RaXhEUVVGM1FpeFZRVUZETEVkQlFVUTdRVUZCUVN4aFFVRlRMRTlCUVVzc1IwRkJUQ3hGUVVGVkxFdEJRVllzUlVGQlZEdEJRVUZCTEV0QlFYaENPMEZCUTBRc1J6czdORUpCUlVRc1RTeHhRa0ZCVXp0QlFVRkJPenRCUVVOUUxGTkJRVXNzVlVGQlRDeERRVUZuUWl4UFFVRm9RaXhEUVVGM1FpeFZRVUZETEVkQlFVUTdRVUZCUVN4aFFVRlRMRTlCUVVzc1IwRkJUQ3hGUVVGVkxFbEJRVllzUlVGQlZEdEJRVUZCTEV0QlFYaENPMEZCUTBRc1J6czdORUpCUlVRc1Z5d3dRa0ZCWXp0QlFVRkJPenRCUVVOYUxGRkJRVTBzVjBGQlZ5eEZRVUZxUWp0QlFVTkJMRk5CUVVzc1ZVRkJUQ3hEUVVGblFpeFBRVUZvUWl4RFFVRjNRaXhWUVVGRExFZEJRVVE3UVVGQlFTeGhRVUZUTEZOQlFWTXNSMEZCVkN4SlFVRm5RaXhQUVVGTExFZEJRVXdzUlVGQlZTeFhRVUZXTEVWQlFYcENPMEZCUVVFc1MwRkJlRUk3UVVGRFFTeFhRVUZQTEZGQlFWQTdRVUZEUkN4SE96czBRa0ZGUkN4blFpd3JRa0ZCYlVJN1FVRkRha0lzVjBGQlVTeExRVUZMTEdkQ1FVRk1MRXRCUVRCQ0xFTkJRV3hETzBGQlEwUXNSenM3T3pzN2EwSkJSMWtzVlVGQlF5eFBRVUZFTEVWQlFWVXNTMEZCVml4RlFVRnZRanRCUVVOcVF5eFRRVUZQTEVsQlFVa3NaVUZCU2p0QlFVTk1PMEZCUkVzc1MwRkZSaXhMUVVaRkxFVkJRVkE3UVVGSlJDeERJaXdpWm1sc1pTSTZJbU52YlhCdmMybDBaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVYRzVqYkdGemN5QkRiMjF3YjNOcGRHVkJZM1JwYjI0Z1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1lXTjBhVzl1Y3l3Z0xpNHVjbVZ0WVdsdWFXNW5VSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0FnSUhOMWNHVnlLSEpsYldGcGJtbHVaMUJ5YjNCektUdGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdQU0I3ZlR0Y2JpQWdJQ0IwYUdsekxtRmpkR2x2Ymt0bGVYTWdQU0JiWFR0Y2JpQWdJQ0IwYUdsekxtRmtaRUZqZEdsdmJuTW9jSEp2Y0hNdVlXTjBhVzl1Y3lrN1hHNGdJSDFjYmx4dUlDQmhaR1JCWTNScGIyNXpLR0ZqZEdsdmJuTXBJSHRjYmlBZ0lDQm1iM0lnS0dOdmJuTjBJR3RsZVNCcGJpQmhZM1JwYjI1ektTQjdYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NWhZM1JwYjI1TFpYbHpMbWx1WkdWNFQyWW9hMlY1S1NBOVBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWTNScGIyNUxaWGx6TG5CMWMyZ29hMlY1S1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2RHaHBjMXRyWlhsZElEMGdZV04wYVc5dWMxdHJaWGxkTzF4dVhHNGdJQ0FnSUNCamIyNXpkQ0J2YmxWd1pHRjBaU0E5SUNoMkxDQmhZM1JwYjI0cElEMCtJSFJvYVhNdVkzVnljbVZ1ZEZ0clpYbGRJRDBnWVdOMGFXOXVMbWRsZENncE8xeHVYRzRnSUNBZ0lDQXZMeUJKYlcxbFpHbGhkR1ZzZVNCMWNHUmhkR1VnZDJsMGFDQjBhR1VnWTNWeWNtVnVkQ0JoWTNScGIyNGdjM1JoZEdWY2JpQWdJQ0FnSUc5dVZYQmtZWFJsS0c1MWJHd3NJSFJvYVhOYmEyVjVYU2s3WEc1Y2JpQWdJQ0FnSUhSb2FYTmJhMlY1WFZ4dUlDQWdJQ0FnSUNBdWMyVjBVSEp2Y0hNb2UxeHVJQ0FnSUNBZ0lDQWdJRjl2YmxOMGIzQTZJQ2dwSUQwK0lIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeTB0WEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnSUNBZ0lDNWhaR1JNYVhOMFpXNWxjaWh2YmxWd1pHRjBaU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5NZ1BTQjBhR2x6TG1GamRHbHZia3RsZVhNdWJHVnVaM1JvTzF4dUlDQWdJSFJvYVhNdVlXTjBhVzl1UzJWNWN5NW1iM0pGWVdOb0tDaHJaWGtwSUQwK0lIUm9hWE5iYTJWNVhTNXpkR0Z5ZENncEtUdGNiaUFnZlZ4dVhHNGdJRzl1VTNSdmNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1GamRHbHZia3RsZVhNdVptOXlSV0ZqYUNnb2EyVjVLU0E5UGlCMGFHbHpXMnRsZVYwdWMzUnZjQ2dwS1R0Y2JpQWdmVnh1WEc0Z0lHZGxkRlpsYkc5amFYUjVLQ2tnZTF4dUlDQWdJR052Ym5OMElIWmxiRzlqYVhSNUlEMGdlMzA3WEc0Z0lDQWdkR2hwY3k1aFkzUnBiMjVMWlhsekxtWnZja1ZoWTJnb0tHdGxlU2tnUFQ0Z2RtVnNiMk5wZEhsYmEyVjVYU0E5SUhSb2FYTmJhMlY1WFM1blpYUldaV3h2WTJsMGVTZ3BLVHRjYmlBZ0lDQnlaWFIxY200Z2RtVnNiMk5wZEhrN1hHNGdJSDFjYmx4dUlDQnBjMEZqZEdsdmJrTnZiWEJzWlhSbEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlBb2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpJRDA5UFNBd0tUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9ZV04wYVc5dWN5d2djSEp2Y0hNcElEMCtJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5QkRiMjF3YjNOcGRHVkJZM1JwYjI0b2UxeHVJQ0FnSUdGamRHbHZibk1zWEc0Z0lDQWdMaTR1Y0hKdmNITmNiaUFnZlNrN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vaW5jL2Vhc2luZycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDcm9zc0ZhZGUgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ3Jvc3NGYWRlLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDcm9zc0ZhZGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENyb3NzRmFkZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENyb3NzRmFkZS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uO1xuICAgIHZhciBlYXNlID0gX3Byb3BzLmVhc2U7XG4gICAgdmFyIGZhZGVyID0gX3Byb3BzLmZhZGVyO1xuXG5cbiAgICB0aGlzLmZhZGVyID0gZmFkZXIgfHwgKDAsIF90d2VlbjIuZGVmYXVsdCkoe1xuICAgICAgdG86IDEsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNlOiBlYXNlXG4gICAgfSkuc3RhcnQoKTtcbiAgfTtcblxuICBDcm9zc0ZhZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZyb20gPSBfcHJvcHMyLmZyb207XG4gICAgdmFyIHRvID0gX3Byb3BzMi50bztcblxuICAgIHZhciBiYWxhbmNlID0gdGhpcy5mYWRlci5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0RnJvbVZhbHVlID0gZnJvbS5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0VG9WYWx1ZSA9IHRvLmdldCgpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGxhdGVzdEZyb21WYWx1ZSwgbGF0ZXN0VG9WYWx1ZSwgYmFsYW5jZSk7XG4gIH07XG5cbiAgcmV0dXJuIENyb3NzRmFkZTtcbn0oXzIuZGVmYXVsdCk7XG5cbkNyb3NzRmFkZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGVhc2U6IF9lYXNpbmcubGluZWFyXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDcm9zc0ZhZGUocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOeWIzTnpMV1poWkdVdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTkxGTTdPenM3T3pzN096dHpRa0ZMU2l4UExITkNRVUZWTzBGQlFVRXNhVUpCUXpCQ0xFdEJRVXNzUzBGRUwwSTdRVUZCUVN4UlFVTkJMRkZCUkVFc1ZVRkRRU3hSUVVSQk8wRkJRVUVzVVVGRFZTeEpRVVJXTEZWQlExVXNTVUZFVmp0QlFVRkJMRkZCUTJkQ0xFdEJSR2hDTEZWQlEyZENMRXRCUkdoQ096czdRVUZIVWl4VFFVRkxMRXRCUVV3c1IwRkJZU3hUUVVGVExIRkNRVUZOTzBGQlF6RkNMRlZCUVVrc1EwRkVjMEk3UVVGRk1VSXNkMEpCUmpCQ08wRkJSekZDTzBGQlNEQkNMRXRCUVU0c1JVRkpia0lzUzBGS2JVSXNSVUZCZEVJN1FVRkxSQ3hIT3p0elFrRkZSQ3hOTEhGQ1FVRlRPMEZCUVVFc2EwSkJRMk1zUzBGQlN5eExRVVJ1UWp0QlFVRkJMRkZCUTBNc1NVRkVSQ3hYUVVORExFbEJSRVE3UVVGQlFTeFJRVU5QTEVWQlJGQXNWMEZEVHl4RlFVUlFPenRCUVVWUUxGRkJRVTBzVlVGQlZTeExRVUZMTEV0QlFVd3NRMEZCVnl4SFFVRllMRVZCUVdoQ08wRkJRMEVzVVVGQlRTeHJRa0ZCYTBJc1MwRkJTeXhIUVVGTUxFVkJRWGhDTzBGQlEwRXNVVUZCVFN4blFrRkJaMElzUjBGQlJ5eEhRVUZJTEVWQlFYUkNPMEZCUTBFc1YwRkJUeXhuUTBGQmNVSXNaVUZCY2tJc1JVRkJjME1zWVVGQmRFTXNSVUZCY1VRc1QwRkJja1FzUTBGQlVEdEJRVU5FTEVjN096czdPMEZCY2tKSExGTXNRMEZEUnl4WkxFZEJRV1U3UVVGRGNFSTdRVUZFYjBJc1F6czdhMEpCZFVKVUxGVkJRVU1zUzBGQlJEdEJRVUZCTEZOQlFWY3NTVUZCU1N4VFFVRktMRU5CUVdNc1MwRkJaQ3hEUVVGWU8wRkJRVUVzUXlJc0ltWnBiR1VpT2lKamNtOXpjeTFtWVdSbExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1cGJYQnZjblFnZEhkbFpXNGdabkp2YlNBbkxpOTBkMlZsYmljN1hHNXBiWEJ2Y25RZ2V5QnNhVzVsWVhJZ2ZTQm1jbTl0SUNjdUxpOXBibU12WldGemFXNW5KenRjYm1sdGNHOXlkQ0I3SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOeklIMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1WEc1amJHRnpjeUJEY205emMwWmhaR1VnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCemRHRjBhV01nWkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNBZ0lHVmhjMlU2SUd4cGJtVmhjbHh1SUNCOVhHNWNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1IxY21GMGFXOXVMQ0JsWVhObExDQm1ZV1JsY2lCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJSFJvYVhNdVptRmtaWElnUFNCbVlXUmxjaUI4ZkNCMGQyVmxiaWg3WEc0Z0lDQWdJQ0IwYnpvZ01TeGNiaUFnSUNBZ0lHUjFjbUYwYVc5dUxGeHVJQ0FnSUNBZ1pXRnpaVnh1SUNBZ0lIMHBMbk4wWVhKMEtDazdYRzRnSUgxY2JseHVJQ0IxY0dSaGRHVW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5Qm1jbTl0TENCMGJ5QjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JqYjI1emRDQmlZV3hoYm1ObElEMGdkR2hwY3k1bVlXUmxjaTVuWlhRb0tUdGNiaUFnSUNCamIyNXpkQ0JzWVhSbGMzUkdjbTl0Vm1Gc2RXVWdQU0JtY205dExtZGxkQ2dwTzF4dUlDQWdJR052Ym5OMElHeGhkR1Z6ZEZSdlZtRnNkV1VnUFNCMGJ5NW5aWFFvS1R0Y2JpQWdJQ0J5WlhSMWNtNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vYkdGMFpYTjBSbkp2YlZaaGJIVmxMQ0JzWVhSbGMzUlViMVpoYkhWbExDQmlZV3hoYm1ObEtUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9jSEp2Y0hNcElEMCtJRzVsZHlCRGNtOXpjMFpoWkdVb2NISnZjSE1wTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgb25Db21wbGV0ZSkge1xuICByZXR1cm4gKDAsIF90d2VlbjIuZGVmYXVsdCkoeyBkdXJhdGlvbjogZHVyYXRpb24sIG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlJsYkdGNUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenM3TzJ0Q1FVVmxMRlZCUVVNc1VVRkJSQ3hGUVVGWExGVkJRVmc3UVVGQlFTeFRRVUV3UWl4eFFrRkJUU3hGUVVGRkxHdENRVUZHTEVWQlFWa3NjMEpCUVZvc1JVRkJUaXhEUVVFeFFqdEJRVUZCTEVNaUxDSm1hV3hsSWpvaVpHVnNZWGt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5MGQyVmxiaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoa2RYSmhkR2x2Yml3Z2IyNURiMjF3YkdWMFpTa2dQVDRnZEhkbFpXNG9leUJrZFhKaGRHbHZiaXdnYjI1RGIyMXdiR1YwWlNCOUtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9kZWxheS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgT2Zmc2V0ID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKE9mZnNldCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gT2Zmc2V0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPZmZzZXQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBPZmZzZXQucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGlucHV0ID0gdGhpcy5wcm9wcy5pbnB1dDtcblxuICAgIHRoaXMuaW5wdXRPcmlnaW4gPSBpbnB1dC5nZXQoKTtcblxuICAgIHRoaXMuc2NoZWR1bGVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKShfdGhpczIuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuYWRkTGlzdGVuZXIodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gIH07XG5cbiAgT2Zmc2V0LnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5wcm9wcy5pbnB1dDtcblxuICAgIGlucHV0LnJlbW92ZUxpc3RlbmVyKHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICB9O1xuXG4gIE9mZnNldC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBpbnB1dCA9IF9wcm9wcy5pbnB1dDtcbiAgICB2YXIgZnJvbSA9IF9wcm9wcy5mcm9tO1xuXG4gICAgdmFyIG9mZnNldCA9IGlucHV0LmdldCgpIC0gdGhpcy5pbnB1dE9yaWdpbjtcbiAgICByZXR1cm4gZnJvbSArIG9mZnNldDtcbiAgfTtcblxuICByZXR1cm4gT2Zmc2V0O1xufShfMi5kZWZhdWx0KTtcblxuT2Zmc2V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZnJvbTogMCxcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmdzWzBdO1xuXG4gICAgcmV0dXJuIG5ldyBPZmZzZXQocHJvcHMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnB1dCA9IGFyZ3NbMF07XG4gICAgdmFyIG9uVXBkYXRlID0gYXJnc1sxXTtcbiAgICB2YXIgX3Byb3BzMiA9IGFyZ3NbMl07XG5cbiAgICByZXR1cm4gbmV3IE9mZnNldChfZXh0ZW5kcyh7XG4gICAgICBpbnB1dDogaW5wdXQsXG4gICAgICBvblVwZGF0ZTogb25VcGRhdGVcbiAgICB9LCBfcHJvcHMyKSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyOW1abk5sZEM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTBzVFRzN096czdPenM3TzIxQ1FVMUtMRThzYzBKQlFWVTdRVUZCUVRzN1FVRkJRU3hSUVVOQkxFdEJSRUVzUjBGRFZTeExRVUZMTEV0QlJHWXNRMEZEUVN4TFFVUkJPenRCUVVWU0xGTkJRVXNzVjBGQlRDeEhRVUZ0UWl4TlFVRk5MRWRCUVU0c1JVRkJia0k3TzBGQlJVRXNVMEZCU3l4alFVRk1MRWRCUVhOQ0xGbEJRVTA3UVVGRE1VSXNiME5CUVdNc1QwRkJTeXhsUVVGdVFqdEJRVU5FTEV0QlJrUTdPMEZCU1VFc1ZVRkJUU3hYUVVGT0xFTkJRV3RDTEV0QlFVc3NZMEZCZGtJN1FVRkRSQ3hIT3p0dFFrRkZSQ3hOTEhGQ1FVRlRPMEZCUVVFc1VVRkRReXhMUVVSRUxFZEJRMWNzUzBGQlN5eExRVVJvUWl4RFFVTkRMRXRCUkVRN08wRkJSVkFzVlVGQlRTeGpRVUZPTEVOQlFYRkNMRXRCUVVzc1kwRkJNVUk3UVVGRFJDeEhPenR0UWtGRlJDeE5MSEZDUVVGVE8wRkJRVUVzYVVKQlEybENMRXRCUVVzc1MwRkVkRUk3UVVGQlFTeFJRVU5ETEV0QlJFUXNWVUZEUXl4TFFVUkVPMEZCUVVFc1VVRkRVU3hKUVVSU0xGVkJRMUVzU1VGRVVqczdRVUZGVUN4UlFVRk5MRk5CUVZNc1RVRkJUU3hIUVVGT0xFdEJRV01zUzBGQlN5eFhRVUZzUXp0QlFVTkJMRmRCUVU4c1QwRkJUeXhOUVVGa08wRkJRMFFzUnpzN096czdRVUV4UWtjc1RTeERRVU5ITEZrc1IwRkJaVHRCUVVOd1FpeFJRVUZOTEVOQlJHTTdRVUZGY0VJc1YwRkJVenRCUVVaWExFTTdPMnRDUVRSQ1ZDeFpRVUZoTzBGQlFVRXNiME5CUVZRc1NVRkJVenRCUVVGVUxGRkJRVk03UVVGQlFUczdRVUZETVVJc1RVRkJTU3hMUVVGTExFMUJRVXdzUzBGQlowSXNRMEZCY0VJc1JVRkJkVUk3UVVGQlFTeFJRVU5pTEV0QlJHRXNSMEZEU0N4SlFVUkhPenRCUVVWeVFpeFhRVUZQTEVsQlFVa3NUVUZCU2l4RFFVRlhMRXRCUVZnc1EwRkJVRHRCUVVORUxFZEJTRVFzVFVGSFR6dEJRVUZCTEZGQlEwY3NTMEZFU0N4SFFVTTRRaXhKUVVRNVFqdEJRVUZCTEZGQlExVXNVVUZFVml4SFFVTTRRaXhKUVVRNVFqdEJRVUZCTEZGQlEyOUNMRTlCUkhCQ0xFZEJRemhDTEVsQlJEbENPenRCUVVWTUxGZEJRVThzU1VGQlNTeE5RVUZLTzBGQlEwd3NhMEpCUkVzN1FVRkZURHRCUVVaTExFOUJSMFlzVDBGSVJTeEZRVUZRTzBGQlMwUTdRVUZEUml4RElpd2labWxzWlNJNkltOW1abk5sZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnYjI1R2NtRnRaVlZ3WkdGMFpTQjlJR1p5YjIwZ0p5NHVMMlp5WVcxbGMzbHVZeWM3WEc1Y2JtTnNZWE56SUU5bVpuTmxkQ0JsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUhOMFlYUnBZeUJrWldaaGRXeDBVSEp2Y0hNZ1BTQjdYRzRnSUNBZ1puSnZiVG9nTUN4Y2JpQWdJQ0J3WVhOemFYWmxPaUIwY25WbFhHNGdJSDA3WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHbHVjSFYwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lIUm9hWE11YVc1d2RYUlBjbWxuYVc0Z1BTQnBibkIxZEM1blpYUW9LVHRjYmx4dUlDQWdJSFJvYVhNdWMyTm9aV1IxYkdWVmNHUmhkR1VnUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdhVzV3ZFhRdVlXUmtUR2x6ZEdWdVpYSW9kR2hwY3k1elkyaGxaSFZzWlZWd1pHRjBaU2s3WEc0Z0lIMWNibHh1SUNCdmJsTjBiM0FvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJwYm5CMWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JwYm5CMWRDNXlaVzF2ZG1WTWFYTjBaVzVsY2loMGFHbHpMbk5qYUdWa2RXeGxWWEJrWVhSbEtUdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHbHVjSFYwTENCbWNtOXRJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJRzltWm5ObGRDQTlJR2x1Y0hWMExtZGxkQ2dwSUMwZ2RHaHBjeTVwYm5CMWRFOXlhV2RwYmp0Y2JpQWdJQ0J5WlhSMWNtNGdabkp2YlNBcklHOW1abk5sZER0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb0xpNHVZWEpuY3lrZ1BUNGdlMXh1SUNCcFppQW9ZWEpuY3k1c1pXNW5kR2dnUFQwOUlERXBJSHRjYmlBZ0lDQmpiMjV6ZENCYklIQnliM0J6SUYwZ1BTQmhjbWR6TzF4dUlDQWdJSEpsZEhWeWJpQnVaWGNnVDJabWMyVjBLSEJ5YjNCektUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmpiMjV6ZENCYklHbHVjSFYwTENCdmJsVndaR0YwWlN3Z2NISnZjSE1nWFNBOUlHRnlaM003WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJQWm1aelpYUW9lMXh1SUNBZ0lDQWdhVzV3ZFhRc1hHNGdJQ0FnSUNCdmJsVndaR0YwWlN4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmU2s3WEc0Z0lIMWNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvb2Zmc2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYXJhbGxlbCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQYXJhbGxlbCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGFyYWxsZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFsbGVsKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSBhY3Rpb25zLmxlbmd0aDtcblxuICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24uc2V0UHJvcHMoe1xuICAgICAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuYWRkQWN0aW9uID0gZnVuY3Rpb24gYWRkQWN0aW9uKGFjdGlvbikge1xuICAgIHZhciBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuXG5cbiAgICBpZiAoYWN0aW9ucy5pbmRleE9mKGFjdGlvbikgPT09IC0xKSB7XG4gICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIFBhcmFsbGVsO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGFyYWxsZWwoX2V4dGVuZHMoeyBhY3Rpb25zOiBhY3Rpb25zIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JoY21Gc2JHVnNMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN096czdPenM3T3pzN1NVRkZUU3hST3pzN096czdPenM3Y1VKQlEwb3NUeXh6UWtGQlZUdEJRVUZCT3p0QlFVRkJMRkZCUTBFc1QwRkVRU3hIUVVOWkxFdEJRVXNzUzBGRWFrSXNRMEZEUVN4UFFVUkJPenRCUVVWU0xGTkJRVXNzWjBKQlFVd3NSMEZCZDBJc1VVRkJVU3hOUVVGb1F6czdRVUZGUVN4WlFVRlJMRTlCUVZJc1EwRkJaMElzVlVGQlF5eE5RVUZFTEVWQlFWazdRVUZETVVJc1lVRkJUeXhSUVVGUUxFTkJRV2RDTzBGQlEyUXNhVUpCUVZNN1FVRkJRU3hwUWtGQlRTeFBRVUZMTEdkQ1FVRk1MRVZCUVU0N1FVRkJRVHRCUVVSTExFOUJRV2hDTEVWQlJVY3NTMEZHU0R0QlFVZEVMRXRCU2tRN1FVRkxSQ3hIT3p0eFFrRkZSQ3hOTEhGQ1FVRlRPMEZCUTFBc1UwRkJTeXhMUVVGTUxFTkJRVmNzVDBGQldDeERRVUZ0UWl4UFFVRnVRaXhEUVVFeVFpeFZRVUZETEUxQlFVUTdRVUZCUVN4aFFVRlpMRTlCUVU4c1NVRkJVQ3hGUVVGYU8wRkJRVUVzUzBGQk0wSTdRVUZEUkN4SE96dHhRa0ZGUkN4VExITkNRVUZWTEUwc1JVRkJVVHRCUVVGQkxGRkJRMUlzVDBGRVVTeEhRVU5KTEV0QlFVc3NTMEZFVkN4RFFVTlNMRTlCUkZFN096dEJRVWRvUWl4UlFVRkpMRkZCUVZFc1QwRkJVaXhEUVVGblFpeE5RVUZvUWl4TlFVRTBRaXhEUVVGRExFTkJRV3BETEVWQlFXOURPMEZCUTJ4RExHTkJRVkVzU1VGQlVpeERRVUZoTEUxQlFXSTdRVUZEUkR0QlFVTkdMRWM3TzNGQ1FVVkVMR2RDTEN0Q1FVRnRRanRCUVVOcVFpeFhRVUZSTEV0QlFVc3NaMEpCUVV3c1MwRkJNRUlzUTBGQmJFTTdRVUZEUkN4SE96czdPenRyUWtGSFdTeFZRVUZETEU5QlFVUXNSVUZCVlN4TFFVRldPMEZCUVVFc1UwRkJiMElzU1VGQlNTeFJRVUZLTEZsQlFXVXNaMEpCUVdZc1NVRkJNa0lzUzBGQk0wSXNSVUZCY0VJN1FVRkJRU3hESWl3aVptbHNaU0k2SW5CaGNtRnNiR1ZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVjYm1Oc1lYTnpJRkJoY21Gc2JHVnNJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqZEdsdmJuTWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMGdZV04wYVc5dWN5NXNaVzVuZEdnN1hHNWNiaUFnSUNCaFkzUnBiMjV6TG1admNrVmhZMmdvS0dGamRHbHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ1lXTjBhVzl1TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0FnSUNBZ1gyOXVVM1J2Y0RvZ0tDa2dQVDRnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1ekxTMWNiaUFnSUNBZ0lIMHBMbk4wWVhKMEtDazdYRzRnSUNBZ2ZTazdYRzRnSUgxY2JseHVJQ0J2YmxOMGIzQW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTVoWTNScGIyNXpMbVp2Y2tWaFkyZ29LR0ZqZEdsdmJpa2dQVDRnWVdOMGFXOXVMbk4wYjNBb0tTazdYRzRnSUgxY2JseHVJQ0JoWkdSQlkzUnBiMjRvWVdOMGFXOXVLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhZM1JwYjI1eklIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tHRmpkR2x2Ym5NdWFXNWtaWGhQWmloaFkzUnBiMjRwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnWVdOMGFXOXVjeTV3ZFhOb0tHRmpkR2x2YmlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5QTlQVDBnTUNrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHRmpkR2x2Ym5Nc0lIQnliM0J6S1NBOVBpQnVaWGNnVUdGeVlXeHNaV3dvZXlCaFkzUnBiMjV6TENBdUxpNXdjbTl3Y3lCOUtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBhdXRvU3RvcFNwZWVkID0gX3Byb3BzLmF1dG9TdG9wU3BlZWQ7XG4gICAgdmFyIGFjY2VsZXJhdGlvbiA9IF9wcm9wcy5hY2NlbGVyYXRpb247XG4gICAgdmFyIGZyaWN0aW9uID0gX3Byb3BzLmZyaWN0aW9uO1xuICAgIHZhciB2ZWxvY2l0eSA9IF9wcm9wcy52ZWxvY2l0eTtcbiAgICB2YXIgc3ByaW5nID0gX3Byb3BzLnNwcmluZztcbiAgICB2YXIgdG8gPSBfcHJvcHMudG87XG5cbiAgICB2YXIgbmV3VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICB2YXIgZWxhcHNlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcblxuICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChhY2NlbGVyYXRpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShhY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZyaWN0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGZyaWN0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuICAgIH1cblxuICAgIGlmIChzcHJpbmcgJiYgdG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXQgPSB0byAtIHRoaXMuY3VycmVudDtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoc3ByaW5nLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2ZWxvY2l0eVxuICAgIHRoaXMuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIC8vIENoZWNrIGlmIHNpbXVsYXRpb24gaXMgY29tcGxldGVcbiAgICAvLyBXZSBkbyB0aGlzIGhlcmUgaW5zdGVhZCBvZiBgaXNBY3Rpb25Db21wbGV0ZWAgYXMgaXQgYWxsb3dzIHVzXG4gICAgLy8gdG8gY2xhbXAgZHVyaW5nIHRoaXMgdXBkYXRlXG4gICAgdGhpcy5pc0NvbXBsZXRlID0gYXV0b1N0b3BTcGVlZCAhPT0gZmFsc2UgJiYgKCFuZXdWZWxvY2l0eSB8fCBNYXRoLmFicyhuZXdWZWxvY2l0eSkgPD0gYXV0b1N0b3BTcGVlZCk7XG5cbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlICYmIHNwcmluZykge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdG87XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBQaHlzaWNzLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzO1xufShfMi5kZWZhdWx0KTtcblxuUGh5c2ljcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY2VsZXJhdGlvbjogMCxcbiAgZnJpY3Rpb246IDAsXG4gIHZlbG9jaXR5OiAwLFxuICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGh5c2ljcyhwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1NVRkZUU3hQT3pzN096czdPenM3YjBKQlVVb3NUU3h4UWtGQlV6dEJRVUZCTEdsQ1FVTnBSU3hMUVVGTExFdEJSSFJGTzBGQlFVRXNVVUZEUXl4aFFVUkVMRlZCUTBNc1lVRkVSRHRCUVVGQkxGRkJRMmRDTEZsQlJHaENMRlZCUTJkQ0xGbEJSR2hDTzBGQlFVRXNVVUZET0VJc1VVRkVPVUlzVlVGRE9FSXNVVUZFT1VJN1FVRkJRU3hSUVVOM1F5eFJRVVI0UXl4VlFVTjNReXhSUVVSNFF6dEJRVUZCTEZGQlEydEVMRTFCUkd4RUxGVkJRMnRFTEUxQlJHeEVPMEZCUVVFc1VVRkRNRVFzUlVGRU1VUXNWVUZETUVRc1JVRkVNVVE3TzBGQlJWQXNVVUZCU1N4alFVRmpMRkZCUVd4Q08wRkJRMEVzVVVGQlRTeFZRVUZWTEc5RFFVRm9RanM3TzBGQlIwRXNVVUZCU1N4WlFVRktMRVZCUVd0Q08wRkJRMmhDTEhGQ1FVRmxMSGxDUVVGakxGbEJRV1FzUlVGQk5FSXNUMEZCTlVJc1EwRkJaanRCUVVORU96czdRVUZIUkN4UlFVRkpMRkZCUVVvc1JVRkJZenRCUVVOYUxEaENRVUZuUWl4SlFVRkpMRkZCUVhCQ0xFVkJRV3RETEZWQlFWVXNSMEZCTlVNN1FVRkRSRHM3UVVGRlJDeFJRVUZKTEZWQlFWVXNUMEZCVHl4VFFVRnlRaXhGUVVGblF6dEJRVU01UWl4VlFVRk5MRzFDUVVGdFFpeExRVUZMTEV0QlFVc3NUMEZCYmtNN1FVRkRRU3h4UWtGQlpTeHRRa0ZCYlVJc2VVSkJRV01zVFVGQlpDeEZRVUZ6UWl4UFFVRjBRaXhEUVVGc1F6dEJRVU5FT3pzN1FVRkhSQ3hUUVVGTExFOUJRVXdzU1VGQlowSXNlVUpCUVdNc1YwRkJaQ3hGUVVFeVFpeFBRVUV6UWl4RFFVRm9RanRCUVVOQkxGTkJRVXNzUzBGQlRDeERRVUZYTEZGQlFWZ3NSMEZCYzBJc1YwRkJkRUk3T3pzN08wRkJTMEVzVTBGQlN5eFZRVUZNTEVkQlFXMUNMR3RDUVVGclFpeExRVUZzUWl4TFFVRTBRaXhEUVVGRExGZEJRVVFzU1VGQlowSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1YwRkJWQ3hMUVVGNVFpeGhRVUZ5UlN4RFFVRnVRanM3UVVGRlFTeFJRVUZKTEV0QlFVc3NWVUZCVEN4SlFVRnRRaXhOUVVGMlFpeEZRVUVyUWp0QlFVTTNRaXhYUVVGTExFOUJRVXdzUjBGQlpTeEZRVUZtTzBGQlEwUTdPMEZCUlVRc1YwRkJUeXhMUVVGTExFOUJRVm83UVVGRFJDeEhPenR2UWtGRlJDeG5RaXdyUWtGQmJVSTdRVUZEYWtJc1YwRkJUeXhMUVVGTExGVkJRVm83UVVGRFJDeEhPenM3T3p0QlFUbERSeXhQTEVOQlEwY3NXU3hIUVVGbE8wRkJRM0JDTEdkQ1FVRmpMRU5CUkUwN1FVRkZjRUlzV1VGQlZTeERRVVpWTzBGQlIzQkNMRmxCUVZVc1EwRklWVHRCUVVsd1FpeHBRa0ZCWlR0QlFVcExMRU03TzJ0Q1FXZEVWQ3hWUVVGRExFdEJRVVE3UVVGQlFTeFRRVUZYTEVsQlFVa3NUMEZCU2l4RFFVRlpMRXRCUVZvc1EwRkJXRHRCUVVGQkxFTWlMQ0ptYVd4bElqb2ljR2g1YzJsamN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dWFXMXdiM0owSUhzZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbElIMGdabkp2YlNBbkxpNHZabkpoYldWemVXNWpKenRjYm1sdGNHOXlkQ0I3SUhOd1pXVmtVR1Z5Um5KaGJXVWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtTnNZWE56SUZCb2VYTnBZM01nWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCemRHRjBhV01nWkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNBZ0lHRmpZMlZzWlhKaGRHbHZiam9nTUN4Y2JpQWdJQ0JtY21samRHbHZiam9nTUN4Y2JpQWdJQ0IyWld4dlkybDBlVG9nTUN4Y2JpQWdJQ0JoZFhSdlUzUnZjRk53WldWa09pQXdMakF3TVZ4dUlDQjlYRzVjYmlBZ2RYQmtZWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWVhWMGIxTjBiM0JUY0dWbFpDd2dZV05qWld4bGNtRjBhVzl1TENCbWNtbGpkR2x2Yml3Z2RtVnNiMk5wZEhrc0lITndjbWx1Wnl3Z2RHOGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYkdWMElHNWxkMVpsYkc5amFYUjVJRDBnZG1Wc2IyTnBkSGs3WEc0Z0lDQWdZMjl1YzNRZ1pXeGhjSE5sWkNBOUlIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTZ3BPMXh1WEc0Z0lDQWdMeThnUVhCd2JIa2dZV05qWld4bGNtRjBhVzl1SUhSdklIWmxiRzlqYVhSNVhHNGdJQ0FnYVdZZ0tHRmpZMlZzWlhKaGRHbHZiaWtnZTF4dUlDQWdJQ0FnYm1WM1ZtVnNiMk5wZEhrZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNoaFkyTmxiR1Z5WVhScGIyNHNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRUZ3Y0d4NUlHWnlhV04wYVc5dUlIUnZJSFpsYkc5amFYUjVYRzRnSUNBZ2FXWWdLR1p5YVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0J1WlhkV1pXeHZZMmwwZVNBcVBTQW9NU0F0SUdaeWFXTjBhVzl1S1NBcUtpQW9aV3hoY0hObFpDQXZJREV3TUNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tITndjbWx1WnlBbUppQjBieUFoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCa2FYTjBZVzVqWlZSdlZHRnlaMlYwSUQwZ2RHOGdMU0IwYUdsekxtTjFjbkpsYm5RN1hHNGdJQ0FnSUNCdVpYZFdaV3h2WTJsMGVTQXJQU0JrYVhOMFlXNWpaVlJ2VkdGeVoyVjBJQ29nYzNCbFpXUlFaWEpHY21GdFpTaHpjSEpwYm1jc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFRndjR3g1SUhabGJHOWphWFI1WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvYm1WM1ZtVnNiMk5wZEhrc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUhSb2FYTXVjSEp2Y0hNdWRtVnNiMk5wZEhrZ1BTQnVaWGRXWld4dlkybDBlVHRjYmx4dUlDQWdJQzh2SUVOb1pXTnJJR2xtSUhOcGJYVnNZWFJwYjI0Z2FYTWdZMjl0Y0d4bGRHVmNiaUFnSUNBdkx5QlhaU0JrYnlCMGFHbHpJR2hsY21VZ2FXNXpkR1ZoWkNCdlppQmdhWE5CWTNScGIyNURiMjF3YkdWMFpXQWdZWE1nYVhRZ1lXeHNiM2R6SUhWelhHNGdJQ0FnTHk4Z2RHOGdZMnhoYlhBZ1pIVnlhVzVuSUhSb2FYTWdkWEJrWVhSbFhHNGdJQ0FnZEdocGN5NXBjME52YlhCc1pYUmxJRDBnS0dGMWRHOVRkRzl3VTNCbFpXUWdJVDA5SUdaaGJITmxJQ1ltSUNnaGJtVjNWbVZzYjJOcGRIa2dmSHdnVFdGMGFDNWhZbk1vYm1WM1ZtVnNiMk5wZEhrcElEdzlJR0YxZEc5VGRHOXdVM0JsWldRcEtUdGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtbHpRMjl0Y0d4bGRHVWdKaVlnYzNCeWFXNW5LU0I3WEc0Z0lDQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ1BTQjBienRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqZFhKeVpXNTBPMXh1SUNCOVhHNWNiaUFnYVhOQlkzUnBiMjVEYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1cGMwTnZiWEJzWlhSbE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHdjbTl3Y3lrZ1BUNGdibVYzSUZCb2VYTnBZM01vY0hKdmNITXBPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF92YWx1ZSA9IHJlcXVpcmUoJy4vdmFsdWUnKTtcblxudmFyIF92YWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZSk7XG5cbnZhciBfY29tcG9zaXRlID0gcmVxdWlyZSgnLi9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBjcmVhdGVQb2ludGVyKF9yZWYyLCBfcmVmKSB7XG4gIHZhciB4ID0gX3JlZjIueDtcbiAgdmFyIHkgPSBfcmVmMi55O1xuICB2YXIgZXZlbnRUb1BvaW50cyA9IF9yZWYuZXZlbnRUb1BvaW50cztcbiAgdmFyIG1vdmVFdmVudCA9IF9yZWYubW92ZUV2ZW50O1xuXG4gIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2V2ZW50VG9Qb2ludHMnLCAnbW92ZUV2ZW50J10pO1xuXG4gIHZhciBwb2ludGVyID0gKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICB4OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh4KSxcbiAgICB5OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh5KVxuICB9LCBfZXh0ZW5kcyh7XG4gICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZVxuICB9LCBwcm9wcykpO1xuXG4gIHZhciB1cGRhdGVQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAocHJvcHMucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnRzID0gZXZlbnRUb1BvaW50cyhlKTtcbiAgICBwb2ludGVyLnguc2V0KHBvaW50cy54KTtcbiAgICBwb2ludGVyLnkuc2V0KHBvaW50cy55KTtcbiAgfTtcblxuICBwb2ludGVyLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcik7XG4gICAgfSxcbiAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwb2ludGVyO1xufVxuXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4ge1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxuICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWYzKSB7XG4gIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYzLmNoYW5nZWRUb3VjaGVzO1xuICByZXR1cm4ge1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICB9O1xufTtcblxudmFyIGdldE5hdGl2ZUV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlLm5hdGl2ZUV2ZW50IHx8IGU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZSwgcHJvcHMpIHtcbiAgdmFyIG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiBuYXRpdmVFdmVudC50b3VjaGVzID8gY3JlYXRlUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgX2V4dGVuZHMoe1xuICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogdG91Y2hFdmVudFRvUG9pbnRcbiAgfSwgcHJvcHMpKSA6IGNyZWF0ZVBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgIGV2ZW50VG9Qb2ludHM6IG1vdXNlRXZlbnRUb1BvaW50XG4gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0J2YVc1MFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3pzN096czdRVUZGUVN4VFFVRlRMR0ZCUVZRc1kwRkJlVVU3UVVGQlFTeE5RVUZvUkN4RFFVRm5SQ3hUUVVGb1JDeERRVUZuUkR0QlFVRkJMRTFCUVRkRExFTkJRVFpETEZOQlFUZERMRU5CUVRaRE8wRkJRVUVzVFVGQmRFTXNZVUZCYzBNc1VVRkJkRU1zWVVGQmMwTTdRVUZCUVN4TlFVRjJRaXhUUVVGMVFpeFJRVUYyUWl4VFFVRjFRanM3UVVGQlFTeE5RVUZVTEV0QlFWTTdPMEZCUTNaRkxFMUJRVTBzVlVGQlZTeDVRa0ZCVlR0QlFVTjRRaXhQUVVGSExIRkNRVUZOTEVOQlFVNHNRMEZFY1VJN1FVRkZlRUlzVDBGQlJ5eHhRa0ZCVFN4RFFVRk9PMEZCUm5GQ0xFZEJRVlk3UVVGSlpDeGhRVUZUTEVsQlNrczdRVUZMWkN4dlFrRkJaMEk3UVVGTVJpeExRVTFZTEV0QlRsY3NSVUZCYUVJN08wRkJVMEVzVFVGQlRTeG5Ra0ZCWjBJc1ZVRkJReXhEUVVGRUxFVkJRVTg3UVVGRE0wSXNVVUZCU1N4TlFVRk5MR05CUVZZc1JVRkJNRUk3UVVGRGVFSXNVVUZCUlN4alFVRkdPMEZCUTBRN08wRkJSVVFzVVVGQlRTeFRRVUZUTEdOQlFXTXNRMEZCWkN4RFFVRm1PMEZCUTBFc1dVRkJVU3hEUVVGU0xFTkJRVlVzUjBGQlZpeERRVUZqTEU5QlFVOHNRMEZCY2tJN1FVRkRRU3haUVVGUkxFTkJRVklzUTBGQlZTeEhRVUZXTEVOQlFXTXNUMEZCVHl4RFFVRnlRanRCUVVORUxFZEJVa1E3TzBGQlZVRXNWVUZCVVN4UlFVRlNMRU5CUVdsQ08wRkJRMllzWTBGQlZUdEJRVUZCTEdGQlFVMHNVMEZCVXl4bFFVRlVMRU5CUVhsQ0xHZENRVUY2UWl4RFFVRXdReXhUUVVFeFF5eEZRVUZ4UkN4aFFVRnlSQ3hEUVVGT08wRkJRVUVzUzBGRVN6dEJRVVZtTEdGQlFWTTdRVUZCUVN4aFFVRk5MRk5CUVZNc1pVRkJWQ3hEUVVGNVFpeHRRa0ZCZWtJc1EwRkJOa01zVTBGQk4wTXNSVUZCZDBRc1lVRkJlRVFzUTBGQlRqdEJRVUZCTzBGQlJrMHNSMEZCYWtJN08wRkJTMEVzVTBGQlR5eFBRVUZRTzBGQlEwUTdPMEZCUlVRc1NVRkJUU3h2UWtGQmIwSXNWVUZCUXl4RFFVRkVPMEZCUVVFc1UwRkJVVHRCUVVOb1F5eFBRVUZITEVWQlFVVXNTMEZFTWtJN1FVRkZhRU1zVDBGQlJ5eEZRVUZGTzBGQlJqSkNMRWRCUVZJN1FVRkJRU3hEUVVFeFFqczdRVUZMUVN4SlFVRk5MRzlDUVVGdlFqdEJRVUZCTEUxQlFVY3NZMEZCU0N4VFFVRkhMR05CUVVnN1FVRkJRU3hUUVVGNVFqdEJRVU5xUkN4UFFVRkhMR1ZCUVdVc1EwRkJaaXhGUVVGclFpeFBRVVEwUWp0QlFVVnFSQ3hQUVVGSExHVkJRV1VzUTBGQlppeEZRVUZyUWp0QlFVWTBRaXhIUVVGNlFqdEJRVUZCTEVOQlFURkNPenRCUVV0QkxFbEJRVTBzYVVKQlFXbENMRlZCUVVNc1EwRkJSRHRCUVVGQkxGTkJRVThzUlVGQlJTeGhRVUZHTEVsQlFXMUNMRVZCUVVVc1YwRkJja0lzU1VGQmIwTXNRMEZCTTBNN1FVRkJRU3hEUVVGMlFqczdhMEpCUldVc1ZVRkJReXhEUVVGRUxFVkJRVWtzUzBGQlNpeEZRVUZqTzBGQlF6TkNMRTFCUVUwc1kwRkJZeXhsUVVGbExFTkJRV1lzUTBGQmNFSTdRVUZEUVN4VFFVRlJMRmxCUVZrc1QwRkJZaXhIUVVOTUxHTkJRV01zYTBKQlFXdENMRU5CUVd4Q0xFTkJRV1E3UVVGRFJTeGxRVUZYTEZkQlJHSTdRVUZGUlN4dFFrRkJaVHRCUVVacVFpeExRVWRMTEV0QlNFd3NSVUZFU3l4SFFVMU1MR05CUVdNc2EwSkJRV3RDTEVOQlFXeENMRU5CUVdRN1FVRkRSU3hsUVVGWExGZEJSR0k3UVVGRlJTeHRRa0ZCWlR0QlFVWnFRaXhMUVVkTExFdEJTRXdzUlVGT1JqdEJRVmRFTEVNaUxDSm1hV3hsSWpvaWNHOXBiblJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IyWVd4MVpTQm1jbTl0SUNjdUwzWmhiSFZsSnp0Y2JtbHRjRzl5ZENCamIyMXdiM05wZEdVZ1puSnZiU0FuTGk5amIyMXdiM05wZEdVbk8xeHVYRzVtZFc1amRHbHZiaUJqY21WaGRHVlFiMmx1ZEdWeUtIc2dlQ3dnZVNCOUxDQjdJR1YyWlc1MFZHOVFiMmx1ZEhNc0lHMXZkbVZGZG1WdWRDd2dMaTR1Y0hKdmNITWdmU2tnZTF4dUlDQmpiMjV6ZENCd2IybHVkR1Z5SUQwZ1kyOXRjRzl6YVhSbEtIdGNiaUFnSUNCNE9pQjJZV3gxWlNoNEtTeGNiaUFnSUNCNU9pQjJZV3gxWlNoNUtWeHVJQ0I5TENCN1hHNGdJQ0FnY0dGemMybDJaVG9nZEhKMVpTeGNiaUFnSUNCd2NtVjJaVzUwUkdWbVlYVnNkRG9nZEhKMVpTeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYmx4dUlDQmpiMjV6ZENCMWNHUmhkR1ZRYjJsdWRHVnlJRDBnS0dVcElEMCtJSHRjYmlBZ0lDQnBaaUFvY0hKdmNITXVjSEpsZG1WdWRFUmxabUYxYkhRcElIdGNiaUFnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCamIyNXpkQ0J3YjJsdWRITWdQU0JsZG1WdWRGUnZVRzlwYm5SektHVXBPMXh1SUNBZ0lIQnZhVzUwWlhJdWVDNXpaWFFvY0c5cGJuUnpMbmdwTzF4dUlDQWdJSEJ2YVc1MFpYSXVlUzV6WlhRb2NHOXBiblJ6TG5rcE8xeHVJQ0I5TzF4dVhHNGdJSEJ2YVc1MFpYSXVjMlYwVUhKdmNITW9lMXh1SUNBZ0lGOXZibE4wWVhKME9pQW9LU0E5UGlCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWh0YjNabFJYWmxiblFzSUhWd1pHRjBaVkJ2YVc1MFpYSXBMRnh1SUNBZ0lGOXZibE4wYjNBNklDZ3BJRDArSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0cxdmRtVkZkbVZ1ZEN3Z2RYQmtZWFJsVUc5cGJuUmxjaWxjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUhCdmFXNTBaWEk3WEc1OVhHNWNibU52Ym5OMElHMXZkWE5sUlhabGJuUlViMUJ2YVc1MElEMGdLR1VwSUQwK0lDaDdYRzRnSUhnNklHVXVjR0ZuWlZnc1hHNGdJSGs2SUdVdWNHRm5aVmxjYm4wcE8xeHVYRzVqYjI1emRDQjBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDQTlJQ2g3SUdOb1lXNW5aV1JVYjNWamFHVnpJSDBwSUQwK0lDaDdYRzRnSUhnNklHTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExtTnNhV1Z1ZEZnc1hHNGdJSGs2SUdOb1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmxjYm4wcE8xeHVYRzVqYjI1emRDQm5aWFJPWVhScGRtVkZkbVZ1ZENBOUlDaGxLU0E5UGlCbExtOXlhV2RwYm1Gc1JYWmxiblFnZkh3Z1pTNXVZWFJwZG1WRmRtVnVkQ0I4ZkNCbE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aU3dnY0hKdmNITXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2JtRjBhWFpsUlhabGJuUWdQU0JuWlhST1lYUnBkbVZGZG1WdWRDaGxLVHRjYmlBZ2NtVjBkWEp1SUNodVlYUnBkbVZGZG1WdWRDNTBiM1ZqYUdWektTQS9YRzRnSUNBZ1kzSmxZWFJsVUc5cGJuUmxjaWgwYjNWamFFVjJaVzUwVkc5UWIybHVkQ2hsS1N3Z2UxeHVJQ0FnSUNBZ2JXOTJaVVYyWlc1ME9pQW5kRzkxWTJodGIzWmxKeXhjYmlBZ0lDQWdJR1YyWlc1MFZHOVFiMmx1ZEhNNklIUnZkV05vUlhabGJuUlViMUJ2YVc1MExGeHVJQ0FnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdJQ0I5S1NBNlhHNGdJQ0FnWTNKbFlYUmxVRzlwYm5SbGNpaHRiM1Z6WlVWMlpXNTBWRzlRYjJsdWRDaGxLU3dnZTF4dUlDQWdJQ0FnYlc5MlpVVjJaVzUwT2lBbmJXOTFjMlZ0YjNabEp5eGNiaUFnSUNBZ0lHVjJaVzUwVkc5UWIybHVkSE02SUcxdmRYTmxSWFpsYm5SVWIxQnZhVzUwTEZ4dUlDQWdJQ0FnTGk0dWNISnZjSE5jYmlBZ0lDQjlLVHRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BvaW50ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2luYy9lYXNpbmcnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY2xhbXBQcm9ncmVzcyA9ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKTtcblxudmFyIE5FWFRfU1RFUFMgPSB7XG4gIGxvb3A6IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5zdGFydCgpO1xuICB9LFxuICB5b3lvOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICByZXR1cm4gdHdlZW4ucmV2ZXJzZSgpLnN0YXJ0KCk7XG4gIH0sXG4gIGZsaXA6IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5mbGlwKCkuc3RhcnQoKTtcbiAgfVxufTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFR3ZWVuLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUd2VlbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUd2Vlbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uO1xuICAgIHZhciBwbGF5RGlyZWN0aW9uID0gX3Byb3BzLnBsYXlEaXJlY3Rpb247XG5cblxuICAgIHRoaXMuZWxhcHNlZCA9IHBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogZHVyYXRpb247XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzMi5kdXJhdGlvbjtcbiAgICB2YXIgZWFzZSA9IF9wcm9wczIuZWFzZTtcbiAgICB2YXIgZnJvbSA9IF9wcm9wczIuZnJvbTtcbiAgICB2YXIgdG8gPSBfcHJvcHMyLnRvO1xuICAgIHZhciBwbGF5RGlyZWN0aW9uID0gX3Byb3BzMi5wbGF5RGlyZWN0aW9uO1xuXG5cbiAgICB0aGlzLmVsYXBzZWQgKz0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpICogcGxheURpcmVjdGlvbjtcblxuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb20sIHRvLCBlYXNlKGNsYW1wUHJvZ3Jlc3MoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSgwLCBkdXJhdGlvbiwgdGhpcy5lbGFwc2VkKSkpKTtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkdXJhdGlvbiA9IF9wcm9wczMuZHVyYXRpb247XG4gICAgdmFyIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMzLnBsYXlEaXJlY3Rpb247XG4gICAgdmFyIHlveW8gPSBfcHJvcHMzLnlveW87XG4gICAgdmFyIGxvb3AgPSBfcHJvcHMzLmxvb3A7XG4gICAgdmFyIGZsaXAgPSBfcHJvcHMzLmZsaXA7XG5cbiAgICB2YXIgaXNDb21wbGV0ZSA9IHBsYXlEaXJlY3Rpb24gPT09IDEgPyB0aGlzLmVsYXBzZWQgPj0gZHVyYXRpb24gOiB0aGlzLmVsYXBzZWQgPD0gMDtcblxuICAgIGlmIChpc0NvbXBsZXRlICYmICh5b3lvIHx8IGxvb3AgfHwgZmxpcCkpIHtcbiAgICAgIHZhciBpc1N0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICB2YXIgbmV4dFN0ZXAgPSBORVhUX1NURVBTW2tleV07XG4gICAgICAgIHZhciBjb3VudFByb3AgPSBrZXkgKyAnQ291bnQnO1xuICAgICAgICB2YXIgc3RlcE1heCA9IHRoaXMuZ2V0UHJvcChrZXkpO1xuICAgICAgICB2YXIgc3RlcENvdW50ID0gdGhpcy5nZXRQcm9wKGNvdW50UHJvcCk7XG5cbiAgICAgICAgaWYgKHN0ZXBNYXggPiBzdGVwQ291bnQpIHtcbiAgICAgICAgICB2YXIgX3NldFByb3BzO1xuXG4gICAgICAgICAgdGhpcy5zZXRQcm9wcygoX3NldFByb3BzID0ge30sIF9zZXRQcm9wc1tjb3VudFByb3BdID0gc3RlcENvdW50ICsgMSwgX3NldFByb3BzKSk7XG4gICAgICAgICAgbmV4dFN0ZXAodGhpcyk7XG4gICAgICAgICAgaXNTdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0ZXBUYWtlbikgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0NvbXBsZXRlO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5nZXRFbGFwc2VkID0gZnVuY3Rpb24gZ2V0RWxhcHNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5mbGlwID0gZnVuY3Rpb24gZmxpcCgpIHtcbiAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnByb3BzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuICAgIHZhciBfcmVmID0gW3RoaXMucHJvcHMudG8sIHRoaXMucHJvcHMuZnJvbV07XG4gICAgdGhpcy5wcm9wcy5mcm9tID0gX3JlZlswXTtcbiAgICB0aGlzLnByb3BzLnRvID0gX3JlZlsxXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICB0aGlzLnByb3BzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShfMi5kZWZhdWx0KTtcblxuVHdlZW4uZGVmYXVsdFByb3BzID0ge1xuICBkdXJhdGlvbjogMzAwLFxuICBlYXNlOiBfZWFzaW5nLmVhc2VPdXQsXG4gIGZyb206IDAsXG4gIHRvOiAxLFxuICBmbGlwOiAwLFxuICBmbGlwQ291bnQ6IDAsXG4gIHlveW86IDAsXG4gIHlveW9Db3VudDogMCxcbiAgbG9vcDogMCxcbiAgbG9vcENvdW50OiAwLFxuICBwbGF5RGlyZWN0aW9uOiAxXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3NbMF07XG5cbiAgICByZXR1cm4gbmV3IFR3ZWVuKHByb3BzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZnJvbSA9IGFyZ3NbMF07XG4gICAgdmFyIHRvID0gYXJnc1sxXTtcbiAgICB2YXIgZHVyYXRpb24gPSBhcmdzWzJdO1xuICAgIHZhciBlYXNlID0gYXJnc1szXTtcbiAgICB2YXIgX3Byb3BzNCA9IGFyZ3NbNF07XG5cbiAgICByZXR1cm4gbmV3IFR3ZWVuKF9leHRlbmRzKHsgZnJvbTogZnJvbSwgdG86IHRvLCBkdXJhdGlvbjogZHVyYXRpb24sIGVhc2U6IGVhc2UgfSwgX3Byb3BzNCkpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1IzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdRVUZGUVN4SlFVRk5MR2RDUVVGblFpeDVRa0ZCVFN4RFFVRk9MRVZCUVZNc1EwRkJWQ3hEUVVGMFFqczdRVUZGUVN4SlFVRk5MR0ZCUVdFN1FVRkRha0lzVVVGQlRTeFZRVUZETEV0QlFVUTdRVUZCUVN4WFFVRlhMRTFCUVUwc1MwRkJUaXhGUVVGWU8wRkJRVUVzUjBGRVZ6dEJRVVZxUWl4UlFVRk5MRlZCUVVNc1MwRkJSRHRCUVVGQkxGZEJRVmNzVFVGQlRTeFBRVUZPTEVkQlFXZENMRXRCUVdoQ0xFVkJRVmc3UVVGQlFTeEhRVVpYTzBGQlIycENMRkZCUVUwc1ZVRkJReXhMUVVGRU8wRkJRVUVzVjBGQlZ5eE5RVUZOTEVsQlFVNHNSMEZCWVN4TFFVRmlMRVZCUVZnN1FVRkJRVHRCUVVoWExFTkJRVzVDT3p0SlFVMU5MRXM3T3pzN096czdPenRyUWtGbFNpeFBMSE5DUVVGVk8wRkJRVUVzYVVKQlF6UkNMRXRCUVVzc1MwRkVha003UVVGQlFTeFJRVU5CTEZGQlJFRXNWVUZEUVN4UlFVUkJPMEZCUVVFc1VVRkRWU3hoUVVSV0xGVkJRMVVzWVVGRVZqczdPMEZCUjFJc1UwRkJTeXhQUVVGTUxFZEJRV2RDTEd0Q1FVRnJRaXhEUVVGdVFpeEhRVUYzUWl4RFFVRjRRaXhIUVVFMFFpeFJRVUV6UXp0QlFVTkVMRWM3TzJ0Q1FVVkVMRTBzY1VKQlFWTTdRVUZCUVN4clFrRkROa01zUzBGQlN5eExRVVJzUkR0QlFVRkJMRkZCUTBNc1VVRkVSQ3hYUVVORExGRkJSRVE3UVVGQlFTeFJRVU5YTEVsQlJGZ3NWMEZEVnl4SlFVUllPMEZCUVVFc1VVRkRhVUlzU1VGRWFrSXNWMEZEYVVJc1NVRkVha0k3UVVGQlFTeFJRVU4xUWl4RlFVUjJRaXhYUVVOMVFpeEZRVVIyUWp0QlFVRkJMRkZCUXpKQ0xHRkJSRE5DTEZkQlF6SkNMR0ZCUkROQ096czdRVUZIVUN4VFFVRkxMRTlCUVV3c1NVRkJaMElzZFVOQlFYVkNMR0ZCUVhaRE96dEJRVVZCTEZkQlFVOHNaME5CUVhGQ0xFbEJRWEpDTEVWQlFUSkNMRVZCUVROQ0xFVkJRU3RDTEV0QlFVc3NZMEZCWXl4blEwRkJjVUlzUTBGQmNrSXNSVUZCZDBJc1VVRkJlRUlzUlVGQmEwTXNTMEZCU3l4UFFVRjJReXhEUVVGa0xFTkJRVXdzUTBGQkwwSXNRMEZCVUR0QlFVTkVMRWM3TzJ0Q1FVVkVMR2RDTEN0Q1FVRnRRanRCUVVGQkxHdENRVU54UXl4TFFVRkxMRXRCUkRGRE8wRkJRVUVzVVVGRFZDeFJRVVJUTEZkQlExUXNVVUZFVXp0QlFVRkJMRkZCUTBNc1lVRkVSQ3hYUVVORExHRkJSRVE3UVVGQlFTeFJRVU5uUWl4SlFVUm9RaXhYUVVOblFpeEpRVVJvUWp0QlFVRkJMRkZCUTNOQ0xFbEJSSFJDTEZkQlEzTkNMRWxCUkhSQ08wRkJRVUVzVVVGRE5FSXNTVUZFTlVJc1YwRkRORUlzU1VGRU5VSTdPMEZCUldwQ0xGRkJRVWtzWVVGQll5eHJRa0ZCYTBJc1EwRkJia0lzUjBGQmVVSXNTMEZCU3l4UFFVRk1MRWxCUVdkQ0xGRkJRWHBETEVkQlFYTkVMRXRCUVVzc1QwRkJUQ3hKUVVGblFpeERRVUYyUmpzN1FVRkZRU3hSUVVGSkxHVkJRV1VzVVVGQlVTeEpRVUZTTEVsQlFXZENMRWxCUVM5Q0xFTkJRVW9zUlVGQk1FTTdRVUZEZUVNc1ZVRkJTU3hqUVVGakxFdEJRV3hDT3p0QlFVVkJMRmRCUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEZWQlFXaENMRVZCUVRSQ08wRkJRekZDTEZsQlFVMHNWMEZCVnl4WFFVRlhMRWRCUVZnc1EwRkJha0k3UVVGRFFTeFpRVUZOTEZsQlFWa3NUVUZCVFN4UFFVRjRRanRCUVVOQkxGbEJRVTBzVlVGQlZTeExRVUZMTEU5QlFVd3NRMEZCWVN4SFFVRmlMRU5CUVdoQ08wRkJRMEVzV1VGQlRTeFpRVUZaTEV0QlFVc3NUMEZCVEN4RFFVRmhMRk5CUVdJc1EwRkJiRUk3TzBGQlJVRXNXVUZCU1N4VlFVRlZMRk5CUVdRc1JVRkJlVUk3UVVGQlFUczdRVUZEZGtJc1pVRkJTeXhSUVVGTUxEUkNRVU5ITEZOQlJFZ3NTVUZEWlN4WlFVRlpMRU5CUkROQ08wRkJSMEVzYlVKQlFWTXNTVUZCVkR0QlFVTkJMSGRDUVVGakxFbEJRV1E3UVVGRFJEdEJRVU5HT3p0QlFVVkVMRlZCUVVrc1YwRkJTaXhGUVVGcFFpeGhRVUZoTEV0QlFXSTdRVUZEYkVJN08wRkJSVVFzVjBGQlR5eFZRVUZRTzBGQlEwUXNSenM3YTBKQlJVUXNWU3g1UWtGQllUdEJRVU5ZTEZkQlFVOHNTMEZCU3l4UFFVRmFPMEZCUTBRc1J6czdhMEpCUlVRc1NTeHRRa0ZCVHp0QlFVTk1MRk5CUVVzc1QwRkJUQ3hIUVVGbExFdEJRVXNzUzBGQlRDeERRVUZYTEZGQlFWZ3NSMEZCYzBJc1MwRkJTeXhQUVVFeFF6dEJRVVJMTEdWQlJUaENMRU5CUVVNc1MwRkJTeXhMUVVGTUxFTkJRVmNzUlVGQldpeEZRVUZuUWl4TFFVRkxMRXRCUVV3c1EwRkJWeXhKUVVFelFpeERRVVk1UWp0QlFVVktMRk5CUVVzc1MwRkJUQ3hEUVVGWExFbEJSbEE3UVVGRllTeFRRVUZMTEV0QlFVd3NRMEZCVnl4RlFVWjRRanM3UVVGSFRDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHJRa0ZGUkN4UExITkNRVUZWTzBGQlExSXNVMEZCU3l4TFFVRk1MRU5CUVZjc1lVRkJXQ3hKUVVFMFFpeERRVUZETEVOQlFUZENPMEZCUTBFc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN096czdRVUYwUlVjc1N5eERRVU5ITEZrc1IwRkJaVHRCUVVOd1FpeFpRVUZWTEVkQlJGVTdRVUZGY0VJc2RVSkJSbTlDTzBGQlIzQkNMRkZCUVUwc1EwRklZenRCUVVsd1FpeE5RVUZKTEVOQlNtZENPMEZCUzNCQ0xGRkJRVTBzUTBGTVl6dEJRVTF3UWl4aFFVRlhMRU5CVGxNN1FVRlBjRUlzVVVGQlRTeERRVkJqTzBGQlVYQkNMR0ZCUVZjc1EwRlNVenRCUVZOd1FpeFJRVUZOTEVOQlZHTTdRVUZWY0VJc1lVRkJWeXhEUVZaVE8wRkJWM0JDTEdsQ1FVRmxPMEZCV0Vzc1F6czdhMEpCZDBWVUxGbEJRV0U3UVVGQlFTeHZRMEZCVkN4SlFVRlRPMEZCUVZRc1VVRkJVenRCUVVGQk96dEJRVU14UWl4TlFVRkpMRXRCUVVzc1RVRkJUQ3hMUVVGblFpeERRVUZ3UWl4RlFVRjFRanRCUVVGQkxGRkJRMklzUzBGRVlTeEhRVU5JTEVsQlJFYzdPMEZCUlhKQ0xGZEJRVThzU1VGQlNTeExRVUZLTEVOQlFWVXNTMEZCVml4RFFVRlFPMEZCUTBRc1IwRklSQ3hOUVVkUE8wRkJRVUVzVVVGRFJ5eEpRVVJJTEVkQlEzVkRMRWxCUkhaRE8wRkJRVUVzVVVGRFV5eEZRVVJVTEVkQlEzVkRMRWxCUkhaRE8wRkJRVUVzVVVGRFlTeFJRVVJpTEVkQlEzVkRMRWxCUkhaRE8wRkJRVUVzVVVGRGRVSXNTVUZFZGtJc1IwRkRkVU1zU1VGRWRrTTdRVUZCUVN4UlFVTTJRaXhQUVVRM1FpeEhRVU4xUXl4SlFVUjJRenM3UVVGRlRDeFhRVUZQTEVsQlFVa3NTMEZCU2l4WlFVRlpMRlZCUVZvc1JVRkJhMElzVFVGQmJFSXNSVUZCYzBJc2EwSkJRWFJDTEVWQlFXZERMRlZCUVdoRExFbEJRWGxETEU5QlFYcERMRVZCUVZBN1FVRkRSRHRCUVVOR0xFTWlMQ0ptYVd4bElqb2lkSGRsWlc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVwYlhCdmNuUWdleUJqYkdGdGNDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MGNtRnVjMlp2Y20xbGNuTW5PMXh1YVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dWFXMXdiM0owSUhzZ1pXRnpaVTkxZENCOUlHWnliMjBnSnk0dUwybHVZeTlsWVhOcGJtY25PMXh1WEc1amIyNXpkQ0JqYkdGdGNGQnliMmR5WlhOeklEMGdZMnhoYlhBb01Dd2dNU2s3WEc1Y2JtTnZibk4wSUU1RldGUmZVMVJGVUZNZ1BTQjdYRzRnSUd4dmIzQTZJQ2gwZDJWbGJpa2dQVDRnZEhkbFpXNHVjM1JoY25Rb0tTeGNiaUFnZVc5NWJ6b2dLSFIzWldWdUtTQTlQaUIwZDJWbGJpNXlaWFpsY25ObEtDa3VjM1JoY25Rb0tTeGNiaUFnWm14cGNEb2dLSFIzWldWdUtTQTlQaUIwZDJWbGJpNW1iR2x3S0NrdWMzUmhjblFvS1Z4dWZUdGNibHh1WTJ4aGMzTWdWSGRsWlc0Z1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQnpkR0YwYVdNZ1pHVm1ZWFZzZEZCeWIzQnpJRDBnZTF4dUlDQWdJR1IxY21GMGFXOXVPaUF6TURBc1hHNGdJQ0FnWldGelpUb2daV0Z6WlU5MWRDeGNiaUFnSUNCbWNtOXRPaUF3TEZ4dUlDQWdJSFJ2T2lBeExGeHVJQ0FnSUdac2FYQTZJREFzWEc0Z0lDQWdabXhwY0VOdmRXNTBPaUF3TEZ4dUlDQWdJSGx2ZVc4NklEQXNYRzRnSUNBZ2VXOTViME52ZFc1ME9pQXdMRnh1SUNBZ0lHeHZiM0E2SURBc1hHNGdJQ0FnYkc5dmNFTnZkVzUwT2lBd0xGeHVJQ0FnSUhCc1lYbEVhWEpsWTNScGIyNDZJREZjYmlBZ2ZUdGNibHh1SUNCdmJsTjBZWEowS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWkhWeVlYUnBiMjRzSUhCc1lYbEVhWEpsWTNScGIyNGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0FvY0d4aGVVUnBjbVZqZEdsdmJpQTlQVDBnTVNrZ1B5QXdJRG9nWkhWeVlYUnBiMjQ3WEc0Z0lIMWNibHh1SUNCMWNHUmhkR1VvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJrZFhKaGRHbHZiaXdnWldGelpTd2dabkp2YlN3Z2RHOHNJSEJzWVhsRWFYSmxZM1JwYjI0Z2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ0t6MGdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxLQ2tnS2lCd2JHRjVSR2x5WldOMGFXOXVPMXh1WEc0Z0lDQWdjbVYwZFhKdUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLR1p5YjIwc0lIUnZMQ0JsWVhObEtHTnNZVzF3VUhKdlozSmxjM01vWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb01Dd2daSFZ5WVhScGIyNHNJSFJvYVhNdVpXeGhjSE5sWkNrcEtTazdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbHZia052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2daSFZ5WVhScGIyNHNJSEJzWVhsRWFYSmxZM1JwYjI0c0lIbHZlVzhzSUd4dmIzQXNJR1pzYVhBZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdiR1YwSUdselEyOXRjR3hsZEdVZ1BTQW9jR3hoZVVScGNtVmpkR2x2YmlBOVBUMGdNU2tnUHlBb2RHaHBjeTVsYkdGd2MyVmtJRDQ5SUdSMWNtRjBhVzl1S1NBNklDaDBhR2x6TG1Wc1lYQnpaV1FnUEQwZ01DazdYRzVjYmlBZ0lDQnBaaUFvYVhORGIyMXdiR1YwWlNBbUppQW9lVzk1YnlCOGZDQnNiMjl3SUh4OElHWnNhWEFwS1NCN1hHNGdJQ0FnSUNCc1pYUWdhWE5UZEdWd1ZHRnJaVzRnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJRTVGV0ZSZlUxUkZVRk1wSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYm1WNGRGTjBaWEFnUFNCT1JWaFVYMU5VUlZCVFcydGxlVjA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR052ZFc1MFVISnZjQ0E5SUd0bGVTQXJJQ2REYjNWdWRDYzdYRzRnSUNBZ0lDQWdJR052Ym5OMElITjBaWEJOWVhnZ1BTQjBhR2x6TG1kbGRGQnliM0FvYTJWNUtUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzUmxjRU52ZFc1MElEMGdkR2hwY3k1blpYUlFjbTl3S0dOdmRXNTBVSEp2Y0NrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hOMFpYQk5ZWGdnUGlCemRHVndRMjkxYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxuTmxkRkJ5YjNCektIdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ0amIzVnVkRkJ5YjNCZE9pQnpkR1Z3UTI5MWJuUWdLeUF4WEc0Z0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJQ0FnYm1WNGRGTjBaWEFvZEdocGN5azdYRzRnSUNBZ0lDQWdJQ0FnYVhOVGRHVndWR0ZyWlc0Z1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHbG1JQ2hwYzFOMFpYQlVZV3RsYmlrZ2FYTkRiMjF3YkdWMFpTQTlJR1poYkhObE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJwYzBOdmJYQnNaWFJsTzF4dUlDQjlYRzVjYmlBZ1oyVjBSV3hoY0hObFpDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVsYkdGd2MyVmtPMXh1SUNCOVhHNWNiaUFnWm14cGNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNCMGFHbHpMbkJ5YjNCekxtUjFjbUYwYVc5dUlDMGdkR2hwY3k1bGJHRndjMlZrTzF4dUlDQWdJRnQwYUdsekxuQnliM0J6TG1aeWIyMHNJSFJvYVhNdWNISnZjSE11ZEc5ZElEMGdXM1JvYVhNdWNISnZjSE11ZEc4c0lIUm9hWE11Y0hKdmNITXVabkp2YlYwN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnlaWFpsY25ObEtDa2dlMXh1SUNBZ0lIUm9hWE11Y0hKdmNITXVjR3hoZVVScGNtVmpkR2x2YmlBcVBTQXRNVHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvTGk0dVlYSm5jeWtnUFQ0Z2UxeHVJQ0JwWmlBb1lYSm5jeTVzWlc1bmRHZ2dQVDA5SURFcElIdGNiaUFnSUNCamIyNXpkQ0JiSUhCeWIzQnpJRjBnUFNCaGNtZHpPMXh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dWSGRsWlc0b2NISnZjSE1wTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUdOdmJuTjBJRnNnWm5KdmJTd2dkRzhzSUdSMWNtRjBhVzl1TENCbFlYTmxMQ0J3Y205d2N5QmRJRDBnWVhKbmN6dGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGUjNaV1Z1S0hzZ1puSnZiU3dnZEc4c0lHUjFjbUYwYVc5dUxDQmxZWE5sTENBdUxpNXdjbTl3Y3lCOUtUdGNiaUFnZlZ4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY2hhaW4gPSByZXF1aXJlKCcuL2NoYWluJyk7XG5cbnZhciBfY2hhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW4pO1xuXG52YXIgX3BhcmFsbGVsID0gcmVxdWlyZSgnLi9wYXJhbGxlbCcpO1xuXG52YXIgX3BhcmFsbGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcmFsbGVsKTtcblxudmFyIF9kZWxheSA9IHJlcXVpcmUoJy4vZGVsYXknKTtcblxudmFyIF9kZWxheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxheSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHBhcmFsbGVsIEFjdGlvbiBjb21wb3NlZCBvZiBjaGFpbmVkXG4gKiBkZWxheSBhbmQgYWN0aW9ucy4gSW50ZXJ2YWwgY2FuIGJlIGVpdGhlciBhIG51bWJlclxuICogdG8gbXVsdGlwbHkgYnkgYGlgIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHByb3ZpZGVkIGBpYFxuICpcbiAqIFN0cmFpZ2h0IGNyaWJiZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvMjRjNzJmNTEzZTQ4ZjBiZGM0MDgyMGI0MzI2MjMyOGZlMmMzMDFkNC9MaWJyYXJpZXMvQW5pbWF0ZWQvc3JjL0FuaW1hdGVkSW1wbGVtZW50YXRpb24uanMjTDIwMzFcbiAqIF4gVGhpcyBmdW5jdGlvbiBzb2xkIGEgcHJldmlvdXNseS1jb25mbGljdGVkIG1lIG9uIHRoZSBtZXJpdCBvZiBtb3ZpbmcgZnJvbVxuICogalF1ZXJ5LXN0eWxlIG11bHRpLXByb3BlcnR5IGFuaW1hdGlvbnMgdG8gc2luZ2xlLXByb3BlcnR5LlxuICogQHBhcmFtICB7YXJyYXl9IGFjdGlvbnNcbiAqIEBwYXJhbSAge2Z1bmN0aW9uIHwgbnVtYmVyfSBpbnRlcnZhbFxuICogQHJldHVybiB7QWN0aW9ufVxuICovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zLCBpbnRlcnZhbCwgb25Db21wbGV0ZSkge1xuICB2YXIgaW50ZXJ2YWxJc0Z1bmN0aW9uID0gKDAsIF91dGlscy5pc0Z1bmMpKGludGVydmFsKTtcblxuICByZXR1cm4gKDAsIF9wYXJhbGxlbDIuZGVmYXVsdCkoYWN0aW9ucy5tYXAoZnVuY3Rpb24gKGFjdGlvbiwgaSkge1xuICAgIHZhciB0aW1lVG9EZWxheSA9IGludGVydmFsSXNGdW5jdGlvbiA/IGludGVydmFsKGkpIDogaSAqIGludGVydmFsO1xuICAgIHJldHVybiAoMCwgX2NoYWluMi5kZWZhdWx0KShbKDAsIF9kZWxheTIuZGVmYXVsdCkodGltZVRvRGVsYXkpLCBhY3Rpb25dKTtcbiAgfSksIHsgb25Db21wbGV0ZTogb25Db21wbGV0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzTjBZV2RuWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdPenM3T3pzN096czdPenRyUWtGalpTeFZRVUZETEU5QlFVUXNSVUZCVlN4UlFVRldMRVZCUVc5Q0xGVkJRWEJDTEVWQlFXMURPMEZCUTJoRUxFMUJRVTBzY1VKQlFYRkNMRzFDUVVGUExGRkJRVkFzUTBGQk0wSTdPMEZCUlVFc1UwRkJUeXgzUWtGQlV5eFJRVUZSTEVkQlFWSXNRMEZCV1N4VlFVRkRMRTFCUVVRc1JVRkJVeXhEUVVGVUxFVkJRV1U3UVVGRGVrTXNVVUZCVFN4alFVRmxMR3RDUVVGRUxFZEJRWFZDTEZOQlFWTXNRMEZCVkN4RFFVRjJRaXhIUVVGeFF5eEpRVUZKTEZGQlFUZEVPMEZCUTBFc1YwRkJUeXh4UWtGQlRTeERRVU5ZTEhGQ1FVRk5MRmRCUVU0c1EwRkVWeXhGUVVWWUxFMUJSbGNzUTBGQlRpeERRVUZRTzBGQlNVUXNSMEZPWlN4RFFVRlVMRVZCVFVnc1JVRkJSU3h6UWtGQlJpeEZRVTVITEVOQlFWQTdRVUZQUkN4RElpd2labWxzWlNJNkluTjBZV2RuWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWTJoaGFXNGdabkp2YlNBbkxpOWphR0ZwYmljN1hHNXBiWEJ2Y25RZ2NHRnlZV3hzWld3Z1puSnZiU0FuTGk5d1lYSmhiR3hsYkNjN1hHNXBiWEJ2Y25RZ1pHVnNZWGtnWm5KdmJTQW5MaTlrWld4aGVTYzdYRzVwYlhCdmNuUWdleUJwYzBaMWJtTWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlhNZ1lTQnVaWGNnY0dGeVlXeHNaV3dnUVdOMGFXOXVJR052YlhCdmMyVmtJRzltSUdOb1lXbHVaV1JjYmlBcUlHUmxiR0Y1SUdGdVpDQmhZM1JwYjI1ekxpQkpiblJsY25aaGJDQmpZVzRnWW1VZ1pXbDBhR1Z5SUdFZ2JuVnRZbVZ5WEc0Z0tpQjBieUJ0ZFd4MGFYQnNlU0JpZVNCZ2FXQWdiM0lnWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1ltVWdjSEp2ZG1sa1pXUWdZR2xnWEc0Z0tseHVJQ29nVTNSeVlXbG5hSFFnWTNKcFltSmxaQ0JtY205dElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW1ZV05sWW05dmF5OXlaV0ZqZEMxdVlYUnBkbVV2WW14dllpOHlOR00zTW1ZMU1UTmxORGhtTUdKa1l6UXdPREl3WWpRek1qWXlNekk0Wm1VeVl6TXdNV1EwTDB4cFluSmhjbWxsY3k5QmJtbHRZWFJsWkM5emNtTXZRVzVwYldGMFpXUkpiWEJzWlcxbGJuUmhkR2x2Ymk1cWN5Tk1NakF6TVZ4dUlDb2dYaUJVYUdseklHWjFibU4wYVc5dUlITnZiR1FnWVNCd2NtVjJhVzkxYzJ4NUxXTnZibVpzYVdOMFpXUWdiV1VnYjI0Z2RHaGxJRzFsY21sMElHOW1JRzF2ZG1sdVp5Qm1jbTl0WEc0Z0tpQnFVWFZsY25rdGMzUjViR1VnYlhWc2RHa3RjSEp2Y0dWeWRIa2dZVzVwYldGMGFXOXVjeUIwYnlCemFXNW5iR1V0Y0hKdmNHVnlkSGt1WEc0Z0tpQkFjR0Z5WVcwZ0lIdGhjbkpoZVgwZ1lXTjBhVzl1YzF4dUlDb2dRSEJoY21GdElDQjdablZ1WTNScGIyNGdmQ0J1ZFcxaVpYSjlJR2x1ZEdWeWRtRnNYRzRnS2lCQWNtVjBkWEp1SUh0QlkzUnBiMjU5WEc0Z0tpOWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGhZM1JwYjI1ekxDQnBiblJsY25aaGJDd2diMjVEYjIxd2JHVjBaU2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQnBiblJsY25aaGJFbHpSblZ1WTNScGIyNGdQU0JwYzBaMWJtTW9hVzUwWlhKMllXd3BPMXh1WEc0Z0lISmxkSFZ5YmlCd1lYSmhiR3hsYkNoaFkzUnBiMjV6TG0xaGNDZ29ZV04wYVc5dUxDQnBLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdkR2x0WlZSdlJHVnNZWGtnUFNBb2FXNTBaWEoyWVd4SmMwWjFibU4wYVc5dUtTQS9JR2x1ZEdWeWRtRnNLR2twSURvZ2FTQXFJR2x1ZEdWeWRtRnNPMXh1SUNBZ0lISmxkSFZ5YmlCamFHRnBiaWhiWEc0Z0lDQWdJQ0JrWld4aGVTaDBhVzFsVkc5RVpXeGhlU2tzWEc0Z0lDQWdJQ0JoWTNScGIyNWNiaUFnSUNCZEtUdGNiaUFnZlNrc0lIc2diMjVEYjIxd2JHVjBaU0I5S1R0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9zdGFnZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBWYWx1ZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhWYWx1ZSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVmFsdWUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbHVlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgdGhpcy50b1VwZGF0ZSA9IHY7XG4gICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9VcGRhdGU7XG4gIH07XG5cbiAgcmV0dXJuIFZhbHVlO1xufShfMi5kZWZhdWx0KTtcblxuVmFsdWUuZGVmYXVsdFByb3BzID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY3VycmVudCwgb25VcGRhdGUpIHtcbiAgcmV0dXJuIG5ldyBWYWx1ZSh7IGN1cnJlbnQ6IGN1cnJlbnQsIG9uVXBkYXRlOiBvblVwZGF0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzWmhiSFZsTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3pzN096czdPenM3TzBsQlJVMHNTenM3T3pzN096czdPMnRDUVV0S0xFY3NaMEpCUVVrc1F5eEZRVUZITzBGQlEwd3NVMEZCU3l4UlFVRk1MRWRCUVdkQ0xFTkJRV2hDTzBGQlEwRXNhME5CUVdNc1MwRkJTeXhsUVVGdVFqdEJRVU5FTEVjN08ydENRVVZFTEUwc2NVSkJRVk03UVVGRFVDeFhRVUZQTEV0QlFVc3NVVUZCV2p0QlFVTkVMRWM3T3pzN08wRkJXa2NzU3l4RFFVTkhMRmtzUjBGQlpUdEJRVU53UWl4WFFVRlRPMEZCUkZjc1F6czdhMEpCWTFRc1ZVRkJReXhQUVVGRUxFVkJRVlVzVVVGQlZqdEJRVUZCTEZOQlFYVkNMRWxCUVVrc1MwRkJTaXhEUVVGVkxFVkJRVVVzWjBKQlFVWXNSVUZCVnl4clFrRkJXQ3hGUVVGV0xFTkJRWFpDTzBGQlFVRXNReUlzSW1acGJHVWlPaUoyWVd4MVpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dWFXMXdiM0owSUhzZ2IyNUdjbUZ0WlZWd1pHRjBaU0I5SUdaeWIyMGdKeTR1TDJaeVlXMWxjM2x1WXljN1hHNWNibU5zWVhOeklGWmhiSFZsSUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2MzUmhkR2xqSUdSbFptRjFiSFJRY205d2N5QTlJSHRjYmlBZ0lDQndZWE56YVhabE9pQjBjblZsWEc0Z0lIMDdYRzVjYmlBZ2MyVjBLSFlwSUh0Y2JpQWdJQ0IwYUdsekxuUnZWWEJrWVhSbElEMGdkanRjYmlBZ0lDQnZia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVjMk5vWldSMWJHVmtWWEJrWVhSbEtUdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTUwYjFWd1pHRjBaVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWTNWeWNtVnVkQ3dnYjI1VmNHUmhkR1VwSUQwK0lHNWxkeUJXWVd4MVpTaDdJR04xY25KbGJuUXNJRzl1VlhCa1lYUmxJSDBwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdmFsdWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfb25OZXh0RnJhbWUgPSByZXF1aXJlKCcuL29uLW5leHQtZnJhbWUnKTtcblxudmFyIF9vbk5leHRGcmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vbk5leHRGcmFtZSk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcCA9IHJlcXVpcmUoJy4vY3JlYXRlLXJlbmRlci1zdGVwJyk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZW5kZXJTdGVwKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuXG4vKipcbiAqIE1heGltdW0gcGVybWl0dGVkIG1zIHNpbmNlIGxhc3QgZnJhbWVcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGN1cnJlbnRGcmFtZXN0YW1wID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcblxudmFyIGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgICgwLCBfb25OZXh0RnJhbWUyLmRlZmF1bHQpKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxudmFyIGZyYW1lU3RhcnQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVVcGRhdGUgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVSZW5kZXIgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVFbmQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NGcmFtZShmcmFtZXN0YW1wKSB7XG4gIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcbiAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50RnJhbWVzdGFtcCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICBjdXJyZW50RnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG5cbiAgZnJhbWVTdGFydC5wcm9jZXNzKCk7XG4gIGZyYW1lVXBkYXRlLnByb2Nlc3MoKTtcbiAgZnJhbWVSZW5kZXIucHJvY2VzcygpO1xuICBmcmFtZUVuZC5wcm9jZXNzKCk7XG59XG5cbnZhciBvbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG52YXIgb25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xudmFyIG9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbnZhciBvbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG52YXIgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGZyYW1lRW5kLmNhbmNlbDtcblxudmFyIHRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZWxhcHNlZDtcbn07XG52YXIgY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjdXJyZW50RnJhbWVzdGFtcDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZGUVN4SlFVRkpMSE5DUVVGelFpeExRVUV4UWpzN096czdPMEZCVFVFc1NVRkJUU3hqUVVGakxFVkJRWEJDT3pzN096czdRVUZOUVN4SlFVRkpMRzlDUVVGdlFpeDVRa0ZCZUVJN08wRkJSVUVzU1VGQlNTeFZRVUZWTEVOQlFXUTdPenM3T3pzN1FVRlBRU3hKUVVGSkxGZEJRVmNzUTBGQlpqczdRVUZGUVN4VFFVRlRMR1ZCUVZRc1IwRkJNa0k3UVVGRGVrSXNUVUZCU1N4RFFVRkRMRzFDUVVGTUxFVkJRVEJDTzBGQlEzaENMREJDUVVGelFpeEpRVUYwUWp0QlFVTkJMQ3RDUVVGWkxGbEJRVm83UVVGRFJEdEJRVU5HT3p0QlFVVkVMRWxCUVUwc1lVRkJZU3huUTBGQmFVSXNaVUZCYWtJc1EwRkJia0k3UVVGRFFTeEpRVUZOTEdOQlFXTXNaME5CUVdsQ0xHVkJRV3BDTEVOQlFYQkNPMEZCUTBFc1NVRkJUU3hqUVVGakxHZERRVUZwUWl4bFFVRnFRaXhEUVVGd1FqdEJRVU5CTEVsQlFVMHNWMEZCVnl4blEwRkJhVUlzWlVGQmFrSXNRMEZCYWtJN08wRkJSVUVzVTBGQlV5eFpRVUZVTEVOQlFYTkNMRlZCUVhSQ0xFVkJRV3RETzBGQlEyaERMSGRDUVVGelFpeExRVUYwUWp0QlFVTkJMRmxCUVZVc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlN5eEhRVUZNTEVOQlFWTXNZVUZCWVN4cFFrRkJkRUlzUlVGQmVVTXNWMEZCZWtNc1EwRkJWQ3hGUVVGblJTeERRVUZvUlN4SlFVRnhSU3hSUVVFdlJUdEJRVU5CTEhOQ1FVRnZRaXhWUVVGd1FqczdRVUZGUVN4aFFVRlhMRTlCUVZnN1FVRkRRU3hqUVVGWkxFOUJRVm83UVVGRFFTeGpRVUZaTEU5QlFWbzdRVUZEUVN4WFFVRlRMRTlCUVZRN1FVRkRSRHM3UVVGRlRTeEpRVUZOTEhORFFVRmxMRmRCUVZjc1VVRkJhRU03UVVGRFFTeEpRVUZOTEhkRFFVRm5RaXhaUVVGWkxGRkJRV3hETzBGQlEwRXNTVUZCVFN4M1EwRkJaMElzV1VGQldTeFJRVUZzUXp0QlFVTkJMRWxCUVUwc2EwTkJRV0VzVTBGQlV5eFJRVUUxUWp0QlFVTkJMRWxCUVUwc2EwUkJRWEZDTEZkQlFWY3NUVUZCZEVNN1FVRkRRU3hKUVVGTkxHOUVRVUZ6UWl4WlFVRlpMRTFCUVhoRE8wRkJRMEVzU1VGQlRTeHZSRUZCYzBJc1dVRkJXU3hOUVVGNFF6dEJRVU5CTEVsQlFVMHNPRU5CUVcxQ0xGTkJRVk1zVFVGQmJFTTdPMEZCUlVFc1NVRkJUU3hyUkVGQmNVSTdRVUZCUVN4VFFVRk5MRTlCUVU0N1FVRkJRU3hEUVVFelFqdEJRVU5CTEVsQlFVMHNkMFJCUVhkQ08wRkJRVUVzVTBGQlRTeHBRa0ZCVGp0QlFVRkJMRU5CUVRsQ0lpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRzl1VG1WNGRFWnlZVzFsSUdaeWIyMGdKeTR2YjI0dGJtVjRkQzFtY21GdFpTYzdYRzVwYlhCdmNuUWdZM0psWVhSbFVtVnVaR1Z5VTNSbGNDQm1jbTl0SUNjdUwyTnlaV0YwWlMxeVpXNWtaWEl0YzNSbGNDYzdYRzVwYlhCdmNuUWdleUJqZFhKeVpXNTBWR2x0WlNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm14bGRDQjNhV3hzVW1WdVpHVnlUbVY0ZEVaeVlXMWxJRDBnWm1Gc2MyVTdYRzVjYmk4cUtseHVJQ29nVFdGNGFXMTFiU0J3WlhKdGFYUjBaV1FnYlhNZ2MybHVZMlVnYkdGemRDQm1jbUZ0WlZ4dUlDb2dRSFI1Y0dVZ2UwNTFiV0psY24xY2JpQXFMMXh1WTI5dWMzUWdUVUZZWDBWTVFWQlRSVVFnUFNBeU1EdGNibHh1THlvcVhHNGdLaUJEZFhKeVpXNTBJR1p5WVcxbGMzUmhiWEJjYmlBcUlFQjBlWEJsSUh0T2RXMWlaWEo5WEc0Z0tpOWNibXhsZENCamRYSnlaVzUwUm5KaGJXVnpkR0Z0Y0NBOUlHTjFjbkpsYm5SVWFXMWxLQ2s3WEc1Y2JteGxkQ0JsYkdGd2MyVmtJRDBnTUR0Y2JseHVMeW9xWEc0Z0tpQkdZV04wYjNJZ2RHOGdiWFZzZEdsd2JIa2dZR1ZzWVhCelpXUmdJR0o1SUMwZ1hHNGdLaUF3TGpVZ2QyOTFiR1FnWW1VZ2MyeHZkeUJ0YjNScGIyNHNJRElnZDI5MWJHUWdZbVVnWm1GemRGeHVJQ29nUUhSNWNHVWdlMDUxYldKbGNuMWNiaUFxTDF4dWJHVjBJR1JwYkdGMGFXOXVJRDBnTVR0Y2JseHVablZ1WTNScGIyNGdjM1JoY25SU1pXNWtaWEpNYjI5d0tDa2dlMXh1SUNCcFppQW9JWGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VwSUh0Y2JpQWdJQ0IzYVd4c1VtVnVaR1Z5VG1WNGRFWnlZVzFsSUQwZ2RISjFaVHRjYmlBZ0lDQnZiazVsZUhSR2NtRnRaU2h3Y205alpYTnpSbkpoYldVcE8xeHVJQ0I5WEc1OVhHNWNibU52Ym5OMElHWnlZVzFsVTNSaGNuUWdQU0JqY21WaGRHVlNaVzVrWlhKVGRHVndLSE4wWVhKMFVtVnVaR1Z5VEc5dmNDazdYRzVqYjI1emRDQm1jbUZ0WlZWd1pHRjBaU0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYm1OdmJuTjBJR1p5WVcxbFVtVnVaR1Z5SUQwZ1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NoemRHRnlkRkpsYm1SbGNreHZiM0FwTzF4dVkyOXVjM1FnWm5KaGJXVkZibVFnUFNCamNtVmhkR1ZTWlc1a1pYSlRkR1Z3S0hOMFlYSjBVbVZ1WkdWeVRHOXZjQ2s3WEc1Y2JtWjFibU4wYVc5dUlIQnliMk5sYzNOR2NtRnRaU2htY21GdFpYTjBZVzF3S1NCN1hHNGdJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCbVlXeHpaVHRjYmlBZ1pXeGhjSE5sWkNBOUlFMWhkR2d1YldGNEtFMWhkR2d1YldsdUtHWnlZVzFsYzNSaGJYQWdMU0JqZFhKeVpXNTBSbkpoYldWemRHRnRjQ3dnVFVGWVgwVk1RVkJUUlVRcExDQXhLU0FxSUdScGJHRjBhVzl1TzF4dUlDQmpkWEp5Wlc1MFJuSmhiV1Z6ZEdGdGNDQTlJR1p5WVcxbGMzUmhiWEE3WEc1Y2JpQWdabkpoYldWVGRHRnlkQzV3Y205alpYTnpLQ2s3WEc0Z0lHWnlZVzFsVlhCa1lYUmxMbkJ5YjJObGMzTW9LVHRjYmlBZ1puSmhiV1ZTWlc1a1pYSXVjSEp2WTJWemN5Z3BPMXh1SUNCbWNtRnRaVVZ1WkM1d2NtOWpaWE56S0NrN1hHNTlYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnZia1p5WVcxbFUzUmhjblFnUFNCbWNtRnRaVk4wWVhKMExuTmphR1ZrZFd4bE8xeHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZWY0dSaGRHVWdQU0JtY21GdFpWVndaR0YwWlM1elkyaGxaSFZzWlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxVbVZ1WkdWeUlEMGdabkpoYldWU1pXNWtaWEl1YzJOb1pXUjFiR1U3WEc1bGVIQnZjblFnWTI5dWMzUWdiMjVHY21GdFpVVnVaQ0E5SUdaeVlXMWxSVzVrTG5OamFHVmtkV3hsTzF4dVpYaHdiM0owSUdOdmJuTjBJR05oYm1ObGJFOXVSbkpoYldWVGRHRnlkQ0E5SUdaeVlXMWxVM1JoY25RdVkyRnVZMlZzTzF4dVpYaHdiM0owSUdOdmJuTjBJR05oYm1ObGJFOXVSbkpoYldWVmNHUmhkR1VnUFNCbWNtRnRaVlZ3WkdGMFpTNWpZVzVqWld3N1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWSmxibVJsY2lBOUlHWnlZVzFsVW1WdVpHVnlMbU5oYm1ObGJEdGNibVY0Y0c5eWRDQmpiMjV6ZENCallXNWpaV3hQYmtaeVlXMWxSVzVrSUQwZ1puSmhiV1ZGYm1RdVkyRnVZMlZzTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsSUQwZ0tDa2dQVDRnWld4aGNITmxaRHRjYm1WNGNHOXlkQ0JqYjI1emRDQmpkWEp5Wlc1MFJuSmhiV1ZVYVcxbGMzUmhiWEFnUFNBb0tTQTlQaUJqZFhKeVpXNTBSbkpoYldWemRHRnRjRHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFjdGlvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgdGhpcy5zY2hlZHVsZWRVcGRhdGUgPSB0aGlzLnNjaGVkdWxlZFVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb3BzKHByb3BzKTtcblxuICAgIHRoaXMuY3VycmVudCA9IHByb3BzLmN1cnJlbnQgfHwgcHJvcHMuZnJvbSB8fCAwO1xuICB9XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvblN0YXJ0ID0gX3Byb3BzLm9uU3RhcnQ7XG4gICAgdmFyIF9vblN0YXJ0ID0gX3Byb3BzLl9vblN0YXJ0O1xuICAgIHZhciBwYXNzaXZlID0gX3Byb3BzLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdGFydCkgdGhpcy5vblN0YXJ0KCk7XG4gICAgaWYgKG9uU3RhcnQpIG9uU3RhcnQodGhpcyk7XG4gICAgaWYgKF9vblN0YXJ0KSBfb25TdGFydCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvblN0b3AgPSBfcHJvcHMyLm9uU3RvcDtcbiAgICB2YXIgX29uU3RvcCA9IF9wcm9wczIuX29uU3RvcDtcbiAgICB2YXIgcGFzc2l2ZSA9IF9wcm9wczIucGFzc2l2ZTtcblxuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG9uQ29tcGxldGUgPSBfcHJvcHMzLm9uQ29tcGxldGU7XG4gICAgdmFyIF9vbkNvbXBsZXRlID0gX3Byb3BzMy5fb25Db21wbGV0ZTtcblxuXG4gICAgdGhpcy5zdG9wKCk7XG5cbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSh0aGlzKTtcbiAgICBpZiAoX29uQ29tcGxldGUpIF9vbkNvbXBsZXRlKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZWRVcGRhdGUgPSBmdW5jdGlvbiBzY2hlZHVsZWRVcGRhdGUoKSB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG9uVXBkYXRlID0gX3Byb3BzNC5vblVwZGF0ZTtcbiAgICB2YXIgcGFzc2l2ZSA9IF9wcm9wczQucGFzc2l2ZTtcblxuXG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnVwZGF0ZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUodGhpcy5jdXJyZW50LCB0aGlzKTtcbiAgICB0aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbiBzZXRQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgcHJvcHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQodikge1xuICAgIHRoaXMuY3VycmVudCA9IHY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXRQcm9wID0gZnVuY3Rpb24gZ2V0UHJvcChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wc1trZXldO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gKDAsIF9jYWxjLnNwZWVkUGVyU2Vjb25kKSh0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIHRoaXMubGFzdFVwZGF0ZWQpO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5maXJlTGlzdGVuZXJzID0gZnVuY3Rpb24gZmlyZUxpc3RlbmVycygpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenRCUVVOQk96czdPMGxCUlUwc1RUdEJRVU5LTEd0Q1FVRlpMRXRCUVZvc1JVRkJiVUk3UVVGQlFUczdRVUZEYWtJc1UwRkJTeXhsUVVGTUxFZEJRWFZDTEV0QlFVc3NaVUZCVEN4RFFVRnhRaXhKUVVGeVFpeERRVUV3UWl4SlFVRXhRaXhEUVVGMlFqczdRVUZGUVN4VFFVRkxMRXRCUVV3c1owSkJRMHNzUzBGQlN5eFhRVUZNTEVOQlFXbENMRmxCUkhSQ096dEJRVWxCTEZOQlFVc3NVVUZCVEN4RFFVRmpMRXRCUVdRN08wRkJSVUVzVTBGQlN5eFBRVUZNTEVkQlFXVXNUVUZCVFN4UFFVRk9MRWxCUVdsQ0xFMUJRVTBzU1VGQmRrSXNTVUZCSzBJc1EwRkJPVU03UVVGRFJEczdiVUpCUlVRc1N5eHZRa0ZCVVR0QlFVRkJMR2xDUVVOcFF5eExRVUZMTEV0QlJIUkRPMEZCUVVFc1VVRkRSU3hQUVVSR0xGVkJRMFVzVDBGRVJqdEJRVUZCTEZGQlExY3NVVUZFV0N4VlFVTlhMRkZCUkZnN1FVRkJRU3hSUVVOeFFpeFBRVVJ5UWl4VlFVTnhRaXhQUVVSeVFqczdPMEZCUjA0c1VVRkJTU3hEUVVGRExFOUJRVXdzUlVGQll6dEJRVU5hTEZkQlFVc3NVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5CTEc5RFFVRmpMRXRCUVVzc1pVRkJia0k3UVVGRFJEczdRVUZGUkN4UlFVRkpMRXRCUVVzc1QwRkJWQ3hGUVVGclFpeExRVUZMTEU5QlFVdzdRVUZEYkVJc1VVRkJTU3hQUVVGS0xFVkJRV0VzVVVGQlVTeEpRVUZTTzBGQlEySXNVVUZCU1N4UlFVRktMRVZCUVdNc1UwRkJVeXhKUVVGVU96dEJRVVZrTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVMRWtzYlVKQlFVODdRVUZCUVN4clFrRkRaME1zUzBGQlN5eExRVVJ5UXp0QlFVRkJMRkZCUTBjc1RVRkVTQ3hYUVVOSExFMUJSRWc3UVVGQlFTeFJRVU5YTEU5QlJGZ3NWMEZEVnl4UFFVUllPMEZCUVVFc1VVRkRiMElzVDBGRWNFSXNWMEZEYjBJc1QwRkVjRUk3T3p0QlFVZE1MRkZCUVVrc1EwRkJReXhQUVVGTUxFVkJRV003UVVGRFdpeFhRVUZMTEZGQlFVd3NSMEZCWjBJc1MwRkJhRUk3UVVGRFFTd3dRMEZCYjBJc1MwRkJTeXhsUVVGNlFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTeXhOUVVGVUxFVkJRV2xDTEV0QlFVc3NUVUZCVER0QlFVTnFRaXhSUVVGSkxFMUJRVW9zUlVGQldTeFBRVUZQTEVsQlFWQTdRVUZEV2l4UlFVRkpMRTlCUVVvc1JVRkJZU3hSUVVGUkxFbEJRVkk3TzBGQlJXSXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdiVUpCUlVRc1VTeDFRa0ZCVnp0QlFVRkJMR3RDUVVNeVFpeExRVUZMTEV0QlJHaERPMEZCUVVFc1VVRkRSQ3hWUVVSRExGZEJRMFFzVlVGRVF6dEJRVUZCTEZGQlExY3NWMEZFV0N4WFFVTlhMRmRCUkZnN096dEJRVWRVTEZOQlFVc3NTVUZCVERzN1FVRkZRU3hSUVVGSkxFdEJRVXNzVlVGQlZDeEZRVUZ4UWl4TFFVRkxMRlZCUVV3N1FVRkRja0lzVVVGQlNTeFZRVUZLTEVWQlFXZENMRmRCUVZjc1NVRkJXRHRCUVVOb1FpeFJRVUZKTEZkQlFVb3NSVUZCYVVJc1dVRkJXU3hKUVVGYU96dEJRVVZxUWl4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSQ3hsTERoQ1FVRnJRanRCUVVOb1FpeFRRVUZMTEZkQlFVd3NSMEZCYlVJc2IwTkJRVzVDTzBGQlEwRXNVMEZCU3l4SlFVRk1MRWRCUVZrc1MwRkJTeXhQUVVGcVFqczdRVUZHWjBJc2EwSkJTV01zUzBGQlN5eExRVXB1UWp0QlFVRkJMRkZCU1ZJc1VVRktVU3hYUVVsU0xGRkJTbEU3UVVGQlFTeFJRVWxGTEU5QlNrWXNWMEZKUlN4UFFVcEdPenM3UVVGTmFFSXNVVUZCU1N4TFFVRkxMRTFCUVZRc1JVRkJhVUk3UVVGRFppeFhRVUZMTEU5QlFVd3NSMEZCWlN4TFFVRkxMRTFCUVV3c1EwRkJXU3hMUVVGTExFOUJRV3BDTEVOQlFXWTdRVUZEUkRzN1FVRkZSQ3hSUVVGSkxGRkJRVW9zUlVGQll5eFRRVUZUTEV0QlFVc3NUMEZCWkN4RlFVRjFRaXhKUVVGMlFqdEJRVU5rTEZOQlFVc3NZVUZCVERzN1FVRkZRU3hSUVVGSkxFTkJRVU1zVDBGQlJDeEpRVUZaTEV0QlFVc3NVVUZCY2tJc1JVRkJLMEk3UVVGRE4wSXNiME5CUVdNc1MwRkJTeXhsUVVGdVFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTeXhuUWtGQlRDeEpRVUY1UWl4TFFVRkxMR2RDUVVGTUxFVkJRVGRDTEVWQlFYTkVPMEZCUTNCRUxGZEJRVXNzVVVGQlREdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRUxGRXNjVUpCUVZNc1N5eEZRVUZQTzBGQlEyUXNVMEZCU3l4TFFVRk1MR2RDUVVOTExFdEJRVXNzUzBGRVZpeEZRVVZMTEV0QlJrdzdRVUZKUVN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSQ3hITEd0Q1FVRk5PMEZCUTBvc1YwRkJUeXhMUVVGTExFOUJRVm83UVVGRFJDeEhPenR0UWtGRlJDeEhMR2RDUVVGSkxFTXNSVUZCUnp0QlFVTk1MRk5CUVVzc1QwRkJUQ3hIUVVGbExFTkJRV1k3UVVGRFFTeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkN4UExHOUNRVUZSTEVjc1JVRkJTenRCUVVOWUxGZEJRVThzUzBGQlN5eExRVUZNTEVOQlFWY3NSMEZCV0N4RFFVRlFPMEZCUTBRc1J6czdiVUpCUlVRc1Z5d3dRa0ZCWXp0QlFVTmFMRmRCUVU4c01FSkJRV1VzUzBGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4SlFVRnVReXhGUVVGNVF5eExRVUZMTEZkQlFUbERMRU5CUVZBN1FVRkRSQ3hIT3p0dFFrRkZSQ3hSTEhWQ1FVRlhPMEZCUTFRc1YwRkJUeXhMUVVGTExGRkJRVm83UVVGRFJDeEhPenR0UWtGRlJDeFhMSGRDUVVGWkxGRXNSVUZCVlR0QlFVTndRaXhUUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4VFFVRk1MRWxCUVd0Q0xFVkJRVzVETzBGQlEwRXNVMEZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzV1VGQlRDeEpRVUZ4UWl4RFFVRjZRenRCUVVOQkxGRkJRVWtzUzBGQlN5eFRRVUZNTEVOQlFXVXNUMEZCWml4RFFVRjFRaXhSUVVGMlFpeE5RVUZ4UXl4RFFVRkRMRU5CUVRGRExFVkJRVFpETzBGQlF6TkRMRmRCUVVzc1UwRkJUQ3hEUVVGbExFbEJRV1lzUTBGQmIwSXNVVUZCY0VJN1FVRkRRU3hYUVVGTExGbEJRVXc3UVVGRFJEdEJRVU5FTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVMR01zTWtKQlFXVXNVU3hGUVVGVk8wRkJRM1pDTEZGQlFVMHNaMEpCUVdsQ0xFdEJRVXNzVTBGQlRpeEhRVUZ0UWl4TFFVRkxMRk5CUVV3c1EwRkJaU3hQUVVGbUxFTkJRWFZDTEZGQlFYWkNMRU5CUVc1Q0xFZEJRWE5FTEVOQlFVTXNRMEZCTjBVN1FVRkRRU3hSUVVGSkxHdENRVUZyUWl4RFFVRkRMRU5CUVhaQ0xFVkJRVEJDTzBGQlEzaENMRmRCUVVzc1dVRkJURHRCUVVOQkxGZEJRVXNzVTBGQlRDeERRVUZsTEUxQlFXWXNRMEZCYzBJc1lVRkJkRUlzUlVGQmNVTXNRMEZCY2tNN1FVRkRSRHRCUVVORUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRVVZFTEdFc05FSkJRV2RDTzBGQlEyUXNVVUZCVFN4VlFVRlZMRXRCUVVzc1IwRkJUQ3hGUVVGb1FqdEJRVU5CTEZOQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeExRVUZMTEZsQlFYcENMRVZCUVhWRExFZEJRWFpETEVWQlFUUkRPMEZCUXpGRExGZEJRVXNzVTBGQlRDeERRVUZsTEVOQlFXWXNSVUZCYTBJc1QwRkJiRUlzUlVGQk1rSXNTVUZCTTBJN1FVRkRSRHRCUVVORUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN096czdPMnRDUVVkWkxFMGlMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCdmJrWnlZVzFsVlhCa1lYUmxMQ0JqWVc1alpXeFBia1p5WVcxbFZYQmtZWFJsTENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ2ZTQm1jbTl0SUNjdUxpOW1jbUZ0WlhONWJtTW5PMXh1YVcxd2IzSjBJSHNnYzNCbFpXUlFaWEpUWldOdmJtUWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtTnNZWE56SUVGamRHbHZiaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2RHaHBjeTV6WTJobFpIVnNaV1JWY0dSaGRHVWdQU0IwYUdsekxuTmphR1ZrZFd4bFpGVndaR0YwWlM1aWFXNWtLSFJvYVhNcE8xeHVYRzRnSUNBZ2RHaHBjeTV3Y205d2N5QTlJSHRjYmlBZ0lDQWdJQzR1TG5Sb2FYTXVZMjl1YzNSeWRXTjBiM0l1WkdWbVlYVnNkRkJ5YjNCelhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhSb2FYTXVjMlYwVUhKdmNITW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnY0hKdmNITXVZM1Z5Y21WdWRDQjhmQ0J3Y205d2N5NW1jbTl0SUh4OElEQTdYRzRnSUgxY2JseHVJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHOXVVM1JoY25Rc0lGOXZibE4wWVhKMExDQndZWE56YVhabElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tDRndZWE56YVhabEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG1selFXTjBhWFpsSUQwZ2RISjFaVHRjYmlBZ0lDQWdJRzl1Um5KaGJXVlZjR1JoZEdVb2RHaHBjeTV6WTJobFpIVnNaV1JWY0dSaGRHVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1JoY25RcElIUm9hWE11YjI1VGRHRnlkQ2dwTzF4dUlDQWdJR2xtSUNodmJsTjBZWEowS1NCdmJsTjBZWEowS0hSb2FYTXBPMXh1SUNBZ0lHbG1JQ2hmYjI1VGRHRnlkQ2tnWDI5dVUzUmhjblFvZEdocGN5azdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhOMGIzQW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnZibE4wYjNBc0lGOXZibE4wYjNBc0lIQmhjM05wZG1VZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0JwWmlBb0lYQmhjM05wZG1VcElIdGNiaUFnSUNBZ0lIUm9hWE11YVhOQlkzUnBkbVVnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJR05oYm1ObGJFOXVSbkpoYldWVmNHUmhkR1VvZEdocGN5NXpZMmhsWkhWc1pXUlZjR1JoZEdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG05dVUzUnZjQ2tnZEdocGN5NXZibE4wYjNBb0tUdGNiaUFnSUNCcFppQW9iMjVUZEc5d0tTQnZibE4wYjNBb2RHaHBjeWs3WEc0Z0lDQWdhV1lnS0Y5dmJsTjBiM0FwSUY5dmJsTjBiM0FvZEdocGN5azdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUdOdmJYQnNaWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYjI1RGIyMXdiR1YwWlN3Z1gyOXVRMjl0Y0d4bGRHVWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCMGFHbHpMbk4wYjNBb0tUdGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVRMjl0Y0d4bGRHVXBJSFJvYVhNdWIyNURiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lHbG1JQ2h2YmtOdmJYQnNaWFJsS1NCdmJrTnZiWEJzWlhSbEtIUm9hWE1wTzF4dUlDQWdJR2xtSUNoZmIyNURiMjF3YkdWMFpTa2dYMjl1UTI5dGNHeGxkR1VvZEdocGN5azdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhOamFHVmtkV3hsWkZWd1pHRjBaU2dwSUh0Y2JpQWdJQ0IwYUdsekxteGhjM1JWY0dSaGRHVmtJRDBnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsS0NrN1hHNGdJQ0FnZEdocGN5NXdjbVYySUQwZ2RHaHBjeTVqZFhKeVpXNTBPMXh1WEc0Z0lDQWdZMjl1YzNRZ2V5QnZibFZ3WkdGMFpTd2djR0Z6YzJsMlpTQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUdsbUlDaDBhR2x6TG5Wd1pHRjBaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWpkWEp5Wlc1MElEMGdkR2hwY3k1MWNHUmhkR1VvZEdocGN5NWpkWEp5Wlc1MEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9iMjVWY0dSaGRHVXBJRzl1VlhCa1lYUmxLSFJvYVhNdVkzVnljbVZ1ZEN3Z2RHaHBjeWs3WEc0Z0lDQWdkR2hwY3k1bWFYSmxUR2x6ZEdWdVpYSnpLQ2s3WEc1Y2JpQWdJQ0JwWmlBb0lYQmhjM05wZG1VZ0ppWWdkR2hwY3k1cGMwRmpkR2wyWlNrZ2UxeHVJQ0FnSUNBZ2IyNUdjbUZ0WlZWd1pHRjBaU2gwYUdsekxuTmphR1ZrZFd4bFpGVndaR0YwWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YVhOQlkzUnBiMjVEYjIxd2JHVjBaU0FtSmlCMGFHbHpMbWx6UVdOMGFXOXVRMjl0Y0d4bGRHVW9LU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWpiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYzJWMFVISnZjSE1vY0hKdmNITXBJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQnpJRDBnZTF4dUlDQWdJQ0FnTGk0dWRHaHBjeTV3Y205d2N5eGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlR0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lHZGxkQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1amRYSnlaVzUwTzF4dUlDQjlYRzVjYmlBZ2MyVjBLSFlwSUh0Y2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ1BTQjJPMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnWjJWMFVISnZjQ2hyWlhrcElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXdjbTl3YzF0clpYbGRPMXh1SUNCOVhHNWNiaUFnWjJWMFZtVnNiMk5wZEhrb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhOd1pXVmtVR1Z5VTJWamIyNWtLSFJvYVhNdVkzVnljbVZ1ZENBdElIUm9hWE11Y0hKbGRpd2dkR2hwY3k1c1lYTjBWWEJrWVhSbFpDazdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbDJaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1cGMwRmpkR2wyWlR0Y2JpQWdmVnh1WEc0Z0lHRmtaRXhwYzNSbGJtVnlLR3hwYzNSbGJtVnlLU0I3WEc0Z0lDQWdkR2hwY3k1c2FYTjBaVzVsY25NZ1BTQjBhR2x6TG14cGMzUmxibVZ5Y3lCOGZDQmJYVHRjYmlBZ0lDQjBhR2x6TG01MWJVeHBjM1JsYm1WeWN5QTlJSFJvYVhNdWJuVnRUR2x6ZEdWdVpYSnpJSHg4SURBN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YkdsemRHVnVaWEp6TG1sdVpHVjRUMllvYkdsemRHVnVaWElwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXNhWE4wWlc1bGNuTXVjSFZ6YUNoc2FYTjBaVzVsY2lrN1hHNGdJQ0FnSUNCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3lzck8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lISmxiVzkyWlV4cGMzUmxibVZ5S0d4cGMzUmxibVZ5S1NCN1hHNGdJQ0FnWTI5dWMzUWdiR2x6ZEdWdVpYSkpibVJsZUNBOUlDaDBhR2x6TG14cGMzUmxibVZ5Y3lrZ1B5QjBhR2x6TG14cGMzUmxibVZ5Y3k1cGJtUmxlRTltS0d4cGMzUmxibVZ5S1NBNklDMHhPMXh1SUNBZ0lHbG1JQ2hzYVhOMFpXNWxja2x1WkdWNElDRTlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV1ZFcxTWFYTjBaVzVsY25NdExUdGNiaUFnSUNBZ0lIUm9hWE11YkdsemRHVnVaWEp6TG5Od2JHbGpaU2hzYVhOMFpXNWxja2x1WkdWNExDQXhLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0JtYVhKbFRHbHpkR1Z1WlhKektDa2dlMXh1SUNBZ0lHTnZibk4wSUdOMWNuSmxiblFnUFNCMGFHbHpMbWRsZENncE8xeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTV1ZFcxTWFYTjBaVzVsY25NN0lHa3JLeWtnZTF4dUlDQWdJQ0FnZEdocGN5NXNhWE4wWlc1bGNuTmJhVjBvWTNWeWNtVnVkQ3dnZEdocGN5azdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRmpkR2x2Ymp0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyKTtcblxuICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMsIHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgbm90IGRlZmluZWQsIHJldHVybiBlbnRpcmUgY2FjaGVkIHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkLCByZXR1cm4gY2FjaGVkIHZhbHVlIGlmIHByZXNlbnQuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQgYW5kIGNhY2hlZCB2YWx1ZSBpcyBub3QgcHJlc2VudCwgcmVhZCBhbmQgcmV0dXJuLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IChvcHRpb25hbCkga2V5IG9mIHZhbHVlXG4gICAqIEByZXR1cm4ge3ZhbHVlfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkKGtleSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVhZCB2YWx1ZSBhY2NvcmRpbmcgdG8gYG9uUmVhZGBcbiAgICogQHBhcmFtICB7c3RyaW5nfSBOYW1lIG9mIHByb3BlcnR5IHRvIHJlYWRcbiAgICogQHJldHVybiB7W3R5cGVdfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gcmVhZChrZXkpIHtcbiAgICBpZiAodGhpcy5vblJlYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uUmVhZChrZXkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGBzdGF0ZWAgd2l0aCBuZXcgdmFsdWVzIGFuZCBzY2hlZHVsZSBgcmVuZGVyYC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xuICAgKiBAcGFyYW0ge3ZhbHVlfSB2YWx1ZSB0b3NldFxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHZhbHVlcyA9IGFyZ3NbMF07XG4gICAgICAvLyBTZXQgbXVsdGlwbGUgdmFsdWVzXG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShrZXksIHZhbHVlc1trZXldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9rZXkyID0gYXJnc1swXTtcbiAgICAgIHZhciB2YWx1ZSA9IGFyZ3NbMV07XG5cbiAgICAgIHRoaXMuc2V0VmFsdWUoX2tleTIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lUmVuZGVyKSh0aGlzLnJlbmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gPiBXaWxleSAtIDYgaW4gdGhlIE1vcm5pbmdcbiAgLyoqXG4gICAqIFNldCBhIHNpbmdsZSB2YWx1ZVxuICAgKiBJZiBhIHN0cmluZyBvciBudW1iZXIsIHNldCBkaXJlY3RseS5cbiAgICogSWYgYW4gb2JqZWN0IG9yIGFycmF5LCBjcmVhdGUgbmV3IG9iamVjdCBvciBhcnJheVxuICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuIFRoZW4gc2hhbGxvdyBjb21wYXJlXG4gICAqIHRvIHNldCBhbmQgY29tcGFyZSBpbmRpdmlkdWFsIHZhbHVlcy5cbiAgICogT25lIG9mIHRoZSBjbGVhcmVyIGRyYXdiYWNrcyBhbmQgYW5ub3lhbmNlcyB3aXRoXG4gICAqIHVzaW5nIG11dGFibGUgaW5zdGVhZCBvZiBpbW11dGFibGUgc3RhdGVzLlxuICAgKiBAcGFyYW0ge1t0eXBlXX0ga2V5XG4gICAqIEBwYXJhbSB7W3R5cGVdfSB2YWx1ZVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIHNldFZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gdGhpcy5zdGF0ZVtrZXldO1xuXG4gICAgLy8gSWYgbnVtYmVyIG9yIHN0cmluZywgc2V0IGRpcmVjdGx5XG4gICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSB8fCAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZSkpIHtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc0FycmF5KSh2YWx1ZSkpIHtcbiAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB2YXIgbnVtVmFsdWVzID0gdmFsdWUubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1WYWx1ZXM7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldW2ldICE9PSB2YWx1ZVtpXSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVtpXSA9IHZhbHVlW2ldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0ge307XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIHZhbHVlS2V5IGluIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldICE9PSB2YWx1ZVt2YWx1ZUtleV0pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldID0gdmFsdWVbdmFsdWVLZXldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNoYW5nZWRWYWx1ZXMucHVzaChrZXkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRmlyZXMgYG9uUmVuZGVyYCBpZiB2YWx1ZXMgaGF2ZSBjaGFuZ2VkIG9yIGBmb3JjZVJlbmRlcmBcbiAgICogaXMgc2V0IHRvIHRydWUuXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgZm9yY2VSZW5kZXIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1swXTtcblxuICAgIGlmICgoZm9yY2VSZW5kZXIgfHwgdGhpcy5oYXNDaGFuZ2VkKSAmJiB0aGlzLm9uUmVuZGVyKSB7XG4gICAgICB0aGlzLm9uUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3TzBGQlEwRTdPenM3U1VGRlRTeFJPMEZCUTBvc2IwSkJRVmtzUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVOcVFpeFRRVUZMTEUxQlFVd3NSMEZCWXl4TFFVRkxMRTFCUVV3c1EwRkJXU3hKUVVGYUxFTkJRV2xDTEVsQlFXcENMRU5CUVdRN08wRkJSVUVzVTBGQlN5eExRVUZNTEdkQ1FVTkxMRXRCUVVzc1YwRkJUQ3hEUVVGcFFpeFpRVVIwUWl4RlFVVkxMRXRCUmt3N08wRkJTMEVzVTBGQlN5eExRVUZNTEVkQlFXRXNSVUZCWWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeEZRVUZ5UWp0QlFVTkVPenM3T3pzN096czdPenM3Y1VKQlZVUXNSeXhuUWtGQlNTeEhMRVZCUVVzN1FVRkRVQ3hSUVVGSkxFZEJRVW9zUlVGQlV6dEJRVU5RTEZWQlFVa3NTMEZCU3l4TFFVRk1MRU5CUVZjc1IwRkJXQ3hOUVVGdlFpeFRRVUY0UWl4RlFVRnRRenRCUVVOcVF5eGxRVUZQTEV0QlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1EwRkJVRHRCUVVORUxFOUJSa1FzVFVGRlR6dEJRVU5NTEdWQlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGUU8wRkJRMFE3UVVGRFJpeExRVTVFTEUxQlRVODdRVUZEVEN4aFFVRlBMRXRCUVVzc1MwRkJXanRCUVVORU8wRkJRMFlzUnpzN096czdPenM3TzNGQ1FVOUVMRWtzYVVKQlFVc3NSeXhGUVVGTE8wRkJRMUlzVVVGQlNTeExRVUZMTEUxQlFWUXNSVUZCYVVJN1FVRkRaaXhoUVVGUExFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCVUR0QlFVTkVPMEZCUTBZc1J6czdPenM3T3pzN08zRkNRVTlFTEVjc2EwSkJRV0U3UVVGQlFTeHpRMEZCVGl4SlFVRk5PMEZCUVU0c1ZVRkJUVHRCUVVGQk96dEJRVU5ZTEZGQlFVa3NUMEZCVHl4TFFVRkxMRU5CUVV3c1EwRkJVQ3hMUVVGdFFpeFhRVUYyUWl4RlFVRnZRenRCUVVGQkxGVkJRekZDTEUxQlJEQkNMRWRCUTJZc1NVRkVaVHM3TzBGQlIyeERMRmRCUVVzc1NVRkJUU3hIUVVGWUxFbEJRV3RDTEUxQlFXeENMRVZCUVRCQ08wRkJRM2hDTEdGQlFVc3NVVUZCVEN4RFFVRmpMRWRCUVdRc1JVRkJiVUlzVDBGQlR5eEhRVUZRTEVOQlFXNUNPMEZCUTBRN1FVRkRSaXhMUVU1RUxFMUJUVTg3UVVGQlFTeFZRVU5ITEV0QlJFZ3NSMEZEYTBJc1NVRkViRUk3UVVGQlFTeFZRVU5STEV0QlJGSXNSMEZEYTBJc1NVRkViRUk3TzBGQlJVd3NWMEZCU3l4UlFVRk1MRU5CUVdNc1MwRkJaQ3hGUVVGdFFpeExRVUZ1UWp0QlFVTkVPenRCUVVWRUxGRkJRVWtzUzBGQlN5eFZRVUZVTEVWQlFYRkNPMEZCUTI1Q0xHOURRVUZqTEV0QlFVc3NUVUZCYmtJN1FVRkRSRHM3UVVGRlJDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96czdPenM3T3pzN096czdPenM3TzNGQ1FXTkVMRkVzY1VKQlFWTXNSeXhGUVVGTExFc3NSVUZCVHp0QlFVTnVRaXhSUVVGTkxHVkJRV1VzUzBGQlN5eExRVUZNTEVOQlFWY3NSMEZCV0N4RFFVRnlRanM3TzBGQlIwRXNVVUZCU1N4clFrRkJUU3hMUVVGT0xFdEJRV2RDTEhGQ1FVRlRMRXRCUVZRc1EwRkJjRUlzUlVGQmNVTTdRVUZEYmtNc1ZVRkJTU3hwUWtGQmFVSXNTMEZCY2tJc1JVRkJORUk3UVVGRE1VSXNZVUZCU3l4TFFVRk1MRU5CUVZjc1IwRkJXQ3hKUVVGclFpeExRVUZzUWp0QlFVTkJMR0ZCUVVzc1ZVRkJUQ3hIUVVGclFpeEpRVUZzUWp0QlFVTkVPMEZCUTBZc1MwRk1SQ3hOUVV0UExFbEJRVWtzYjBKQlFWRXNTMEZCVWl4RFFVRktMRVZCUVc5Q08wRkJRM3BDTEZWQlFVa3NRMEZCUXl4WlFVRk1MRVZCUVcxQ08wRkJRMnBDTEdGQlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1NVRkJhMElzUlVGQmJFSTdRVUZEUkRzN1FVRkZSQ3hWUVVGTkxGbEJRVmtzVFVGQlRTeE5RVUY0UWp0QlFVTkJMRmRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRV0lzUlVGQlowSXNTVUZCU1N4VFFVRndRaXhGUVVFclFpeEhRVUV2UWl4RlFVRnZRenRCUVVOc1F5eFpRVUZKTEV0QlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1JVRkJaMElzUTBGQmFFSXNUVUZCZFVJc1RVRkJUU3hEUVVGT0xFTkJRVE5DTEVWQlFYRkRPMEZCUTI1RExHVkJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NSVUZCWjBJc1EwRkJhRUlzU1VGQmNVSXNUVUZCVFN4RFFVRk9MRU5CUVhKQ08wRkJRMEVzWlVGQlN5eFZRVUZNTEVkQlFXdENMRWxCUVd4Q08wRkJRMFE3UVVGRFJqdEJRVU5HTEV0QldrMHNUVUZaUVN4SlFVRkpMR3RDUVVGTkxFdEJRVTRzUTBGQlNpeEZRVUZyUWp0QlFVTjJRaXhWUVVGSkxFTkJRVU1zV1VGQlRDeEZRVUZ0UWp0QlFVTnFRaXhoUVVGTExFdEJRVXdzUTBGQlZ5eEhRVUZZTEVsQlFXdENMRVZCUVd4Q08wRkJRMFE3TzBGQlJVUXNWMEZCU3l4SlFVRkpMRkZCUVZRc1NVRkJjVUlzUzBGQmNrSXNSVUZCTkVJN1FVRkRNVUlzV1VGQlNTeExRVUZMTEV0QlFVd3NRMEZCVnl4SFFVRllMRVZCUVdkQ0xGRkJRV2hDTEUxQlFUaENMRTFCUVUwc1VVRkJUaXhEUVVGc1F5eEZRVUZ0UkR0QlFVTnFSQ3hsUVVGTExFdEJRVXdzUTBGQlZ5eEhRVUZZTEVWQlFXZENMRkZCUVdoQ0xFbEJRVFJDTEUxQlFVMHNVVUZCVGl4RFFVRTFRanRCUVVOQkxHVkJRVXNzVlVGQlRDeEhRVUZyUWl4SlFVRnNRanRCUVVORU8wRkJRMFk3UVVGRFJqczdRVUZGUkN4UlFVRkpMRXRCUVVzc1ZVRkJWQ3hGUVVGeFFqdEJRVU51UWl4WFFVRkxMR0ZCUVV3c1EwRkJiVUlzU1VGQmJrSXNRMEZCZDBJc1IwRkJlRUk3UVVGRFJEdEJRVU5HTEVjN096czdPenM3T3p0eFFrRlBSQ3hOTEhGQ1FVRTBRanRCUVVGQkxGRkJRWEpDTEZkQlFYRkNMSGxFUVVGUUxFdEJRVTg3TzBGQlF6RkNMRkZCUVVrc1EwRkJReXhsUVVGbExFdEJRVXNzVlVGQmNrSXNTMEZCYjBNc1MwRkJTeXhSUVVFM1F5eEZRVUYxUkR0QlFVTnlSQ3hYUVVGTExGRkJRVXc3UVVGRFJEczdRVUZGUkN4VFFVRkxMR0ZCUVV3c1EwRkJiVUlzVFVGQmJrSXNSMEZCTkVJc1EwRkJOVUk3UVVGRFFTeFRRVUZMTEZWQlFVd3NSMEZCYTBJc1MwRkJiRUk3TzBGQlJVRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdPenM3YTBKQlIxa3NVU0lzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHOXVSbkpoYldWU1pXNWtaWElnZlNCbWNtOXRJQ2N1TGk5bWNtRnRaWE41Ym1Nbk8xeHVhVzF3YjNKMElIc2dhWE5CY25KaGVTd2dhWE5QWW1vc0lHbHpUblZ0TENCcGMxTjBjbWx1WnlCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1Oc1lYTnpJRkpsYm1SbGNtVnlJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCMGFHbHpMbkpsYm1SbGNpQTlJSFJvYVhNdWNtVnVaR1Z5TG1KcGJtUW9kR2hwY3lrN1hHNWNiaUFnSUNCMGFHbHpMbkJ5YjNCeklEMGdlMXh1SUNBZ0lDQWdMaTR1ZEdocGN5NWpiMjV6ZEhKMVkzUnZjaTVrWldaaGRXeDBVSEp2Y0hNc1hHNGdJQ0FnSUNBdUxpNXdjbTl3YzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ2UzMDdYRzRnSUNBZ2RHaHBjeTVqYUdGdVoyVmtWbUZzZFdWeklEMGdXMTA3WEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1IyVjBJR04xY25KbGJuUWdjM1JoZEdVdVhHNGdJQ0FxSUVsbUlHQnJaWGxnSUdseklHNXZkQ0JrWldacGJtVmtMQ0J5WlhSMWNtNGdaVzUwYVhKbElHTmhZMmhsWkNCemRHRjBaUzVjYmlBZ0lDb2dTV1lnWUd0bGVXQWdhWE1nWkdWbWFXNWxaQ3dnY21WMGRYSnVJR05oWTJobFpDQjJZV3gxWlNCcFppQndjbVZ6Wlc1MExseHVJQ0FnS2lCSlppQmdhMlY1WUNCcGN5QmtaV1pwYm1Wa0lHRnVaQ0JqWVdOb1pXUWdkbUZzZFdVZ2FYTWdibTkwSUhCeVpYTmxiblFzSUhKbFlXUWdZVzVrSUhKbGRIVnliaTVjYmlBZ0lDb2dRSEJoY21GdElDQjdjM1J5YVc1bmZTQW9iM0IwYVc5dVlXd3BJR3RsZVNCdlppQjJZV3gxWlZ4dUlDQWdLaUJBY21WMGRYSnVJSHQyWVd4MVpYMWNiaUFnSUNvdlhHNGdJR2RsZENoclpYa3BJSHRjYmlBZ0lDQnBaaUFvYTJWNUtTQjdYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NXpkR0YwWlZ0clpYbGRJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YzNSaGRHVmJhMlY1WFR0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxZV1FvYTJWNUtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWMzUmhkR1U3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUZKbFlXUWdkbUZzZFdVZ1lXTmpiM0prYVc1bklIUnZJR0J2YmxKbFlXUmdYRzRnSUNBcUlFQndZWEpoYlNBZ2UzTjBjbWx1WjMwZ1RtRnRaU0J2WmlCd2NtOXdaWEowZVNCMGJ5QnlaV0ZrWEc0Z0lDQXFJRUJ5WlhSMWNtNGdlMXQwZVhCbFhYMWNiaUFnSUNvdlhHNGdJSEpsWVdRb2EyVjVLU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTXViMjVTWldGa0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV2YmxKbFlXUW9hMlY1S1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1ZYQmtZWFJsSUdCemRHRjBaV0FnZDJsMGFDQnVaWGNnZG1Gc2RXVnpJR0Z1WkNCelkyaGxaSFZzWlNCZ2NtVnVaR1Z5WUM1Y2JpQWdJQ29nUUhCaGNtRnRJSHR2WW1wbFkzUjlJSFpoYkhWbGMxeHVJQ0FnS2lCQWNHRnlZVzBnZTNaaGJIVmxmU0IyWVd4MVpTQjBiM05sZEZ4dUlDQWdLaTljYmlBZ2MyVjBLQzR1TG1GeVozTXBJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JR0Z5WjNOYk1WMGdQVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCYklIWmhiSFZsY3lCZElEMGdZWEpuY3p0Y2JpQWdJQ0FnSUM4dklGTmxkQ0J0ZFd4MGFYQnNaU0IyWVd4MVpYTmNiaUFnSUNBZ0lHWnZjaUFvWTI5dWMzUWdhMlY1SUdsdUlIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ObGRGWmhiSFZsS0d0bGVTd2dkbUZzZFdWelcydGxlVjBwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCYklHdGxlU3dnZG1Gc2RXVWdYU0E5SUdGeVozTTdYRzRnSUNBZ0lDQjBhR2x6TG5ObGRGWmhiSFZsS0d0bGVTd2dkbUZzZFdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG1oaGMwTm9ZVzVuWldRcElIdGNiaUFnSUNBZ0lHOXVSbkpoYldWU1pXNWtaWElvZEdocGN5NXlaVzVrWlhJcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdMeThnUGlCWGFXeGxlU0F0SURZZ2FXNGdkR2hsSUUxdmNtNXBibWRjYmlBZ0x5b3FYRzRnSUNBcUlGTmxkQ0JoSUhOcGJtZHNaU0IyWVd4MVpWeHVJQ0FnS2lCSlppQmhJSE4wY21sdVp5QnZjaUJ1ZFcxaVpYSXNJSE5sZENCa2FYSmxZM1JzZVM1Y2JpQWdJQ29nU1dZZ1lXNGdiMkpxWldOMElHOXlJR0Z5Y21GNUxDQmpjbVZoZEdVZ2JtVjNJRzlpYW1WamRDQnZjaUJoY25KaGVWeHVJQ0FnS2lCcFppQnBkQ0JrYjJWemJpZDBJR0ZzY21WaFpIa2daWGhwYzNRdUlGUm9aVzRnYzJoaGJHeHZkeUJqYjIxd1lYSmxYRzRnSUNBcUlIUnZJSE5sZENCaGJtUWdZMjl0Y0dGeVpTQnBibVJwZG1sa2RXRnNJSFpoYkhWbGN5NWNiaUFnSUNvZ1QyNWxJRzltSUhSb1pTQmpiR1ZoY21WeUlHUnlZWGRpWVdOcmN5QmhibVFnWVc1dWIzbGhibU5sY3lCM2FYUm9YRzRnSUNBcUlIVnphVzVuSUcxMWRHRmliR1VnYVc1emRHVmhaQ0J2WmlCcGJXMTFkR0ZpYkdVZ2MzUmhkR1Z6TGx4dUlDQWdLaUJBY0dGeVlXMGdlMXQwZVhCbFhYMGdhMlY1WEc0Z0lDQXFJRUJ3WVhKaGJTQjdXM1I1Y0dWZGZTQjJZV3gxWlZ4dUlDQWdLaTljYmlBZ2MyVjBWbUZzZFdVb2EyVjVMQ0IyWVd4MVpTa2dlMXh1SUNBZ0lHTnZibk4wSUdOMWNuSmxiblJXWVd4MVpTQTlJSFJvYVhNdWMzUmhkR1ZiYTJWNVhUdGNibHh1SUNBZ0lDOHZJRWxtSUc1MWJXSmxjaUJ2Y2lCemRISnBibWNzSUhObGRDQmthWEpsWTNSc2VWeHVJQ0FnSUdsbUlDaHBjMDUxYlNoMllXeDFaU2tnZkh3Z2FYTlRkSEpwYm1jb2RtRnNkV1VwS1NCN1hHNGdJQ0FnSUNCcFppQW9ZM1Z5Y21WdWRGWmhiSFZsSUNFOVBTQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLR2x6UVhKeVlYa29kbUZzZFdVcEtTQjdYRzRnSUNBZ0lDQnBaaUFvSVdOMWNuSmxiblJXWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsVzJ0bGVWMGdQU0JiWFR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ1kyOXVjM1FnYm5WdFZtRnNkV1Z6SUQwZ2RtRnNkV1V1YkdWdVozUm9PMXh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxV1lXeDFaWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV6ZEdGMFpWdHJaWGxkVzJsZElDRTlQU0IyWVd4MVpWdHBYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFZ0cFhTQTlJSFpoYkhWbFcybGRPMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLR2x6VDJKcUtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ2FXWWdLQ0ZqZFhKeVpXNTBWbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRjBaVnRyWlhsZElEMGdlMzA3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdadmNpQW9iR1YwSUhaaGJIVmxTMlY1SUdsdUlIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZWFJsVzJ0bGVWMWJkbUZzZFdWTFpYbGRJQ0U5UFNCMllXeDFaVnQyWVd4MVpVdGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYxYmRtRnNkV1ZMWlhsZElEMGdkbUZzZFdWYmRtRnNkV1ZMWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFHRnpRMmhoYm1kbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9kR2hwY3k1b1lYTkRhR0Z1WjJWa0tTQjdYRzRnSUNBZ0lDQjBhR2x6TG1Ob1lXNW5aV1JXWVd4MVpYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJHYVhKbGN5QmdiMjVTWlc1a1pYSmdJR2xtSUhaaGJIVmxjeUJvWVhabElHTm9ZVzVuWldRZ2IzSWdZR1p2Y21ObFVtVnVaR1Z5WUZ4dUlDQWdLaUJwY3lCelpYUWdkRzhnZEhKMVpTNWNiaUFnSUNvZ1FISmxkSFZ5YmlCN2RHaHBjMzFjYmlBZ0lDb3ZYRzRnSUhKbGJtUmxjaWhtYjNKalpWSmxibVJsY2lBOUlHWmhiSE5sS1NCN1hHNGdJQ0FnYVdZZ0tDaG1iM0pqWlZKbGJtUmxjaUI4ZkNCMGFHbHpMbWhoYzBOb1lXNW5aV1FwSUNZbUlIUm9hWE11YjI1U1pXNWtaWElwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVTWlc1a1pYSW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBhR2x6TG1Ob1lXNW5aV1JXWVd4MVpYTXViR1Z1WjNSb0lEMGdNRHRjYmlBZ0lDQjBhR2x6TG1oaGMwTm9ZVzVuWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGSmxibVJsY21WeU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDU1NSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudCxcbiAgICBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbjogdHJ1ZVxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9yZW5kZXIgPSByZXF1aXJlKCcuL3JlbmRlcicpO1xuXG52YXIgX3JlbmRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXIpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ1NTUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhDU1NSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBDU1NSZW5kZXJlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBlbGVtZW50ID0gX3Byb3BzLmVsZW1lbnQ7XG4gICAgdmFyIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uID0gX3Byb3BzLmVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uO1xuXG4gICAgKDAsIF9yZW5kZXIyLmRlZmF1bHQpKGVsZW1lbnQsIHRoaXMuc3RhdGUsIHRoaXMuY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pO1xuICB9O1xuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIHZhbHVlVHlwZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W2tleV07XG5cbiAgICBpZiAoIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICAgdmFyIGRvbVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5KV0gfHwgMDtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgJiYgdmFsdWVUeXBlLnBhcnNlID8gdmFsdWVUeXBlLnBhcnNlKGRvbVZhbHVlKSA6IGRvbVZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWVUeXBlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVR5cGUuZGVmYXVsdCB8fCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDU1NSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dHJRa0UyUW1Vc1ZVRkJWU3hQUVVGV0xFVkJRVzFDTEV0QlFXNUNMRVZCUVRCQ08wRkJRM1pETEZOQlFVOHNTVUZCU1N4WFFVRktPMEZCUTB3c2IwSkJSRXM3UVVGRlRDeG5RMEZCTkVJN1FVRkdka0lzUzBGSFJpeExRVWhGTEVWQlFWQTdRVUZMUkN4RE96dEJRVzVEUkRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN096czdPenM3U1VGRlRTeFhPenM3T3pzN096czdkMEpCUTBvc1VTeDFRa0ZCVnp0QlFVRkJMR2xDUVVOMVF5eExRVUZMTEV0QlJEVkRPMEZCUVVFc1VVRkRSQ3hQUVVSRExGVkJRMFFzVDBGRVF6dEJRVUZCTEZGQlExRXNNRUpCUkZJc1ZVRkRVU3d3UWtGRVVqczdRVUZGVkN3d1FrRkJWU3hQUVVGV0xFVkJRVzFDTEV0QlFVc3NTMEZCZUVJc1JVRkJLMElzUzBGQlN5eGhRVUZ3UXl4RlFVRnRSQ3d3UWtGQmJrUTdRVUZEUkN4SE96dDNRa0ZGUkN4TkxHMUNRVUZQTEVjc1JVRkJTenRCUVVOV0xGRkJRVTBzV1VGQldTeHhRa0ZCWXl4SFFVRmtMRU5CUVd4Q096dEJRVVZCTEZGQlFVa3NRMEZCUXl4NVFrRkJaU3hIUVVGbUxFTkJRVXdzUlVGQk1FSTdRVUZCUVN4VlFVTm9RaXhQUVVSblFpeEhRVU5LTEV0QlFVc3NTMEZFUkN4RFFVTm9RaXhQUVVSblFqczdRVUZGZUVJc1ZVRkJUU3hYUVVGWExFOUJRVThzWjBKQlFWQXNRMEZCZDBJc1QwRkJlRUlzUlVGQmFVTXNTVUZCYWtNc1JVRkJkVU1zZDBKQlFWTXNSMEZCVkN4RFFVRjJReXhMUVVGNVJDeERRVUV4UlR0QlFVTkJMR0ZCUVZFc1lVRkJZU3hWUVVGVkxFdEJRWGhDTEVkQlFXbERMRlZCUVZVc1MwRkJWaXhEUVVGblFpeFJRVUZvUWl4RFFVRnFReXhIUVVFMlJDeFJRVUZ3UlR0QlFVTkVMRXRCU2tRc1RVRkpUenRCUVVOTUxGVkJRVWtzVTBGQlNpeEZRVUZsTzBGQlEySXNaVUZCVHl4VlFVRlZMRTlCUVZZc1NVRkJjVUlzUTBGQk5VSTdRVUZEUkN4UFFVWkVMRTFCUlU4N1FVRkRUQ3hsUVVGUExFTkJRVkE3UVVGRFJEdEJRVU5HTzBGQlEwWXNSeUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXNWtaWEpsY2lCbWNtOXRJQ2N1TGk4bk8xeHVhVzF3YjNKMElISmxibVJsY2tOVFV5Qm1jbTl0SUNjdUwzSmxibVJsY2ljN1hHNXBiWEJ2Y25RZ2RISmhibk5tYjNKdFVISnZjSE1nWm5KdmJTQW5MaTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1YVcxd2IzSjBJSFpoYkhWbFZIbHdaWE5OWVhBZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5YzdYRzVwYlhCdmNuUWdjSEpsWm1sNFpYSWdabkp2YlNBbkxpOXdjbVZtYVhobGNpYzdYRzVjYm1Oc1lYTnpJRU5UVTFKbGJtUmxjbVZ5SUdWNGRHVnVaSE1nVW1WdVpHVnlaWElnZTF4dUlDQnZibEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHVnNaVzFsYm5Rc0lHVnVZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJSEpsYm1SbGNrTlRVeWhsYkdWdFpXNTBMQ0IwYUdsekxuTjBZWFJsTENCMGFHbHpMbU5vWVc1blpXUldZV3gxWlhNc0lHVnVZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUtUdGNiaUFnZlZ4dVhHNGdJRzl1VW1WaFpDaHJaWGtwSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3gxWlZSNWNHVWdQU0IyWVd4MVpWUjVjR1Z6VFdGd1cydGxlVjA3WEc1Y2JpQWdJQ0JwWmlBb0lYUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJR052Ym5OMElIc2daV3hsYldWdWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0FnSUdOdmJuTjBJR1J2YlZaaGJIVmxJRDBnZDJsdVpHOTNMbWRsZEVOdmJYQjFkR1ZrVTNSNWJHVW9aV3hsYldWdWRDd2diblZzYkNsYmNISmxabWw0WlhJb2EyVjVLVjBnZkh3Z01EdGNiaUFnSUNBZ0lISmxkSFZ5YmlBb2RtRnNkV1ZVZVhCbElDWW1JSFpoYkhWbFZIbHdaUzV3WVhKelpTa2dQeUIyWVd4MVpWUjVjR1V1Y0dGeWMyVW9aRzl0Vm1Gc2RXVXBJRG9nWkc5dFZtRnNkV1U3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHbG1JQ2gyWVd4MVpWUjVjR1VwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxWSGx3WlM1a1pXWmhkV3gwSUh4OElEQTdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01EdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z0tHVnNaVzFsYm5Rc0lIQnliM0J6S1NCN1hHNGdJSEpsZEhWeWJpQnVaWGNnUTFOVFVtVnVaR1Z5WlhJb2UxeHVJQ0FnSUdWc1pXMWxiblFzWEc0Z0lDQWdaVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNDZJSFJ5ZFdVc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTVkdSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKFNWR1JlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIFNWR1JlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNWR1JlbmRlcmVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICB2YXIgX3Byb3BzJGVsZW1lbnQkZ2V0QkJvID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCk7XG5cbiAgICB2YXIgeCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby54O1xuICAgIHZhciB5ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLnk7XG4gICAgdmFyIHdpZHRoID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8uaGVpZ2h0O1xuXG4gICAgX3RoaXMuZWxlbWVudERpbWVuc2lvbnMgPSB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTVkdSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgIHZhciBhdHRycyA9ICgwLCBfYnVpbGQyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIHRoaXMuZWxlbWVudERpbWVuc2lvbnMpO1xuICAgICgwLCBfdXRpbHMuc2V0RE9NQXR0cnMpKGVsZW1lbnQsIGF0dHJzKTtcbiAgfTtcblxuICBTVkdSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG5cbiAgICBpZiAoIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZhbHVlVHlwZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W2tleV07XG4gICAgICByZXR1cm4gdmFsdWVUeXBlID8gdmFsdWVUeXBlLmRlZmF1bHQgOiAwO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU1ZHUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtGblEyVXNWVUZCVlN4UFFVRldMRVZCUVcxQ0xFdEJRVzVDTEVWQlFUQkNPMEZCUTNaRExGTkJRVThzU1VGQlNTeFhRVUZLTzBGQlEwdzdRVUZFU3l4TFFVVkdMRXRCUmtVc1JVRkJVRHRCUVVsRUxFTTdPMEZCY2tORU96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096czdPenM3U1VGRlRTeFhPenM3UVVGRFNpeDFRa0ZCV1N4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNhVVJCUTJwQ0xIRkNRVUZOTEV0QlFVNHNRMEZFYVVJN08wRkJRVUVzWjBOQlIyVXNUVUZCVFN4UFFVRk9MRU5CUVdNc1QwRkJaQ3hGUVVobU96dEJRVUZCTEZGQlIxUXNRMEZJVXl4NVFrRkhWQ3hEUVVoVE8wRkJRVUVzVVVGSFRpeERRVWhOTEhsQ1FVZE9MRU5CU0UwN1FVRkJRU3hSUVVkSUxFdEJTRWNzZVVKQlIwZ3NTMEZJUnp0QlFVRkJMRkZCUjBrc1RVRklTaXg1UWtGSFNTeE5RVWhLT3p0QlFVbHFRaXhWUVVGTExHbENRVUZNTEVkQlFYbENMRVZCUVVVc1NVRkJSaXhGUVVGTExFbEJRVXdzUlVGQlVTeFpRVUZTTEVWQlFXVXNZMEZCWml4RlFVRjZRanRCUVVwcFFqdEJRVXRzUWpzN2QwSkJSVVFzVVN4MVFrRkJWenRCUVVGQkxGRkJRMFFzVDBGRVF5eEhRVU5YTEV0QlFVc3NTMEZFYUVJc1EwRkRSQ3hQUVVSRE96dEJRVVZVTEZGQlFVMHNVVUZCVVN4eFFrRkJUU3hMUVVGTExFdEJRVmdzUlVGQmEwSXNTMEZCU3l4cFFrRkJka0lzUTBGQlpEdEJRVU5CTERSQ1FVRlpMRTlCUVZvc1JVRkJjVUlzUzBGQmNrSTdRVUZEUkN4SE96dDNRa0ZGUkN4TkxHMUNRVUZQTEVjc1JVRkJTenRCUVVGQkxGRkJRMFlzVDBGRVJTeEhRVU5WTEV0QlFVc3NTMEZFWml4RFFVTkdMRTlCUkVVN096dEJRVWRXTEZGQlFVa3NRMEZCUXl4NVFrRkJaU3hIUVVGbUxFTkJRVXdzUlVGQk1FSTdRVUZEZUVJc1lVRkJUeXhSUVVGUkxGbEJRVklzUTBGQmNVSXNSMEZCY2tJc1EwRkJVRHRCUVVORUxFdEJSa1FzVFVGRlR6dEJRVU5NTEZWQlFVMHNXVUZCV1N4eFFrRkJZU3hIUVVGaUxFTkJRV3hDTzBGQlEwRXNZVUZCVVN4VFFVRkVMRWRCUVdNc1ZVRkJWU3hQUVVGNFFpeEhRVUZyUXl4RFFVRjZRenRCUVVORU8wRkJRMFlzUnlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaVzVrWlhKbGNpQm1jbTl0SUNjdUxpOG5PMXh1YVcxd2IzSjBJR0oxYVd4a0lHWnliMjBnSnk0dlluVnBiR1FuTzF4dWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHVMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUhaaGJIVmxWSGx3WlUxaGNDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpKenRjYm1sdGNHOXlkQ0I3SUhObGRFUlBUVUYwZEhKeklIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMnhoYzNNZ1UxWkhVbVZ1WkdWeVpYSWdaWGgwWlc1a2N5QlNaVzVrWlhKbGNpQjdYRzRnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnYzNWd1pYSW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ1kyOXVjM1FnZXlCNExDQjVMQ0IzYVdSMGFDd2dhR1ZwWjJoMElIMGdQU0J3Y205d2N5NWxiR1Z0Wlc1MExtZGxkRUpDYjNnb0tUdGNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUkVhVzFsYm5OcGIyNXpJRDBnZXlCNExDQjVMQ0IzYVdSMGFDd2dhR1ZwWjJoMElIMDdYRzRnSUgxY2JseHVJQ0J2YmxKbGJtUmxjaWdwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1ZzWlcxbGJuUWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnWTI5dWMzUWdZWFIwY25NZ1BTQmlkV2xzWkNoMGFHbHpMbk4wWVhSbExDQjBhR2x6TG1Wc1pXMWxiblJFYVcxbGJuTnBiMjV6S1R0Y2JpQWdJQ0J6WlhSRVQwMUJkSFJ5Y3lobGJHVnRaVzUwTENCaGRIUnljeWs3WEc0Z0lIMWNibHh1SUNCdmJsSmxZV1FvYTJWNUtTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbGJHVnRaVzUwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdhV1lnS0NGMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1pXeGxiV1Z1ZEM1blpYUkJkSFJ5YVdKMWRHVW9hMlY1S1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1ZVZVhCbElEMGdkbUZzZFdWVWVYQmxUV0Z3VzJ0bGVWMDdYRzRnSUNBZ0lDQnlaWFIxY200Z0tIWmhiSFZsVkhsd1pTa2dQeUIyWVd4MVpWUjVjR1V1WkdWbVlYVnNkQ0E2SURBN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUNobGJHVnRaVzUwTENCd2NtOXdjeWtnZTF4dUlDQnlaWFIxY200Z2JtVjNJRk5XUjFKbGJtUmxjbVZ5S0h0Y2JpQWdJQ0JsYkdWdFpXNTBMRnh1SUNBZ0lDNHVMbkJ5YjNCelhHNGdJSDBwTzF4dWZWeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUGF0aFJlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50XG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTVkdQYXRoUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTVkdQYXRoUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gU1ZHUGF0aFJlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNWR1BhdGhSZW5kZXJlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIF9wcm9wcyRlbGVtZW50JGdldEJCbyA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpO1xuXG4gICAgdmFyIHggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueDtcbiAgICB2YXIgeSA9IF9wcm9wcyRlbGVtZW50JGdldEJCby55O1xuICAgIHZhciB3aWR0aCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby53aWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLmhlaWdodDtcblxuICAgIF90aGlzLmVsZW1lbnREaW1lbnNpb25zID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHksXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHBhdGhMZW5ndGg6IHByb3BzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU1ZHUGF0aFJlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBwYXRoTGVuZ3RoID0gdGhpcy5lbGVtZW50RGltZW5zaW9ucy5wYXRoTGVuZ3RoO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgcGF0aExlbmd0aCkpO1xuICB9O1xuXG4gIFNWR1BhdGhSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gIH07XG5cbiAgcmV0dXJuIFNWR1BhdGhSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ3ZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzJ0Q1FUWkNaU3hWUVVGVkxFOUJRVllzUlVGQmJVSXNTMEZCYmtJc1JVRkJNRUk3UVVGRGRrTXNVMEZCVHl4SlFVRkpMR1ZCUVVvN1FVRkRURHRCUVVSTExFdEJSVVlzUzBGR1JTeEZRVUZRTzBGQlNVUXNRenM3UVVGc1EwUTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTBzWlRzN08wRkJRMG9zTWtKQlFWa3NTMEZCV2l4RlFVRnRRanRCUVVGQk96dEJRVUZCTEdsRVFVTnFRaXh4UWtGQlRTeExRVUZPTEVOQlJHbENPenRCUVVGQkxHZERRVWRsTEUxQlFVMHNUMEZCVGl4RFFVRmpMRTlCUVdRc1JVRklaanM3UVVGQlFTeFJRVWRVTEVOQlNGTXNlVUpCUjFRc1EwRklVenRCUVVGQkxGRkJSMDRzUTBGSVRTeDVRa0ZIVGl4RFFVaE5PMEZCUVVFc1VVRkhTQ3hMUVVoSExIbENRVWRJTEV0QlNFYzdRVUZCUVN4UlFVZEpMRTFCU0Vvc2VVSkJSMGtzVFVGSVNqczdRVUZKYWtJc1ZVRkJTeXhwUWtGQlRDeEhRVUY1UWp0QlFVTjJRaXhWUVVSMVFqdEJRVVYyUWl4VlFVWjFRanRCUVVkMlFpeHJRa0ZJZFVJN1FVRkpka0lzYjBKQlNuVkNPMEZCUzNaQ0xHdENRVUZaTEUxQlFVMHNUMEZCVGl4RFFVRmpMR05CUVdRN1FVRk1WeXhMUVVGNlFqdEJRVXBwUWp0QlFWZHNRanM3TkVKQlJVUXNVU3gxUWtGQlZ6dEJRVUZCTEZGQlEwUXNWVUZFUXl4SFFVTmpMRXRCUVVzc2FVSkJSRzVDTEVOQlEwUXNWVUZFUXp0QlFVRkJMRkZCUlVRc1QwRkdReXhIUVVWWExFdEJRVXNzUzBGR2FFSXNRMEZGUkN4UFFVWkRPenRCUVVkVUxEUkNRVUZaTEU5QlFWb3NSVUZCY1VJc2NVSkJRVTBzUzBGQlN5eExRVUZZTEVWQlFXdENMRlZCUVd4Q0xFTkJRWEpDTzBGQlEwUXNSenM3TkVKQlJVUXNUU3h0UWtGQlR5eEhMRVZCUVVzN1FVRkRWaXhYUVVGUExFdEJRVXNzUzBGQlRDeERRVUZYTEU5QlFWZ3NRMEZCYlVJc1dVRkJia0lzUTBGQlowTXNSMEZCYUVNc1EwRkJVRHRCUVVORUxFY2lMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVW1WdVpHVnlaWElnWm5KdmJTQW5MaTR2Snp0Y2JtbHRjRzl5ZENCaWRXbHNaQ0JtY205dElDY3VMMkoxYVd4a0p6dGNibWx0Y0c5eWRDQjdJSE5sZEVSUFRVRjBkSEp6SUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyeGhjM01nVTFaSFVHRjBhRkpsYm1SbGNtVnlJR1Y0ZEdWdVpITWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNibHh1SUNBZ0lHTnZibk4wSUhzZ2VDd2dlU3dnZDJsa2RHZ3NJR2hsYVdkb2RDQjlJRDBnY0hKdmNITXVaV3hsYldWdWRDNW5aWFJDUW05NEtDazdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUE5SUh0Y2JpQWdJQ0FnSUhnc1hHNGdJQ0FnSUNCNUxGeHVJQ0FnSUNBZ2QybGtkR2dzWEc0Z0lDQWdJQ0JvWldsbmFIUXNYRzRnSUNBZ0lDQndZWFJvVEdWdVozUm9PaUJ3Y205d2N5NWxiR1Z0Wlc1MExtZGxkRlJ2ZEdGc1RHVnVaM1JvS0NsY2JpQWdJQ0I5TzF4dUlDQjlYRzVjYmlBZ2IyNVNaVzVrWlhJb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCd1lYUm9UR1Z1WjNSb0lIMGdQU0IwYUdsekxtVnNaVzFsYm5SRWFXMWxibk5wYjI1ek8xeHVJQ0FnSUdOdmJuTjBJSHNnWld4bGJXVnVkQ0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCelpYUkVUMDFCZEhSeWN5aGxiR1Z0Wlc1MExDQmlkV2xzWkNoMGFHbHpMbk4wWVhSbExDQndZWFJvVEdWdVozUm9LU2s3WEc0Z0lIMWNibHh1SUNCdmJsSmxZV1FvYTJWNUtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjSEp2Y0hNdVpXeGxiV1Z1ZEM1blpYUkJkSFJ5YVdKMWRHVW9hMlY1S1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlBb1pXeGxiV1Z1ZEN3Z2NISnZjSE1wSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJUVmtkUVlYUm9VbVZ1WkdWeVpYSW9lMXh1SUNBZ0lHVnNaVzFsYm5Rc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldENvbG9yVmFsdWVzID0gZXhwb3J0cy5maW5kVmFsdWVBbmRVbml0ID0gZXhwb3J0cy5jcmVhdGVVbml0VHlwZSA9IGV4cG9ydHMuaXNGaXJzdENoYXJzID0gZXhwb3J0cy5jb250YWlucyA9IGV4cG9ydHMuc3BsaXRDb21tYURlbGltaXRlZCA9IGV4cG9ydHMuc2V0RE9NQXR0cnMgPSBleHBvcnRzLmlzU3RyaW5nID0gZXhwb3J0cy5pc09iaiA9IGV4cG9ydHMuaXNOdW0gPSBleHBvcnRzLmlzRnVuYyA9IGV4cG9ydHMuaXNBcnJheSA9IGV4cG9ydHMuaGFzUHJvcGVydHkgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuc3BsaXRDb2xvclZhbHVlcyA9IHNwbGl0Q29sb3JWYWx1ZXM7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1lcnMnKTtcblxudmFyIENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xudmFyIFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xudmFyIEhBU19QRVJGT1JNQU5DRV9OT1cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdztcblxuLypcbiAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiovXG52YXIgdmFyVHlwZSA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG4vKlxuICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICBcbiAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG59IDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG4vKlxuICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICBAcGFyYW0gW29iamVjdF1cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xudmFyIGhhc1Byb3BlcnR5ID0gZXhwb3J0cy5oYXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5TmFtZSkge1xuICByZXR1cm4gb2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgb2JqZWN0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZDtcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG52YXIgaXNGdW5jID0gZXhwb3J0cy5pc0Z1bmMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xudmFyIGlzTnVtID0gZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xudmFyIGlzU3RyaW5nID0gZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufTtcblxudmFyIHNldERPTUF0dHJzID0gZXhwb3J0cy5zZXRET01BdHRycyA9IGZ1bmN0aW9uIChlbGVtZW50LCBhdHRycykge1xuICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG4gIH1cbn07XG4vKlxuICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGFueSBhcmd1bWVudCBmb3IgYHRlcm1gXG4gKiBgY29udGFpbnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG52YXIgY29udGFpbnMgPSBleHBvcnRzLmNvbnRhaW5zID0gZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSAhPT0gLTE7XG4gIH07XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIHRvIHNlZSBpZiBhbiBhcmd1bWVudCBpc1xuICogIHRoZSBmaXJzdCBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBgdGVybWBcbiAqIGBpc0ZpcnN0Q2hhcnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG52YXIgaXNGaXJzdENoYXJzID0gZXhwb3J0cy5pc0ZpcnN0Q2hhcnMgPSBmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pID09PSAwO1xuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSB1bml0IHZhbHVlIHR5cGVcbiAqL1xudmFyIGNyZWF0ZVVuaXRUeXBlID0gZXhwb3J0cy5jcmVhdGVVbml0VHlwZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHJldHVybiB7XG4gICAgdGVzdDogY29udGFpbnModHlwZSksXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXG4gICAgdHJhbnNmb3JtOiAoMCwgX3RyYW5zZm9ybWVycy5hcHBlbmRVbml0KSh0eXBlKVxuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHNwbGl0IGNvbG9yXG4gKiB2YWx1ZXMgZnJvbSBzdHJpbmcgaW50byBhbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuICogYHNwbGl0Q29sb3JWYWx1ZXMoWydSZWQnLCAnR3JlZW4nLCAnQmx1ZSddKSgncmdiYSgwLDAsMCknKWBcbiAqL1xuZnVuY3Rpb24gc3BsaXRDb2xvclZhbHVlcyh0ZXJtcykge1xuICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgIHZhciB2YWx1ZXNBcnJheSA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodikpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICB2YWx1ZXNbdGVybXNbaV1dID0gdmFsdWVzQXJyYXlbaV0gIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQodmFsdWVzQXJyYXlbaV0pIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xufVxuXG4vKlxuICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICBcbiAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgIFxuICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xudmFyIGZpbmRWYWx1ZUFuZFVuaXQgPSBleHBvcnRzLmZpbmRWYWx1ZUFuZFVuaXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHZhbHVlLm1hdGNoKSB7XG4gICAgdmFyIHNwbGl0VmFsdWUgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgIHVuaXQ6IHNwbGl0VmFsdWVbMl1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSB9O1xuICB9XG59O1xuXG4vKlxuICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLCBbXCJSZWRcIiwgJ0dyZWVuXCIsIFwiQmx1ZVwiLCBcIkFscGhhXCJdXG5cbiAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xudmFyIGdldENvbG9yVmFsdWVzID0gZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29sb3JUZXJtcykge1xuICB2YXIgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICB2YXIgY29sb3JWYWx1ZXMgPSB7fTtcbiAgdmFyIGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gY29sb3JzW2ldICE9PSB1bmRlZmluZWQgPyBjb2xvcnNbaV0gOiAxO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkWFJwYkhNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRSUVdkSlowSXNaMElzUjBGQlFTeG5RanM3UVVGb1NXaENPenRCUVVWQkxFbEJRVTBzY1VKQlFYRkNMR2xDUVVFelFqdEJRVU5CTEVsQlFVMHNiVUpCUVcxQ0xFOUJRWHBDTzBGQlEwRXNTVUZCVFN4elFrRkJkVUlzVDBGQlR5eFhRVUZRTEV0QlFYVkNMRmRCUVhaQ0xFbEJRWE5ETEZsQlFWa3NSMEZCTDBVN096czdPenM3TzBGQlVVRXNTVUZCVFN4VlFVRlZMRlZCUVVNc1VVRkJSRHRCUVVGQkxGTkJRV01zVDBGQlR5eFRRVUZRTEVOQlFXbENMRkZCUVdwQ0xFTkJRVEJDTEVsQlFURkNMRU5CUVN0Q0xGRkJRUzlDTEVWQlFYbERMRXRCUVhwRExFTkJRU3RETEVOQlFTOURMRVZCUVd0RUxFTkJRVU1zUTBGQmJrUXNRMEZCWkR0QlFVRkJMRU5CUVdoQ096czdPenM3T3p0QlFWRlBMRWxCUVUwc2IwTkJRV01zVlVGQlF5eE5RVUZFTzBGQlFVRXNVMEZCV1N4UFFVRlBMRTlCUVZBc1EwRkJaU3hyUWtGQlppeEZRVUZ0UXl4blFrRkJia01zUlVGQmNVUXNWMEZCY2tRc1JVRkJXanRCUVVGQkxFTkJRWEJDT3pzN096czdPMEZCVDBFc1NVRkJUU3h2UTBGQll5eHpRa0ZCYzBJN1FVRkJRU3hUUVVGTkxGbEJRVmtzUjBGQldpeEZRVUZPTzBGQlFVRXNRMEZCZEVJc1IwRkJaMFE3UVVGQlFTeFRRVUZOTEVsQlFVa3NTVUZCU2l4SFFVRlhMRTlCUVZnc1JVRkJUanRCUVVGQkxFTkJRWEJGT3pzN096czdPenM3UVVGVFFTeEpRVUZOTEc5RFFVRmpMRlZCUVVNc1RVRkJSQ3hGUVVGVExGbEJRVlE3UVVGQlFTeFRRVUV3UWl4UFFVRlBMR05CUVZBc1EwRkJjMElzV1VGQmRFSXNTMEZCZFVNc1QwRkJUeXhaUVVGUUxFMUJRWGxDTEZOQlFURkdPMEZCUVVFc1EwRkJjRUk3T3pzN096czdPMEZCVVVFc1NVRkJUU3cwUWtGQlZTeFZRVUZETEVkQlFVUTdRVUZCUVN4VFFVRlRMRkZCUVZFc1IwRkJVaXhOUVVGcFFpeFBRVUV4UWp0QlFVRkJMRU5CUVdoQ096czdPenM3T3p0QlFWRkJMRWxCUVUwc01FSkJRVk1zVlVGQlF5eEhRVUZFTzBGQlFVRXNVMEZCVXl4UlFVRlJMRWRCUVZJc1RVRkJhVUlzVlVGQk1VSTdRVUZCUVN4RFFVRm1PenM3T3pzN096dEJRVkZCTEVsQlFVMHNkMEpCUVZFc1ZVRkJReXhIUVVGRU8wRkJRVUVzVTBGQlV5eFBRVUZQTEVkQlFWQXNTMEZCWlN4UlFVRjRRanRCUVVGQkxFTkJRV1E3T3pzN096czdPMEZCVVVFc1NVRkJUU3gzUWtGQlVTeFZRVUZETEVkQlFVUTdRVUZCUVN4VFFVRlRMRTlCUVU4c1IwRkJVQ3hMUVVGbExGRkJRWGhDTzBGQlFVRXNRMEZCWkRzN096czdPenM3UVVGUlFTeEpRVUZOTERoQ1FVRlhMRlZCUVVNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVDBGQlR5eEhRVUZRTEV0QlFXVXNVVUZCZUVJN1FVRkJRU3hEUVVGcVFqczdRVUZGUVN4SlFVRk5MRzlEUVVGakxGVkJRVU1zVDBGQlJDeEZRVUZWTEV0QlFWWXNSVUZCYjBJN1FVRkROME1zVDBGQlN5eEpRVUZKTEVkQlFWUXNTVUZCWjBJc1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1VVRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU0zUWl4alFVRlJMRmxCUVZJc1EwRkJjVUlzUjBGQmNrSXNSVUZCTUVJc1RVRkJUU3hIUVVGT0xFTkJRVEZDTzBGQlEwUTdRVUZEUmp0QlFVTkdMRU5CVGswN096czdPenM3T3p0QlFXVkJMRWxCUVUwc2IwUkJRWE5DTEZWQlFVTXNTMEZCUkR0QlFVRkJMRk5CUVZjc1UwRkJVeXhMUVVGVUxFbEJRV3RDTEUxQlFVMHNTMEZCVGl4RFFVRlpMRTFCUVZvc1EwRkJiRUlzUjBGQmQwTXNRMEZCUXl4TFFVRkVMRU5CUVc1RU8wRkJRVUVzUTBGQk5VSTdPenM3T3p0QlFVMUJMRWxCUVUwc09FSkJRVmNzVlVGQlF5eEpRVUZFTzBGQlFVRXNVMEZCVlN4VlFVRkRMRU5CUVVRc1JVRkJUenRCUVVOMlF5eFhRVUZSTEZOQlFWTXNTVUZCVkN4TFFVRnJRaXhGUVVGRkxFOUJRVVlzUTBGQlZTeEpRVUZXTEUxQlFXOUNMRU5CUVVNc1EwRkJMME03UVVGRFJDeEhRVVoxUWp0QlFVRkJMRU5CUVdwQ096czdPenM3TzBGQlUwRXNTVUZCVFN4elEwRkJaU3hWUVVGRExFbEJRVVE3UVVGQlFTeFRRVUZWTEZWQlFVTXNRMEZCUkN4RlFVRlBPMEZCUXpORExGZEJRVkVzVTBGQlV5eEpRVUZVTEV0QlFXdENMRVZCUVVVc1QwRkJSaXhEUVVGVkxFbEJRVllzVFVGQmIwSXNRMEZCT1VNN1FVRkRSQ3hIUVVZeVFqdEJRVUZCTEVOQlFYSkNPenM3T3p0QlFVOUJMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNTVUZCUkN4RlFVRlZPMEZCUTNSRExGTkJRVTg3UVVGRFRDeFZRVUZOTEZOQlFWTXNTVUZCVkN4RFFVUkVPMEZCUlV3c1YwRkJUeXhWUVVaR08wRkJSMHdzWlVGQlZ5dzRRa0ZCVnl4SlFVRllPMEZCU0U0c1IwRkJVRHRCUVV0RUxFTkJUazA3T3pzN096czdRVUZoUVN4VFFVRlRMR2RDUVVGVUxFTkJRVEJDTEV0QlFURkNMRVZCUVdsRE8wRkJRM1JETEUxQlFVMHNWMEZCVnl4TlFVRk5MRTFCUVhaQ096dEJRVVZCTEZOQlFVOHNWVUZCVlN4RFFVRldMRVZCUVdFN1FVRkRiRUlzVVVGQlRTeFRRVUZUTEVWQlFXWTdRVUZEUVN4UlFVRk5MR05CUVdNc2IwSkJRVzlDTERKQ1FVRXlRaXhEUVVFelFpeERRVUZ3UWl4RFFVRndRanM3UVVGRlFTeFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRmlMRVZCUVdkQ0xFbEJRVWtzVVVGQmNFSXNSVUZCT0VJc1IwRkJPVUlzUlVGQmJVTTdRVUZEYWtNc1lVRkJUeXhOUVVGTkxFTkJRVTRzUTBGQlVDeEpRVUZ2UWl4WlFVRlpMRU5CUVZvc1RVRkJiVUlzVTBGQmNFSXNSMEZCYVVNc1YwRkJWeXhaUVVGWkxFTkJRVm9zUTBGQldDeERRVUZxUXl4SFFVRTRSQ3hEUVVGcVJqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1RVRkJVRHRCUVVORUxFZEJWRVE3UVVGVlJEczdPenM3T3pzN096dEJRVlZOTEVsQlFVMHNPRU5CUVcxQ0xGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEzcERMRTFCUVVrc1RVRkJUU3hMUVVGV0xFVkJRV2xDTzBGQlEyWXNVVUZCVFN4aFFVRmhMRTFCUVUwc1MwRkJUaXhEUVVGWkxHMUNRVUZhTEVOQlFXNUNPenRCUVVWQkxGZEJRVTg3UVVGRFRDeGhRVUZQTEZkQlFWY3NWMEZCVnl4RFFVRllMRU5CUVZnc1EwRkVSanRCUVVWTUxGbEJRVThzVjBGQlZ5eERRVUZZTzBGQlJrWXNTMEZCVUR0QlFVbEVMRWRCVUVRc1RVRlBUenRCUVVOTUxGZEJRVThzUlVGQlJTeFpRVUZHTEVWQlFWQTdRVUZEUkR0QlFVTkdMRU5CV0UwN096czdPenM3T3p0QlFXOUNRU3hKUVVGTkxEQkRRVUZwUWl4VlFVRkRMRXRCUVVRc1JVRkJVU3hWUVVGU0xFVkJRWFZDTzBGQlEyNUVMRTFCUVUwc1owSkJRV2RDTEZkQlFWY3NUVUZCYWtNN1FVRkRRU3hOUVVGTkxHTkJRV01zUlVGQmNFSTdRVUZEUVN4TlFVRk5MRk5CUVZNc2IwSkJRVzlDTERKQ1FVRXlRaXhMUVVFelFpeERRVUZ3UWl4RFFVRm1PenRCUVVWQkxFOUJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3hoUVVGd1FpeEZRVUZ0UXl4SFFVRnVReXhGUVVGM1F6dEJRVU4wUXl4blFrRkJXU3hYUVVGWExFTkJRVmdzUTBGQldpeEpRVUU0UWl4UFFVRlBMRU5CUVZBc1RVRkJZeXhUUVVGbUxFZEJRVFJDTEU5QlFVOHNRMEZCVUN4RFFVRTFRaXhIUVVGM1F5eERRVUZ5UlR0QlFVTkVPenRCUVVWRUxGTkJRVThzVjBGQlVEdEJRVU5FTEVOQlZrMGlMQ0ptYVd4bElqb2lkWFJwYkhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCaGNIQmxibVJWYm1sMElIMGdabkp2YlNBbkxpOTBjbUZ1YzJadmNtMWxjbk1uTzF4dVhHNWpiMjV6ZENCRFFVMUZURjlEUVZORlgxQkJWRlJGVWs0Z1BTQXZLRnRoTFhwZEtTaGJRUzFhWFNrdlp6dGNibU52Ym5OMElGSkZVRXhCUTBWZlZFVk5VRXhCVkVVZ1BTQW5KREV0SkRJbk8xeHVZMjl1YzNRZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QTlJQ2gwZVhCbGIyWWdjR1Z5Wm05eWJXRnVZMlVnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhCbGNtWnZjbTFoYm1ObExtNXZkeWs3WEc1Y2JpOHFYRzRnSUVkbGRDQjJZWElnZEhsd1pTQmhjeUJ6ZEhKcGJtZGNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZE9pQlNaWFIxY201ekxDQm1iM0lnYVc1emRHRnVZMlVnSjA5aWFtVmpkQ2NnYVdZZ1cyOWlhbVZqZENCUFltcGxZM1JkWEc0cUwxeHVZMjl1YzNRZ2RtRnlWSGx3WlNBOUlDaDJZWEpwWVdKc1pTa2dQVDRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzUwYjFOMGNtbHVaeTVqWVd4c0tIWmhjbWxoWW14bEtTNXpiR2xqWlNnNExDQXRNU2s3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnWTJGdFpXeERZWE5sSUhSdklHUmhjMmd0WTJGelpWeHVYRzRnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNCQWNtVjBkWEp1SUZ0emRISnBibWRkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdOaGJXVnNWRzlFWVhOb0lEMGdLSE4wY21sdVp5a2dQVDRnYzNSeWFXNW5MbkpsY0d4aFkyVW9RMEZOUlV4ZlEwRlRSVjlRUVZSVVJWSk9MQ0JTUlZCTVFVTkZYMVJGVFZCTVFWUkZLUzUwYjB4dmQyVnlRMkZ6WlNncE8xeHVYRzR2S2x4dUlDQkhaVzVsY21GMFpTQmpkWEp5Wlc1MElIUnBiV1Z6ZEdGdGNGeHVJQ0JjYmlBZ1FISmxkSFZ5YmlCYmRHbHRaWE4wWVcxd1hUb2dRM1Z5Y21WdWRDQlZUa2xZSUhScGJXVnpkR0Z0Y0Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamRYSnlaVzUwVkdsdFpTQTlJRWhCVTE5UVJWSkdUMUpOUVU1RFJWOU9UMWNnUHlBb0tTQTlQaUJ3WlhKbWIzSnRZVzVqWlM1dWIzY29LU0E2SUNncElEMCtJRzVsZHlCRVlYUmxLQ2t1WjJWMFZHbHRaU2dwTzF4dVhHNHZLbHh1SUNCRGFHVmpheUJwWmlCdlltcGxZM1FnYUdGeklIQnliM0JsY25SNUlHRnVaQ0JwZENCcGMyNG5kQ0IxYm1SbFptbHVaV1JjYmx4dUlDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYxY2JpQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2hoYzFCeWIzQmxjblI1SUQwZ0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhsT1lXMWxLU0E5UGlCdlltcGxZM1F1YUdGelQzZHVVSEp2Y0dWeWRIa29jSEp2Y0dWeWRIbE9ZVzFsS1NBbUppQnZZbXBsWTNSYmNISnZjR1Z5ZEhsT1lXMWxYU0FoUFQwZ2RXNWtaV1pwYm1Wa08xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVc0Z1lYSnlZWGtnUHlCY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhWMGFXeHpMblpoY2xSNWNHVWdQVDA5SUNkQmNuSmhlU2RjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOQmNuSmhlU0E5SUNoaGNuSXBJRDArSUhaaGNsUjVjR1VvWVhKeUtTQTlQVDBnSjBGeWNtRjVKenRjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nZG1GeUlHRWdablZ1WTNScGIyNGdQeUJjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFYwYVd4ekxuWmhjbFI1Y0dVZ1BUMDlJQ2RHZFc1amRHbHZiaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOR2RXNWpJRDBnS0c5aWFpa2dQVDRnZG1GeVZIbHdaU2h2WW1vcElEMDlQU0FuUm5WdVkzUnBiMjRuTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZU0J1ZFcxaVpYSS9YRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ1BUMDlJQ2R1ZFcxaVpYSW5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VG5WdElEMGdLRzUxYlNrZ1BUNGdkSGx3Wlc5bUlHNTFiU0E5UFQwZ0oyNTFiV0psY2ljN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoYmlCdlltcGxZM1EvWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwZVhCbGIyWWdQVDA5SUNkdlltcGxZM1FuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselQySnFJRDBnS0c5aWFpa2dQVDRnZEhsd1pXOW1JRzlpYWlBOVBUMGdKMjlpYW1WamRDYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaElITjBjbWx1WnlBL0lGeHVJQ0JjYmlBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUhOMGNpQTlQVDBnSjNOMGNtbHVaeWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOVGRISnBibWNnUFNBb2MzUnlLU0E5UGlCMGVYQmxiMllnYzNSeUlEMDlQU0FuYzNSeWFXNW5KenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSE5sZEVSUFRVRjBkSEp6SUQwZ0tHVnNaVzFsYm5Rc0lHRjBkSEp6S1NBOVBpQjdYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJoZEhSeWN5a2dlMXh1SUNBZ0lHbG1JQ2hoZEhSeWN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0JsYkdWdFpXNTBMbk5sZEVGMGRISnBZblYwWlNoclpYa3NJR0YwZEhKelcydGxlVjBwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVHRjYmk4cVhHNGdJRk53YkdsMElHTnZiVzFoTFdSbGJHbHRhWFJsWkNCemRISnBibWRjYmx4dUlDQmNJbVp2Ynl4aVlYSmNJaUF0UGlCYlhDSm1iMjljSWl3Z1hDSmlZWEpjSWwxY2JseHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiWVhKeVlYbGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FnUFNBb2RtRnNkV1VwSUQwK0lHbHpVM1J5YVc1bktIWmhiSFZsS1NBL0lIWmhiSFZsTG5Od2JHbDBLQzhzWEZ4ektpOHBJRG9nVzNaaGJIVmxYVHRjYmx4dUx5b3FYRzRnS2lBZ1VtVjBkWEp1Y3lCaElHWjFibU4wYVc5dUlIUm9ZWFFnZDJsc2JDQmphR1ZqYXlCaGJua2dZWEpuZFcxbGJuUWdabTl5SUdCMFpYSnRZRnh1SUNvZ1lHTnZiblJoYVc1ektDZHVaV1ZrYkdVbktTZ25hR0Y1YzNSaFkyc25LV0JjYmlBcUwxeHVaWGh3YjNKMElHTnZibk4wSUdOdmJuUmhhVzV6SUQwZ0tIUmxjbTBwSUQwK0lDaDJLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQW9hWE5UZEhKcGJtY29kR1Z5YlNrZ0ppWWdkaTVwYm1SbGVFOW1LSFJsY20wcElDRTlQU0F0TVNrN1hHNTlPMXh1WEc0dktpcGNiaUFxSUNCU1pYUjFjbTV6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lHTm9aV05ySUhSdklITmxaU0JwWmlCaGJpQmhjbWQxYldWdWRDQnBjMXh1SUNvZ0lIUm9aU0JtYVhKemRDQmphR0Z5WVdOMFpYSnpJR2x1SUhSb1pTQndjbTkyYVdSbFpDQmdkR1Z5YldCY2JpQXFJR0JwYzBacGNuTjBRMmhoY25Nb0oyNWxaV1JzWlNjcEtDZG9ZWGx6ZEdGamF5Y3BZRnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOR2FYSnpkRU5vWVhKeklEMGdLSFJsY20wcElEMCtJQ2gyS1NBOVBpQjdYRzRnSUhKbGRIVnliaUFvYVhOVGRISnBibWNvZEdWeWJTa2dKaVlnZGk1cGJtUmxlRTltS0hSbGNtMHBJRDA5UFNBd0tUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsSUdFZ2RXNXBkQ0IyWVd4MVpTQjBlWEJsWEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZWYm1sMFZIbHdaU0E5SUNoMGVYQmxLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2RHVnpkRG9nWTI5dWRHRnBibk1vZEhsd1pTa3NYRzRnSUNBZ2NHRnljMlU2SUhCaGNuTmxSbXh2WVhRc1hHNGdJQ0FnZEhKaGJuTm1iM0p0T2lCaGNIQmxibVJWYm1sMEtIUjVjR1VwWEc0Z0lIMDdYRzU5TzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlhNZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2djM0JzYVhRZ1kyOXNiM0pjYmlBcUlIWmhiSFZsY3lCbWNtOXRJSE4wY21sdVp5QnBiblJ2SUdGdUlHOWlhbVZqZENCdlppQndjbTl3WlhKMGFXVnpYRzRnS2lCZ2MzQnNhWFJEYjJ4dmNsWmhiSFZsY3loYkoxSmxaQ2NzSUNkSGNtVmxiaWNzSUNkQ2JIVmxKMTBwS0NkeVoySmhLREFzTUN3d0tTY3BZRnh1SUNvdlhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2MzQnNhWFJEYjJ4dmNsWmhiSFZsY3loMFpYSnRjeWtnZTF4dUlDQmpiMjV6ZENCdWRXMVVaWEp0Y3lBOUlIUmxjbTF6TG14bGJtZDBhRHRjYmx4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0Z0tIWXBJSHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaWE1nUFNCN2ZUdGNiaUFnSUNCamIyNXpkQ0IyWVd4MVpYTkJjbkpoZVNBOUlITndiR2wwUTI5dGJXRkVaV3hwYldsMFpXUW9aMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY29kaWtwTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVVaWEp0Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0IyWVd4MVpYTmJkR1Z5YlhOYmFWMWRJRDBnS0haaGJIVmxjMEZ5Y21GNVcybGRJQ0U5UFNCMWJtUmxabWx1WldRcElEOGdjR0Z5YzJWR2JHOWhkQ2gyWVd4MVpYTkJjbkpoZVZ0cFhTa2dPaUF4TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjJZV3gxWlhNN1hHNGdJSDA3WEc1OVhHNWNiaThxWEc0Z0lGTndiR2wwSUdFZ2RtRnNkV1VnYVc1MGJ5QmhJSFpoYkhWbEwzVnVhWFFnYjJKcVpXTjBYRzRnSUZ4dUlDQWdJRndpTWpBd2NIaGNJaUF0UGlCN0lIWmhiSFZsT2lBeU1EQXNJSFZ1YVhRNklGd2ljSGhjSWlCOVhHNGdJQ0FnWEc0Z0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1ZtRnNkV1VnZEc4Z2MzQnNhWFJjYmlBZ1FISmxkSFZ5YmlCYmIySnFaV04wWFRvZ1QySnFaV04wSUhkcGRHZ2dkbUZzZFdVZ1lXNWtJSFZ1YVhRZ2NISnZjSE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWm1sdVpGWmhiSFZsUVc1a1ZXNXBkQ0E5SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0JwWmlBb2RtRnNkV1V1YldGMFkyZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCemNHeHBkRlpoYkhWbElEMGdkbUZzZFdVdWJXRjBZMmdvTHlndFAxeGNaQ3BjWEM0L1hGeGtLaWtvTGlvcEx5azdYRzVjYmlBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ2RtRnNkV1U2SUhCaGNuTmxSbXh2WVhRb2MzQnNhWFJXWVd4MVpWc3hYU2tzWEc0Z0lDQWdJQ0IxYm1sME9pQWdjM0JzYVhSV1lXeDFaVnN5WFZ4dUlDQWdJSDA3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnY21WMGRYSnVJSHNnZG1Gc2RXVWdmVHRjYmlBZ2ZWeHVmVHRjYmx4dUx5cGNiaUFnVTNCc2FYUWdZMjlzYjNJZ2MzUnlhVzVuSUdsdWRHOGdiV0Z3SUc5bUlHTnZiRzl5SUhCeWIzQmxjblJwWlhOY2JseHVJQ0JjSW5KblltRW9NalUxTENBeU5UVXNJREkxTlN3Z01DbGNJaXdnVzF3aVVtVmtYQ0lzSUNkSGNtVmxibHdpTENCY0lrSnNkV1ZjSWl3Z1hDSkJiSEJvWVZ3aVhWeHVYRzRnSUhzZ1VtVmtPaUF5TlRVdUxpNGdmVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSRGIyeHZjbFpoYkhWbGN5QTlJQ2gyWVd4MVpTd2dZMjlzYjNKVVpYSnRjeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQnVkVzFEYjJ4dmNsUmxjbTF6SUQwZ1kyOXNiM0pVWlhKdGN5NXNaVzVuZEdnN1hHNGdJR052Ym5OMElHTnZiRzl5Vm1Gc2RXVnpJRDBnZTMwN1hHNGdJR052Ym5OMElHTnZiRzl5Y3lBOUlITndiR2wwUTI5dGJXRkVaV3hwYldsMFpXUW9aMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY29kbUZzZFdVcEtUdGNibHh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVU52Ykc5eVZHVnliWE03SUdrckt5a2dlMXh1SUNBZ0lHTnZiRzl5Vm1Gc2RXVnpXMk52Ykc5eVZHVnliWE5iYVYxZElEMGdLR052Ykc5eWMxdHBYU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQS9JR052Ykc5eWMxdHBYU0E2SURFN1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z1kyOXNiM0pXWVd4MVpYTTdYRzU5TzF4dVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cbnZhciBoYXNSQUYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gdHJ1ZSA6IGZhbHNlO1xuXG52YXIgb25OZXh0RnJhbWUgPSB2b2lkIDA7XG5cbmlmIChoYXNSQUYpIHtcbiAgb25OZXh0RnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH07XG59IGVsc2Uge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgIFxuICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgIFxuICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICBcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICBcbiAgICAgIE1JVCBsaWNlbnNlXG4gICAgKi9cbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuXG4gICAgb25OZXh0RnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNi43IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobGFzdFRpbWUpO1xuICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgfTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gb25OZXh0RnJhbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZiMjR0Ym1WNGRDMW1jbUZ0WlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGSFFTeEpRVUZOTEZOQlFWVXNUMEZCVHl4TlFVRlFMRXRCUVd0Q0xGZEJRV3hDTEVsQlFXbERMRTlCUVU4c2NVSkJRWHBETEVkQlFXdEZMRWxCUVd4RkxFZEJRWGxGTEV0QlFYaEdPenRCUVVWQkxFbEJRVWtzYjBKQlFVbzdPMEZCUlVFc1NVRkJTU3hOUVVGS0xFVkJRVms3UVVGRFZpeG5Ra0ZCWXl4VlFVRkRMRkZCUVVRN1FVRkJRU3hYUVVGakxFOUJRVThzY1VKQlFWQXNRMEZCTmtJc1VVRkJOMElzUTBGQlpEdEJRVUZCTEVkQlFXUTdRVUZGUkN4RFFVaEVMRTFCUjA4N1FVRkJRVHM3T3pzN096czdPenM3T3pzN1FVRmxUQ3hSUVVGSkxGZEJRVmNzUTBGQlpqczdRVUZGUVN4clFrRkJZeXhWUVVGRExGRkJRVVFzUlVGQll6dEJRVU14UWl4VlFVRk5MR05CUVdNc1NVRkJTU3hKUVVGS0xFZEJRVmNzVDBGQldDeEZRVUZ3UWp0QlFVTkJMRlZCUVUwc1lVRkJZU3hMUVVGTExFZEJRVXdzUTBGQlV5eERRVUZVTEVWQlFWa3NVVUZCVVN4alFVRmpMRkZCUVhSQ0xFTkJRVm9zUTBGQmJrSTdPMEZCUlVFc2FVSkJRVmNzWTBGQll5eFZRVUY2UWpzN1FVRkZRU3hwUWtGQlZ6dEJRVUZCTEdWQlFVMHNVMEZCVXl4UlFVRlVMRU5CUVU0N1FVRkJRU3hQUVVGWUxFVkJRWEZETEZWQlFYSkRPMEZCUTBRc1MwRlFSRHRCUVdwQ1N6dEJRWGxDVGpzN2EwSkJSV01zVnlJc0ltWnBiR1VpT2lKdmJpMXVaWGgwTFdaeVlXMWxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ1JHVjBaV04wSUdGdVpDQnNiMkZrSUdGdUlHRndjSEp2Y0hKcFlYUmxJR05zYjJOcklITmxkSFJwYm1jZ1ptOXlJSFJvWlNCbGJuWnBjbTl1YldWdWRGeHVLaTljYm1OdmJuTjBJR2hoYzFKQlJpQTlJQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNibHh1YkdWMElHOXVUbVY0ZEVaeVlXMWxPMXh1WEc1cFppQW9hR0Z6VWtGR0tTQjdYRzRnSUc5dVRtVjRkRVp5WVcxbElEMGdLR05oYkd4aVlXTnJLU0E5UGlCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtHTmhiR3hpWVdOcktUdGNibHh1ZlNCbGJITmxJSHRjYmlBZ0x5cGNiaUFnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWdjRzlzZVdacGJHeGNiaUFnSUNCY2JpQWdJQ0JHYjNJZ1NVVTRMemtnUm14cGJuTjBiMjVsY3lCaGJtUWdibTl1TFdKeWIzZHpaWElnWlc1MmFYSnZibTFsYm5SelhHNWNiaUFnSUNCVVlXdGxiaUJtY205dElGQmhkV3dnU1hKcGMyZ3VJRmRsSjNabElITjBjbWx3Y0dWa0lHOTFkQ0JqWVc1alpXeEJibWx0WVhScGIyNUdjbUZ0WlNCamFHVmphM01nWW1WallYVnpaU0IzWlNCa2IyNG5kQ0JtYjNnZ2QybDBhQ0IwYUdGMFhHNGdJQ0FnWEc0Z0lDQWdhSFIwY0RvdkwzQmhkV3hwY21semFDNWpiMjB2TWpBeE1TOXlaWEYxWlhOMFlXNXBiV0YwYVc5dVpuSmhiV1V0Wm05eUxYTnRZWEowTFdGdWFXMWhkR2x1Wnk5Y2JpQWdJQ0JvZEhSd09pOHZiWGt1YjNCbGNtRXVZMjl0TDJWdGIyeHNaWEl2WW14dlp5OHlNREV4THpFeUx6SXdMM0psY1hWbGMzUmhibWx0WVhScGIyNW1jbUZ0WlMxbWIzSXRjMjFoY25RdFpYSXRZVzVwYldGMGFXNW5YRzRnSUNBZ0lGeHVJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQndiMng1Wm1sc2JDQmllU0JGY21scklFM0R0bXhzWlhJdUlHWnBlR1Z6SUdaeWIyMGdVR0YxYkNCSmNtbHphQ0JoYm1RZ1ZHbHVieUJhYVdwa1pXeGNiaUFnSUNBZ1hHNGdJQ0FnVFVsVUlHeHBZMlZ1YzJWY2JpQWdLaTljYmlBZ2JHVjBJR3hoYzNSVWFXMWxJRDBnTUR0Y2JseHVJQ0J2Yms1bGVIUkdjbUZ0WlNBOUlDaGpZV3hzWW1GamF5a2dQVDRnZTF4dUlDQWdJR052Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNGdJQ0FnWTI5dWMzUWdkR2x0WlZSdlEyRnNiQ0E5SUUxaGRHZ3ViV0Y0S0RBc0lERTJMamNnTFNBb1kzVnljbVZ1ZEZScGJXVWdMU0JzWVhOMFZHbHRaU2twTzF4dVhHNGdJQ0FnYkdGemRGUnBiV1VnUFNCamRYSnlaVzUwVkdsdFpTQXJJSFJwYldWVWIwTmhiR3c3WEc1Y2JpQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJR05oYkd4aVlXTnJLR3hoYzNSVWFXMWxLU3dnZEdsdFpWUnZRMkZzYkNrN1hHNGdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHOXVUbVY0ZEVaeVlXMWxPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZW5kZXJTdGVwO1xuZnVuY3Rpb24gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApIHtcbiAgLyoqXG4gICAqIFdlIHVzZSB0d28gYXJyYXlzLCBvbmUgZm9yIHRoaXMgZnJhbWUgYW5kIG9uZSB0byBxdWV1ZSBmb3IgdGhlXG4gICAqIG5leHQgZnJhbWUsIHJldXNpbmcgZWFjaCB0byBhdm9pZCBHQy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgdmFyIGZ1bmN0aW9uc1RvUnVuID0gW107XG4gIHZhciBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgc2NoZWR1bGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgc3RhcnRSZW5kZXJMb29wKCk7XG4gICAgICAvLyBJZiB0aGlzIGNhbGxiYWNrIGlzbid0IGFscmVhZHkgc2NoZWR1bGVkIHRvIHJ1biBuZXh0IGZyYW1lXG4gICAgICBpZiAoZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnB1c2goY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjYW5jZWw6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIGluZGV4T2ZDYWxsYmFjayA9IGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGluZGV4T2ZDYWxsYmFjayAhPT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuc3BsaWNlKGluZGV4T2ZDYWxsYmFjaywgMSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHByb2Nlc3M6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgLy8gQ2xlYXIgbmV4dCBmcmFtZSBsaXN0XG4gICAgICB2YXIgX3JlZiA9IFtmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSwgZnVuY3Rpb25zVG9SdW5dO1xuICAgICAgLy8gU3dhcCB0aGlzIGZyYW1lIGFuZCBuZXh0IGZyYW1lIGFycmF5cyB0byBhdm9pZCBHQ1xuXG4gICAgICBmdW5jdGlvbnNUb1J1biA9IF9yZWZbMF07XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IF9yZWZbMV07XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBFeGVjdXRlIGFsbCBvZiB0aGlzIGZyYW1lJ3MgZnVuY3Rpb25zXG4gICAgICB2YXIgbnVtVGhpc0ZyYW1lID0gZnVuY3Rpb25zVG9SdW4ubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UaGlzRnJhbWU7IGkrKykge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bltpXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdlkzSmxZWFJsTFhKbGJtUmxjaTF6ZEdWd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGQmQwSXNaMEk3UVVGQlZDeFRRVUZUTEdkQ1FVRlVMRU5CUVRCQ0xHVkJRVEZDTEVWQlFUSkRPenM3T3pzN1FVRk5lRVFzVFVGQlNTeHBRa0ZCYVVJc1JVRkJja0k3UVVGRFFTeE5RVUZKTERCQ1FVRXdRaXhGUVVFNVFqczdRVUZGUVN4VFFVRlBPMEZCUTB3c1kwRkJWU3hWUVVGRExGRkJRVVFzUlVGQll6dEJRVU4wUWpzN1FVRkZRU3hWUVVGSkxIZENRVUYzUWl4UFFVRjRRaXhEUVVGblF5eFJRVUZvUXl4TlFVRTRReXhEUVVGRExFTkJRVzVFTEVWQlFYTkVPMEZCUTNCRUxHZERRVUYzUWl4SlFVRjRRaXhEUVVFMlFpeFJRVUUzUWp0QlFVTkVPMEZCUTBZc1MwRlFTVHM3UVVGVFRDeFpRVUZSTEZWQlFVTXNVVUZCUkN4RlFVRmpPMEZCUTNCQ0xGVkJRVTBzYTBKQlFXdENMSGRDUVVGM1FpeFBRVUY0UWl4RFFVRm5ReXhSUVVGb1F5eERRVUY0UWp0QlFVTkJMRlZCUVVrc2IwSkJRVzlDTEVOQlFVTXNRMEZCZWtJc1JVRkJORUk3UVVGRE1VSXNaME5CUVhkQ0xFMUJRWGhDTEVOQlFTdENMR1ZCUVM5Q0xFVkJRV2RFTEVOQlFXaEVPMEZCUTBRN1FVRkRSaXhMUVdSSk96dEJRV2RDVEN4aFFVRlRMRmxCUVUwN096dEJRVUZCTEdsQ1FVVXJRaXhEUVVGRExIVkNRVUZFTEVWQlFUQkNMR05CUVRGQ0xFTkJSaTlDT3pzN1FVRkZXaXh2UWtGR1dUdEJRVVZKTERaQ1FVWktPMEZCUzJJc09FSkJRWGRDTEUxQlFYaENMRWRCUVdsRExFTkJRV3BET3pzN1FVRkhRU3hWUVVGTkxHVkJRV1VzWlVGQlpTeE5RVUZ3UXp0QlFVTkJMRmRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRV0lzUlVGQlowSXNTVUZCU1N4WlFVRndRaXhGUVVGclF5eEhRVUZzUXl4RlFVRjFRenRCUVVOeVF5eDFRa0ZCWlN4RFFVRm1PMEZCUTBRN1FVRkRSanRCUVRWQ1NTeEhRVUZRTzBGQk9FSkVJaXdpWm1sc1pTSTZJbU55WldGMFpTMXlaVzVrWlhJdGMzUmxjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1NCN1hHNGdJQzhxS2x4dUlDQWdLaUJYWlNCMWMyVWdkSGR2SUdGeWNtRjVjeXdnYjI1bElHWnZjaUIwYUdseklHWnlZVzFsSUdGdVpDQnZibVVnZEc4Z2NYVmxkV1VnWm05eUlIUm9aVnh1SUNBZ0tpQnVaWGgwSUdaeVlXMWxMQ0J5WlhWemFXNW5JR1ZoWTJnZ2RHOGdZWFp2YVdRZ1IwTXVYRzRnSUNBcUlFQjBlWEJsSUh0QmNuSmhlWDFjYmlBZ0lDb3ZYRzRnSUd4bGRDQm1kVzVqZEdsdmJuTlViMUoxYmlBOUlGdGRPMXh1SUNCc1pYUWdablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVZ1BTQmJYVHRjYmx4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUhOamFHVmtkV3hsT2lBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQWdJSE4wWVhKMFVtVnVaR1Z5VEc5dmNDZ3BPMXh1SUNBZ0lDQWdMeThnU1dZZ2RHaHBjeUJqWVd4c1ltRmpheUJwYzI0bmRDQmhiSEpsWVdSNUlITmphR1ZrZFd4bFpDQjBieUJ5ZFc0Z2JtVjRkQ0JtY21GdFpWeHVJQ0FnSUNBZ2FXWWdLR1oxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbExtbHVaR1Y0VDJZb1kyRnNiR0poWTJzcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJuTlViMUoxYms1bGVIUkdjbUZ0WlM1d2RYTm9LR05oYkd4aVlXTnJLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdZMkZ1WTJWc09pQW9ZMkZzYkdKaFkyc3BJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR2x1WkdWNFQyWkRZV3hzWW1GamF5QTlJR1oxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbExtbHVaR1Y0VDJZb1kyRnNiR0poWTJzcE8xeHVJQ0FnSUNBZ2FXWWdLR2x1WkdWNFQyWkRZV3hzWW1GamF5QWhQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVdWMzQnNhV05sS0dsdVpHVjRUMlpEWVd4c1ltRmpheXdnTVNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhCeWIyTmxjM002SUNncElEMCtJSHRjYmlBZ0lDQWdJQzh2SUZOM1lYQWdkR2hwY3lCbWNtRnRaU0JoYm1RZ2JtVjRkQ0JtY21GdFpTQmhjbkpoZVhNZ2RHOGdZWFp2YVdRZ1IwTmNiaUFnSUNBZ0lGdG1kVzVqZEdsdmJuTlViMUoxYml3Z1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1ZkSUQwZ1cyWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTENCbWRXNWpkR2x2Ym5OVWIxSjFibDA3WEc1Y2JpQWdJQ0FnSUM4dklFTnNaV0Z5SUc1bGVIUWdabkpoYldVZ2JHbHpkRnh1SUNBZ0lDQWdablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVdWJHVnVaM1JvSUQwZ01EdGNibHh1SUNBZ0lDQWdMeThnUlhobFkzVjBaU0JoYkd3Z2IyWWdkR2hwY3lCbWNtRnRaU2R6SUdaMWJtTjBhVzl1YzF4dUlDQWdJQ0FnWTI5dWMzUWdiblZ0VkdocGMwWnlZVzFsSUQwZ1puVnVZM1JwYjI1elZHOVNkVzR1YkdWdVozUm9PMXh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxVWFHbHpSbkpoYldVN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFibHRwWFNncE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVHRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICB2YXIgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xuICB2YXIgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDE7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gZGF0YS53aWR0aCAqICgoc3RhdGUub3JpZ2luWCB8fCA1MCkgLyAxMDApICsgZGF0YS54O1xuICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGRhdGEuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkYXRhLnk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVggPSAtdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpO1xuICB2YXIgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSk7XG4gIHZhciBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICB2YXIgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVk7XG4gIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgdHJhbnNsYXRlOiAndHJhbnNsYXRlKCcgKyBzdGF0ZS50cmFuc2xhdGVYICsgJywgJyArIHN0YXRlLnRyYW5zbGF0ZVkgKyAnKSAnLFxuICAgIHNjYWxlOiAndHJhbnNsYXRlKCcgKyBzY2FsZVRyYW5zZm9ybVggKyAnLCAnICsgc2NhbGVUcmFuc2Zvcm1ZICsgJykgc2NhbGUoJyArIHNjYWxlICsgJywgJyArIHNjYWxlWSArICcpIHRyYW5zbGF0ZSgnICsgc2NhbGVSZXBsYWNlWCArICcsICcgKyBzY2FsZVJlcGxhY2VZICsgJykgJyxcbiAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgIHNrZXdYOiAnc2tld1goJyArIHN0YXRlLnNrZXdYICsgJykgJyxcbiAgICBza2V3WTogJ3NrZXdZKCcgKyBzdGF0ZS5za2V3WSArICcpICdcbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wc1soMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgZm9yICh2YXIgX2tleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IF9rZXkgPT09ICdzY2FsZScgPyAnMScgOiAnMCc7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1bX2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwySjFhV3hrTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZMZDBJc1N6czdRVUZNZUVJN08wRkJRMEU3T3pzN096dEJRVVZCTEVsQlFVMHNaMEpCUVdkQ0xFMUJRWFJDT3p0QlFVVmxMRk5CUVZNc1MwRkJWQ3hEUVVGbExFdEJRV1lzUlVGQmMwSXNTVUZCZEVJc1JVRkJORUk3UVVGRGVrTXNUVUZCU1N4bFFVRmxMRXRCUVc1Q08wRkJRMEVzVFVGQlRTeFJRVUZSTEVWQlFXUTdRVUZEUVN4TlFVRk5MRkZCUVZFc1RVRkJUU3hMUVVGT0xFdEJRV2RDTEZOQlFXaENMRWRCUVRSQ0xFMUJRVTBzUzBGQlRpeEpRVUZsTEdGQlFUTkRMRWRCUVRKRUxFMUJRVTBzVFVGQlRpeEpRVUZuUWl4RFFVRjZSanRCUVVOQkxFMUJRVTBzVTBGQlV5eE5RVUZOTEUxQlFVNHNTMEZCYVVJc1UwRkJha0lzUjBGQk5rSXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xHRkJRVGRETEVkQlFUWkVMRk5CUVZNc1EwRkJja1k3UVVGRFFTeE5RVUZOTEcxQ1FVRnRRaXhMUVVGTExFdEJRVXdzU1VGQll5eERRVUZETEUxQlFVMHNUMEZCVGl4SlFVRnBRaXhGUVVGc1FpeEpRVUYzUWl4SFFVRjBReXhKUVVFMlF5eExRVUZMTEVOQlFUTkZPMEZCUTBFc1RVRkJUU3h0UWtGQmJVSXNTMEZCU3l4TlFVRk1MRWxCUVdVc1EwRkJReXhOUVVGTkxFOUJRVTRzU1VGQmFVSXNSVUZCYkVJc1NVRkJkMElzUjBGQmRrTXNTVUZCT0VNc1MwRkJTeXhEUVVFMVJUdEJRVU5CTEUxQlFVMHNhMEpCUVd0Q0xFTkJRVVVzWjBKQlFVWXNTVUZCYzBJc1VVRkJVU3hEUVVFNVFpeERRVUY0UWp0QlFVTkJMRTFCUVUwc2EwSkJRV3RDTEVOQlFVVXNaMEpCUVVZc1NVRkJjMElzVTBGQlV5eERRVUV2UWl4RFFVRjRRanRCUVVOQkxFMUJRVTBzWjBKQlFXZENMRzFDUVVGdFFpeExRVUY2UXp0QlFVTkJMRTFCUVUwc1owSkJRV2RDTEcxQ1FVRnRRaXhOUVVGNlF6dEJRVU5CTEUxQlFVMHNXVUZCV1R0QlFVTm9RaXc0UWtGQmQwSXNUVUZCVFN4VlFVRTVRaXhWUVVFMlF5eE5RVUZOTEZWQlFXNUVMRTlCUkdkQ08wRkJSV2hDTERCQ1FVRnZRaXhsUVVGd1FpeFZRVUYzUXl4bFFVRjRReXhuUWtGQmEwVXNTMEZCYkVVc1ZVRkJORVVzVFVGQk5VVXNiMEpCUVdsSExHRkJRV3BITEZWQlFXMUlMR0ZCUVc1SUxFOUJSbWRDTzBGQlIyaENMSGRDUVVGclFpeE5RVUZOTEUxQlFYaENMRlZCUVcxRExHZENRVUZ1UXl4VlFVRjNSQ3huUWtGQmVFUXNUMEZJWjBJN1FVRkphRUlzYzBKQlFXZENMRTFCUVUwc1MwRkJkRUlzVDBGS1owSTdRVUZMYUVJc2MwSkJRV2RDTEUxQlFVMHNTMEZCZEVJN1FVRk1aMElzUjBGQmJFSTdPMEZCVVVFc1QwRkJTeXhKUVVGSkxFZEJRVlFzU1VGQlowSXNTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNVVUZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNM1FpeFZRVUZKTEhsQ1FVRmxMRWRCUVdZc1EwRkJTaXhGUVVGNVFqdEJRVU4yUWl4MVFrRkJaU3hKUVVGbU8wRkJRMFFzVDBGR1JDeE5RVVZQTzBGQlEwd3NZMEZCVFN4M1FrRkJXU3hIUVVGYUxFTkJRVTRzU1VGQk1FSXNUVUZCVFN4SFFVRk9MRU5CUVRGQ08wRkJRMFE3UVVGRFJqdEJRVU5HT3p0QlFVVkVMRTFCUVVrc1dVRkJTaXhGUVVGclFqdEJRVU5vUWl4VlFVRk5MRk5CUVU0c1IwRkJhMElzUlVGQmJFSTdPMEZCUlVFc1UwRkJTeXhKUVVGSkxFbEJRVlFzU1VGQlowSXNVMEZCYUVJc1JVRkJNa0k3UVVGRGVrSXNWVUZCU1N4VlFVRlZMR05CUVZZc1EwRkJlVUlzU1VGQmVrSXNRMEZCU2l4RlFVRnRRenRCUVVOcVF5eFpRVUZOTEdWQlFXZENMRk5CUVZFc1QwRkJWQ3hIUVVGdlFpeEhRVUZ3UWl4SFFVRXdRaXhIUVVFdlF6dEJRVU5CTEdOQlFVMHNVMEZCVGl4SlFVRnRRaXhWUVVGVkxFbEJRVllzUlVGQlpTeFBRVUZtTEVOQlFYVkNMRmxCUVhaQ0xFVkJRWEZETEZsQlFYSkRMRU5CUVc1Q08wRkJRMFE3UVVGRFJqdEJRVU5HT3p0QlFVVkVMRk5CUVU4c1MwRkJVRHRCUVVORUlpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWTJGdFpXeFViMFJoYzJnZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHVMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dVhHNWpiMjV6ZENCYVJWSlBYMDVQVkY5YVJWSlBJRDBnTUM0d01EQXhPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pDaHpkR0YwWlN3Z1pHRjBZU2tnZTF4dUlDQnNaWFFnYUdGelZISmhibk5tYjNKdElEMGdabUZzYzJVN1hHNGdJR052Ym5OMElIQnliM0J6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJSE5qWVd4bElEMGdjM1JoZEdVdWMyTmhiR1VnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JSE4wWVhSbExuTmpZV3hsSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCemRHRjBaUzV6WTJGc1pWZ2dmSHdnTVR0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZaSUQwZ2MzUmhkR1V1YzJOaGJHVlpJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QnpkR0YwWlM1elkyRnNaVmtnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOallXeGxJSHg4SURFN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQmtZWFJoTG5kcFpIUm9JQ29nS0NoemRHRjBaUzV2Y21sbmFXNVlJSHg4SURVd0tTQXZJREV3TUNrZ0t5QmtZWFJoTG5nN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ1BTQmtZWFJoTG1obGFXZG9kQ0FxSUNnb2MzUmhkR1V1YjNKcFoybHVXU0I4ZkNBMU1Da2dMeUF4TURBcElDc2daR0YwWVM1NU8xeHVJQ0JqYjI1emRDQnpZMkZzWlZSeVlXNXpabTl5YlZnZ1BTQXRJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dLaUFvYzJOaGJHVWdLaUF4S1R0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFaSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklDb2dLSE5qWVd4bFdTQXFJREVwTzF4dUlDQmpiMjV6ZENCelkyRnNaVkpsY0d4aFkyVllJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXQ0F2SUhOallXeGxPMXh1SUNCamIyNXpkQ0J6WTJGc1pWSmxjR3hoWTJWWklEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdTQXZJSE5qWVd4bFdUdGNiaUFnWTI5dWMzUWdkSEpoYm5ObWIzSnRJRDBnZTF4dUlDQWdJSFJ5WVc1emJHRjBaVG9nWUhSeVlXNXpiR0YwWlNna2UzTjBZWFJsTG5SeVlXNXpiR0YwWlZoOUxDQWtlM04wWVhSbExuUnlZVzV6YkdGMFpWbDlLU0JnTEZ4dUlDQWdJSE5qWVd4bE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlVjbUZ1YzJadmNtMVlmU3dnSkh0elkyRnNaVlJ5WVc1elptOXliVmw5S1NCelkyRnNaU2drZTNOallXeGxmU3dnSkh0elkyRnNaVmw5S1NCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZKbGNHeGhZMlZZZlN3Z0pIdHpZMkZzWlZKbGNHeGhZMlZaZlNrZ1lDeGNiaUFnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lITnJaWGRZT2lCZ2MydGxkMWdvSkh0emRHRjBaUzV6YTJWM1dIMHBJR0FzWEc0Z0lDQWdjMnRsZDFrNklHQnphMlYzV1Nna2UzTjBZWFJsTG5OclpYZFpmU2tnWUZ4dUlDQjlPMXh1WEc0Z0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJR2xtSUNoemRHRjBaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NISnZjSE5iWTJGdFpXeFViMFJoYzJnb2EyVjVLVjBnUFNCemRHRjBaVnRyWlhsZE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hvWVhOVWNtRnVjMlp2Y20wcElIdGNiaUFnSUNCd2NtOXdjeTUwY21GdWMyWnZjbTBnUFNBbkp6dGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGNtRnVjMlp2Y20wcElIdGNiaUFnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTB1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXWmhkV3gwVm1Gc2RXVWdQU0FvYTJWNUlEMDlQU0FuYzJOaGJHVW5LU0EvSUNjeEp5QTZJQ2N3Snp0Y2JpQWdJQ0FnSUNBZ2NISnZjSE11ZEhKaGJuTm1iM0p0SUNzOUlIUnlZVzV6Wm05eWJWdHJaWGxkTG5KbGNHeGhZMlVvTDNWdVpHVm1hVzVsWkM5bkxDQmtaV1poZFd4MFZtRnNkV1VwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ3Y205d2N6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYXhlcyA9IFsnWCcsICdZJywgJ1onXTtcblxudmFyIHRyYW5zZm9ybVByb3BzID0ge1xuICB4OiB0cnVlLFxuICB5OiB0cnVlLFxuICB6OiB0cnVlXG59O1xuXG52YXIgU0NBTEUgPSAnc2NhbGUnO1xudmFyIFJPVEFURSA9ICdyb3RhdGUnO1xudmFyIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG52YXIgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBheGVzLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNSeVlXNXpabTl5YlMxd2NtOXdjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTkxFOUJRVThzUTBGQlF5eEhRVUZFTEVWQlFVMHNSMEZCVGl4RlFVRlhMRWRCUVZnc1EwRkJZanM3UVVGRlFTeEpRVUZKTEdsQ1FVRnBRanRCUVVOdVFpeExRVUZITEVsQlJHZENPMEZCUlc1Q0xFdEJRVWNzU1VGR1owSTdRVUZIYmtJc1MwRkJSenRCUVVoblFpeERRVUZ5UWpzN1FVRk5RU3hKUVVGTkxGRkJRVkVzVDBGQlpEdEJRVU5CTEVsQlFVMHNVMEZCVXl4UlFVRm1PMEZCUTBFc1NVRkJUU3gzUWtGQmQwSXNjMEpCUVRsQ08wRkJRMEVzU1VGQlRTeFJRVUZSTEVOQlFVTXNWMEZCUkN4RlFVRmpMRXRCUVdRc1JVRkJjVUlzVFVGQmNrSXNSVUZCTmtJc1RVRkJOMElzUlVGQmNVTXNjVUpCUVhKRExFTkJRV1E3TzBGQlJVRXNaVUZCWlN4TlFVRm1MRWxCUVhsQ0xHVkJRV1VzUzBGQlppeEpRVUYzUWl4bFFVRmxMSEZDUVVGbUxFbEJRWGRETEVsQlFYcEdPenRCUVVWQkxFMUJRVTBzVDBGQlRpeERRVUZqTEZWQlFVTXNTVUZCUkR0QlFVRkJMRk5CUVZVc1MwRkJTeXhQUVVGTUxFTkJRV0VzVlVGQlF5eEpRVUZFTzBGQlFVRXNWMEZCVlN4bFFVRmxMRTlCUVU4c1NVRkJkRUlzU1VGQk9FSXNTVUZCZUVNN1FVRkJRU3hIUVVGaUxFTkJRVlk3UVVGQlFTeERRVUZrT3p0clFrRkZaU3hqSWl3aVptbHNaU0k2SW5SeVlXNXpabTl5YlMxd2NtOXdjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElHRjRaWE1nUFNCYkoxZ25MQ0FuV1Njc0lDZGFKMTA3WEc1Y2JteGxkQ0IwY21GdWMyWnZjbTFRY205d2N5QTlJSHRjYmlBZ2VEb2dkSEoxWlN4Y2JpQWdlVG9nZEhKMVpTeGNiaUFnZWpvZ2RISjFaVnh1ZlR0Y2JseHVZMjl1YzNRZ1UwTkJURVVnUFNBbmMyTmhiR1VuTzF4dVkyOXVjM1FnVWs5VVFWUkZJRDBnSjNKdmRHRjBaU2M3WEc1amIyNXpkQ0JVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtVZ1BTQW5kSEpoYm5ObWIzSnRVR1Z5YzNCbFkzUnBkbVVuTzF4dVkyOXVjM1FnVkVWU1RWTWdQU0JiSjNSeVlXNXpiR0YwWlNjc0lGTkRRVXhGTENCU1QxUkJWRVVzSUNkemEyVjNKeXdnVkZKQlRsTkdUMUpOWDFCRlVsTlFSVU5VU1ZaRlhUdGNibHh1ZEhKaGJuTm1iM0p0VUhKdmNITmJVazlVUVZSRlhTQTlJSFJ5WVc1elptOXliVkJ5YjNCelcxTkRRVXhGWFNBOUlIUnlZVzV6Wm05eWJWQnliM0J6VzFSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JWMGdQU0IwY25WbE8xeHVYRzVVUlZKTlV5NW1iM0pGWVdOb0tDaDBaWEp0S1NBOVBpQmhlR1Z6TG1admNrVmhZMmdvS0dGNGFYTXBJRDArSUhSeVlXNXpabTl5YlZCeWIzQnpXM1JsY20wZ0t5QmhlR2x6WFNBOUlIUnlkV1VwS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2RISmhibk5tYjNKdFVISnZjSE03SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBmaWxsOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc3Ryb2tlOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc2NhbGU6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVg6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVk6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBkOiBfdmFsdWVUeXBlcy5jb21wbGV4LFxuICBwb2ludHM6IF92YWx1ZVR5cGVzLmNvbXBsZXgsXG4gIG9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhLFxuICBmaWxsT3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGEsXG4gIHN0cm9rZU9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwzWmhiSFZsTFhSNWNHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3YTBKQlJXVTdRVUZEWWl4NVFrRkVZVHRCUVVWaUxESkNRVVpoTzBGQlIySXNNRUpCU0dFN1FVRkpZaXd5UWtGS1lUdEJRVXRpTERKQ1FVeGhPMEZCVFdJc2QwSkJUbUU3UVVGUFlpdzJRa0ZRWVR0QlFWRmlMRFJDUVZKaE8wRkJVMklzWjBOQlZHRTdRVUZWWWp0QlFWWmhMRU1pTENKbWFXeGxJam9pZG1Gc2RXVXRkSGx3WlhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCaGJIQm9ZU3dnWTI5c2IzSXNJR052YlhCc1pYZ3NJSE5qWVd4bElIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwzWmhiSFZsTFhSNWNHVnpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQm1hV3hzT2lCamIyeHZjaXhjYmlBZ2MzUnliMnRsT2lCamIyeHZjaXhjYmlBZ2MyTmhiR1U2SUhOallXeGxMRnh1SUNCelkyRnNaVmc2SUhOallXeGxMRnh1SUNCelkyRnNaVms2SUhOallXeGxMRnh1SUNCa09pQmpiMjF3YkdWNExGeHVJQ0J3YjJsdWRITTZJR052YlhCc1pYZ3NYRzRnSUc5d1lXTnBkSGs2SUdGc2NHaGhMRnh1SUNCbWFXeHNUM0JoWTJsMGVUb2dZV3h3YUdFc1hHNGdJSE4wY205clpVOXdZV05wZEhrNklHRnNjR2hoWEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZztcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xudmFyIHRyYW5zbGF0ZU1hcCA9IHtcbiAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gIHo6IFRSQU5TTEFURSArICdaJ1xufTtcblxuZnVuY3Rpb24gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nKGVsZW1lbnQsIHN0YXRlLCBjaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICB2YXIgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIHZhciB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBjaGFuZ2VkIHRyYW5zZm9ybSB2YWx1ZXNcbiAgLy8gYW5kIGlmIHRydWUgYWRkIGFsbCB0cmFuc2Zvcm0gdmFsdWVzXG4gIHZhciBudW1DaGFuZ2VkVmFsdWVzID0gY2hhbmdlZFZhbHVlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ2hhbmdlZFZhbHVlczsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdHJhbnNmb3JtIHByb3BlcnR5LCBhZGQgYWxsIG90aGVyIHRyYW5zZm9ybSBwcm9wc1xuICAgIC8vIHRvIGNoYW5nZWRWYWx1ZXMgYW5kIHRoZW4gYnJlYWtcbiAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG5cbiAgICAgIGZvciAodmFyIF9rZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtfa2V5XSAmJiBjaGFuZ2VkVmFsdWVzLmluZGV4T2YoX2tleSkgPT09IC0xKSB7XG4gICAgICAgICAgY2hhbmdlZFZhbHVlcy5wdXNoKF9rZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0b3RhbE51bUNoYW5nZWRWYWx1ZXMgPSBjaGFuZ2VkVmFsdWVzLmxlbmd0aDtcbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRvdGFsTnVtQ2hhbmdlZFZhbHVlczsgX2krKykge1xuICAgIHZhciBfa2V5MiA9IGNoYW5nZWRWYWx1ZXNbX2ldO1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlW19rZXkyXTtcblxuICAgIGlmICh0cmFuc2xhdGVNYXBbX2tleTJdKSB7XG4gICAgICBfa2V5MiA9IHRyYW5zbGF0ZU1hcFtfa2V5Ml07XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIG51bWJlciBvciBvYmplY3QgYW5kIHdlIGhhdmUgZmlsdGVyLCBhcHBseSBmaWx0ZXJcbiAgICBpZiAoX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdICYmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZSkgfHwgKDAsIF91dGlscy5pc09iaikodmFsdWUpKSAmJiBfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0udHJhbnNmb3JtKSB7XG4gICAgICB2YWx1ZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXS50cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRbX2tleTJdKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gX2tleTIgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICB0cmFuc2Zvcm1IYXNaID0gX2tleTIgPT09IHRyYW5zbGF0ZU1hcC56ID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKF9rZXkyLCB0cnVlKSArICc6JyArIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHdlIGhhdmUgdHJhbnNmb3JtIHByb3BzLCBidWlsZCBhIHRyYW5zZm9ybSBzdHJpbmdcbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IHRyYW5zbGF0ZU1hcC56ICsgJygwKSc7XG4gICAgfVxuXG4gICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoJ3RyYW5zZm9ybScsIHRydWUpICsgJzonICsgdHJhbnNmb3JtU3RyaW5nO1xuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IHByb3BlcnR5U3RyaW5nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzSmxibVJsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCV1hkQ0xIZENPenRCUVZwNFFqczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVVZCTEVsQlFVMHNXVUZCV1N4WFFVRnNRanRCUVVOQkxFbEJRVTBzWlVGQlpUdEJRVU51UWl4TFFVRkhMRmxCUVZrc1IwRkVTVHRCUVVWdVFpeExRVUZITEZsQlFWa3NSMEZHU1R0QlFVZHVRaXhMUVVGSExGbEJRVms3UVVGSVNTeERRVUZ5UWpzN1FVRk5aU3hUUVVGVExIZENRVUZVTEVOQlFXdERMRTlCUVd4RExFVkJRVEpETEV0QlFUTkRMRVZCUVd0RUxHRkJRV3hFTEVWQlFXbEZMREJDUVVGcVJTeEZRVUUyUmp0QlFVTXhSeXhOUVVGSkxHbENRVUZwUWl4RlFVRnlRanRCUVVOQkxFMUJRVWtzYTBKQlFXdENMRVZCUVhSQ08wRkJRMEVzVFVGQlNTeGxRVUZsTEV0QlFXNUNPMEZCUTBFc1RVRkJTU3huUWtGQlowSXNTMEZCY0VJN096czdRVUZKUVN4TlFVRk5MRzFDUVVGdFFpeGpRVUZqTEUxQlFYWkRPMEZCUTBFc1QwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQllpeEZRVUZuUWl4SlFVRkpMR2RDUVVGd1FpeEZRVUZ6UXl4SFFVRjBReXhGUVVFeVF6dEJRVU42UXl4UlFVRk5MRTFCUVUwc1kwRkJZeXhEUVVGa0xFTkJRVm83T3pzN1FVRkpRU3hSUVVGSkxIbENRVUZsTEVkQlFXWXNRMEZCU2l4RlFVRjVRanRCUVVOMlFpeHhRa0ZCWlN4SlFVRm1PenRCUVVWQkxGZEJRVXNzU1VGQlNTeEpRVUZVTEVsQlFXZENMRXRCUVdoQ0xFVkJRWFZDTzBGQlEzSkNMRmxCUVVrc2VVSkJRV1VzU1VGQlppeExRVUYxUWl4alFVRmpMRTlCUVdRc1EwRkJjMElzU1VGQmRFSXNUVUZCSzBJc1EwRkJReXhEUVVFelJDeEZRVUU0UkR0QlFVTTFSQ3gzUWtGQll5eEpRVUZrTEVOQlFXMUNMRWxCUVc1Q08wRkJRMFE3UVVGRFJqczdRVUZGUkR0QlFVTkVPMEZCUTBZN08wRkJSVVFzVFVGQlRTeDNRa0ZCZDBJc1kwRkJZeXhOUVVFMVF6dEJRVU5CTEU5QlFVc3NTVUZCU1N4TFFVRkpMRU5CUVdJc1JVRkJaMElzUzBGQlNTeHhRa0ZCY0VJc1JVRkJNa01zU1VGQk0wTXNSVUZCWjBRN1FVRkRPVU1zVVVGQlNTeFJRVUZOTEdOQlFXTXNSVUZCWkN4RFFVRldPMEZCUTBFc1VVRkJTU3hSUVVGUkxFMUJRVTBzUzBGQlRpeERRVUZhT3p0QlFVVkJMRkZCUVVrc1lVRkJZU3hMUVVGaUxFTkJRVW9zUlVGQmRVSTdRVUZEY2tJc1kwRkJUU3hoUVVGaExFdEJRV0lzUTBGQlRqdEJRVU5FT3pzN1FVRkhSQ3hSUVVGSkxIRkNRVUZYTEV0QlFWZ3NUVUZCYjBJc2EwSkJRVTBzUzBGQlRpeExRVUZuUWl4clFrRkJUU3hMUVVGT0xFTkJRWEJETEV0QlFYRkVMSEZDUVVGWExFdEJRVmdzUlVGQlowSXNVMEZCZWtVc1JVRkJiMFk3UVVGRGJFWXNZMEZCVVN4eFFrRkJWeXhMUVVGWUxFVkJRV2RDTEZOQlFXaENMRU5CUVRCQ0xFdEJRVEZDTEVOQlFWSTdRVUZEUkRzN1FVRkZSQ3hSUVVGSkxIbENRVUZsTEV0QlFXWXNRMEZCU2l4RlFVRjVRanRCUVVOMlFpeDVRa0ZCYlVJc1VVRkJUU3hIUVVGT0xFZEJRVmtzUzBGQldpeEhRVUZ2UWl4SlFVRjJRenRCUVVOQkxITkNRVUZwUWl4VlFVRlJMR0ZCUVdFc1EwRkJkRUlzUjBGQk1rSXNTVUZCTTBJc1IwRkJhME1zWVVGQmJFUTdRVUZGUkN4TFFVcEVMRTFCU1U4N1FVRkRUQ3gzUWtGQmEwSXNUVUZCVFN4M1FrRkJVeXhMUVVGVUxFVkJRV01zU1VGQlpDeERRVUZPTEVkQlFUUkNMRWRCUVRWQ0xFZEJRV3RETEV0QlFYQkVPMEZCUTBRN1FVRkRSanM3TzBGQlIwUXNUVUZCU1N4WlFVRktMRVZCUVd0Q08wRkJRMmhDTEZGQlFVa3NRMEZCUXl4aFFVRkVMRWxCUVd0Q0xEQkNRVUYwUWl4RlFVRnJSRHRCUVVOb1JDeDVRa0ZCYlVJc1lVRkJZU3hEUVVGaUxFZEJRV2xDTEV0QlFYQkRPMEZCUTBRN08wRkJSVVFzYzBKQlFXdENMRTFCUVUwc2QwSkJRVk1zVjBGQlZDeEZRVUZ6UWl4SlFVRjBRaXhEUVVGT0xFZEJRVzlETEVkQlFYQkRMRWRCUVRCRExHVkJRVFZFTzBGQlEwUTdPMEZCUlVRc1ZVRkJVU3hMUVVGU0xFTkJRV01zVDBGQlpDeEpRVUY1UWl4alFVRjZRanRCUVVORUlpd2labWxzWlNJNkluSmxibVJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUwzUnlZVzV6Wm05eWJTMXdjbTl3Y3ljN1hHNXBiWEJ2Y25RZ2RtRnNkV1ZVZVhCbGN5Qm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpKenRjYm1sdGNHOXlkQ0J3Y21WbWFYaGxjaUJtY205dElDY3VMM0J5WldacGVHVnlKenRjYm1sdGNHOXlkQ0I3SUdselRuVnRMQ0JwYzA5aWFpQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElGUlNRVTVUVEVGVVJTQTlJQ2QwY21GdWMyeGhkR1VuTzF4dVkyOXVjM1FnZEhKaGJuTnNZWFJsVFdGd0lEMGdlMXh1SUNCNE9pQlVVa0ZPVTB4QlZFVWdLeUFuV0Njc1hHNGdJSGs2SUZSU1FVNVRURUZVUlNBcklDZFpKeXhjYmlBZ2Vqb2dWRkpCVGxOTVFWUkZJQ3NnSjFvblhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pGTjBlV3hsVUhKdmNHVnlkSGxUZEhKcGJtY29aV3hsYldWdWRDd2djM1JoZEdVc0lHTm9ZVzVuWldSV1lXeDFaWE1zSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NCN1hHNGdJR3hsZENCd2NtOXdaWEowZVZOMGNtbHVaeUE5SUNjbk8xeHVJQ0JzWlhRZ2RISmhibk5tYjNKdFUzUnlhVzVuSUQwZ0p5YzdYRzRnSUd4bGRDQm9ZWE5VY21GdWMyWnZjbTBnUFNCbVlXeHpaVHRjYmlBZ2JHVjBJSFJ5WVc1elptOXliVWhoYzFvZ1BTQm1ZV3h6WlR0Y2JseHVJQ0F2THlCR2FYSnpkQ0JqYUdWamF5QnBaaUIwYUdWeVpTQmhjbVVnWVc1NUlHTm9ZVzVuWldRZ2RISmhibk5tYjNKdElIWmhiSFZsYzF4dUlDQXZMeUJoYm1RZ2FXWWdkSEoxWlNCaFpHUWdZV3hzSUhSeVlXNXpabTl5YlNCMllXeDFaWE5jYmlBZ1kyOXVjM1FnYm5WdFEyaGhibWRsWkZaaGJIVmxjeUE5SUdOb1lXNW5aV1JXWVd4MVpYTXViR1Z1WjNSb08xeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJVTm9ZVzVuWldSV1lXeDFaWE03SUdrckt5a2dlMXh1SUNBZ0lHTnZibk4wSUd0bGVTQTlJR05vWVc1blpXUldZV3gxWlhOYmFWMDdYRzVjYmlBZ0lDQXZMeUJKWmlCMGFHbHpJR2x6SUdFZ2RISmhibk5tYjNKdElIQnliM0JsY25SNUxDQmhaR1FnWVd4c0lHOTBhR1Z5SUhSeVlXNXpabTl5YlNCd2NtOXdjMXh1SUNBZ0lDOHZJSFJ2SUdOb1lXNW5aV1JXWVd4MVpYTWdZVzVrSUhSb1pXNGdZbkpsWVd0Y2JpQWdJQ0JwWmlBb2RISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ2RISjFaVHRjYmx4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSE4wWVhSbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZElDWW1JR05vWVc1blpXUldZV3gxWlhNdWFXNWtaWGhQWmloclpYa3BJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUdOb1lXNW5aV1JXWVd4MVpYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR052Ym5OMElIUnZkR0ZzVG5WdFEyaGhibWRsWkZaaGJIVmxjeUE5SUdOb1lXNW5aV1JXWVd4MVpYTXViR1Z1WjNSb08xeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSdmRHRnNUblZ0UTJoaGJtZGxaRlpoYkhWbGN6c2dhU3NyS1NCN1hHNGdJQ0FnYkdWMElHdGxlU0E5SUdOb1lXNW5aV1JXWVd4MVpYTmJhVjA3WEc0Z0lDQWdiR1YwSUhaaGJIVmxJRDBnYzNSaGRHVmJhMlY1WFR0Y2JseHVJQ0FnSUdsbUlDaDBjbUZ1YzJ4aGRHVk5ZWEJiYTJWNVhTa2dlMXh1SUNBZ0lDQWdhMlY1SUQwZ2RISmhibk5zWVhSbFRXRndXMnRsZVYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1NXWWdkR2hwY3lCcGN5QmhJRzUxYldKbGNpQnZjaUJ2WW1wbFkzUWdZVzVrSUhkbElHaGhkbVVnWm1sc2RHVnlMQ0JoY0hCc2VTQm1hV3gwWlhKY2JpQWdJQ0JwWmlBb2RtRnNkV1ZVZVhCbGMxdHJaWGxkSUNZbUlDaHBjMDUxYlNoMllXeDFaU2tnZkh3Z2FYTlBZbW9vZG1Gc2RXVXBLU0FtSmlCMllXeDFaVlI1Y0dWelcydGxlVjB1ZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNCMllXeDFaU0E5SUhaaGJIVmxWSGx3WlhOYmEyVjVYUzUwY21GdWMyWnZjbTBvZG1Gc2RXVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTFRY205d2MxdHJaWGxkS1NCN1hHNGdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2EyVjVJQ3NnSnlnbklDc2dkbUZzZFdVZ0t5QW5LU0FuTzF4dUlDQWdJQ0FnZEhKaGJuTm1iM0p0U0dGeldpQTlJQ2hyWlhrZ1BUMDlJSFJ5WVc1emJHRjBaVTFoY0M1NktTQS9JSFJ5ZFdVZ09pQjBjbUZ1YzJadmNtMUlZWE5hTzF4dVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEJ5YjNCbGNuUjVVM1J5YVc1bklDczlJQ2M3SnlBcklIQnlaV1pwZUdWeUtHdGxlU3dnZEhKMVpTa2dLeUFuT2ljZ0t5QjJZV3gxWlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdkx5QkpaaUIzWlNCb1lYWmxJSFJ5WVc1elptOXliU0J3Y205d2N5d2dZblZwYkdRZ1lTQjBjbUZ1YzJadmNtMGdjM1J5YVc1blhHNGdJR2xtSUNob1lYTlVjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQnBaaUFvSVhSeVlXNXpabTl5YlVoaGMxb2dKaVlnWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRwSUh0Y2JpQWdJQ0FnSUhSeVlXNXpabTl5YlZOMGNtbHVaeUFyUFNCMGNtRnVjMnhoZEdWTllYQXVlaUFySUNjb01Da25PMXh1SUNBZ0lIMWNibHh1SUNBZ0lIQnliM0JsY25SNVUzUnlhVzVuSUNzOUlDYzdKeUFySUhCeVpXWnBlR1Z5S0NkMGNtRnVjMlp2Y20wbkxDQjBjblZsS1NBcklDYzZKeUFySUhSeVlXNXpabTl5YlZOMGNtbHVaenRjYmlBZ2ZWeHVYRzRnSUdWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQXJQU0J3Y205d1pYSjBlVk4wY21sdVp6dGNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgLy8gQ29sb3IgcHJvcHNcbiAgY29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBiYWNrZ3JvdW5kQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBvdXRsaW5lQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBmaWxsOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc3Ryb2tlOiBfdmFsdWVUeXBlcy5jb2xvcixcblxuICAvLyBCb3JkZXIgcHJvcHNcbiAgYm9yZGVyQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJUb3BDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclJpZ2h0Q29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJCb3R0b21Db2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlckxlZnRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclJhZGl1czogX3ZhbHVlVHlwZXMucHgsXG5cbiAgLy8gUG9zaXRpb25pbmdcbiAgd2lkdGg6IF92YWx1ZVR5cGVzLnB4LFxuICBoZWlnaHQ6IF92YWx1ZVR5cGVzLnB4LFxuXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gIHJvdGF0ZTogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgcm90YXRlWDogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgcm90YXRlWTogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgcm90YXRlWjogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgc2NhbGU6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVg6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVk6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVo6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBza2V3WDogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgc2tld1k6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIGRpc3RhbmNlOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWDogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVk6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVaOiBfdmFsdWVUeXBlcy5weCxcbiAgcGVyc3BlY3RpdmU6IF92YWx1ZVR5cGVzLnB4LFxuICBvcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM1poYkhWbExYUjVjR1Z6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN2EwSkJRMlU3TzBGQlJXSXNNRUpCUm1FN1FVRkhZaXh2UTBGSVlUdEJRVWxpTEdsRFFVcGhPMEZCUzJJc2VVSkJUR0U3UVVGTllpd3lRa0ZPWVRzN08wRkJVMklzWjBOQlZHRTdRVUZWWWl4dFEwRldZVHRCUVZkaUxIRkRRVmhoTzBGQldXSXNjME5CV21FN1FVRmhZaXh2UTBGaVlUdEJRV05pTERoQ1FXUmhPenM3UVVGcFFtSXNkVUpCYWtKaE8wRkJhMEppTEhkQ1FXeENZVHM3TzBGQmNVSmlMRFpDUVhKQ1lUdEJRWE5DWWl3NFFrRjBRbUU3UVVGMVFtSXNPRUpCZGtKaE8wRkJkMEppTERoQ1FYaENZVHRCUVhsQ1lpd3dRa0Y2UW1FN1FVRXdRbUlzTWtKQk1VSmhPMEZCTWtKaUxESkNRVE5DWVR0QlFUUkNZaXd5UWtFMVFtRTdRVUUyUW1Jc05FSkJOMEpoTzBGQk9FSmlMRFJDUVRsQ1lUdEJRU3RDWWl3d1FrRXZRbUU3UVVGblEySXNORUpCYUVOaE8wRkJhVU5pTERSQ1FXcERZVHRCUVd0RFlpdzBRa0ZzUTJFN1FVRnRRMklzTmtKQmJrTmhPMEZCYjBOaU8wRkJjRU5oTEVNaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmhiSEJvWVN3Z1kyOXNiM0lzSUdSbFozSmxaWE1zSUhOallXeGxMQ0J3ZUNCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MllXeDFaUzEwZVhCbGN5YzdJRnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBdkx5QkRiMnh2Y2lCd2NtOXdjMXh1SUNCamIyeHZjam9nWTI5c2IzSXNYRzRnSUdKaFkydG5jbTkxYm1SRGIyeHZjam9nWTI5c2IzSXNYRzRnSUc5MWRHeHBibVZEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR1pwYkd3NklHTnZiRzl5TEZ4dUlDQnpkSEp2YTJVNklHTnZiRzl5TEZ4dVhHNGdJQzh2SUVKdmNtUmxjaUJ3Y205d2MxeHVJQ0JpYjNKa1pYSkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSnZjbVJsY2xSdmNFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ1ltOXlaR1Z5VW1sbmFIUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSnZjbVJsY2tKdmRIUnZiVU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdZbTl5WkdWeVRHVm1kRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdZbTl5WkdWeVVtRmthWFZ6T2lCd2VDeGNibHh1SUNBdkx5QlFiM05wZEdsdmJtbHVaMXh1SUNCM2FXUjBhRG9nY0hnc1hHNGdJR2hsYVdkb2REb2djSGdzSUNCY2JseHVJQ0F2THlCVWNtRnVjMlp2Y20wZ2NISnZjR1Z5ZEdsbGMxeHVJQ0J5YjNSaGRHVTZJR1JsWjNKbFpYTXNYRzRnSUhKdmRHRjBaVmc2SUdSbFozSmxaWE1zWEc0Z0lISnZkR0YwWlZrNklHUmxaM0psWlhNc1hHNGdJSEp2ZEdGMFpWbzZJR1JsWjNKbFpYTXNYRzRnSUhOallXeGxPaUJ6WTJGc1pTeGNiaUFnYzJOaGJHVllPaUJ6WTJGc1pTeGNiaUFnYzJOaGJHVlpPaUJ6WTJGc1pTeGNiaUFnYzJOaGJHVmFPaUJ6WTJGc1pTeGNiaUFnYzJ0bGQxZzZJR1JsWjNKbFpYTXNYRzRnSUhOclpYZFpPaUJrWldkeVpXVnpMRnh1SUNCa2FYTjBZVzVqWlRvZ2NIZ3NYRzRnSUhSeVlXNXpiR0YwWlZnNklIQjRMRnh1SUNCMGNtRnVjMnhoZEdWWk9pQndlQ3hjYmlBZ2RISmhibk5zWVhSbFdqb2djSGdzWEc0Z0lIQmxjbk53WldOMGFYWmxPaUJ3ZUN4Y2JpQWdiM0JoWTJsMGVUb2dZV3h3YUdGY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIGNhbWVsQ2FjaGUgPSB7fTtcbnZhciBkYXNoQ2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdm9pZCAwO1xuXG4vKlxuICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIHZhciBub1ByZWZpeCA9IHByZWZpeCA9PT0gJyc7XG4gICAgdmFyIHByZWZpeGVkUHJvcGVydHlOYW1lID0gbm9QcmVmaXggPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICBpZiAocHJlZml4ZWRQcm9wZXJ0eU5hbWUgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIGNhbWVsQ2FjaGVba2V5XSA9IHByZWZpeGVkUHJvcGVydHlOYW1lO1xuICAgICAgZGFzaENhY2hlW2tleV0gPSAnJyArIChub1ByZWZpeCA/ICcnIDogJy0nKSArICgwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKHByZWZpeGVkUHJvcGVydHlOYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXksIGFzRGFzaENhc2UpIHtcbiAgdmFyIGNhY2hlID0gYXNEYXNoQ2FzZSA/IGRhc2hDYWNoZSA6IGNhbWVsQ2FjaGU7XG5cbiAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgdGVzdFByZWZpeChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzQnlaV1pwZUdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdRVUZGUVN4SlFVRk5MR0ZCUVdFc1JVRkJia0k3UVVGRFFTeEpRVUZOTEZsQlFWa3NSVUZCYkVJN1FVRkRRU3hKUVVGTkxGZEJRVmNzUTBGQlF5eFJRVUZFTEVWQlFWVXNTMEZCVml4RlFVRm5RaXhIUVVGb1FpeEZRVUZ2UWl4SlFVRndRaXhGUVVFd1FpeEZRVUV4UWl4RFFVRnFRanRCUVVOQkxFbEJRVTBzWTBGQll5eFRRVUZUTEUxQlFUZENPMEZCUTBFc1NVRkJTU3h2UWtGQlNqczdPenM3T3pzN1FVRlJRU3hKUVVGTkxHRkJRV0VzVlVGQlF5eEhRVUZFTEVWQlFWTTdRVUZETVVJc1owSkJRV01zWlVGQlpTeFRRVUZUTEdGQlFWUXNRMEZCZFVJc1MwRkJka0lzUTBGQk4wSTdPMEZCUlVFc1QwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQllpeEZRVUZuUWl4SlFVRkpMRmRCUVhCQ0xFVkJRV2xETEVkQlFXcERMRVZCUVhORE8wRkJRM0JETEZGQlFVMHNVMEZCVXl4VFFVRlRMRU5CUVZRc1EwRkJaanRCUVVOQkxGRkJRVTBzVjBGQldTeFhRVUZYTEVWQlFUZENPMEZCUTBFc1VVRkJUU3gxUWtGQmRVSXNWMEZCVnl4SFFVRllMRWRCUVdsQ0xGTkJRVk1zU1VGQlNTeE5RVUZLTEVOQlFWY3NRMEZCV0N4RlFVRmpMRmRCUVdRc1JVRkJWQ3hIUVVGMVF5eEpRVUZKTEV0QlFVb3NRMEZCVlN4RFFVRldMRU5CUVhKR096dEJRVVZCTEZGQlFVa3NkMEpCUVhkQ0xGbEJRVmtzUzBGQmVFTXNSVUZCSzBNN1FVRkROME1zYVVKQlFWY3NSMEZCV0N4SlFVRnJRaXh2UWtGQmJFSTdRVUZEUVN4blFrRkJWU3hIUVVGV0xGVkJRWEZDTEZkQlFWY3NSVUZCV0N4SFFVRm5RaXhIUVVGeVF5eEpRVUUwUXl4M1FrRkJXU3h2UWtGQldpeERRVUUxUXp0QlFVTkVPMEZCUTBZN1FVRkRSaXhEUVdKRU96dHJRa0ZsWlN4VlFVRkRMRWRCUVVRc1JVRkJUU3hWUVVGT0xFVkJRWEZDTzBGQlEyeERMRTFCUVUwc1VVRkJVU3hoUVVGaExGTkJRV0lzUjBGQmVVSXNWVUZCZGtNN08wRkJSVUVzVFVGQlNTeERRVUZETEUxQlFVMHNSMEZCVGl4RFFVRk1MRVZCUVdsQ08wRkJRMllzWlVGQlZ5eEhRVUZZTzBGQlEwUTdPMEZCUlVRc1UwRkJUeXhOUVVGTkxFZEJRVTRzUTBGQlVEdEJRVU5FTEVNaUxDSm1hV3hsSWpvaWNISmxabWw0WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCallXMWxiRlJ2UkdGemFDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElHTmhiV1ZzUTJGamFHVWdQU0I3ZlR0Y2JtTnZibk4wSUdSaGMyaERZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQlVaWE4wSUhOMGVXeGxJSEJ5YjNCbGNuUjVJR1p2Y2lCd2NtVm1hWGhsWkNCMlpYSnphVzl1WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRk4wZVd4bElIQnliM0JsY25SNVhHNGdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMDZJRU5oWTJobFpDQndjbTl3WlhKMGVTQnVZVzFsWEc0cUwxeHVZMjl1YzNRZ2RHVnpkRkJ5WldacGVDQTlJQ2hyWlhrcElEMCtJSHRjYmlBZ2RHVnpkRVZzWlcxbGJuUWdQU0IwWlhOMFJXeGxiV1Z1ZENCOGZDQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjYmx4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZCeVpXWnBlR1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQmpiMjV6ZENCd2NtVm1hWGdnUFNCd2NtVm1hWGhsYzF0cFhUdGNiaUFnSUNCamIyNXpkQ0J1YjFCeVpXWnBlQ0E5SUNod2NtVm1hWGdnUFQwOUlDY25LVHRjYmlBZ0lDQmpiMjV6ZENCd2NtVm1hWGhsWkZCeWIzQmxjblI1VG1GdFpTQTlJRzV2VUhKbFptbDRJRDhnYTJWNUlEb2djSEpsWm1sNElDc2dhMlY1TG1Ob1lYSkJkQ2d3S1M1MGIxVndjR1Z5UTJGelpTZ3BJQ3NnYTJWNUxuTnNhV05sS0RFcE8xeHVYRzRnSUNBZ2FXWWdLSEJ5WldacGVHVmtVSEp2Y0dWeWRIbE9ZVzFsSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQmpZVzFsYkVOaFkyaGxXMnRsZVYwZ1BTQndjbVZtYVhobFpGQnliM0JsY25SNVRtRnRaVHRjYmlBZ0lDQWdJR1JoYzJoRFlXTm9aVnRyWlhsZElEMGdZQ1I3S0c1dlVISmxabWw0SUQ4Z0p5Y2dPaUFuTFNjcGZTUjdZMkZ0Wld4VWIwUmhjMmdvY0hKbFptbDRaV1JRY205d1pYSjBlVTVoYldVcGZXQTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1TENCaGMwUmhjMmhEWVhObEtTQTlQaUI3WEc0Z0lHTnZibk4wSUdOaFkyaGxJRDBnWVhORVlYTm9RMkZ6WlNBL0lHUmhjMmhEWVdOb1pTQTZJR05oYldWc1EyRmphR1U3WEc1Y2JpQWdhV1lnS0NGallXTm9aVnRyWlhsZEtTQjdYRzRnSUNBZ2RHVnpkRkJ5WldacGVDaHJaWGtwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdOaFkyaGxXMnRsZVYwN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50LCBsZW5ndGgpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDAgKiBsZW5ndGggKyAncHgnO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBsZW5ndGgpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuICB2YXIgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgIGxlbmd0aDogMCxcbiAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gIH07XG4gIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ3ZZblZwYkdRdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN08wRkJUVUVzU1VGQlRTeHJRa0ZCYTBJc1ZVRkJReXhQUVVGRUxFVkJRVlVzVFVGQlZqdEJRVUZCTEZOQlFYTkNMRmRCUVZjc1QwRkJXQ3hKUVVGelFpeEhRVUYyUWl4SFFVRTRRaXhOUVVFNVFpeEhRVUYxUXl4SlFVRTFSRHRCUVVGQkxFTkJRWGhDT3p0clFrRkZaU3hWUVVGRExFdEJRVVFzUlVGQlVTeE5RVUZTTEVWQlFXMUNPMEZCUTJoRExFMUJRVTBzVTBGQlV5eEZRVUZtTzBGQlEwRXNUVUZCVFN4clFrRkJhMEk3UVVGRGRFSXNXVUZCVVN4RFFVUmpPMEZCUlhSQ0xHRkJRVk1zVTBGQlV6dEJRVVpKTEVkQlFYaENPMEZCU1VFc1RVRkJTU3hsUVVGbExFdEJRVzVDT3p0QlFVVkJMRTlCUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEV0QlFXaENMRVZCUVhWQ08wRkJRM0pDTEZGQlFVa3NUVUZCVFN4alFVRk9MRU5CUVhGQ0xFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkROMElzVlVGQlRTeFJRVUZSTEUxQlFVMHNSMEZCVGl4RFFVRmtPenRCUVVWQkxHTkJRVkVzUjBGQlVqdEJRVU5CTEdGQlFVc3NVVUZCVER0QlFVTkJMR0ZCUVVzc1UwRkJURHRCUVVORkxIbENRVUZsTEVsQlFXWTdRVUZEUVN3d1FrRkJaMElzUjBGQmFFSXNTVUZCZFVJc1owSkJRV2RDTEV0QlFXaENMRVZCUVhWQ0xFMUJRWFpDTEVOQlFYWkNPMEZCUTBFN1FVRkRSaXhoUVVGTExGRkJRVXc3UVVGRFJTeHBRa0ZCVHl4dFFrRkJVQ3hKUVVFNFFpeG5Ra0ZCWjBJc1EwRkJReXhMUVVGcVFpeEZRVUYzUWl4TlFVRjRRaXhEUVVFNVFqdEJRVU5CTzBGQlEwWTdRVUZEUlN4cFFrRkJUeXhIUVVGUUxFbEJRV01zUzBGQlpEdEJRVlpHTzBGQldVUTdRVUZEUmpzN1FVRkZSQ3hOUVVGSkxGbEJRVW9zUlVGQmEwSTdRVUZEYUVJc1YwRkJUeXhyUWtGQlVDeEpRVUUyUWl4blFrRkJaMElzVFVGQmFFSXNSMEZCZVVJc1IwRkJla0lzUjBGQkswSXNaMEpCUVdkQ0xFOUJRVFZGTzBGQlEwUTdPMEZCUlVRc1UwRkJUeXhOUVVGUU8wRkJRMFFzUXlJc0ltWnBiR1VpT2lKaWRXbHNaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lFTnZiblpsY25RZ2NHVnlZMlZ1ZEdGblpTQjBieUJ3YVhobGJITmNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VHVnlZMlZ1ZEdGblpTQnZaaUIwYjNSaGJDQnNaVzVuZEdoY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlViM1JoYkNCc1pXNW5kR2hjYmlvdlhHNWpiMjV6ZENCd1pYSmpaVzUwVkc5UWFYaGxiSE1nUFNBb2NHVnlZMlZ1ZEN3Z2JHVnVaM1JvS1NBOVBpQW9jR0Z5YzJWR2JHOWhkQ2h3WlhKalpXNTBLU0F2SURFd01Da2dLaUJzWlc1bmRHZ2dLeUFuY0hnbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9jM1JoZEdVc0lHeGxibWQwYUNrZ1BUNGdlMXh1SUNCamIyNXpkQ0J6ZEhsc1pYTWdQU0I3ZlR0Y2JpQWdZMjl1YzNRZ1pHRnphRUZ5Y21GNVUzUjViR1Z6SUQwZ2UxeHVJQ0FnSUd4bGJtZDBhRG9nTUN4Y2JpQWdJQ0J6Y0dGamFXNW5PaUJzWlc1bmRHZ2dLeUFuY0hnblhHNGdJSDA3WEc0Z0lHeGxkQ0JvWVhORVlYTm9RWEp5WVhrZ1BTQm1ZV3h6WlR0Y2JseHVJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjM1JoZEdVcElIdGNiaUFnSUNCcFppQW9jM1JoZEdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCemRHRjBaVnRyWlhsZE8xeHVYRzRnSUNBZ0lDQnpkMmwwWTJnZ0tHdGxlU2tnZTF4dUlDQWdJQ0FnWTJGelpTQW5iR1Z1WjNSb0p6cGNiaUFnSUNBZ0lHTmhjMlVnSjNOd1lXTnBibWNuT2x4dUlDQWdJQ0FnSUNCb1lYTkVZWE5vUVhKeVlYa2dQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQmtZWE5vUVhKeVlYbFRkSGxzWlhOYmEyVjVYU0E5SUhCbGNtTmxiblJVYjFCcGVHVnNjeWgyWVd4MVpTd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCallYTmxJQ2R2Wm1aelpYUW5PbHh1SUNBZ0lDQWdJQ0J6ZEhsc1pYTmJKM04wY205clpTMWtZWE5vYjJabWMyVjBKMTBnUFNCd1pYSmpaVzUwVkc5UWFYaGxiSE1vTFhaaGJIVmxMQ0JzWlc1bmRHZ3BPMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lHUmxabUYxYkhRNlhHNGdJQ0FnSUNBZ0lITjBlV3hsYzF0clpYbGRJRDBnZG1Gc2RXVTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdhV1lnS0doaGMwUmhjMmhCY25KaGVTa2dlMXh1SUNBZ0lITjBlV3hsYzFzbmMzUnliMnRsTFdSaGMyaGhjbkpoZVNkZElEMGdaR0Z6YUVGeWNtRjVVM1I1YkdWekxteGxibWQwYUNBcklDY2dKeUFySUdSaGMyaEJjbkpoZVZOMGVXeGxjeTV6Y0dGamFXNW5PMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSE4wZVd4bGN6dGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==