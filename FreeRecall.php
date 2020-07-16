<!DOCTYPE HTML>
<html><head>
<title>Perception Experiment</title>
<link rel="stylesheet" type="text/css" href="percexp.css" />
</head>
<body onload="setTask();">

<!-- JavaScript -->
<script type="text/javascript" src="FreeRecall.js"></script>

<form id="theform" action="AfterShow.php" method="post">


<!--Standard fields we will need to hold onto all pages-->
<?php include 'mturk_form_fields.php'; ?>

<h2>Directions:</h2>
<p id="instructions"></p>

1.  Write down as many details as you can from the movie you are asked to recall; be as detailed as possible. <br>
2.  You will have 5 minutes to type your responses in the textbox below. <br>
3.  Press [ENTER] to separate each action or event onto a different line. <br>
4.  Place all the details you write down in the order in which they took place. <br>
5.  Do not go back to watch the movie. We will be able to tell if you do so, and we will not be able to use your response. <br>
6.  The page will automatically advance after 5 minutes. <br>
7.  If you finish before 5 minutes, you can click on the "Press to go on" button below to advance to the next page. <br><br>

<!-- GIVE RECALL TEXT AREA LINED PAGE STYLE -->
<style type="text/css">
textarea {
 background: url(http://i.stack.imgur.com/ynxjD.png) repeat-y;
 width: 900px;
 height: 600px;
 font: normal 14px verdana;
 line-height: 25px;
 padding: 2px 10px;
 border: solid 1px #ddd;
}
</style>

<!-- RECALL TEXT AREA -->
<textarea id="inText" rows="30" cols="60">
</textarea><br>

<!-- SUBMIT BUTTON -->
<input id="submitbutton" onclick="submitData();" type="submit" value="Press to go on"></input></form>

</body></html>