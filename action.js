var point_levels = new Array();
point_levels["A"]=5;
point_levels["B"]=3
point_levels["C"]=1
point_levels["D"]=0


var Taurus = ["Hard worker","Coolest personality or worst temper", "Easily loved by others", "Always act strong"]
var Capricorn = ["You are a very loving person", "Can be a little hard on others", "Realist and down to earth", "Good with saving money"]
var Aquarius = ["Always pay attention", "Others would never know when you're angry", "You tend to care a lot", "Second chances are important to you"]
var Pisces = ["Can make friends easily with a stranger", "A problem solver", "A dreamer and a romantic","Speaks fluent sarcasm"]
var Aries = ["Trust is very important to you", "You're a good friend who support him/her", "Mostly quiet in large groups", "Highly competitve"]
var Gemini = ["Loves hard", "Feels like no one understands you", "Prefers not to talk about deep feelings","Mood swings"]
var Cancer = ["Natural protective over people", "Very sensitive and moody", "Remembers everything","Your smile warms hearts"]
var Leo = ["Very dramatic", "Good friend", "Sensitive on the inside","Seeing friends/family happy makes them happy"]
var Libra = ["Bossy","Likes to make good first impression","Flirts and doesn't realize it","Doesn't like to be rushed"]
var Scorpio = ["Loved by many","Very dramatic","Always make others laugh","Over-protective of loved ones"]
var Sagittarius = ["Straight forwardness","Highly competitve","Has a way to tell when someone is lying","A wonderful sense of humor"]
var Virgo = ["Will be completely honest with you","Goofy","Holds a conversation forever","Over thinks alot of things"]



function getTotalPoints()
{
  var TotalPoints=0
  var theForm = document.forms["cakeform"]
  var listofbuttons = theForm.elements["selectedcake"]

  for(i = 0; i < listofbuttons.length; i++)
  {
    if(listofbuttons[i].checked)
    {
      TotalPoints += point_levels[listofbuttons[i].value];
    }
  }
  return TotalPoints;
}

function getSign()
{

    var total = getTotalPoints();

    if (total > 49){
      document.getElementById('yoursign').innerHTML="Gemini";
      document.getElementById('1').innerHTML=Gemini[0];
      document.getElementById('2').innerHTML=Gemini[1];
      document.getElementById('3').innerHTML=Gemini[2];
      document.getElementById('4').innerHTML=Gemini[3];
    }

    else if (total > 47 ){

      document.getElementById('yoursign').innerHTML="Cancer";
      document.getElementById('1').innerHTML=Cancer[0];
      document.getElementById('2').innerHTML=Cancer[1];
      document.getElementById('3').innerHTML=Cancer[2];
      document.getElementById('4').innerHTML=Cancer[3];
    }
    else if (total > 45){
      document.getElementById('yoursign').innerHTML="Aries";
      document.getElementById('1').innerHTML=Aries[0];
      document.getElementById('2').innerHTML=Aries[1];
      document.getElementById('3').innerHTML=Aries[2];
      document.getElementById('4').innerHTML=Aries[3];
    }

    else if (total >40){

      document.getElementById('yoursign').innerHTML="Virgo";
      document.getElementById('1').innerHTML=Virgo[0];
      document.getElementById('2').innerHTML=Virgo[1];
      document.getElementById('3').innerHTML=Virgo[2];
      document.getElementById('4').innerHTML=Virgo[3];
    }

    else if (total > 38){

      document.getElementById('yoursign').innerHTML="Capricorn";
      document.getElementById('1').innerHTML=Capricorn[0];
      document.getElementById('2').innerHTML=Capricorn[1];
      document.getElementById('3').innerHTML=Capricorn[2];
      document.getElementById('4').innerHTML=Capricorn[3];
    }
    else if (total > 35){
      document.getElementById('yoursign').innerHTML="Leo";
      document.getElementById('1').innerHTML=Leo[0];
      document.getElementById('2').innerHTML=Leo[1];
      document.getElementById('3').innerHTML=Leo[2];
      document.getElementById('4').innerHTML=Leo[3];
    }
    else if (total > 32){
      document.getElementById('yoursign').innerHTML="Taurus";
      document.getElementById('1').innerHTML=Taurus[0];
      document.getElementById('2').innerHTML=Taurus[1];
      document.getElementById('3').innerHTML=Taurus[2];
      document.getElementById('4').innerHTML=Taurus[3];
    }

    else if (total >29){

      document.getElementById('yoursign').innerHTML="Scorpio";
      document.getElementById('1').innerHTML=Scorpio[0];
      document.getElementById('2').innerHTML=Scorpio[1];
      document.getElementById('3').innerHTML=Scorpio[2];
      document.getElementById('4').innerHTML=Scorpio[3];
    }

    else if (total >26){

      document.getElementById('yoursign').innerHTML="Libra";
      document.getElementById('1').innerHTML=Libra[0];
      document.getElementById('2').innerHTML=Libra[1];
      document.getElementById('3').innerHTML=Libra[2];
      document.getElementById('4').innerHTML=Libra[3];
    }


    else if (total >24){

      document.getElementById('yoursign').innerHTML="Aquarius";
      document.getElementById('1').innerHTML=Aquarius[0];
      document.getElementById('2').innerHTML=Aquarius[1];
      document.getElementById('3').innerHTML=Aquarius[2];
      document.getElementById('4').innerHTML=Aquarius[3];
    }

    else if (total >20){

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
  document.getElementById("results").style.visibility = "visible";
}
