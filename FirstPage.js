document.getElementById('pageFrame').src = decode(gup('url'));
document.getElementById('assignmentId').value = gup('assignmentId');

//
// This method Gets URL Parameters (GUP)
//
function gup( name )
{
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var tmpURL = window.location.href;
  var results = regex.exec( tmpURL );
  if( results == null )
    return "";
  else
    return results[1];
}

//
// This method decodes the query parameters that were URL-encoded
//
function decode(strToDecode)
{
  var encoded = strToDecode;
  return unescape(encoded.replace(/\+/g,  " "));
}

    //
    // Check if the worker is PREVIEWING the HIT or if they've ACCEPTED the HIT
    //
    if (gup('assignmentId') == "ASSIGNMENT_ID_NOT_AVAILABLE")
    {
  // If we're previewing, disable the button and give it a helpful message
  document.getElementById('submitbutton').disabled = true;
  document.getElementById('submitbutton').value = "You must ACCEPT the HIT before you can submit the results.";
    } else {
        var form = document.getElementById('mturk_form');
        if (document.URL && ( document.URL.indexOf('workersandbox') != -1) ) {
            document.getElementById('sandbox').value = "true";
        } else {
            document.getElementById('sandbox').value = "false";
        }
    }


function setTask() {
  var myForm = document.getElementById("mturk_form");
  myForm.elements["pracmovie"].value="Legos";
  myForm.elements["movcnt"].value=0;
  
    // record browser info
    myForm.elements["browserinfo"].value = 'userAgent=' + navigator.userAgent + " -- " + "appVersion=" + navigator.appVersion;
  
  browserDetect();
}


//
//Function to parse userAgent into a simpler to read form
//
function browserDetect() { 

var objappVersion = navigator.appVersion;
var objAgent = navigator.userAgent;
var objbrowserName  = navigator.appName;
var objfullVersion  = ''+parseFloat(navigator.appVersion);
var objBrMajorVersion = parseInt(navigator.appVersion,10);
var objOffsetName,objOffsetVersion,ix;

// In Opera
if ((objOffsetVersion=objAgent.indexOf("Opera"))!=-1 | (objOffsetVersion=objAgent.indexOf('OPR'))!=-1) {
	objbrowserName = "Opera";
	objfullVersion = objAgent.substring(objOffsetVersion);
 	if ((objOffsetVersion=objAgent.indexOf("Version"))!=-1) //detects old versions of Opera
		objfullVersion = objAgent.substring(objOffsetVersion);
}
 
// In Chrome
else if ((objOffsetVersion=objAgent.indexOf("Chrome"))!=-1) {
 objbrowserName = "Chrome";
 objfullVersion = objAgent.substring(objOffsetVersion+7);
}

// In Microsoft internet explorer 10.0 or below
else if ((objOffsetVersion=objAgent.indexOf("MSIE"))!=-1) {
 objbrowserName = "Microsoft Internet Explorer";
 objfullVersion = objAgent.substring(objOffsetVersion+5);
}

// In Microsoft internet explorer 11.0 (possibly after too)
else if ((objOffsetVersion=objAgent.indexOf("rv:"))!=-1 && objAgent.indexOf("Trident")!= -1) {
	objbrowserName = "Microsoft Internet Explorer";
	objfullVersion = objAgent.substring(objOffsetVersion,objOffsetVersion+7);
}
 
// In Firefox
else if ((objOffsetVersion=objAgent.indexOf("Firefox"))!=-1) {
 objbrowserName = "Firefox";
 objfullVersion = objAgent.substring(objOffsetVersion,objOffsetVersion+12);
}

// In Safari
else if ((objOffsetVersion=objAgent.indexOf("Safari"))!=-1) {
 objbrowserName = "Safari";
 objfullVersion = objAgent.substring(objOffsetVersion+7);
 if ((objOffsetVersion=objAgent.indexOf("Version"))!=-1)
   objfullVersion = objAgent.substring(objOffsetVersion+8);
}

// For other browser "name/version" is at the end of userAgent
else if ( (objOffsetName=objAgent.lastIndexOf(' ')+1) <
          (objOffsetVersion=objAgent.lastIndexOf('/')) )
{
 objbrowserName = objAgent.substring(objOffsetName,objOffsetVersion);
 objfullVersion = objAgent.substring(objOffsetVersion+1);
 if (objbrowserName.toLowerCase()==objbrowserName.toUpperCase()) {
  objbrowserName = navigator.appName;
 }
}

// trimming the fullVersion string at semicolon/space if present
if ((ix=objfullVersion.indexOf(";"))!=-1) {
   objfullVersion=objfullVersion.substring(0,ix); }
if ((ix=objfullVersion.indexOf(" "))!=-1) {
   objfullVersion=objfullVersion.substring(0,ix); }
if ((ix=objfullVersion.indexOf(":"))!=-1) {
   objfullVersion=objfullVersion.substring(ix+1); }
if ((ix=objfullVersion.indexOf("/"))!=-1) {
   objfullVersion=objfullVersion.substring(ix+1); }		 
  
 
objBrMajorVersion = parseInt(''+objfullVersion,10);
if (isNaN(objBrMajorVersion)) { //If it can't determine objBrMajorVersion, uses defaults in appVersion -- essentially useless information
 objfullVersion  = ''+parseFloat(navigator.appVersion); //convert to float
 objBrMajorVersion = parseInt(navigator.appVersion,10); //convert to integer
}

//OS Detection
if ((objOffsetOS=objAgent.indexOf('Windows'))!=-1) {
	OSfullName = objAgent.substring(objOffsetOS,objOffsetOS+14);
	
	// Windows OS versions: http://msdn.microsoft.com/en-us/library/windows/desktop/ms724832%28v=vs.85%29.aspx
	switch(OSfullName)
	{
		case 'Windows NT 5.1':
			OSfullName = 'Windows XP';
			break;
		case 'Windows NT 5.2':
			OSfullName = 'Windows XP-64bit';
			break;
		case 'Windows NT 6.0':
			OSfullName = 'Windows Vista';
			break;
		case 'Windows NT 6.1':
			OSfullName = 'Windows 7';
			break;
		case 'Windows NT 6.2':
			OSfullName = 'Windows 8';
			break;
		case 'Windows NT 6.3':
			OSfullName = 'Windows 8.1';
			break;
		default:
			OSfullName = 'Windows Unknown Version';
	}
}
else if ((objOffsetOS=objAgent.indexOf('Mac OS X'))!=-1) {
	OSfullName = objAgent.substring(objOffsetOS,objOffsetOS+13); }
else if ((objOffsetOS=objAgent.indexOf('X11'))!=-1) {
	OSfullName = 'Unix'; }
else if ((objOffsetOS=objAgent.indexOf('Linux'))!=-1) {
	OSfullName = 'Linux'; }
else {
	OSfullName = 'Unknown'; }

var myForm = document.getElementById("mturk_form");
myForm.elements['simpleBrowser'].value = 'BrowserName='+objbrowserName + ', ' +'FullVersion='+objfullVersion+', '+'MajorVersion='+objBrMajorVersion+', ' + 'OS='+OSfullName;


}


