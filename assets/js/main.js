
AOS.init();

document.getElementById("currentYear").innerHTML = new Date().getFullYear();


document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector("#loader-wrapper").style.visibility = "visible"; 
    } else { 
        document.querySelector("#loader-wrapper").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
};
    
$(window).bind('load', function() {
     if ($(window).scrollTop() > 0) {
         $('#header').addClass('header-scrolled');
     }
     else {
         $('#header').removeClass('header-scrolled');
     }
});

$(document).ready(function() {

    
    $(window).bind('scroll resize', function() {
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('header-scrolled');
         }
         else {
             $('#header').removeClass('header-scrolled');
         }
    });
    

    $('body').scrollspy({ target: '#header', offset: 100});
    

    $('a.scrollto').on('click', function(e){
        

        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -50, 'axis':'y'});

		if ($('.navbar-collapse').hasClass('show')){
			$('.navbar-collapse').removeClass('show');
		}
		
	});
});

var mybutton = document.getElementById("top-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};


$(document).ready(function() {
	  
    $("#contact-form").validate({
		messages: {
		
		    name: {
    			required: 'Please enter your name'
			},
			email: {
				required: 'Please enter your email'
			},			
			message: {
				required: 'Please enter your message'
			}
			
		}
		
	});
    
});