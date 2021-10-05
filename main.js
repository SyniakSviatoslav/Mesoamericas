document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider', {
		type   : 'loop',
		perPage: 3,
		focus  : 'center',
	} ).mount();
} );

