// Sign Out Functionality
$("div.top button").on("click",function(){
	firebase.auth().signOut();
});

// Toggle Views, Sorting, and Showing All/Incomplete Tasks
$(".container div.toolbar button.show").on("click",function(){
	var showText = ["Show All","Show All Incomplete"];
	$(this).text(showText[(showText.indexOf($(this).text())+1)%2]);
});
$(".container div.toolbar button.sort").on("click",function(){
	var sortByText = ["Sort By Date","Sort By Subject"];
	$(this).text(sortByText[(sortByText.indexOf($(this).text())+1)%2]);
});
$(".container div.toolbar button.view").on("click",function(){
	$(this).toggleClass("blockView");
});

$("#tasks div").on("mousedown",function(e){
	console.log(e.target.tagName);
	if(e.target.tagName != "SPAN"){
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
	}
});
$("#tasks div").on("dblclick",function(){
	// open task!
});
$("#tasks div span").on("click",function(){
	$(this).toggleClass("done");
});

$("body").on("click",function(e){
	if(e.target.parentElement != $("#tasks")[0] && e.target.parentElement.parentElement != $("#tasks")[0] && e.target.parentElement != $(".toolbar")[0] && e.target.parentElement != $(".top")[0] && e.target != $(".toolbar")[0] && e.target != $(".top")[0]){
		$(".selected").removeClass("selected");
	}
});

$(document).on("keydown",function(e){
	if($(".selected").length){
		var eq = "testing";
		if(e.keyCode == 38){
			eq = ($("#tasks div").index($(".selected")) - 1);
		}
		if(e.keyCode == 40){
			eq = ($("#tasks div").index($(".selected")) + 1);
		}
		if(eq != "testing"){
			event.preventDefault();
			console.log(eq);
			if(eq > -1 && eq < $("#tasks div").length){
				$(".selected").removeClass("selected");
				$("#tasks div:eq(" + eq.toString() + ")").addClass("selected");
			}
		}
	}
});