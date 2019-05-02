function renderHTML(data){
  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].Course + " (" + data[i].Code + ") is a " + data[i].Name + " course with the Learning Outcome(s) ";
    for(ii = 0; ii < data[i].LearningOutcome.length; ii++){
      if (ii == 0){
        htmlString += data[i].LearningOutcome[ii];
      } else {
        htmlString += " and " + data[i].LearningOutcome[ii];
      }
    }

    htmlString += ". The possible exit awards are " + data[i].ExitAward + ".<br>" + data[i].Module.Code + ": " + data[i].Module.Name + " is a module on this course and has assessments "; //".</p>";
    for(ii = 0; ii < data[i].Module.Assignment.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Assignment[ii];
      } else {
        htmlString += " and " + data[i].Module.Assignment[ii];
      }
    }

    htmlString += '. It is taught for ' + data[i].Module.Hours + ' throughout each academic week. The Learning Outcome(s) is/are ';
    for(ii = 0; ii < data[i].Module.Learning_outcomes.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Learning_outcomes[ii];
      } else {
        htmlString += " and " + data[i].Module.Learning_outcomes[ii];
      }
    }

    htmlString += '. The volume(s) for each assignment is/are ';
    for(ii = 0; ii < data[i].Module.Volume.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Volume[ii];
      } else {
        htmlString += " and " + data[i].Module.Volume[ii];
      }
    }

    htmlString += ' with each weighing ';
    for(ii = 0; ii < data[i].Module.weights.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.weights[ii];
      } else {
        htmlString += " and " + data[i].Module.weights[ii];
      }
    }
    htmlString += '. This module is worth ' + data[i].Module.Credit + '.</p>';
  }
  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}
