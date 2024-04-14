
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);
/*se establecen dos arrays que representan las salas, cada una con 10 asientos y establecidos como false(disponibles) */
const precioBoleta = 10000;

function verDisponibilidad() { /*se muestra la disppnibilidad de los asientos */
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
} /*se recorre cada array y se utiliza un ternario para mostrar si esta ocupado(x-true) o si está disponible( - false) */



function reservarAsiento() { /*en esta función se hacen las reservas */
  const sala = prompt("Ingresa el número de la sala (1 o 2)"); /*en el prompt se ingresa el numero de la sala a seleccionar */
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1; /*Se pide el número del asiento */
  if (sala === "1" && !sala1[asiento]) { /*se verifica si la sala y el asiento son válidos */
    sala1[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
     /*se le asigna la reserva */
    balanceSala1 += precioBoleta;
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);/*se le asigna la reserva */
    balanceSala2 += precioBoleta;
  } else {
    alert("El asiento ya está reservado o la sala no es válida."); /*si es inválido se muestra error   */
  }
}


function verPelicula() { /*esta funcion es para ver la ocupación de las salas */
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento); /*se filtran los asientos disponibles en cada sala */

  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`); /*se muestra al usuario los asientos disponibles y en la sala que se seleccionó */
    alert("Disfrutad de la película!");
    if(sala === 1) {
      balanceSala1 += precioBoleta;
    }else if( sala === 2){
      balanceSala2 += precioBoleta;
    }
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`); /*en caso de estar lleno, se le muestra el mensaje al usuario */
  }
}

function verBalance() {
  let balanceSala1;
  let balanceSala2;
  const balanceTotal = balanceSala1 + balanceSala2;
  alert(`El balance de la sala 1 es ${balanceSala1}`);
  alert(`El balance de la sala 2 es ${balanceSala2}`);
  alert(`El balance total es ${balanceTotal}`)
}


while (true) {
  console.log("hola")
  const opcion = prompt("Ingresa tu opción:Bienvenido a la sala de cine"+ " \nSelecciona una opción:" +"1. Ver disponibilidad de asientos"+ 
  " 2. Reservar asiento"+ " 3. Ver ocupación sala" + " 4. Ver Balance" + "5. Salir" );

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      verBalance();
        break;
    case 5:
      alert("!Hasta luego¡");
      break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}