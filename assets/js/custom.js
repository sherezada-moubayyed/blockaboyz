$(document).ready(function(){

	var menu = $("#menu");

	var urlVideo = "https://www.youtube.com/embed/nY4QOgrCS7M?controls=1&showinfo=0&rel=0&autoplay=1&loop=1";

	var windows = $(window);
	var height = windows.height();
	var pages = $(".full-page");
	var video = $("#main-video");


	setTimeout(function(){
		$("#logo-overlay").fadeTo("slow",0);
		setTimeout(function(){ 
			$("#main-overlay").animate({
     
    			height: "0%"
    		
    		}, 600,function(){
    				$("#main-overlay").css("z-index","-1");
    				$(".vid-info h1,.vid-info p span,.vid-info a").css("display","block");
    		});
    		
		},700);
		
	},3000); 

	$('#nav-icon1').click(function(){ 
		$(this).toggleClass('open');
		menu.toggleClass('open');
	});


	$(".glitch-menu").click(function(){
		section =  $(this).attr('id');

		
		if(section == "home") video.attr("src",urlVideo);
		else video.attr("src","");

		$(".active").removeClass("active");
		

		$("#"+section+"Page").addClass("active");
		menu.toggleClass('open');
		$("#nav-icon1").removeClass('open');
		
	});

	pages.css("min-height",height);

	$(windows).resize(function(){
		height = windows.height();
		pages.css("min-height",height);
	});

	var currentTemplate;
	var first = true;
	var settingSlick = {
	  centerMode: true,
	  lazyLoad: 'ondemand',
	  centerPadding: '20px',
	  slidesToShow: 1,
	  prevArrow: "<button type='button' class='slick-prev'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
	  nextArrow: "<button type='button' class='slick-next'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	};

	$(".title-loobook").click(function(){

		var template = $(this).data("id");
		currentTemplate = $("#"+template+"Template");
		currentTemplate.css("display","block");
		
		
		if (first){
			first = false;
			$('.centerSlick').slick(settingSlick);
		}

	});

	$(".closeTemplate").click(function(){
		currentTemplate.removeClass("fadeIn").addClass("fadeOut");
		setTimeout(function(){
			currentTemplate.css("display","none");
			$("#bangTemplate").removeClass("fadeOut").addClass("fadeIn");

		},700);
	});

	/** COOKIES
	=======================*/

	function getCookie(c_name){
	    var c_value = document.cookie;
	    var c_start = c_value.indexOf(" " + c_name + "=");
	    if (c_start == -1){
	        c_start = c_value.indexOf(c_name + "=");
	    }
	    if (c_start == -1){
	        c_value = null;
	    }else{
	        c_start = c_value.indexOf("=", c_start) + 1;
	        var c_end = c_value.indexOf(";", c_start);
	        if (c_end == -1){
	            c_end = c_value.length;
	        }
	        c_value = unescape(c_value.substring(c_start,c_end));
	    }
	    return c_value;
	}
	 
	function setCookie(c_name,value,exdays){
	    var exdate=new Date();
	    exdate.setDate(exdate.getDate() + exdays);
	    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	    document.cookie=c_name + "=" + c_value;
	}
	 
	if(getCookie('tiendaaviso')!="1"){
	    document.getElementById("barraaceptacion").style.display="block";
	}

	$(".aceptCookie").click(function(){
		setCookie('tiendaaviso','1',365);
	    document.getElementById("barraaceptacion").style.display="none";
	});	
	

	

});