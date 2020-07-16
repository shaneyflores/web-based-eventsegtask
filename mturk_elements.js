// Given the ID of the assignmentId form field element, populate it
// with the assignmentId parameter from the URL.  If no assignment ID
// is present, inform the worker that the HIT is being previewed.

function populateMturkForm() {
    var myForm = document.getElementById("mturk_form");
    var behavdata = document.getElementById("behavdata");
    var assignment_id_field = document.getElementById("assignmentId");
    
    /*var primingset = document.getElementById("primingset");
    var movie = document.getElementById("movie");
    var pictures = document.getElementById("pictures");
    var first = document.getElementById("first");
    var second = document.getElementById("second");*/
    var movieorder = document.getElementById("movieorder");
    var task = document.getElementByID("task");
        
    var paramstr = window.location.search.substring(1);
    var parampairs = paramstr.split("&");

    behavdata.value = "";
    for (i in parampairs) {
	var pair = parampairs[i].split("=");
	switch (pair[0]) {
	case "assignmentId": 
	    if (pair[1] == "ASSIGNMENT_ID_NOT_AVAILABLE") {
		document.getElementById('previewnotice').innerHTML =
		    "<p><b>You are previewing this HIT.</b>  To perform this HIT, please accept it.</p>";
	    } else {
		// Check whether this is in the sandbox
		if (document.referrer && ( document.referrer.indexOf('workersandbox') != -1) ) {
		    myform.action = "http://workersandbox.mturk.com/mturk/externalSubmit";
		}
		// fill in assignment id
		assignment_id_field.value = pair[1];
	    }
	    break;
	case "behavdata": 
	    if (pair.length > 1) {
		behavdata.value = pair[1];
	    }
	    break;
	case "movieorder":
		if(pair.length > 1) {
		movieorder.value = pair[1];
		}
	case "task":
		if(pair.length > 1) {
		task.value = pair[1];
		}
	/*	
	case "primingset":
	    if (pair.length > 1) {
		primingset.value = pair[1];
	    }
	    break;
	case "movie":
	    if (pair.length > 1) {
		movie.value = pair[1];
	    }
	    break;
	case "pictures":
	    if (pair.length > 1) {
		pictures.value = pair[1];
	    }
	    break;
	case "first":
	    if (pair.length > 1) {
		first.value = pair[1];
	    }
	    break;
	case "second":
	    if (pair.length > 1) {
		second.value = pair[1];
	    }
	    break;*/
	}
    }
}
