
// - global ---------------------------------------
var go_prev;
var go_next;

var now_page = 0;
var page_num = 0;

var sheets_object;

window.onload = function() {
	sheets = $(".sheet");
	page_num = sheets.length;
	sheets.eq(0).addClass("current");
	sheets.eq(1).addClass("next");
	var go_prev = function() {
		if( now_page != 0 ) {
			$(".current").addClass("slide_out_rev").removeClass("current").removeClass("slide_in");
			sheets.eq(now_page - 1).addClass("current").addClass("slide_in_rev");
			now_page--;
		}
	};

	var go_next = function() {
		if( now_page != page_num ) {
			$(".current").addClass("slide_out").removeClass("current").removeClass("slide_in");
			//$(".next").addClass("current").addClass("slide_in").removeClass("next");
			sheets.eq(now_page + 1).addClass("current").addClass("slide_in");
			now_page++;
		} else {
			alert("www");
		}
	};
	go_prev_button = document.getElementById("go_prev");
	go_next_button = document.getElementById("go_next");

	now_page = 0;

	document.addEventListener("contextmenu", function(event) {
		event.preventDefault();
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
};

