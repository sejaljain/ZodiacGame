var point_levels = new Array();
point_levels["A"]=5;
point_levels["B"]=3
point_levels["C"]=1
point_levels["D"]=0

var Taurus = ["fact one here","fact two", "fact three"]
var Capricorn = ["fact one here," "fact two", "fact three"]
var Aquarius = ["fact one", "face two", "fact three"]
var Pisces = ["fact one", "fact two", "fact three"]
var Aries = ["fact one", "fact two", "fact three"]
var Gemini = ["fact one", "fact two", "fact three"]
var Cancer = ["fact one", "fact two", "fact three"]
var Leo = ["fact one", "fact two", "fact three"]
var

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
    else if (total > 49 ){
      document.getElementById('yoursign').innerHTML="Cancer";
    }
    else if (total > 48){
      document.getElementById('yoursign').innerHTML="Aries";
    }
    else if (total >47){
      document.getElementById('yoursign').innerHTML="Virgo";
    }
    else if (total > 40){
      document.getElementById('yoursign').innerHTML="Capricorn";
    }
    else if (total > 30){
      document.getElementById('yoursign').innerHTML="Leo";
    }
    else if (total > 20){
      document.getElementById('yoursign').innerHTML="Taurus";
    }
    else if (total >15){
      document.getElementById('yoursign').innerHTML="Scorpio";
    }
    else if (total >10){
      document.getElementById('yoursign').innerHTML="Libra";
    }
    else if (total >5){
      document.getElementById('yoursign').innerHTML="Aquarius";
    }
    else if (total >4){
      document.getElementById('yoursign').innerHTML="Pisces";
    }
    else {
      document.getElementById('yoursign').innerHTML="Sagittarius";
    }
}

function show(){
  document.getElementById("results").style.visibility = "visibile";
}
