const nom = 'LENY';
let age = 25; // Remplacez par votre âge
console.log('Nom :', nom);
console.log('Âge :', age);

age = 18; // Exemple de modification
console.log('Nouvel âge :', age);
    
if (age < 13) {
	console.log('Accès interdit aux moins de 13 ans.');
} else if (age < 18) {
	console.log('Vous pouvez accéder à la section ado.');
} else {
	console.log("Bienvenue dans l'espace adulte.");
}
   for (let i = 0; i <= 10; i++) {
    console.log("7*" + (i) + " =" + (i*7))
}