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