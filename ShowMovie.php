<!DOCTYPE HTML>
<html> <head>
<title>Perception Experiment Movie Viewing</title>
<link rel="stylesheet" type="text/css" href="percexp.css" />


</head>

<body onload="setUpMovie();">
<h1></h1>

<!-- JavaScript -->
<script type="text/javascript" src="ShowMovie.js"></script>

<form id="theform" action="AfterShow.php" method="post">

<!-- Standard fields we will need to hold onto on all pages -->
<?php include 'mturk_form_fields.php'; ?>

<!-- THE AUDIO ELEMENT -->
<audio id="alarm">
<source src="beep-2.wav" type="audio/wav">
<source src="beep-2.mp3" type="audio/mpeg">
</audio>

<!-- THE VIDEO ELEMENT -->
<p align="center">
<video id="video1" width="720" height="480">
<source src="Movies/Gray.mp4" type="video/mp4">
<source src="Movies/Gray.ogg" type="video/ogg">
</video>

</p>

<!-- INSTRUCTIONS-->
<p id="intro" align="center"></p>
<p id="instructions" align="center"> </p>

<p align="center">
<!-- A BUTTON TO PLAY THE MOVIE -->
<button id="playbutton" onclick="playMovie()" type="button">Play</button>
<br />

<!--<button onclick="jumpToEnd()" type="button">Jump</button>-->

<!-- SUBMIT BUTTON; HIDDEN UNTIL MOVIE ENDED -->
<input id="submitbutton" type="submit" value="Press to go on" />

</p>

<p id="output"></p>

</form>

</body> </html>
