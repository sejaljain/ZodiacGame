var point_levels = new Array();
point_levels["A"]=5;
point_levels["B"]=3
point_levels["C"]=1
point_levels["D"]=0


var Taurus = ["Hard worker","Coolest personality or Worst temper", "Easily loved by others", "Always act strong"]
var Capricorn = ["You are a very loving person," "Can be a little hard on other", "Realist and down to earth", "Good with saving money"]
var Aquarius = ["Always pay attention", "Others would never know when you're angry", "You tend to care alot," "Secound chances are important to you"]
var Pisces = ["Can make friends easily with a stranger", "A problem solver", "A dreamer and a romantic","Speaks fluent sarcasm"]
var Aries = ["Trust is very important to you", "You're a good friend who support him/her", "Mostly quiet in large groups", "Highly competitve"]
var Gemini = ["Loves hard", "Feels like no one understands you", "Perfers not to talk about deep feelings","Mood swings"]
var Cancer = ["Natural protective over people", "Very sensitive and moody", "Remembers everything","Your smile warm hearts"]
var Leo = ["Very dramatic", "Good friend", "Sensitive on the inside","Seeing friends/family happy makes them happy"]
var Libra = ["Bossy","Likes to make good first impression","Flirts and doesnt realize it","Doesnt like to be rushed"]
var Scorpio = ["Loved by many","Very dramatic","Always make others laugh","Over protective of loved ones"]
var Sagittarius = ["Straight forwardness","Highly competitve","Has a way to tell when someone is lying","A wonderful sense of humor"]
var Virgo = ["Will be completely honest with you","Goofy","Holds a conversation forever","Over thinks alot of things"]

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
  document.getElementById("results").style.visibility = "visible";
}
