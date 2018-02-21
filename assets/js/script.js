// Set all text inputs to have no spellcheck
(function(){
	// gets all elements with tag name of input and with type of text and sets spellcheck to false
	$("input[type='text']").attr("spellcheck","false");
})();

// Initialize Firebase
var config = {
	apiKey: "AIzaSyCII4B0EycHZ-vbfdsXZaw7UMWdxvRZ_GU",
	authDomain: "hw-organizer-pro-a7c04.firebaseapp.com",
	databaseURL: "https://hw-organizer-pro-a7c04.firebaseio.com",
	projectId: "hw-organizer-pro-a7c04",
	storageBucket: "hw-organizer-pro-a7c04.appspot.com",
	messagingSenderId: "258649066670"
};
firebase.initializeApp(config);

// If User Signed In, or Signed Out, trigger url change
firebase.auth().onAuthStateChanged(function(user) {
	if(user){
		// User is signed in (this is saved - remember me is auto-enabled)

		// open main.html in current tab if not already in it

		// uses currentHTMLPage variable defined in HTML file
		if(currentHTMLPage != "main.html"){
			window.open("main.html","_self");
		}
	}else{
		// User is not signed in (signed out)

		// open index.html in current tab if not already in it

		// uses currentHTMLPage variable defined in HTML file
		if(currentHTMLPage != "index.html"){
			window.open("index.html","_self");
		}
	}
});