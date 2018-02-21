$("div.top button").on("click",function(){
	firebase.auth().signOut();
});