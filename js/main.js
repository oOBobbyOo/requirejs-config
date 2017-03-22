require.config({
	baseUrl: 'js/',
	paths: {
		'css': '../lib/css.min',
		'jquery': '../lib/jquery-1.11.1.min',
		'bootstrap': '../lib/bootstrap.min',
		'swiper': '../lib/swiper.min'
	},
	shim: {
		'bootstrap': {
			'deps': ['jquery', 'css!../css/bootstrap.min.css']
		},
		'swiper': {
			'deps': ['jquery', 'css!../css/swiper.min.css']
		}
	}
});

require(['util', 'swiper', 'bootstrap'], function (u) {

	console.log(u.formatDate(1484044235));

	$('#more').on('click', function () {
		$(this).addClass('btn-success').removeClass('btn-primary');
	});

	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true
	});

});




