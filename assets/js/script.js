document.getElementById('generate').addEventListener('click', generate);


function generate() {
   
   var players = document.forms[0];
   var avilablePlayers = [];
   var teams = [];
   var results = '';
   var i;
   for (i = 0; i < players.length; i++) {
    if (players[i].checked) {                   // sprawdzenie czy checkbox jest zaznaczony
       avilablePlayers.push(players[i].name);
    } 
   }
   
   teams = shuffle(avilablePlayers); // mieszanie tablicy
   
   var j = 1;
   for (i=0; i<teams.length; i++) {
      console.log(i % 2);
      if (i % 2 == 0) {
         results = results + '<b>Drużyna ' + j.toString() + ':</b> ';
         j++;
      }
      if (i % 2 == 0) results = results  + teams[i];
      else if (i % 2 == 1) results = results  + ', ' + teams[i] + '<br><br>';
   }
   
   document.getElementById('teams').innerHTML = results;
}
   
function shuffle (arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = arr[index];
        arr[index] = arr[j];
        arr[j] = x;
    }
    return arr;
}   
