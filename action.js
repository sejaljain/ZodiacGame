var point_levels = new Array();
point_levels["A"]=5;
point_levels["B"]=3
point_levels["C"]=1
point_levels["D"]=0

function getTotalPoints()
{
  var TotalPoints=0
  var theForm = document.forms["cakeform"]
  var listofbuttons = theForm.elements["selectedcake"]

  for(i = 0; i < listofbuttons.length; i++)
  {
    if(listofbuttons[i].checked);
    {
      TotalPoints += point_levels[listofbuttons[i].value];
    }
  }
  return TotalPoints;
}

function getSign()
{
    var total = getTotalPoints();

    if (total > 50){
      document.getElementById('yoursign').innerHTML="Gemini";
    }
    else if (total > 40){
      document.getElementById('yoursign').innerHTML="Capricorn";
    }
    else if (total > 30){
      document.getElementById('yoursign').innerHTML="Leo"
    }
    else (total > 20){
      document.getElementById('yoursign').innerHTML="Taurus"
    }
}
