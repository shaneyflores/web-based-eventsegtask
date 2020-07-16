function ioSelect() {
	var pgcnt = document.getElementById("movcnt");
	var stim, seg; 
	
	//Change switch statement to account for only case 1 and case 3
	switch(pgcnt.value) {  //Determine input/output fields
	case '0':
		stim = document.getElementById('pracmovie');
		seg = document.getElementById('practice');
		break;
	case '1':
		stim = document.getElementById('movie1');
		seg = document.getElementById('segment1'); 
		break;
	case '2':
		stim = document.getElementById('movie2');
		seg = document.getElementById('segment2')
		break;
	case '3':
		stim = document.getElementById('movie3');
		seg = document.getElementById('segment3');
		break;
	}	
		
	return { //returns a HTML DOM object with multiple values
		'InMovie': stim,
		'OutSeg': seg
	}
}

function setUpMovie()
{
    var d = new Date(); 
    var playButton = document.getElementById("playbutton");
    var submitButton = document.getElementById("submitbutton");
    var task = document.getElementById("task");
    var myVid = document.getElementById("video1");
    var instructions = document.getElementById("instructions");
    var intro = document.getElementById("intro");
    
    playButton.disabled=true;

	var ioData = ioSelect(); //variable stores the HTML DOM object
	var moviefile = ioData.InMovie;
	var segment = ioData.OutSeg;
	var movcnt = document.getElementById("movcnt");
	
	if (movcnt.value == 1) { 
		intro.innerHTML="<p>Now we will begin the first task of the experiment.</p>"; }
	if (movcnt.value >= 2) { 
		intro.innerHTML="<p>Now you will watch another movie.</p>"; }
	
	//Print instructions for segmentation task based on task type
	if (movcnt.value != 0) {
		if (task.value=="boundaries") {
			instructions.innerHTML="<p>Remember, we would like you to mark off the activity in the movies into the <b>SMALLEST units that seem natural and meaningful to you</b>. There are no right or wrong ways to do this; we are simply interested in how you do this task.</p><p>To mark off a boundary between two SMALL units of activity, press the [SPACEBAR]. Please be careful to press the button as close to the end of the unit as possible. Do not press the button in the middle of a unit.<p>Press the 'Play' button when you are ready to begin.</p>";	}
		else if (task.value=="time") {
			instructions.innerHTML="<p>Remember, we would like you to mark off the activity in the movie <b>every 15 seconds</b> by pressing the [SPACEBAR]. Try to press the button as close to every 15 second mark as possible.</p><p>Press the 'Play' button when you are ready to begin.</p>";	} 
		else {
			instructions.innerHTML="<p>In this part of the experiment, we would like you to simply watch movies of actors engaged in everyday activities.</p><p>When you are ready to begin, simply press the 'Play' button to start the movie. Please do not press any keys or buttons while the movie is playing.</p>"; } }
	else {
		if (task.value=="boundaries") {
			instructions.innerHTML="<p>In this part of the experiment, we would like you to perform a task while you watch movies of actors engaged in everyday activities. We would like you to mark off the activity in the movies into the <b>SMALLEST</b> units that seem natural and meaningful to you. There are no right or wrong ways to do this; we are simply interested in how you do this task.</p><p>To mark off a boundary between two SMALL units of activity, press the [SPACEBAR]. Please be careful to press the button as close to the end of the unit as possible. Do not press the button in the middle of a unit. Remember, there are no right or wrong ways to identify units of activity, just be sure that you press the button only when you believe <b>one small natural and meaningful unit of activity ends and another unit begins.</b></p><p>We will start with a practice movie to give you practice marking off the activity into the SMALLEST units and to make sure you are comfortable with the task and instructions.</p><p>Press the 'Play' button when you are ready to begin.</p>";	}
		else if (task.value=="time") {
			instructions.innerHTML="<p>In this part of the experiment, we would like you to perform a task while you watch movies of actors engaged in everyday activities. We would like you to mark off the activity in the movies <b>every 15 seconds</b> by pressing the [SPACEBAR]. Try to press the button as close to every 15 second mark as possible.<p>We will start with a practice movie to give you practice pressing the [SPACEBAR] <b>every 15 seconds</b> and to make sure you are comfortable with the task.</p><p>Press the 'Play' button when you are ready to begin.</p>";	}
		else {
			instructions.innerHTML="<p>In this part of the experiment, we would like you to simply watch movies of actors engaged in everyday activities.</p><p>We will start with a practice movie to make sure you are comfortable with the task and instructions.</p><p>When you are ready to begin, simply press the 'Play' button to start the movie. Please do not press any keys or buttons while the movie is playing.</p>"; } }

    myVid.oncanplaythrough=playButton.disabled=false;
    //Show submit button once movie is done
    if (document.addEventListener) {
	myVid.addEventListener('ended',showSubmitButton,false); }
    else {
	myVid.attachEvent('ended',showSubmitButton); } // for IE

	segment.value = segment.value + "Load" + " " + moviefile.value + " " + d.getTime() + "\n";
    
    // set the source video
    // Have to catch potential IE error
    function try_can_play(element, type) {
        var can_play = false;
        try {
            can_play = element.canPlayType(type);
        } catch(err) { //assume browser that chokes--IE--can handle mp4
	    if (type.indexOf("mp4") != -1) {
		can_play = true;
	    }
	}
        return !!can_play;
    } 

    if (try_can_play(myVid,"video/ogg")) {
    	myVid.setAttribute("src", "Movies/" + moviefile.value + ".ogv");
    } else if (try_can_play(myVid,"video/mp4")) {
    	myVid.setAttribute("src", "Movies/" + moviefile.value + ".mp4");
    }

    myVid.load();

    submitButton.style.visibility = 'hidden';
}

function playMovie()
{
    var d = new Date(); 
    var instructions = document.getElementById("instructions");
    var intro = document.getElementById("intro");
    instructions.style.visibility='hidden';
    intro.style.visibility='hidden';
    var myVid = document.getElementById("video1");
    var task = document.getElementById("task");
    var ioData = ioSelect(); //variable stores the HTML DOM object
    var segment = ioData.OutSeg;

	// Disable spacebar for scroll down
     if (task.value != "passive") {
     window.onkeydown=function(e){ 
		if(e.keyCode==32){ 
			var d = new Date(); 
			document.getElementById('alarm').play();
    		segment.value = segment.value + "BreakPoint" + " " + myVid.currentTime + " " + d.getTime() + "\n";  
			return false;
		} 
	} }

    document.getElementById("playbutton").disabled=true;
    segment.value = segment.value + "Play" + " " + myVid.currentTime + " " + d.getTime() + "\n";
    myVid.play();
    scroll(0,0);
}

function jumpToEnd()
{
    var myVid = document.getElementById("video1");
    myVid.currentTime = myVid.duration-5;
}


function showSubmitButton() {
    var d = new Date(); 
    var myVid = document.getElementById("video1");
    var playButton = document.getElementById("playbutton");
    var submitButton = document.getElementById("submitbutton");
    submitButton.style.visibility = 'visible';
    playButton.style.visibility = 'hidden';
    var ioData = ioSelect(); //variable stores the HTML DOM object
    var segment = ioData.OutSeg;

    segment.value = segment.value + "Ended" + " " + myVid.currentTime + " " + d.getTime() + "\n";
    
    //Enable spacebar for scrolling
    window.onkeydown=function(e){ 
		if(e.keyCode==32){ 
			return true;
		} 
	}

    // hide and shrink movie so that submit button is clear
    myVid.style.opacity = 0; //use this instead of visibility='hidden' for Safari
    myVid.height = 100;

	// figure out where to go to next
    var delay = document.getElementById('delay');
    var movcnt = document.getElementById('movcnt');
    if (delay.value=='1')
    	movcnt.value = ++movcnt.value;
    else if (delay.value=='0') { //if immediate test
    	if (movcnt.value == '0')
    		movcnt.value = ++movcnt.value; //next movie
    	else if (movcnt.value == '1')
    		movcnt.value = 4; //free recall practice
    	else if (movcnt.value == '2')
    		movcnt.value = 8; //free recall 2
    	else if (movcnt.value == '3')
    		movcnt.value = 10; //free recall 3
    }
}
