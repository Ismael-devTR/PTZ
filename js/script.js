let pet_atackSection = document.getElementById("pet-atack");
let petSelection = document.getElementById("btn-pet-selection");
let btn_fuego;
let btn_agua;
let btn_tierra;
let btn_restart = document.getElementById("btn-restart");
let lifes_player = document.getElementById("lifes-player");
let lifes_enemy = document.getElementById("lifes-enemy");
let ataquesJugador = document.getElementById("ataquesJugador");
let ataquesEnemigo = document.getElementById("ataquesEnemigo");
let mensajes = document.getElementById("resultado");
let seccionSeleccionMascota = document.getElementById("pet-selection");
let input_Hipodoge;
let input_Capipepo;
let input_Ratigueya;
let input_Langostelvis = document.getElementById("Langostelvis");
let input_Tucapalma = document.getElementById("Tucapalma");
let input_Pydos = document.getElementById("Pydos");
let mascotaNameEnemy = document.getElementById("mascotaNameEnemy");
let mascotas_card = document.getElementById("mascotas'card");
let groupAtack = document.getElementById("groupAtack");

let mokepones = [];
let ataqueJugador;
let ataqueEnemigoPlayer;
let lifesPlayer = 3;
let lifesEnemy = 3;
let opcionesmokepones;
let mascotaJugador;

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}

let Hipodoge = new Mokepon(
  "Hipodoge",
  "/assets/mokepons_mokepon_hipodoge_attack.png",
  5
);

let Capipepo = new Mokepon(
  "Capipepo",
  "/assets/mokepons_mokepon_capipepo_attack.png",
  5
);

let Ratigueya = new Mokepon(
  "Ratigueya",
  "/assets/mokepons_mokepon_ratigueya_attack.png",
  5
);

Hipodoge.ataques.push(
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🌱", id: "btn-tierra" }
);

Capipepo.ataques.push(
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🌱", id: "btn-tierra" }
);

Ratigueya.ataques.push(
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🌱", id: "btn-tierra" }
);

mokepones.push(Hipodoge, Capipepo, Ratigueya);

function iniciarJuego() {
  pet_atackSection.style.display = "none";
  btn_restart.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionesmokepones = ` 
    <input type="radio" name="mascota" id=${mokepon.nombre} />
    <label class="tarjeta-mokepon" for=${mokepon.nombre} >
      <p>${mokepon.nombre}</p>
      <img src='${mokepon.foto}' alt=${mokepon.nombre} />
    </label>`;
    mascotas_card.innerHTML += opcionesmokepones;
    input_Hipodoge = document.getElementById("Hipodoge");
    input_Capipepo = document.getElementById("Capipepo");
    input_Ratigueya = document.getElementById("Ratigueya");
  });

  petSelection.addEventListener("click", () => {
    seleccionarMascotaJugador();
    pet_atackSection.style.display = "flex";
  });

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
  if (lifesEnemy === 0) {
    crearElementoFinal("HAS GANADO");
    btn_restart.style.display = "block";
  } else if (lifesPlayer === 0) {
    crearElementoFinal("HAS PERDIDO");
    btn_restart.style.display = "block";
  }
}

function crearElemento(resultado) {
  let nuevoAtaqueJugador = document.createElement("p");
  let nuevoAtaqueEnemigo = document.createElement("p");

  mensajes.innerHTML = resultado;
  nuevoAtaqueJugador.innerHTML = ataqueJugador;
  nuevoAtaqueEnemigo.innerHTML = ataqueEnemigoPlayer;

  ataquesJugador.appendChild(nuevoAtaqueJugador);
  ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
}

function crearElementoFinal(texto) {
  btn_agua.disabled = true;
  btn_fuego.disabled = true;
  btn_tierra.disabled = true;

  mensajes.innerHTML = texto;
}

function seleccionarMascotaJugador() {
  if (input_Hipodoge.checked) {
    mascotaNamePlayer.innerHTML = "Hipodoge";
    mascotaJugador = input_Hipodoge.id;
  } else if (input_Capipepo.checked) {
    mascotaNamePlayer.innerHTML = "Capipepo";
    mascotaJugador = input_Capipepo.id;
  } else if (input_Ratigueya.checked) {
    mascotaNamePlayer.innerHTML = "Ratigueya";
    mascotaJugador = input_Ratigueya.id;
  } else if (input_Langostelvis.checked) {
    mascotaNamePlayer.innerHTML = "Langostelvis";
    mascotaJugador = input_Langostelvis.id;
  } else if (input_Tucapalma.checked) {
    mascotaNamePlayer.innerHTML = "Tucapalma";
    mascotaJugador = input_Tucapalma.id;
  } else if (input_Pydos.checked) {
    mascotaNamePlayer.innerHTML = "Pydos";
    mascotaJugador = input_Pydos.id;
  } else {
    alert("Mascota no seleccionada");
    return;
  }

  extraerAtaques(mascotaJugador);
  seleccionarMascotaEnemigo();
  seccionSeleccionMascota.style.display = "none";
}

function extraerAtaques(mascotaJugador) {
  let ataques;
  mokepones.forEach((mokepon) => {
    mascotaJugador === mokepon.nombre && (ataques = mokepon.ataques);
  });
  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  let ataques_moqkepones;
  ataques.forEach((ataque) => {
    ataques_moqkepones = `
    <button id=${ataque.id} class="btn-at">${ataque.nombre}</button>`;
    groupAtack.innerHTML += ataques_moqkepones;
  });
  btn_fuego = document.getElementById("btn-fuego");
  btn_agua = document.getElementById("btn-agua");
  btn_tierra = document.getElementById("btn-tierra");

  btn_fuego.addEventListener("click", ataqueFuego);
  btn_agua.addEventListener("click", ataqueAgua);
  btn_tierra.addEventListener("click", ataqueTierra);
}

function seleccionarMascotaEnemigo() {
  let ataqueAleatorio = aleatorio(1, mokepones.length - 1);
  mascotaNameEnemy.innerHTML = mokepones[ataqueAleatorio].nombre;
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function restartGame() {
  location.reload();
}

window.addEventListener("load", iniciarJuego);
