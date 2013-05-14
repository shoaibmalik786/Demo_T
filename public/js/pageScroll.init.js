/*
 *
 * Plugin Name : PageScroll jQuery Plugin
 * Author : Ankit Pokhrel
 * Website : http://ankitpokhrel.com.np
 * Version : 1.0
 * Date: October 26, 2012
 * 
 */

//Initialize
//Load Scripts
function loadScript(url){
	document.write( '<scr' + 'ipt type="text/javascript" src="' + url + '"><\/scr' + 'ipt>' );
}

var jQueryIsLoaded = typeof jQuery != "undefined";

if(!jQueryIsLoaded) loadScript("http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js");

loadScript("pageScroll.jQuery.js");