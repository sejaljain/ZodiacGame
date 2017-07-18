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

let increment = 0;
const carousel = $('#carousel');
let target = 1000000000000;

function setTarget(num) {
  console.log("Target set")
 target = num;
 increment = 0;
 }

var interval = setInterval(() => {
  if(increment == (target)) { console.log("Carosel stopped"); clearInterval(interval); }
  increment++;
  carousel.css({
    '-webkit-transform': 'rotateX(' + (increment * -30) + 'deg)'
  })
  carousel.attr('data-state', (increment % 12) + 1);
}, 175)

function getTotalPoints()
{
  var TotalPoints=0
  var theForm = document.forms["cakeform"]
  var listofbuttons = theForm.elements["selectedcake"]
  var counter=0;

  for(i = 0; i < listofbuttons.length; i++)
  {
    if(listofbuttons[i].checked)
    {

      TotalPoints += point_levels[listofbuttons[i].value];
      counter=counter+1;
    }
  }
if (counter<10){
  alert("You forgot a question")
}
    return TotalPoints;
}

function getSign()
{

    var total = getTotalPoints()
    if (total==24){


      document.getElementById('1').innerHTML=Gemini[0];
      document.getElementById('2').innerHTML=Gemini[1];
      document.getElementById('3').innerHTML=Gemini[2];
      document.getElementById('4').innerHTML=Gemini[3];

      setTarget(4);

      document.getElementById('5').innerHTML="Aquarius";
      document.getElementById('6').innerHTML="Geminis are creative, compassionate people who don't usually hesitate to react. Although they can get moody, they're generally flexible people and are great at letting things go, and they need a friend like a Aquarius. Together they can enjoy the simple things together.";

    }

    else if (total == 26 ){


      document.getElementById('1').innerHTML=Cancer[0];
      document.getElementById('2').innerHTML=Cancer[1];
      document.getElementById('3').innerHTML=Cancer[2];
      document.getElementById('4').innerHTML=Cancer[3];

      setTarget(5);

      document.getElementById('5').innerHTML="Sagittarius";
      document.getElementById('6').innerHTML="Cancers are homebodies that don't crave spotlight or attention and are typically satisfied with the little things in life. Because cancers are more introverted they will enjoy the company of a Sagittarius, as they, too, enjoy more introspective thinking.";

    }
    else if (total == 22){

      document.getElementById('1').innerHTML=Aries[0];
      document.getElementById('2').innerHTML=Aries[1];
      document.getElementById('3').innerHTML=Aries[2];
      document.getElementById('4').innerHTML=Aries[3];
      document.getElementById('5').innerHTML="Libra";
      document.getElementById('6').innerHTML="Aries think outside the box, full of creativity, spontaneity, and emotion. They need a friend like a Libra to keep them in check.";
      setTarget(2);

    }

    else if (total == 32){


      document.getElementById('1').innerHTML=Virgo[0];
      document.getElementById('2').innerHTML=Virgo[1];
      document.getElementById('3').innerHTML=Virgo[2];
      document.getElementById('4').innerHTML=Virgo[3];
      document.getElementById('5').innerHTML="Aries";
      document.getElementById('6').innerHTML="Virgos are highlighted by their charm, charisma, and ability as conversationalists. Because Virgos are known for their affinity for whimsical conversation, they'd surely enjoy the company of an Aries.";
      setTarget(7);

    }

    else if (total == 41){


      document.getElementById('1').innerHTML=Capricorn[0];
      document.getElementById('2').innerHTML=Capricorn[1];
      document.getElementById('3').innerHTML=Capricorn[2];
      document.getElementById('4').innerHTML=Capricorn[3];
      document.getElementById('5').innerHTML="Sagittarius";
      document.getElementById('6').innerHTML="Capricorns are known for their high-level thinking and general intellect. They're systematic, organized planners who are driven towars maintaining structure. As a result of their systematic lifestyles, Capricorns will surely appreciate the high-intensity way of life promoted by the Sagittarius";
      setTarget(11);

    }
    else if (total==18){

      document.getElementById('1').innerHTML=Leo[0];
      document.getElementById('2').innerHTML=Leo[1];
      document.getElementById('3').innerHTML=Leo[2];
      document.getElementById('4').innerHTML=Leo[3];
      document.getElementById('5').innerHTML="Capricorn";
      document.getElementById('6').innerHTML="Leos are one of the most dominant signs, they are naturally driven toward gaining power and respect. They need a friend like a Capricorn who is very selfless, who will help balance out the pompous nature of the Leo.";
      setTarget(6);


    }
    else if (total==37){

      document.getElementById('1').innerHTML=Taurus[0];
      document.getElementById('2').innerHTML=Taurus[1];
      document.getElementById('3').innerHTML=Taurus[2];
      document.getElementById('4').innerHTML=Taurus[3];
      document.getElementById('5').innerHTML="Pisces";
      document.getElementById('6').innerHTML="Taurus are known for their stubborn ways and their single-mindness that might create problems when it comes to dealing with certain people. They need a friend like a Pisces who are people known for being loyal, unselfish friends.";

      setTarget(3);


    }


    else if (total==21){


      document.getElementById('1').innerHTML=Scorpio[0];
      document.getElementById('2').innerHTML=Scorpio[1];
      document.getElementById('3').innerHTML=Scorpio[2];
      document.getElementById('4').innerHTML=Scorpio[3];
      document.getElementById('5').innerHTML="Aquarius";
      document.getElementById('6').innerHTML="Scorpios are one the more mysterious signs in the zodiac, typically very bold in their sense of style, they carry out a very secretive lifestyle. Since scorpios don't like showing their hand too often, they don't enjoy surrounding themselves with other bold people, so they mesh best with the Aquarius, known for their reserved, unobtrusive demeanor.";
      setTarget(9);

    }

    else if (total == 20){


      document.getElementById('1').innerHTML=Libra[0];
      document.getElementById('2').innerHTML=Libra[1];
      document.getElementById('3').innerHTML=Libra[2];
      document.getElementById('4').innerHTML=Libra[3];
      document.getElementById('5').innerHTML="Leo";
      document.getElementById('6').innerHTML="Libras are known for their appreciation for high beauty and sophisticated taste. Due to the Libras inherent appreciation for beauty, it's only natural that he or she would enjoy spending time with a Leo.";
      setTarget(8);

    }


    else if (total == 16){


      document.getElementById('1').innerHTML=Aquarius[0];
      document.getElementById('2').innerHTML=Aquarius[1];
      document.getElementById('3').innerHTML=Aquarius[2];
      document.getElementById('4').innerHTML=Aquarius[3];
      document.getElementById('5').innerHTML="Taurus";
      document.getElementById('6').innerHTML="Aquarius people are very reserved. They don't require much maintenance or attention in order to stay satisfied. The Aquarius is highlighted by his or her low- key temperament. Because Aquarians are so carefree, they'll likely enjoy the company of Taurus, who, despite their stubborn ways, are softhearted friends.";
      setTarget(0);

    }

    else if (total == 13){

      document.getElementById('1').innerHTML=Pisces[0];
      document.getElementById('2').innerHTML=Pisces[1];
      document.getElementById('3').innerHTML=Pisces[2];
      document.getElementById('4').innerHTML=Pisces[3];
      document.getElementById('5').innerHTML="Scorpio";
      document.getElementById('6').innerHTML="While Pisces are genarally calm, carefree people- this becomes problematic when these qualities turn into complacency. By surrounding themselves with Scorpios, they can ensure that they'll be kept on their toes as the Scorpio.";
      setTarget(1);

    }
    else {

      document.getElementById('1').innerHTML=Sagittarius[0];
      document.getElementById('2').innerHTML=Sagittarius[1];
      document.getElementById('3').innerHTML=Sagittarius[2];
      document.getElementById('4').innerHTML=Sagittarius[3];
      document.getElementById('5').innerHTML="Capricorn";
      document.getElementById('6').innerHTML="Sagittarius are known for their intensity and focus. Usually very goal- driven and career-oriented and doesn't have time for frivolous people. Because of their mentality a Sagittarius would certainly get along with Capricorns, who value careful planning and a desire for order.";
      setTarget(10);

    }
}

function show(){
  document.getElementById("results").style.visibility = "visible";
}
