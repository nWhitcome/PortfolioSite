var page = require('webpage').create();
var system = require("system");
var xDayClick = 888;
var yDayClick = 440;
var d = new Date();
var dayOfWeek = d.getDay();
var sel = 0;

page.viewportSize = {width: 1500, height: 1000};

page.open('https://get.cbord.com/iastate/full/login.php',function(status){
	getDayClickValues();
	//console.log("x: "+xDayClick)
	//console.log("y: "+yDayClick)
	//console.log("Status: " + status);
	if(status === "success"){
		page.evaluate(function(){
			document.getElementById("login_username_text").value="whitcome@iastate.edu";
			document.getElementById("login_password_text").value="Zone_Gaming00164G";
			document.getElementById("login_submit").click();
		});
		setTimeout(myFunction, 3000)
	}
});

function waitSetTime(){
	  var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > 2000){
		break;
		}
	}
}

function myFunction(){
	page.render('stage1.png');
	console.log("Logged in...");
	page.sendEvent('click', 350, 50, button='left'); //Clicks on the food menu
	setTimeout(myFunction2, 3000)
}

function myFunction2(){
	page.render('stage2.png');
	console.log("Navegated to food menu...");
	page.sendEvent('click', 882, 667, button='left'); //clicks on the Convos semester plan
	setTimeout(myFunction3, 5000)
}
function myFunction3(){
	page.render('stage3.png');
	console.log("Chose Convos semester plan...");
	page.sendEvent('click', 900, 700, button='left'); //clicks on the day value
	waitSetTime();
	page.sendEvent('click', xDayClick, yDayClick, button='left'); //Clicks on the day itself
	console.log("Set Date...");
	waitSetTime();
	setTimeout(getStuff, 2000)
}

function getStuff(){
	//document.getElementById("order_time").innerHTML = "10:00 PM";
	// var val = "22:00:00";
	// sel = document.getElementByTagName('option');
	// console.log(sel);
    // var opts = sel.options;
    // for(var opt, j = 0; opt = opts[j]; j++) {
		// console.log(opt + opts);
        // if(opt.value == val) {
            // sel.selectedIndex = j;
            // break;
        // }
    // }
	waitSetTime();
	page.render('stage4.png');
	setTimeout(exit, 2000)
}


function exit(){
	console.log("Finished!");
	waitSetTime();
	page.render('stageEnd.png');
	phantom.exit();
}

function getDayClickValues(){
	if(dayOfWeek<5){
		xDayClick = (43*dayOfWeek)+888;
	}
	if((dayOfWeek>4)&&(dayOfWeek<12)){
		yDayClick = 440+49;
	}
	else if((dayOfWeek>11)&&(dayOfWeek<19)){
		yDayClick = 440+(49*2);
	}
	else if((dayOfWeek>18)&&(dayOfWeek<26)){
		yDayClick = 440+(49*3);
	}
	else {
		yDayClick = 440+(49*4);
	}
}