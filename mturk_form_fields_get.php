<?php
  // debugging printout
//print('<pre>');
//print_r($_GET);
//print('</pre>');


//toggle this to hide form fields
$hidefields = ' style="display:none"';
//$hidefields = '';

// Fields for counterbalancing info
$assignid = $_GET['assignmentId'];
$sandbox = $_GET['sandbox'];
$pracmovie = $_GET['pracmovie'];
$movie1 = $_GET['movie1'];
$movie2 = $_GET['movie2'];
$movie3 = $_GET['movie3'];
$task = $_GET['task'];
$browserinfo = $_GET['browserinfo'];
$simpleBrowser = $_GET['simpleBrowser'];
$delay = $_GET['delay'];
$movcnt = $_GET['movcnt'];

print('<input id="sandbox" name="sandbox" value="'.$sandbox.'"'.$hidefields.'>');
print('<input id="pracmovie" name="pracmovie" value="'.$pracmovie.'"'.$hidefields.'>');
print('<input id="movie1" name="movie1" value="'.$movie1.'"'.$hidefields.'>');
print('<input id="movie2" name="movie2" value="'.$movie2.'"'.$hidefields.'>');
print('<input id="movie3" name="movie3" value="'.$movie3.'"'.$hidefields.'>');
print('<input id="task" name="task" value="'.$task.'"'.$hidefields.'>');
print('<input id="browserinfo" name="browserinfo" value="'.$browserinfo.'"'.$hidefields.'>');
print('<input id="simpleBrowser" name="simpleBrowser" value="'.$simpleBrowser.'"'.$hidefields.'>');
print('<input id="delay" name="delay" value="'.$delay.'"'.$hidefields.'>');
print('<input id="movcnt" name="movcnt" value="'.$movcnt.'"'.$hidefields.'>');


// Data fields
$segmentprac = $_POST['practice'];
$segment1 = $_POST['segment1'];
$segment2 = $_POST['segment2'];
$segment3 = $_POST['segment3'];
$recall1 = $_POST['recall1'];
$recall2 = $_POST['recall2'];
$recall3 = $_POST['recall3'];
$recog1 = $_POST['recog1'];
$recog2 = $_POST['recog2'];
$recog3 = $_POST['recog3'];
print('<textarea id="practice" type="text" name="practice"'.$hidefields.'>'.$practice.'</textarea>');
print('<textarea id="segment1" type="text" name="segment1"'.$hidefields.'>'.$segment1.'</textarea>');
print('<textarea id="segment2" type="text" name="segment2"'.$hidefields.'>'.$segment2.'</textarea>');
print('<textarea id="segment3" type="text" name="segment3"'.$hidefields.'>'.$segment3.'</textarea>');
print('<textarea id="recall1" type="text" name="recall1"'.$hidefields.'>'.$recall1.'</textarea>');
print('<textarea id="recall2" type="text" name="recall2"'.$hidefields.'>'.$recall2.'</textarea>');
print('<textarea id="recall3" type="text" name="recall3"'.$hidefields.'>'.$recall3.'</textarea>');
print('<textarea id="recog1" type="text" name="recog1"'.$hidefields.'>'.$recog1.'</textarea>');
print('<textarea id="recog2" type="text" name="recog2"'.$hidefields.'>'.$recog2.'</textarea>');
print('<textarea id="recog3" type="text" name="recog3"'.$hidefields.'>'.$recog3.'</textarea>');


//This field is for MTurk; it gets populated by JavaScript when the page loads:
print('<input name="assignmentId" id="assignmentId" value="'.$assignid.'"'.$hidefields.'">');


?>