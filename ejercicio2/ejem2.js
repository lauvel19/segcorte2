
const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303]; /*se crea una constante con un array de 10 valores */
const roomStatus = Array(10).fill(false); /*constante paralela a rooms que almacena el estado de cada habitación, si está ocupada o libre */
const roomReservations = {}; /*en esta se almacenan las reservas de las habitaciones */


const reserveRoom = (roomNumber, name) => {  /*recibe el número de la habitación y el nombre del húesped */
  const index = rooms.indexOf(roomNumber); /*se busca la habitación en rooms */
  if (index !== -1 && roomStatus[index] === false) { /*se verifica si la habitación esta ocupada o está libre */
    roomStatus[index] = true; 
    roomReservations[roomNumber] = name;
    alert(`La habitación ${roomNumber} ha sido reservada por ${name}.`); /*si está libre se reserva con el nombre del húesped y se marca como ocupada */
  } else {
    alert(`La habitación ${roomNumber} ya está reservada.`); /*y si no, muestra que ya está ocupada */
  }
};


const freeRoom = (roomNumber) => { /*esta funcion flecha es para asignar a una habitación como libre */
  const index = rooms.indexOf(roomNumber); /*primero busca la habitacion en el array de rooms */
  if (index !== -1 && roomStatus[index] === true) { /*y aqui verifica que si esté ocupada */
    roomStatus[index] = false; /*si lo está, aqui se cambia a que su estado pase a libre */
    delete roomReservations[roomNumber]; /*se borra la reservación */
    alert(`La habitación ${roomNumber} ha sido liberada.`); /*y se muestra que ya esta liberada */
  } else {
    alert(`La habitación ${roomNumber} ya está libre.`); /*y si ya estaba libre simplemente se muestra eso */
  }
};


const showAvailableRooms = () => { /*esta función busca habitaciones que esten disponibles */
  const availableRooms = rooms.filter((room, index) => { /*la función filter busca en el array de rooms las habitaciones libres */
    return roomStatus[index] === false; 
  });

  if (availableRooms.length > 0) {
    alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`);
  } else {
    alert('No hay habitaciones disponibles.');/*y muestra el mensaje de esas habitaciones o si no hay ninguna */
  }
};


const showOccupancy = () => { /*esta función cuenta las habitaciones que estan dispomibles y las ocupadas */
  const availableRooms = rooms.filter((room, index) => { /*filtrando primero las libres */
    return roomStatus[index] === false;
  });
  const reservedRooms = rooms.filter((room, index) => {
    return roomStatus[index] === true; /*y luego las ocupadas */
  });
  alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.`);
}; /*y muestra el mensaje */


const handleUserInput = () => { /*Esta funcion presenta al usuario un menú al usuario para reservar, liberar habitaciones, consultar su ocupación o salir */
  let userInput;
  do { /**se utiliza un ciclo do-while para permitirle al usuario interactuar hasta seleccionar la opcion salir */
  
    userInput = prompt('Menú \n' + '1. Reservar una habitación '+ 
    ' 2. Liberar una habitación'+
    ' 3. Consultar ocupación' +
  ' 4. Salir'); /*se muestra el prompt para que el usuario seleccione la opcion a realizar  */

    switch (userInput) {
      case '1':/*en el caso de reservar */
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n[100, 101, 102, 103, 201, 202, 203, 301, 302, 303]:'));/*el usuario selecciona la habitación */
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) { /*se evalúa si la habitación seleccionada es válida */
          const name = prompt('Ingrese su nombre:'); /*si es válida, se le pide el nombre al usuario de la reserva*/
          reserveRoom(roomNumber, name); /*esta función le asigna a la reservacion los parametros del numero de la habitacion y el nombre del usuario */
        } else {
          alert('Número de habitación inválido. Intente de nuevo.'); /*y si no es válida se le muestra un mensaje al usuario */
        }
        break;
      case '2':/*en caso de liberar una habitación */
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:')); /*el usuario ingresa el numero de la habitación */
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) {/*se evalúa si la habitación ingresada es válida */
          freeRoom(roomNumberToFree);/*si es válida, se libera*/
        } else {
          alert('Número de habitación inválido. Intente de nuevo.'); /*y si no es válida se le muestra un mensaje al usuario */
        }
        break;
      case '3': /*en caso de consultar la ocupación */
        showOccupancy(); /*se muestra la constante previamente hecha y se muestra al usuario */
        break;
      case '4': /*en caso de salir */
        alert('Saliendo...'); /*sale y termina el ciclo */
        break;
      default: /*de ser una opcion inválida, se le muestra un mensaje y reinicia el ciclo */
        alert('Opción inválida. Intente de nuevo.'); 
        break;
    }
  } while (userInput !== '4'); 
};

// Ejecutar la función para manejar la interacción con el usuario
handleUserInput(); 