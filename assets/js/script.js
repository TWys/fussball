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
   
   teams = shuffle(avilablePlayers, (Math.floor(Math.random() * 10))); // mieszanie tablicy
   
   for (i=0; i<teams.length; i++) {
      if (i % 2 == 0) {
        results = results + '<b>Drużyna ' + ((i/2)+1).toString() + ':</b> ';
		results = results  + teams[i];
      }
      else if (i % 2 == 1) results = results  + ', ' + teams[i] + '<br><br>';
   }
   
   document.getElementById('teams').innerHTML = results;
}
   
function shuffle (arr, repeats) {
    var j, x, index;
    for (q = 0; q < repeats; q++) {
      for (index = arr.length - 1; index > 0; index--) {
         j = Math.floor(Math.random() * (index + 1));
         x = arr[index];
         arr[index] = arr[j];
         arr[j] = x;
     }
    }
    return arr;
}
