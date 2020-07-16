var movie; //global variable to hold movie name
var sidePrac = new Array(); //counterbalance left/right presentation of targets
var targImg = new Array();
var foilImg = new Array();
var targets = [];
var foils = [];
var currentImage = 0; //indexes for element in array to display
var InterTrialInterval = 500;

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function setUpTest() {
    var canvas = document.getElementById("Canvas").getContext('2d');
    var myForm = document.getElementById("mturk_form");
    var submitButton = document.getElementById("submitbutton");
    var startbutton = document.getElementById("startbutton");
    movie = document.getElementById('pracmovie');    
    
    canvas.fillStyle="#C0C0C0";
    canvas.fillRect(0,0,920,280);
    submitButton.style.visibility = 'hidden';
    document.getElementById("startbutton").disabled = true;

	buildTrialList();
}

function buildTrialList() {	  
    var xmlhttp;
    var lines = [];

	//make request of the server
    if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest(); }
		//alert("Just made a server request"); } // code for IE7+, Firefox, Chrome, Opera, Safari
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
					
				sidePrac = [0,0,1,1]; // 0 = Left; 1 = Right
				sidePrac = shuffle(sidePrac);
				targets = shuffle(targets);
				foils = shuffle(foils);
				
		ImagePreload(targets,foils);
	    	} 
		}
    }
    	
	var listfname = "Lists/Practice_List_Legos.txt"; 
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
		    startbutton.innerHTML="Start Practice";
		});
		
	loader.start(); //REQUIRED TO LOAD IMAGES
}

function startTest() {
    var canvas = document.getElementById("Canvas");
    var instructions = document.getElementById("instructions");
	
	canvas.width=canvas.width;
    document.getElementById("startbutton").style.visibility = 'hidden';
    instructions.innerHTML = '';
	scroll(0,0);

    nextSlide(); 
}

function nextSlide() {
    var ctx = document.getElementById("Canvas").getContext('2d');
    var index = currentImage;

    if (sidePrac[index] == 0) {
    	ctx.drawImage(targImg[index], 0, 0, 360, 240);
    	ctx.drawImage(foilImg[index], 560, 0, 360, 240); }
    else {
    	ctx.drawImage(targImg[index], 560, 0, 360, 240);
    	ctx.drawImage(foilImg[index], 0, 0, 360, 240); }

	ctx.font="20px Arial";
	ctx.fillText('Press [Q] for left image',80,260);
	ctx.fillText('Press [P] for right image',640,260);

	document.onkeydown = function(k) { 
		if (k.keyCode == 80) { //p
			FakeResp(); }
		if (k.keyCode == 81) { //q
			FakeResp(); }
	}
} 

function FakeResp() {
	var canvas = document.getElementById("Canvas");
	currentImage = ++currentImage;
	canvas.width = canvas.width;
			
    if (currentImage < targImg.length) {
		setTimeout(function() { nextSlide(); }, InterTrialInterval); } 
	else {	showSubmitButton();}
}

function showSubmitButton() {
    document.getElementById("submitbutton").style.visibility = 'visible';
    document.getElementById("startbutton").style.visibility = 'hidden';
}

function submitData() {
	var movcnt = document.getElementById('movcnt');
	//movcnt.value = nextStep();
	movcnt.value = ++movcnt.value;
	document.forms["mturk_form"].submit();
}

/*
function nextStep() {
	var delay = document.getElementById('delay');
	var movcnt = document.getElementById('movcnt');
	var next;
	switch (delay.value) {
		case '1':
			//next = Number(movcnt.value) + 1; //to recog1
			next = 9;
			break;
		case '2':
			//next = Number(movcnt.value) + 2; //to recog2
			next = 10;
			break;
		case '3':
			//next = Number(movcnt.value) + 3; //to recog3
			next = 11;
			break;
	}
	return next;
} 
*/