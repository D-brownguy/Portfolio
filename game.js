var game = document.getElementById("all");


function gamein(){
  game.classList.add("all");
  game.classList.remove("hidden");
}

function gameout(){
  game.classList.add("hidden");
  game.classList.remove("all");
}