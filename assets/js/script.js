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