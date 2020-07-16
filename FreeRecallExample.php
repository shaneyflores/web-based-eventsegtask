<!DOCTYPE HTML>
<html><head>
<title>Perception Experiment Memory Task</title>
<link rel="stylesheet" type="text/css" href="percexp.css" />
</head>
<body>

<!-- JavaScript -->
<script type="text/javascript" src="FreeRecall.js"></script>

<!--<form id="theform" action="AfterShow.php" method="post">-->
<form id="theform" action="FreeRecall.php" method="post">


<!--Standard fields we will need to hold onto all pages-->
<?php include 'mturk_form_fields.php'; ?>

<h2>Directions:</h2>
In this next task, you will be asked to recall details from one of the movies you have seen. Imagine that you are describing the movie 
for a friend who did not see the movie, but will have to perform the activity as similarly as possible to what was shown in the movie, 
based on your description.  <br><br>

1.  Write down as many details as you can from the movie you are asked to recall; be as detailed as possible. <br>
2.  You will have 5 minutes to type your responses in the textbox below. <br>
3.  Press [ENTER] to separate each action or event onto a different line. <br>
4.  Place all the details you write down in the order in which they took place. <br>
5.  Do not go back to watch the movie. We will be able to tell if you do so, and we will not be able to use your response. <br>
6.  The page will automatically advance after 5 minutes. <br>
7.  If you finish before 5 minutes, you can click on the "Press to go on" button to advance to the next page. <br><br>

For example, in the practice movie of a <b>man building with blocks</b>, an ideal response would be like the one below: <br><br>

<!--<p id="examplePrompt"></p>
<script>
var prompt = document.getElementById('examplePrompt');

if (document.getElementById('task').value != "passive") {
	prompt.innerHTML="<p>For example, in the practice movie of a <b>man building with blocks</b>, an ideal response would be like the one below:<br><br></p>"; }
else {
	prompt.innerHTML="<p>For example, if you had seen a movie of a <b>man entering a room and building a boat with blocks</b>, an ideal response would be like the one below:<br><br></p>"; }
</script>-->


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

<textarea readonly rows="30" cols="60">
The movie begins with a man entering a room. 
He walks through a door and closes it behind him. 
He pulls out a chair and sits down at a table. 
He then builds a boat out of Duplos blocks (the big blocks), which are lying in a pile on the table.
He starts by building the foundation. 
He builds a layer of green blocks in a rectangular shape. 
He then adds a layer of yellow blocks.
Then a layer of red blocks.
Then a layer of blue blocks. 
He adds extra blue blocks around the edge so they hang over. 
On top of the foundation, he builds a cabin, a large square of red blocks.
Then he builds a mast, a column of yellow blocks. 
He sweeps the rest of the blocks to the side and looks at his model. 
Then he pushes out of his chair and stands up. 
He opens the door and leaves the room.  
</textarea><br>

<!-- SUBMIT BUTTON -->
<input id="beginButton" onclick="BeginRecallTask();" type="submit" value="Press to Begin Task"></input></form>

</body></html>