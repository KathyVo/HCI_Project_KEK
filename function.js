$(document).ready(function() {


	$('button').click(function() {

		var dish = Math.floor(Math.random() * 3); 

		$('#foodporn').toggle();

		/*if (dish === 0) {
			$('img').attr('src', 'http://whalebonemag.com/wp-content/uploads/2015/08/DSC_4647-Edit-1050x701.jpg');
		}

		else if (dish === 1) {
			$('img').attr('src', 'https://d22d7v2y1t140g.cloudfront.net/m_9760287_8sSXy5iWnoYi.jpg');
		}

		else {
			$('img').attr('src', 'https://secure.static.tumblr.com/5d3361a5e61e550aed09165611bb18e0/obhhazq/t8Xn7zgxf/tumblr_static_tumblr_static_dxl9z1feu3w4ssw00gckk0cco_640.jpg');
		}*/


	});
})