<!DOCTYPE HTML>
<html>
<head>
<title>Demographics</title>
<link rel="stylesheet" type="text/css" href="percexp.css" />
</head>

<body>

<?php
print('<form id="mturk_form" method="POST" ');
if ($_POST['assignmentId'] == '')
  print('action="finished_noID.php">');
else
  if ($_POST['sandbox'] == 'true') 
    print('action="https://workersandbox.mturk.com/mturk/externalSubmit">');
  else
    print('action="https://www.mturk.com/mturk/externalSubmit">');

?>

<!-- Standard fields we will need to hold onto on all pages -->
<?php include 'mturk_form_fields.php'; ?>


<h2 style="color:black;">We'd like to ask for a little information about you so that we can
 characterize the people who participate in our experiments. Individual responses are 
 aggregated and reported in tabular form, and data regarding race and ethnicity are not in 
 any way connected to the results of this experiment. We appreciate your participation.</h2>

<h2 style="color:black;">Please answer the following questions:</h2>

<p style="color:black;">1. What is your age? <INPUT type="textbox"
						    id="age"
						    name="age" onkeydown="writeID(this.form)";/></p>

<p style="color:black;"> 2. What is your gender? <br /> <br />

<INPUT type="radio" id = "sex" name = "sex" value="male" /> Male<br />
<INPUT type="radio" id = "sex" name = "sex" value="female" /> Female <br />
<INPUT type="radio" id = "sex" name = "sex" value="other" /> Other 
</p>

<p style="color:black;">3. Are you: <br /> <br />
<INPUT type="radio" id="Handedness" name="Handedness" value="Right Handed" /> Right Handed <br />
<INPUT type="radio" id="Handedness" name="Handedness" value="Left Handed" /> Left Handed <br />
<INPUT type="radio" id="Handedness" name="Handedness" value="Ambidextrous" /> Ambidextrous
</p>

<p style="color:black;"> 4. What state do you live in? 
<INPUT type="text" id="Location" name="Location" value="">
</p>

<p style="color:black;"> 5. What is your ethnicity? (If you are not comfortable supplying this information please skip to the next question.) <br /> <br />

&nbsp;Please check any one or more of the following racial categories that apply to you. <br />
&nbsp; &nbsp;<input type="checkbox" id="ethnicity" name="ethnicity[]" value="American Indian/Alaskan Native"> American Indian/Alaskan Native <br />
&nbsp; &nbsp;<input type="checkbox" id="ethnicity" name="ethnicity[]" value="Asian"> Asian <br />
&nbsp; &nbsp;<input type="checkbox" id="ethnicity" name="ethnicity[]" value="Native Hawaiian or Other Pacific Islander"> Native Hawaiian or Other Pacific Islander <br />
&nbsp; &nbsp;<input type="checkbox" id="ethnicity" name="ethnicity[]" value="Black or African American"> Black or African American <br />
&nbsp; &nbsp;<input type="checkbox" id="ethnicity" name="ethnicity[]" value="White"> White <br /> <br />

&nbsp;Do you consider yourself to be Hispanic or Latino? <br />
&nbsp; &nbsp; <Input type="radio" id="Hispanic" name="Hispanic" value="Yes"/> Yes <br />
&nbsp; &nbsp; <Input type="radio" id="Hispanic" name="Hispanic" value="No"/> No <br />
</p>

<p style="color:black;"> 6. Occupational History <br />
&nbsp; a. Are you presently employed? <br />
&nbsp; &nbsp;<input type="radio" id="employment" name="employment" value="Yes"/> Yes
&nbsp; &nbsp;<input type="radio" id="employment" name="employment" value="No"/> No <br />

&nbsp; b. What is/was your occupation? 
<input type="text" id="occupation" name="occupation" value=""/> <br />

&nbsp; c. What is/was your spouse's occupation (if applicable)?
<input type="text" id="spouseOccupation" name="spouseOccupation" value=""/>
</p>

<p style="color:black;"> 7. Task Impressions <br />
&nbsp;The following question is meant to look real to people who are not reading all of 
the directions. We will know that you are reading the directions if you choose 
"None of the Above" as your choice for the following question.  <br />
How did participating in this study make you feel? <br />
&nbsp;&nbsp; <Input type="radio" id="feeling" name="feeling" value="Very Happy"/> Very Happy <br />
&nbsp;&nbsp; <Input type="radio" id="feeling" name="feeling" value="Somewhat Happy"/> Somewhat Happy <br />
&nbsp;&nbsp; <Input type="radio" id="feeling" name="feeling" value="Neutral"/> Neutral <br />
&nbsp;&nbsp; <Input type="radio" id="feeling" name="feeling" value="Somewhat Sad"/> Somewhat Sad <br />
&nbsp;&nbsp; <Input type="radio" id="feeling" name="feeling" value="Very Sad"/> Very Sad <br />
&nbsp;&nbsp; <Input type="radio" id="feeling" name="feeling" value="None of the Above"/> None of the Above </p>


<p style="color:black;"> 8. Educational History: <br />
&nbsp; a. What is the highest grade level you achieved in formal schooling?
<input type="text" id="gradelevel" name="gradelevel" value=""> <br />
&nbsp; b. If you are a college graduate, what field is your highest degree in?
<input type="text" id="degree" name="degree" value=""> <br />
&nbsp; &nbsp; &nbsp; &nbsp; What is the date of that degree? 
<input type="text" id="dateOfDegree" name="dateOfDegree" value="">
</p>

<p style="color:black;"> 9. Marital Status: <br />
&nbsp;<Input type="radio" id="maritalStatus"  name="maritalStatus" value="single"/> Single <br />
&nbsp;<Input type="radio" id="maritalStatus"  name="maritalStatus" value="married"/> Married <br />
&nbsp;<Input type="radio" id="maritalStatus"  name="maritalStatus" value="Widowed"/> Widowed <br />
&nbsp;<Input type="radio" id="maritalStatus"  name="maritalStatus" value="Divorced"/> Divorced <br />
&nbsp;<Input type="radio" id="maritalStatus"  name="maritalStatus" value="Separated"/> Separated
</p>


<p style="color:black;"> 10. Health Status: <br />
&nbsp; a. How would you rate your overall health at this time? <br />
&nbsp;&nbsp; <Input type="radio" id="overallHealth" name="overallHealth" value="Excellent"/> Excellent <br />
&nbsp;&nbsp; <Input type="radio" id="overallHealth" name="overallHealth" value="Good"/> Good <br />
&nbsp;&nbsp; <Input type="radio" id="overallHealth" name="overallHealth" value="Fair"/> Fair <br />
&nbsp;&nbsp; <Input type="radio" id="overallHealth" name="overallHealth" value="Poor"/> Poor <br />
&nbsp;&nbsp; <Input type="radio" id="overallHealth" name="overallHealth" value="Not Sure"/> Not Sure <br /> </br>
&nbsp; b. Have you ever been diagnosed with a learning disability (e.g., attention deficit/hyperactive disorder)?
<input type="radio" id="learningDisorder" name="learningDisorder" value="Yes"/> Yes
<input type="radio" id="learningDisorder" name="learningDisorder" value="No"/> No <br />
&nbsp;&nbsp;&nbsp;&nbsp; If yes, please elaborate: <Input type="text" id="elaborate" value="" size="60"/> <br />

</div>

<div id="Diagnoses" class="movable"> c. Have you ever been diagnosed with any of the following? (Check all that apply) <br /> </div>

<div id="diabetes" class="movable"><Input type="checkbox" id="diagnosis1"  name="diagnosis1" value="diabetes"/> Diabetes </div> <div id="diabetesDate" class="movable">  Date(Month/Year): <Input type="text" id="diabetesMonth" name="diabetesMonth" value="" size="2"/> / <Input type="text" id="diabetesYear" name="diabetesYear" value="" size="4"/> </div>
<div id="seizures" class="movable"><Input type="checkbox" id="diagnosis2"  name="diagnosis2" value="seizures"/> Seizures </div> <div id="seizuresDate" class="movable">  Date(Month/Year): <Input type="text" id="seizuresMonth" name="seizuresMonth" value="" size="2"/> / <Input type="text" id="seizuresYear" name="seizuresYear" value="" size="4"/> </div>
<div id="hypertension" class="movable"><Input type="checkbox" id="diagnosis3"  name="diagnosis3" value="hypertension"/> Hypertension </div> <div id="hypertensionDate" class="movable">  Date(Month/Year): <Input type="text" id="hypertensionMonth" name="hypertensionMonth" value="" size="2"/> / <Input type="text" id="hypertensionYear" name="hypertensionYear" value="" size="4"/> </div>
<div id="pulmonary" class="movable"><Input type="checkbox" id="diagnosis4"  name="diagnosis4" value="pulmonary"/> Chronic Obstructive Pulmonary Disease </div> <div id="pulmonaryDate" class="movable">  Date(Month/Year): <Input type="text" id="pulmonaryMonth" name="pulmonaryMonth" value="" size="2"/> / <Input type="text" id="pulmonaryYear" name="pulmonaryYear" value="" size="4"/> </div>
<div id="renal" class="movable"><Input type="checkbox" id="diagnosis5" name="diagnosis5" value="renal"/>Renal Dysfunction </div> <div id="renalDate" class="movable">  Date(Month/Year): <Input type="text" id="renalMonth" name="renalMonth" value="" size="2"/> / <Input type="text" id="renalYear" name="renalYear" value="" size="4"/> </div>
<div id="stroke" class="movable"><Input type="checkbox" id="diagnosis6" name="diagnosis6" value="stroke"/>Stroke or Transient Ischemic Attack (TIA) </div> <div id="strokeDate" class="movable">  Date(Month/Year): <Input type="text" id="strokeMonth" name="strokeMonth" value="" size="2"/> / <Input type="text" id="strokeYear" name="strokeYear" value="" size="4"/> </div>
<div id="stroke" class="movable"><Input type="checkbox" id="diagnosis7" name="diagnosis7" value="tumor"/>Brain Tumor</div> <div id="strokeDate" class="movable">  Date(Month/Year): <Input type="text" id="tumorMonth" name="tumorMonth" value="" size="2"/> / <Input type="text" id="tumorYear" name="tumorYear" value="" size="4"/> </div>
</p>


<div id="question11" class="movable"> 11. Physical Activity </div>

<div id="question11a" class="movable"> a. Do you exercise regularly, and if so, approximately how many hours/week? <input type="text" id="hoursExcercise" name="hoursExcercise" value=""/> </div>
<div id="question11a.a" class="movable"> If yes, what exercise activities do you engage in? <input type="text" id="exerciseType" name="exerciseType" value="" size="80"/> </div>
<div id="question11b" class="movable"> b. What other sports/physical activities do you engage in (e.g., mowing lawn, shoveling snow, gardening, etc.)? <input type="text" id="otherExercise" name="otherExercise" value="" size="80"/> </div>
<br><br><hr>
<p>
Thanks very much for participating in this session of the study.  <br /><br />

<b>To complete this study, press the button below. You will be redirected to 
a blank page (mturk.com/mturk/externalSubmit), which will submit your work automatically 
to Mechanical Turk. <u>You may then close the blank page, return to Mechanical Turk, and 
refresh the page you used to accept this HIT</u>. This HIT should appear in your dashboard 
shortly.</b>
</p>

<!-- SUBMIT BUTTON -->
<!-- Needs to be set as type "button" instead of type "submit" -->
<input id="submitbutton" value="Click to finish this session" type="submit">
<!--<input id="submitbutton" value="Click to finish this session" type="button" onclick="submitData();" >-->


</form>


</body></html>
