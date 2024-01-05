// Fonction pour obtenir et afficher la date et l'heure formatées
function getFormattedTime(ville, fuseauHoraire, idElement) {
    // Options de formatage pour l'objet Intl.DateTimeFormat
    const options = {
      timeZone: fuseauHoraire,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timeZoneName: 'short',
    };
  
    // Création d'un objet Intl.DateTimeFormat avec les options spécifiées
    const formatter = new Intl.DateTimeFormat('fr-FR', options);
  
    // Formatage de la date et de l'heure actuelles en fonction du fuseau horaire
    const chaineTemps = formatter.format(new Date());
  
    // Mise à jour du contenu de l'élément HTML avec l'identifiant spécifié
    document.getElementById(idElement).textContent = `Date et heure actuelles à ${ville} : ${chaineTemps}`;
  }
  
  // Appel de la fonction pour différentes villes et fuseaux horaires
  
  // Anchorage (USA)
  getFormattedTime('Anchorage', 'America/Anchorage', 'anchorageTime');
  
  // Reykjavik (Islande)
  getFormattedTime('Reykjavik', 'Atlantic/Reykjavik', 'reykjavikTime');
  
  // Saint-Pétersbourg (Russie)
  getFormattedTime('Saint-Pétersbourg', 'Europe/Moscow', 'stpetersburgTime');
  
  // Bruxelles (Belgique)
  getFormattedTime('Bruxelles', 'Europe/Brussels', 'brusselsTime');
  
