// Funcion sacada de StackOverflow para obtener un número random entre 1 y 3
function getRandomInt() {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funcion llamada cada se que el jugador escoge su jugada 
let contador = 0;
function choices (choice) { 
  contador += 1;
  if (contador <= 5){

    // Movimientos
    let playerChoice = choice;
    let machineChoice = getRandomInt();

    // Insertar imágenes
    if (playerChoice == 1){
      console.log("You choice Rock " );
      document.getElementById("img_pt"+contador).src = "img/ro.png";
    } else if (playerChoice == 2){
      console.log("You choice Paper " );
      document.getElementById("img_pt"+contador).src = "img/pa.png";
    } else if (playerChoice == 3){
      console.log("You choice Scissors " );
      document.getElementById("img_pt"+contador).src = "img/sci.png";
    }
    
    if (machineChoice == 1){
      console.log("Machine choice Rock " );
      document.getElementById("img_ct"+contador).src = "img/ro.png";
    } else if (machineChoice == 2){
      console.log("Machine choice Paper " );
      document.getElementById("img_ct"+contador).src = "img/pa.png";    
    } else if (machineChoice == 3){
      console.log("Machine choice Scissors " );
      document.getElementById("img_ct"+contador).src = "img/sci.png";     
    }

  // Evaluar ganador
  // Pasamos el contenido de los Score de string a number
  let counter_player = parseFloat(document.getElementById("player_counter").textContent);
  let counter_computer = parseFloat(document.getElementById("computer_counter").textContent);

    if (machineChoice == playerChoice){
      console.log("Empate");
      document.getElementById("img_pt"+contador).classList.add('img_filter');
      document.getElementById("img_ct"+contador).classList.add('img_filter'); 

    } else if (machineChoice == 1){
      // document.getElementById("computer_efect_id").classList.add('comp_efect');
      if (playerChoice == 2){
        console.log("Player Win");
        document.getElementById("img_ct"+contador).classList.add('img_filter'); 
        counter_player += 1;
        document.getElementById("player_counter").textContent = counter_player;
      } else {
        console.log("Player Lost")
        document.getElementById("img_pt"+contador).classList.add('img_filter');
        counter_computer += 1;
        document.getElementById("computer_counter").textContent = counter_computer;        
      }

    } else if (machineChoice == 2){
      if (playerChoice == 3){
        console.log("Player Win");
        document.getElementById("img_ct"+contador).classList.add('img_filter'); 
        counter_player += 1;
        document.getElementById("player_counter").textContent = counter_player;       
      } else { 
        console.log("Player Lost");
        document.getElementById("img_pt"+contador).classList.add('img_filter');
        counter_computer += 1;
        document.getElementById("computer_counter").textContent = counter_computer;        
      }

    } else if (machineChoice == 3){
      if (playerChoice == 1) {
        console.log("Player Win");
        document.getElementById("img_ct"+contador).classList.add('img_filter');
        counter_player += 1;
        document.getElementById("player_counter").textContent = counter_player;
      } else { 
        console.log("Player Lost");
        document.getElementById("img_pt"+contador).classList.add('img_filter');
        counter_computer += 1;
        document.getElementById("computer_counter").textContent = counter_computer;        
      }
    }

  }  else {
    // Para reiniciar estado
    for (var i = 1; i <= 5; i++) {
      // Reiniciar imagenes
      document.getElementById("img_pt"+i).setAttribute('src', '#');
      document.getElementById("img_ct"+i).setAttribute('src', '#');
      // Reiniciar filter
      document.getElementById("img_pt"+i).classList.remove('img_filter');  
      document.getElementById("img_ct"+i).classList.remove('img_filter');  

    }
    // console.log("Contador reiniciado")
    return  contador = 0;
  }
}


// Añadimos efetos onclick a los botones mediante JS
document.getElementById("player_choice1").addEventListener("click", function(){
  choices(1);
});

document.getElementById("player_choice2").addEventListener("click", function(){
  choices(2);
});

document.getElementById("player_choice3").addEventListener("click", function(){
  choices(3);
});
