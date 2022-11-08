let ataqueJugador;
let ataqueEnemigoPlayer;
let lifesPlayer = 3;
let lifesEnemy = 3;

function iniciarJuego() {
  let pet_atackSection = document.getElementById("pet-atack");
  let petSelection = document.getElementById("btn-pet-selection");
  let btn_fuego = document.getElementById("btn-fuego");
  let btn_agua = document.getElementById("btn-agua");
  let btn_tierra = document.getElementById("btn-tierra");
  let btn_restart = document.getElementById("btn-restart");

  pet_atackSection.style.display = "none";

  btn_restart.style.display = "none";

  petSelection.addEventListener("click", () => {
    seleccionarMascotaJugador();
    pet_atackSection.style.display = "flex";
  });

  btn_fuego.addEventListener("click", ataqueFuego);

  btn_agua.addEventListener("click", ataqueAgua);

  btn_tierra.addEventListener("click", ataqueTierra);

  btn_restart.addEventListener("click", restartGame);
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueEnemigo();
}

function ataqueEnemigo() {
  let ataque = aleatorio(1, 3);
  if (ataque == 1) {
    ataqueEnemigoPlayer = "FUEGO";
  } else if (ataque == 2) {
    ataqueEnemigoPlayer = "AGUA";
  } else if (ataque == 3) {
    ataqueEnemigoPlayer = "TIERRA";
  }
  combate();
}

function combate() {
  let lifes_player = document.getElementById("lifes-player");
  let lifes_enemy = document.getElementById("lifes-enemy");

  if (ataqueEnemigoPlayer === ataqueJugador) {
    crearElemento("EMPATE");
    lifes_enemy.innerHTML = lifesEnemy;
  } else if (ataqueJugador === "FUEGO" && ataqueEnemigoPlayer === "TIERRA") {
    crearElemento("GANASTE");
    lifesEnemy--;
    lifes_player.innerHTML = lifesPlayer;
    lifes_enemy.innerHTML = lifesEnemy;
  } else if (ataqueJugador === "AGUA" && ataqueEnemigoPlayer === "FUEGO") {
    crearElemento("GANASTE");
    lifesEnemy--;
    lifes_player.innerHTML = lifesPlayer;
    lifes_enemy.innerHTML = lifesEnemy;
  } else if (ataqueJugador === "TIERRA" && ataqueEnemigoPlayer === "AGUA") {
    crearElemento("GANASTE");
    lifesEnemy--;
    lifes_player.innerHTML = lifesPlayer;
    lifes_enemy.innerHTML = lifesEnemy;
  } else {
    crearElemento("PERDISTE");
    lifesPlayer--;
    lifes_player.innerHTML = lifesPlayer;
    lifes_enemy.innerHTML = lifesEnemy;
  }

  lifesReview();
}

function lifesReview() {
  let btn_restart = document.getElementById("btn-restart");

  if (lifesEnemy === 0) {
    crearElementoFinal("HAS GANADO");
    btn_restart.style.display = "block";
  } else if (lifesPlayer === 0) {
    crearElementoFinal("HAS PERDIDO");
    btn_restart.style.display = "block";
  }
}

function crearElemento(resultado) {
  let mensajes = document.getElementById("resultado");
  let ataquesJugador = document.getElementById("ataquesJugador");
  let ataquesEnemigo = document.getElementById("ataquesEnemigo");

  let nuevoAtaqueJugador = document.createElement("p");
  let nuevoAtaqueEnemigo = document.createElement("p");

  mensajes.innerHTML = resultado;
  nuevoAtaqueJugador.innerHTML = ataqueJugador;
  nuevoAtaqueEnemigo.innerHTML = ataqueEnemigoPlayer;

  ataquesJugador.appendChild(nuevoAtaqueJugador);
  ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
}

function crearElementoFinal(texto) {
  let mensajes = document.getElementById("resultado");
  let btn_fuego = document.getElementById("btn-fuego");
  let btn_agua = document.getElementById("btn-agua");
  let btn_tierra = document.getElementById("btn-tierra");

  btn_agua.disabled = true;
  btn_fuego.disabled = true;
  btn_tierra.disabled = true;

  mensajes.innerHTML = texto;
}

function seleccionarMascotaJugador() {
  let seccionSeleccionMascota = document.getElementById("pet-selection");

  let input_Hipodoge = document.getElementById("Hipodoge");
  let input_Capipepo = document.getElementById("Capipepo");
  let input_Ratigueya = document.getElementById("Ratigueya");
  let input_Langostelvis = document.getElementById("Langostelvis");
  let input_Tucapalma = document.getElementById("Tucapalma");
  let input_Pydos = document.getElementById("Pydos");

  if (input_Hipodoge.checked) {
    mascotaNamePlayer.innerHTML = "Hipodoge";
  } else if (input_Capipepo.checked) {
    mascotaNamePlayer.innerHTML = "Capipepo";
  } else if (input_Ratigueya.checked) {
    mascotaNamePlayer.innerHTML = "Ratigueya";
  } else if (input_Langostelvis.checked) {
    mascotaNamePlayer.innerHTML = "Langostelvis";
  } else if (input_Tucapalma.checked) {
    mascotaNamePlayer.innerHTML = "Tucapalma";
  } else if (input_Pydos.checked) {
    mascotaNamePlayer.innerHTML = "Pydos";
  } else {
    alert("Mascota no seleccionada");
    return;
  }

  seleccionarMascotaEnemigo();
  seccionSeleccionMascota.style.display = "none";
}

function seleccionarMascotaEnemigo() {
  let mascotaNameEnemy = document.getElementById("mascotaNameEnemy");

  let ataqueAleatorio = aleatorio(1, 6);
  if (ataqueAleatorio == 1) {
    mascotaNameEnemy.innerHTML = "Hipodoge";
  } else if (ataqueAleatorio == 2) {
    mascotaNameEnemy.innerHTML = "Capipepo";
  } else if (ataqueAleatorio == 3) {
    mascotaNameEnemy.innerHTML = "Ratigueya";
  } else if (ataqueAleatorio == 4) {
    mascotaNameEnemy.innerHTML = "Langostelvis";
  } else if (ataqueAleatorio == 5) {
    mascotaNameEnemy.innerHTML = "Tucapalma";
  } else if (ataqueAleatorio == 6) {
    mascotaNameEnemy.innerHTML = "Pydos";
  } else {
    alert("Mascota no seleccionada");
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function restartGame() {
  location.reload();
}

window.addEventListener("load", iniciarJuego);
