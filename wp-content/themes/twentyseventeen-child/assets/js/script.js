/* global twentyseventeenScreenReaderText */

console.log("js works yay");

//         window.onload("click", myFunction, false);
//         function myFunction() {
//   alert("Please note products mentioned on this page are intended for residents in your city above the legal drinking age. Please drink responsibly.");
// }

var url = window.location.href;
console.log(url);

// 	if (is_page( 'testing-page-woo' )){myFunction();}
	
	
if (url=="https://wordpress.padminismith.com/"){
    console.log("test popup");
	myFunction();
	}
	
function myFunction(){
    alert("Please note products mentioned on this page are intended for residents in your city above the legal drinking age. Please drink responsibly.");
}

