
// Jquery start

$(document).ready(function(){

	$('.bc_owl').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    autoplayHoverPause: true,
	    responsive:{
	        0:{
	            items:1
	        }
	    }
	})

	// About Us

	window.addEventListener('scroll', () => {
	  const scrollY = window.scrollY;

	  document.querySelectorAll('.parallax-img').forEach((img, i) => {
	    const depth = 0.03 + i * 0.025;
	    const offset = scrollY * depth;

	    img.style.setProperty('--offset', `${offset}px`);
	  });
	});

	// Our Services

	document.querySelectorAll('.btn_ouse').forEach(btn => {
	  const targetId = btn.getAttribute('data-bs-target');
	  const targetEl = document.querySelector(targetId);

	  targetEl.addEventListener('shown.bs.collapse', () => {
	    btn.textContent = 'Show Less';
	  });

	  targetEl.addEventListener('hidden.bs.collapse', () => {
	    btn.textContent = 'Read More';
	  });
	});

	// Testimonial

	  $(".test_owl").owlCarousel({
	    items: 3,
	    margin: 10,
	    loop: true,
	    nav: true,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    responsive:{
	      0:{ items:1 },
	      600:{ items:2 },
	      1000:{ items:3 }
	    }
	  });

});

// Jquery end