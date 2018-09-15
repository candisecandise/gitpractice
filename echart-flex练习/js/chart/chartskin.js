(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['exports', 'echarts'], factory);
	} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		// CommonJS
		factory(exports, require('echarts'));
	} else {
		// Browser globals
		factory({}, root.echarts);
	}
}(this, function (exports, echarts) {
	var log = function (msg) {
		if (typeof console !== 'undefined') {
			console && console.error && console.error(msg);
		}
	};
	if (!echarts) {
		log('ECharts is not Loaded');
		return;
	}
	echarts.registerTheme('white', {
		"color": [
			'#fcc668', 
			'#70e136', 
			'#52ccfb', 
			'#5852fb', 
			'#f64c7e', 
			'#dd52fb', 
			'#507ef1',
		],
		"backgroundColor": "rgba(0,0,0,0)",
		"line": {
			"itemStyle": {
				"normal": {
					"borderWidth": "4"
				}
			},
			"lineStyle": {
				"normal": {
					"width": "2"
				}
			},
			"symbolSize": "0",
			"symbol": "emptyCircle",
			"smooth": true
		},
		"categoryAxis": {
			"axisLine": {
				"show": true,
				"lineStyle": {
					"color": "#373D41",
					"width": 2
				}
			},
			"axisTick": {
				"show": false,
				"lineStyle": {
					"color": "#373D41",
					"width": 1
				}
			},
			"axisLabel": {
				"show": true,
				"textStyle": {
					"color": "#fff"
				}
			},
			"splitLine": {
				"show": false,
				"lineStyle": {
					"color": [
						"#e6e6e6"
					] 
				}
			},
			"splitArea": {
				"show": false,
				"areaStyle": {
					"color": [
						"rgba(0,0,0,0)",
					]
				}
			}
		},
		"valueAxis": {
			"axisLine": {
				"show": true,
				"lineStyle": {
					"color": "#373D41",
					"width": 2
				}
			},
			"axisTick": {
				"show": false,
				"lineStyle": {
					"color": "#333"
				}
			},
			"axisLabel": {
				"show": true,
				"textStyle": {
					"color": "#fff"
				}
			},
			"splitLine": {
				"show": true,
				"lineStyle": {
					"color": [
						"#d8d8d8"
					]
				}
			},
			"splitArea": {
				"show": true,
				"areaStyle": {
					"color": [
						"rgba(0,0,0,0)",
					]
				}
			}


		},
	});
}));
