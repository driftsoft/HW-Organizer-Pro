// Set all text inputs to have no spellcheck
(function(){
	// gets all elements with tag name of input and with type of text and sets spellcheck to false
	$("input[type='text']").attr("spellcheck","false");
})();

// Initialize Firebase
var config = {
	apiKey: "AIzaSyD-irB6ch_EKAgyasvrWzSJ76redQIPXAA",
	authDomain: "hw-organizer-pro.firebaseapp.com",
	databaseURL: "https://hw-organizer-pro.firebaseio.com",
	projectId: "hw-organizer-pro",
	storageBucket: "hw-organizer-pro.appspot.com",
	messagingSenderId: "506440532030"
};
firebase.initializeApp(config);