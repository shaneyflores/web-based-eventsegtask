<!DOCTYPE HTML>
<html> <head>
<title>Perception Experiment Picture Test</title>
<link rel="stylesheet" type="text/css" href="percexp.css" />
</head>

<body onload="setUpTest();">
<h1></h1>

<!-- JavaScript -->
<script type="text/javascript" src="PxLoader/PxLoader.js"></script>
<script type="text/javascript" src="PxLoader/PxLoaderImage.js"></script>
<script type="text/javascript" src="PictureTest.js"></script>

<hr>
<address></address>

<form id="mturk_form" action="AfterShow.php" method="post">

<!-- Standard fields we will need to hold onto on all pages -->
<?php include 'mturk_form_fields.php'; ?>

<!-- THE PICTURE ELEMENT -->
<br><br><br>
<p  align="center">
<canvas id="Canvas" width="920" height="280">

</p>

<p id="instructions" align="center">Again, you will now see pairs of pictures. 
Each pair will contain one picture taken from one of the movies you saw and one picture taken from similar movies 
but not the ones you saw. Your task is to identify the picture in each pair that came from one of the movies you saw as
quickly and accurately as you can. <br><br>

If you believe that the picture on the <b>left</b> is from the movie you saw, 
please press the <b>[Q]</b> key. <br><br>

If you believe that the picture on the <b>right</b> is from the movie you saw, please
press the <b>[P]</b> key.<br><br>

Once you start, please finish the test without taking a break.<br><br>

Please ensure the above rectangle is completely visible and fits in your browser window before beginning.<br><br>

When you are ready to begin, push the "Start Test" button to start the
test.<br><br></p>

<p align="center">
<!-- A BUTTON TO START THE TEST-->
<button id="startbutton" onclick="startTest()" type="button">Loading...</button>
<br />

<!-- SUBMIT BUTTON; HIDDEN UNTIL SLIDE SHOW ENDED -->
<input id="submitbutton" onclick="submitData();" type="submit" value="Press to go on" /></p>


</form>

</body> </html>
