$(document).ready(function() {

	$('#mycarousel').carousel({ interval:2000 });
    
	$("#carouselButton2").click(function() {

		if ($("#carouselButton").children().hasClass('fa-pause')) {
				$("#mycarousel").carousel('pause');
				$("#carouselButton").children().removeClass('fa-pause');
				$("#carouselButton").children().addClass('fa-play');
			}
		else if ($("#carouselButton").children("span").hasClass('fa-play')) {
				$("#mycarousel").carousel('cycle');
				$("#carouselButton").children("span").removeClass('fa-play');
				$("#carouselButton").children("span").addClass('fa-pause');
		}
	});
    
    $('#loginButton').click(function() {
        $('#loginModal').modal('toggle');

    });

    $('#reserveButton').click(function(){
        $('#reserveModal').modal('toggle');
    });
});


