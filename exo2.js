function daysSince(date) {
    // Convertir la date en timestamp
    const birthTimestamp = new Date(date).getTime();
  
    // Obtenir le timestamp actuel
    const currentTimestamp = Date.now();
  
    // Calculer la différence en jours
    const differenceInDays = (currentTimestamp - birthTimestamp) / (24 * 60 * 60 * 1000);
  
    // Renvoyer le résultat arrondi
    return Math.floor(differenceInDays);
  }
  
  // Exemple d'utilisation avec la date de naissance
  const dateOfBirth = '1970-01-01'; // Format: 'YYYY-MM-DD'
  const daysPassed = daysSince(dateOfBirth);
  
  console.log(`Nombre de jours écoulés depuis ma date de naissance : ${daysPassed} jours.`);
  