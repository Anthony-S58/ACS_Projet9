function getValue(){

    let budget = document.getElementById('budget');
    let libelle = document.getElementById('libelle').value;
    let montant = document.getElementById('montant').value;
    let categories = document.getElementById('categories').value;

let newResult1 = document.createElement('p');
newResult1.id = 'titre';

let newResult2 = document.createElement('p');
newResult2.id = 'prix';

let newResult3 = document.createElement('p');
newResult3.id = 'valeur';

let texte1 = document.createTextNode(libelle);
let texte2 = document.createTextNode(montant);
let texte3 = document.createTextNode(categories);


newResult1.appendChild(texte1);
newResult2.appendChild(texte2);
newResult3.appendChild(texte3);

document.body.appendChild(newResult1);
document.body.appendChild(newResult2);
document.body.appendChild(newResult3);

if (categories==="Dépenses") {
    newResult1.style.backgroundColor="red";
    newResult2.style.backgroundColor="red";
}else if(categories==="Revenus") {
    newResult1.style.backgroundColor="green";
    newResult2.style.backgroundColor="green";
}else{}


let totalRevenus = document.getElementById('totalR');
let totalDepenses = document.getElementById('totalD');

if (categories==="Dépenses"){
    totalDepenses.innerHTML -= Number(montant);
    budget.innerHTML -= Number(montant);
}
if (categories==="Revenus") {
    totalRevenus.textContent = Number(totalRevenus.textContent) + Number(montant);
    budget.textContent = Number(budget.textContent) + Number(montant);

}}

