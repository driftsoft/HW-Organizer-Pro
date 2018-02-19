// Check if user is on a mobile device
function checkMobile(){
	// if ratio between height and width of screen is less than 1:1.25 then set mobile
	if(window.innerHeight / window.innerWidth > 1.25){
		document.getElementsByTagName("form")[0].setAttribute("class","mobileform");
	}else{
		document.getElementsByTagName("form")[0].removeAttribute("class");
	}
}

// call checkMobile function when window is resized and when page loads
window.onload = checkMobile;
window.onresize = checkMobile;

// if it is signup page - if it has the param signup in the ? stage of url
var currentPage = window.location.href.split("?")[1];

if(currentPage == "signup"){
	// change button text and other to match signup page rather than signin page.

	$("h2").html("<br>Sign Up For <a href='index.html'>HW Organizer Pro</a>");
	$("form input[type='button']").attr("value","Sign In");
	$("form input[type='button']").attr("onclick",'window.open("index.html","_self")');
	document.querySelector("form input[type='password']").outerHTML = ('<input type="password" placeholder="Password:"><input type="password" placeholder="Confirm Password:">');
	$("form input[type='submit']").attr("value","Sign Up");
}

// Sign in and sign up functionality

