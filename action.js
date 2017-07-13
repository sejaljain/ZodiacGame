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
      document.getElementById('1').innerHTML=Gemini[0];
      document.getElementById('2').innerHTML=Gemini[1];
      document.getElementById('3').innerHTML=Gemini[2];
      document.getElementById('4').innerHTML=Gemini[3];
    }
    else if (total > 49){
      document.getElementById('yoursign').innerHTML="Cancer";
      document.getElementById('1').innerHTML=Cancer[0];
      document.getElementById('2').innerHTML=Cancer[1];
      document.getElementById('3').innerHTML=Cancer[2];
      document.getElementById('4').innerHTML=Cancer[3];
    }
    else if (total > 48){
      document.getElementById('yoursign').innerHTML="Aries";
      document.getElementById('1').innerHTML=Aries[0];
      document.getElementById('2').innerHTML=Aries[1];
      document.getElementById('3').innerHTML=Aries[2];
      document.getElementById('4').innerHTML=Aries[3];
    }
    else if (total > 47){
      document.getElementById('yoursign').innerHTML="Virgo";
      document.getElementById('1').innerHTML=Virgo[0];
      document.getElementById('2').innerHTML=Virgo[1];
      document.getElementById('3').innerHTML=Virgo[2];
      document.getElementById('4').innerHTML=Virgo[3];
    }
    else if (total > 46){
      document.getElementById('yoursign').innerHTML="Capricorn";
      document.getElementById('1').innerHTML=Capricorn[0];
      document.getElementById('2').innerHTML=Capricorn[1];
      document.getElementById('3').innerHTML=Capricorn[2];
      document.getElementById('4').innerHTML=Capricorn[3];
    }
    else if (total > 45){
      document.getElementById('yoursign').innerHTML="Leo";
      document.getElementById('1').innerHTML=Leo[0];
      document.getElementById('2').innerHTML=Leo[1];
      document.getElementById('3').innerHTML=Leo[2];
      document.getElementById('4').innerHTML=Leo[3];
    }
    else if (total > 44){
      document.getElementById('yoursign').innerHTML="Taurus";
      document.getElementById('1').innerHTML=Taurus[0];
      document.getElementById('2').innerHTML=Taurus[1];
      document.getElementById('3').innerHTML=Taurus[2];
      document.getElementById('4').innerHTML=Taurus[3];
    }
    else if (total > 43){
      document.getElementById('yoursign').innerHTML="Scorpio";
      document.getElementById('1').innerHTML=Scorpio[0];
      document.getElementById('2').innerHTML=Scorpio[1];
      document.getElementById('3').innerHTML=Scorpio[2];
      document.getElementById('4').innerHTML=Scorpio[3];
    }
    else if (total > 42){
      document.getElementById('yoursign').innerHTML="Libra";
      document.getElementById('1').innerHTML=Libra[0];
      document.getElementById('2').innerHTML=Libra[1];
      document.getElementById('3').innerHTML=Libra[2];
      document.getElementById('4').innerHTML=Libra[3];
    }
    else if (total > 41){
      document.getElementById('yoursign').innerHTML="Aquarius";
      document.getElementById('1').innerHTML=Aquarius[0];
      document.getElementById('2').innerHTML=Aquarius[1];
      document.getElementById('3').innerHTML=Aquarius[2];
      document.getElementById('4').innerHTML=Aquarius[3];
    }
    else if (total > 40){
      document.getElementById('yoursign').innerHTML="Pisces";
      document.getElementById('1').innerHTML=Pisces[0];
      document.getElementById('2').innerHTML=Pisces[1];
      document.getElementById('3').innerHTML=Pisces[2];
      document.getElementById('4').innerHTML=Pisces[3];
    }
    else {
      document.getElementById('yoursign').innerHTML="Sagittarius";
      document.getElementById('1').innerHTML=Sagittarius[0];
      document.getElementById('2').innerHTML=Sagittarius[1];
      document.getElementById('3').innerHTML=Sagittarius[2];
      document.getElementById('4').innerHTML=Sagittarius[3];
    }
}

function show(){
  document.getElementById("results").style.visibility = "visibile";
}
