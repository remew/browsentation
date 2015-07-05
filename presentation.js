
// - global ---------------------------------------
var go_prev_button;
var go_next_button;

var go_prev;
var go_next;

var slide;

var now_page = 0;
var page_num = 0;

var duration = 500;

//var debug = true;
var debug = false;

var default_front_cover = '<div class="default_front_cover"><h1>Hello, <span>Browsentation!!</span></h1><h2><span>Browsentation</span>\'s Default Title</h2></div>';
var default_back_cover = '<div class="default_back_cover"><h1>Thank you for watching</h1></div>';

window.onload = function() {
	if( document.getElementById("front_cover") === null ) {
		$("#sheets").prepend('<div id="front_cover" class="sheet default_front_cover_wrapper">' + default_front_cover + '</div>');
	}
	if( document.getElementById("back_cover") === null ) {
		$("#sheets").append('<div id="back_cover" class="sheet default_back_cover_wrapper">' + default_back_cover + '</div>');
	}
	page_num = $(".sheet").length;
	$("#sheets").css("width", 100 * page_num + "%");
	$(".sheet").each(function() {
		$(this).css("width", 100 / page_num + "%");
	});
	go_prev = function() {
		if( now_page != 0 ) {
			now_page--;
			slide(now_page);
		}
	};

	go_next = function() {
		if( now_page != page_num - 1 ) {
			now_page++;
			slide(now_page);
		}
	};

	slide = function(index) {
		$("#sheets").animate({left:-100 * index + "%"}, {duration:duration, easing:"linear"});
	};
	go_prev_button = document.getElementById("go_prev");
	go_prev_button.addEventListener("click", go_prev);

	go_next_button = document.getElementById("go_next");
	go_next_button.addEventListener("click", go_next);

	now_page = 0;

	document.addEventListener("contextmenu", function(e) {
		e.preventDefault();
	}, true);
	document.getElementById("sheets").addEventListener("mousedown", function(e) {
		var left_click = 0;
		var middle_click = 1;
		var right_click = 2;
		switch(e.button) {
			case left_click:
				go_next();
				break;
			case right_click:
				go_prev();
				break;
		}
	}, true);
	window.addEventListener("keydown", function(e) {
		var keyLeft = 37;
		var keyRight = 39;
		var keyUp = 38;
		var keyDown = 40;
		var keyEnter = 13;
		
		if( e.keyCode == keyLeft )	go_prev();
		if( e.keyCode == keyUp )	go_prev();
		if( e.keyCode == keyRight )	go_next();
		if( e.keyCode == keyDown )	go_next();
		if( e.keyCode == keyEnter )	go_next();

		if(debug) alert(e.keyCode);
	});
};

