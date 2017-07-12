var total = 0

function score(id){
    if (id == "A"){
      total = total+5
    }
    else if (id == "B"){
      total = total+3
    }
    else if (id == "C"){
      total = total+1
    }
}

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
