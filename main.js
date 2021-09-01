function getValue(){

    var libelle = document.getElementById('libelle').value;
    var montant = document.getElementById('montant').value;
    var categories = document.getElementById('categories').value;




    // let resultat= document.getElementById('resultat');

    // alert(libelle);
var newResult1 = document.createElement('div');
newResult1.id = 'titre';

var newResult2 = document.createElement('p');
newResult2.id = 'prix';

var newResult3 = document.createElement('p');
newResult3.id = 'valeur';

var texte1 = document.createTextNode(libelle);
var texte2 = document.createTextNode(montant);
var texte3 = document.createTextNode(categories);


newResult1.appendChild(texte1);
newResult2.appendChild(texte2);
newResult3.appendChild(texte3);

document.body.appendChild(newResult1);
document.body.appendChild(newResult2);
document.body.appendChild(newResult3);

if (categories=="Dépenses") {
    newResult1.style.backgroundColor="red";
    newResult2.style.backgroundColor="red";
}else if(categories=="Revenus") {
    newResult1.style.backgroundColor="green";
    newResult2.style.backgroundColor="green";
}else{}
}



var totalR = document.getElementById('totalR');
var totalD = document.getElementById('totalD');

foreach (getvalue()){
    if(categories=="Dépenses"){

    }else if(categories=="Revenus"){

    }else {
        
    }
};