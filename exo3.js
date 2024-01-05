function calculateFutureDate() {
    // Obtenez la valeur de l'input
    const hoursInput = document.getElementById('hoursInput').value;

    // Calculez la date et l'heure futures
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + hoursInput * 3600 * 1000);

    // Affichez le résultat
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Date et heure futures : ${futureDate}`;
}
