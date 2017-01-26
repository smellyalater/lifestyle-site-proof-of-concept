$(document).ready(function() {


	var enlargeImageSrc;
	var enlargeImageHtmls;

	$('.js-enlarge-image .card-img-top').click(function() {
		//console.log('click!');
		var enlargeImageSrc = $(this).attr('src');
		//console.log(enlargeImageSrc);
		var enlargeImageHtmls = '<img class="enlarged-image" src="' + enlargeImageSrc + '" alt="view larger image" />';
		$('.enlarged-image-container').html(enlargeImageHtmls);
	});








});
