<!DOCTYPE HTML>
<html><body>
<?php

//$assignid = $_POST['assignmentId'];
//$task = $_POST['task'];
$movcnt = $_POST['movcnt'];

// print('<pre>');
// print_r($_POST);
// print('</pre>');
  
 if ($movcnt <= 3) {
 	include 'ShowMovie.php'; }
 else if ($movcnt == 4) {
 	include 'FreeRecallExample.php'; }
 else if ($movcnt == 5 || $movcnt == 8 || $movcnt == 10) {
 	include 'FreeRecall.php'; }		
 else if ($movcnt == 6) {
 	include 'PictureTestPractice.php'; }
 else if ($movcnt == 7 || $movcnt == 9 || $movcnt == 11) {
 	include 'PictureTest.php'; }
 else if ($movcnt == 12) {
 	include 'Questionnaire.php'; }
 else if ($movcnt == 102) {
 	include 'DirectionsTest.php'; }

?>
</body></html>