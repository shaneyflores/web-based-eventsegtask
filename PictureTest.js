var movie; //global variable to hold movie name
var recog; //global variable to hold recognition output field name
var sideTest = new Array(); //counterbalance left/right presentation of targets
var targImg = new Array();
var foilImg = new Array();
var targets = [];
var foils = [];
var currentImage = 0; //indexes for element in array to display
var InterTrialInterval = 500;
var presenttime;
var ans;

function ioSelect() {
	//var delay = document.getElementById("delay");
	var cnt = document.getElementById('movcnt');
	var mov, rcg; 
	switch(cnt.value) {
	case '7':
		mov = document.getElementById("movie1");
		rcg = document.getElementById("recog1"); 
		break;
	case '9':
		mov = document.getElementById("movie2");
		rcg = document.getElementById("recog2"); 
		break;
	case '11':
		mov = document.getElementById("movie3");
		rcg = document.getElementById("recog3"); 
		break;
	}	
		
	return {
		'InMovie': mov,
		'OutRecog': rcg
	}
}

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function setUpTest() {
    var canvas = document.getElementById("Canvas").getContext('2d');
    var myForm = document.getElementById("mturk_form");
    var submitButton = document.getElementById("submitbutton");
    var startbutton = document.getElementById("startbutton");
    var ioData = ioSelect();
    movie = ioData.InMovie;
    recog = ioData.OutRecog;
    //alert('Movie value: ' + movie.value + '\nRecog Field: ' + recog.value);
    
    canvas.fillStyle="#C0C0C0";
    canvas.fillRect(0,0,920,280);
    submitButton.style.visibility = 'hidden';
    document.getElementById("startbutton").disabled = true;

    buildTrialList(movie.value);

}

function buildTrialList(pictures) {	  
    var xmlhttp;
    var lines = [];

	//make request of the server
    if (window.XMLHttpRequest){
		//alert("Just made a server request");
		xmlhttp=new XMLHttpRequest(); }// code for IE7+, Firefox, Chrome, Opera, Safari
    else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); } // code for IE6, IE5

    
    xmlhttp.onreadystatechange = function() {
  	if (xmlhttp.readyState === 4) {  // Makes sure the document is ready to parse.
    	    //alert('readystate is 4');
    	    if (xmlhttp.status === 200) {  // Makes sure it's found the file.
      	        //alert('status is 200');
      	        lines = xmlhttp.responseText.split(/\r\n|\r|\n/); // Will separate each line into an array
      	        	//alert(lines[0]); 
      	        	//alert(lines[1]);
				targets = lines[0].split("\t").slice(1,lines[0].length-1);
				foils = lines[1].split("\t").slice(1,lines[1].length-1);
					
				sideTest = [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]; // 0 = Left; 1 = Right
				sideTest = shuffle(sideTest);
				targets = shuffle(targets);
				foils = shuffle(foils);
				//alert(targets);
				//alert(foils);
				//alert('Length: ' + sideTest.length + '\nValues: ' + sideTest); //test for scrambling of side position array
				//alert('First element of targets: ' + targets[0] + '\nSecond element of targets: ' + targets[1] + '\n\nFirst element of foils: ' + foils[0] + '\nSecond element of foils: ' + foils[1]);
				
		ImagePreload(targets,foils);
	    	} 
		}
    }
    	
	var listfname; 
    switch (pictures) {
		case "WL_DV": listfname = "Lists/Test_List_wl.txt"; break;
		case "Breakfast": listfname = "Lists/Test_List_Breakfast.txt"; break;
		case "Party": listfname = "Lists/Test_List_Party.txt"; break; }
    //alert("listname: " + listfname);
    xmlhttp.open("GET", listfname, true);
  	xmlhttp.send();

    
}

function ImagePreload(targ,faux) {
	var loader = new PxLoader();
	for (var n = 0; n < targ.length && n < faux.length; n++){
    	targImg[n] = loader.addImage('Pictures/' + targ[n]); 
    	foilImg[n] = loader.addImage('Pictures/' + faux[n]); 
   	}
 	
 	loader.addCompletionListener(function() {
		    var startbutton=document.getElementById("startbutton");
		    startbutton.disabled = false;
		    startbutton.innerHTML="Start Test";
		});
		
	loader.start(); //REQUIRED TO LOAD IMAGES
	var d = new Date();
	recog.value = recog.value + currentImage + " " + movie.value + " " + "Load" + " " + d.getTime() + "\n";

}

function startTest() {
    var canvas = document.getElementById("Canvas");
    var d = new Date(); 
    var instructions = document.getElementById("instructions");
	
	canvas.width = canvas.width;
    recog.value = recog.value + currentImage + " " + "Start" + " " + d.getTime() + "\n";
    document.getElementById("startbutton").style.visibility = 'hidden';
    instructions.innerHTML = '';

	scroll(0,0);
    nextSlide(); 
}

function nextSlide() {
    var ctx = document.getElementById("Canvas").getContext('2d');
    var index = currentImage;

    if (sideTest[index] == 0) { //counterbalance left/right placement of targets
    	ctx.drawImage(targImg[index], 0, 0, 360, 240);
    	ctx.drawImage(foilImg[index], 560, 0, 360, 240);
    	left = targets[index];
    	right = foils[index];
    	ans = "q"; }
    else {
    	ctx.drawImage(targImg[index], 560, 0, 360, 240);
    	ctx.drawImage(foilImg[index], 0, 0, 360, 240);
    	right = targets[index];
    	left = foils[index];
    	ans = "p"; }

	ctx.font="20px Arial";
	ctx.fillText('Press [Q] for left image',80,260);
	ctx.fillText('Press [P] for right image',640,260);

	presenttime = new Date();
	recog.value = recog.value + currentImage + " " + movie.value + " " + left + " " + right + " " + presenttime.getTime() + "\n";
	document.onkeydown = function(k) { 
		var d;
		if (k.keyCode == 80) { //p
			behav = "p";
			d = new Date();
			ProcessResp(behav,d); }
		if (k.keyCode == 81) { //q
			behav = "q";
			d = new Date();
			ProcessResp(behav,d); }
	}
} 


function ProcessResp(resp,rt) {
	//alert("in the processResp function");
	var accu; 
	var canvas = document.getElementById("Canvas");

		if (resp === ans) {
			accu = "Correct"; // pp or qq
			//alert("Accu: " + accu); 
			}
		else {
			accu = "Incorrect"; //pq or qp
			//alert("Accu: " + accu); 
			} 
	
	recog.value = recog.value + currentImage + " " + movie.value + " " + resp + " " + ans + " "+ accu + " " + (rt.getTime() - presenttime.getTime()) + " " + rt.getTime() + "\n";
	
	document.onkeydown = function(k) {
		if (k.keyCode == 80) { return false; }
		if (k.keyCode == 81) { return false; }
	}
	
	currentImage = ++currentImage; //iterate targ/foil array index
	canvas.width = canvas.width; //resets the canvas	
	
    if (currentImage < targImg.length) {
		setTimeout(function() { nextSlide(); }, InterTrialInterval); } 
	else {
		showSubmitButton();}


}

function showSubmitButton() {
    document.getElementById("submitbutton").style.visibility = 'visible';
    document.getElementById("startbutton").style.visibility = 'hidden';
}

function submitData() {
	var movcnt = document.getElementById('movcnt');
	movcnt.value = nextStep();
	document.forms["mturk_form"].submit();
}

/*
function nextStep() {
	var delay = document.getElementById('delay');
	var movcnt = document.getElementById('movcnt');
	var next;
	switch (delay.value) {
		case '1':
			//next = Number(movcnt.value) + 7; //to demographics
			next = 16;
			break;
		case '2':
			//next = Number(movcnt.value) + 2; //to script elicitation
			next = 12;
			break;
		case '3':
			//next = Number(movcnt.value) + 6; //to EndPage
			next = 17;
			break;
	}
	return next;
}
*/

function nextStep() {
	var delay = document.getElementById('delay');
	var movcnt = document.getElementById('movcnt');
	var next;
	if (delay.value=='0') { //immediate testing
		switch (movcnt.value) {
			case '7':
				next = 2;
				break;
			case '9':
				next = 3;
				break;
			case '11':
				next = 12;
				break;
		}
	}
	else if (delay.value=='1') 
		next = ++movcnt.value;
	
	return next;
}