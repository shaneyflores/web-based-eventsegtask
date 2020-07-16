function outData() //determines which output fields to print to
{
	var rec;
	var cnt = document.getElementById("movcnt");	
	switch(cnt.value) {
		case '5':
			rec = document.getElementById("recall1");
			break;
		//case '6':
		case '8':
			rec = document.getElementById("recall2");
			break;
		//case '7':
		case '10':
			rec = document.getElementById("recall3");
			break;
	}			
	return rec;
}


function setTask() 
{
	var x;
	//var day = document.getElementById("delay");
	var cnt = document.getElementById('movcnt');
	var instructions = document.getElementById("instructions");
		
	switch(cnt.value) {
		//case '1':
		case '5':
			x = document.getElementById("movie1");
			break;
		//case '2':
		case '8':
			x = document.getElementById("movie2");
			break;
		//case '3':
		case '10':
			x = document.getElementById("movie3");
			break; }
	
		
	switch(x.value) {
		case 'Breakfast':
			instructions.innerHTML="Now you will describe the <b>making breakfast</b> movie you saw."; 
			break;
		case 'Party':
			instructions.innerHTML="Now you will describe the <b>setting up for a party</b> movie you saw.";
			break;
		case 'WL_DV':
			instructions.innerHTML="Now you will describe the <b>planting activity</b> movie you saw.";
			break;	
	}	
	
	
	// timesUp needs to be in a function() { } to delay execution until the actual time has elapsed
	setTimeout(function() { timesUp(); },1000*60*5); //5 minute timer
		
}

function writeData() //writes what was written into textarea to the form
{
	var inText = document.getElementById("inText");
	var recall = outData();
	recall.value = recall.value + inText.value;
}

function timesUp() //auto-submit function (in case person takes too long)
{
	writeData();
	var movcnt = document.getElementById('movcnt');
	alert('5 minutes has elapsed.\nThe page will now advance to the next task.');
	movcnt.value = nextStep();
	document.forms["theform"].submit();
}

function submitData() {
	writeData();
	var movcnt = document.getElementById('movcnt');
	movcnt.value = nextStep();
	document.forms["theform"].submit();
}

function BeginRecallTask()
{
	movcnt = document.getElementById("movcnt");
	//movcnt.value = nextTest();
	movcnt.value = ++movcnt.value;
	document.forms["theform"].submit();
}

/*
function nextTest() //determines which free recall to do after practice
{
	var delay = document.getElementById('delay');
	var movcnt = document.getElementById('movcnt');
	var next;
	switch (delay.value) {
		case '1':
			next = 5;
			break;
		case '2':
			next = 6;
			break;
		case '3':
			next = 7;
			break;
	}
	return next;
}*/

function nextStep() 
{
	var movcnt = document.getElementById('movcnt');
	var next;
	switch (movcnt.value) {
		case '5': 
			//next = 8; //moves user to the practice recognition test
			next = 6;
			break;
		case '8':
			//next = 102; //moves user to the directions test
			next = 9;
			break;
		case '10':
			//next = 102; //moves user to the directions test
			next = 11;
			break;
	}
	return next;
}