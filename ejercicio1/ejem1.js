const denominations = [50000,20000,10000,5000, 2000, 1000]; /*en esta linea la constante "denominations" contiene un array de seis valores enteros*/

function getWithdrawalAmount()/*esta función toma la entrada de la cantidad del dinero que el usuario quiere retirar*/ {
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?"); 
  return parseFloat(userInput); /*el parseFloat se utiliza para convertir la cadena de texto del prompt a un número flotante y el return devuelve el valor convertido*/
}

function calculateBilletsNeeded(amount)/*esta función calcula los billetes que el usuario necesita para hacer el retiro y lo almacena en el parámetro "amount*/ {
  return denominations.map(denomination => { /*aquí se utiliza el map para iterar con una función flecha sobre cada valor del array de forma individual  */
    const billetsNeeded = Math.floor(amount / denomination); /*aqui en la constante billetsneeded se calcula cuantos billetes máximo se necesitan para el mmonto del retiro, y con math.Floor se redondea esta cantidad hacia abajo */
    amount -= billetsNeeded * denomination;
    return billetsNeeded;
  }); 
}


function isValidWithdrawalAmount(amount) /*esta funcion verifica si la cantidad del retiro es válida*/{
  return amount > 0 && amount % 1 === 0; 
}

function ATMTransaction() /*aqui se simula el proceso del retiro del cajero*/{
  const withdrawalAmount = getWithdrawalAmount(); /*se define la constante como igual a la cantidad de dinero del retiro*/

  if (!isValidWithdrawalAmount(withdrawalAmount)) { /*se hace la condicional de que si el monto no es válido se lo muestre al usuario */
    alert("El monto solicitado no es válido.");
    return;
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount); /*se llama a la funcion que calculó la cantidad de billetes y recibe a "withdrswalAmount" como parámetro*/

  alert("Para retirar $" + withdrawalAmount + ", necesitas:"); 
  denominations.forEach((denomination, index) => { /*se utiliza el forEach para iterar sobre cada una de las denominaciones y la cantidad necesaria */
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}


ATMTransaction();/*aqui se finaliza llamando la funcion de simulación del retiro y se "inicia" ese proceso */