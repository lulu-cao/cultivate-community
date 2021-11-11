import Flickity from 'flickity';

// Flickity imagesLoaded workaround for FireFox/IE
// https://github.com/metafizzy/flickity/issues/205
$(window).on('load', function() {
  window.dispatchEvent(new Event('resize'));
});
