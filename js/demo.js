type = ['', 'info', 'success', 'warning', 'danger'];


demo = {
	initPickColor: function () {
		$('.pick-class-label').click(function () {
			var new_class = $(this).attr('new-class');
			var old_class = $('#display-buttons').attr('data-class');
			var display_div = $('#display-buttons');
			if (display_div.length) {
				var display_buttons = display_div.find('.btn');
				display_buttons.removeClass(old_class);
				display_buttons.addClass(new_class);
				display_div.attr('data-class', new_class);
			}
		});
	},

	initChartist: function () {

		var dataSales = {
			labels: ['2008', '2009', '2010', '2011', '2015', '2020'],
			series: [
				[30, 60, 50, 50, 134, 138, 138],
				[0.5, 0.8, 1.2, 1.8, 7.9, 40, 40]

			]
		};

		var optionsSales = {
			lineSmooth: false,
			low: 0,
			high: 150,
			showArea: true,
			height: "245px",
			axisX: {
				showGrid: false,
			},
			lineSmooth: Chartist.Interpolation.simple({
				divisor: 3
			}),
			showLine: true,
			showPoint: false,
		};

		var responsiveSales = [
			['screen and (max-width: 640px)', {
				axisX: {
					labelInterpolationFnc: function (value) {
						return value[0];
					}
				}
			}]
		];

		Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);

		var dataPreferences1 = {
			series: [
				[25, 30, 20, 25]
			]
		};

		var optionsPreferences1 = {
			donut: true,
			donutWidth: 40,
			startAngle: 0,
			total: 100,
			showLabel: false,
			axisX: {
				showGrid: false
			}
		};

		Chartist.Pie('#chartPreferences1', dataPreferences1, optionsPreferences1);

		Chartist.Pie('#chartPreferences1', {
			labels: ['45%', '28%', '27%'],
			series: [45, 28, 27]
		});

		var data1 = {
			labels: ['2011', '2012', '2013', '2014', '2015'],
			series: [
				[1.4, 3.6, 8, 15.4, 24.5],
				[73, 118, 186, 285, 421]
			]
		};

		var options1 = {
			seriesBarDistance: 10,
			axisX: {
				showGrid: false
			},
			height: "245px"
		};

		var responsiveOptions1 = [
			['screen and (max-width: 640px)', {
				seriesBarDistance: 5,
				axisX: {
					labelInterpolationFnc: function (value) {
						return value[0];
					}
				}
			}]
		];

		Chartist.Bar('#chartActivity1', data1, options1, responsiveOptions1);

		var data = {
			labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
			series: [
				[73, 118, 186, 285, 384, 453, 501],
				[47.3, 59, 75.7, 102, 137.9, 188.5, 258.6]
			]
		};

		var options = {
			seriesBarDistance: 10,
			axisX: {
				showGrid: false
			},
			height: "245px"
		};

		var responsiveOptions = [
			['screen and (max-width: 640px)', {
				seriesBarDistance: 5,
				axisX: {
					labelInterpolationFnc: function (value) {
						return value[0];
					}
				}
			}]
		];

		Chartist.Line('#chartActivity', data, options, responsiveOptions);

		var dataPreferences = {
			series: [
				[25, 30, 20, 25]
			]
		};

		var optionsPreferences = {
			donut: true,
			donutWidth: 40,
			startAngle: 0,
			total: 100,
			showLabel: false,
			axisX: {
				showGrid: false
			}
		};


		Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

		Chartist.Pie('#chartPreferences', {
			labels: ['41%', '14%', '9%', '36%'],
			series: [41, 14, 9, 36]
		});
	},


	showNotification: function (from, align) {
		color = Math.floor((Math.random() * 4) + 1);

		$.notify({
			icon: "ti-gift",
			message: "Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer."

		}, {
			type: type[color],
			timer: 4000,
			placement: {
				from: from,
				align: align
			}
		});
	},
	initDocumentationCharts: function () {
		var dataPerformance = {
			labels: ['6pm', '9pm', '11pm', '2am', '4am', '8am', '2pm', '5pm', '8pm', '11pm', '4am'],
			series: [
				[1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]
			]
		};

		var optionsPerformance = {
			showPoint: false,
			lineSmooth: true,
			height: "200px",
			axisX: {
				showGrid: false,
				showLabel: true
			},
			axisY: {
				offset: 40,
			},
			low: 0,
			high: 16,
			height: "250px"
		};

		Chartist.Line('#chartPerformance', dataPerformance, optionsPerformance);

		var dataStock = {
			labels: ['\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
			series: [
				[22.20, 34.90, 42.28, 51.93, 62.21, 80.23, 62.21, 82.12, 102.50, 107.23]
			]
		};

		var optionsStock = {
			lineSmooth: false,
			height: "200px",
			axisY: {
				offset: 40,
				labelInterpolationFnc: function (value) {
					return '$' + value;
				}

			},
			low: 10,
			height: "250px",
			high: 110,
			classNames: {
				point: 'ct-point ct-green',
				line: 'ct-line ct-green'
			}
		};

		Chartist.Line('#chartStock', dataStock, optionsStock);

		var dataSales = {
			labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
			series: [
				[287, 385, 490, 562, 594, 626, 698, 895, 952],
				[67, 152, 193, 240, 387, 435, 535, 642, 744],
				[23, 113, 67, 108, 190, 239, 307, 410, 410]
			]
		};

		var optionsSales = {
			lineSmooth: false,
			low: 0,
			high: 1000,
			showArea: true,
			height: "245px",
			axisX: {
				showGrid: false,
			},
			lineSmooth: Chartist.Interpolation.simple({
				divisor: 3
			}),
			showLine: true,
			showPoint: false,
		};

		var responsiveSales = [
			['screen and (max-width: 640px)', {
				axisX: {
					labelInterpolationFnc: function (value) {
						return value[0];
					}
				}
			}]
		];

		Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);

		Chartist.Pie('#chartPreferences', {
			labels: ['62%', '32%', '6%'],
			series: [62, 32, 6]
		});

		var dataViews = {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			series: [
				[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
			]
		};

		var optionsViews = {
			seriesBarDistance: 10,
			classNames: {
				bar: 'ct-bar'
			},
			axisX: {
				showGrid: false,

			},
			height: "250px"

		};

		var responsiveOptionsViews = [
			['screen and (max-width: 640px)', {
				seriesBarDistance: 5,
				axisX: {
					labelInterpolationFnc: function (value) {
						return value[0];
					}
				}
			}]
		];

		Chartist.Bar('#chartViews', dataViews, optionsViews, responsiveOptionsViews);

		var data = {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			series: [
				[542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
				[230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
			]
		};

		var options = {
			seriesBarDistance: 10,
			axisX: {
				showGrid: false
			},
			height: "245px"
		};

		var responsiveOptions = [
			['screen and (max-width: 640px)', {
				seriesBarDistance: 5,
				axisX: {
					labelInterpolationFnc: function (value) {
						return value[0];
					}
				}
			}]
		];

		Chartist.Line('#chartActivity', data, options, responsiveOptions);

	}

}
