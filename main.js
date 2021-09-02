
// function
function getValue(){

    let budget = document.getElementById('budget');
    let libelle = document.getElementById('libelle').value;
    let montant = document.getElementById('montant').value;
    let categories = document.getElementById('categories').value;
    let revenus = document.getElementById('revenus');
    let totalRevenus = document.getElementById('totalR');
    let depenses = document.getElementById('depenses');   
    let totalDepenses = document.getElementById('totalD');
    let resultat = document.getElementById('resultat');
    

    let newResult1 = document.createElement('p');
    newResult1.id = 'titre';

    let newResult2 = document.createElement('p');
    newResult2.id = 'prix';

    let newResult3 = document.createElement('p');
    newResult3.id = 'valeur';


    newResult1.textContent=libelle;
    newResult2.textContent=montant;
    newResult3.textContent=categories;


    resultat.appendChild(newResult1);
    resultat.appendChild(newResult2);
    resultat.appendChild(newResult3);


    if (categories==="Dépenses") {
        // newResult1.style.backgroundColor="red";
        newResult2.style.color="red";
        newResult3.style.color="transparent";
        depenses.appendChild(newResult1);
        depenses.appendChild(newResult2);
        depenses.appendChild(newResult3);

    }else if(categories==="Revenus") {
        // newResult1.style.backgroundColor="green";
        newResult2.style.color="green";
        newResult3.style.color="transparent";
        revenus.appendChild(newResult1);
        revenus.appendChild(newResult2);
        revenus.appendChild(newResult3);

    }else{}

    if (categories==="Dépenses"){
        totalDepenses.innerHTML = Number(totalDepenses.textContent) + Number(montant);
        budget.innerHTML -= Number(montant);
    }
    if (categories==="Revenus") {
        totalRevenus.textContent = Number(totalRevenus.textContent) + Number(montant);
        budget.textContent = Number(budget.textContent) + Number(montant);
    }

    if (budget.textContent <= 150 && budget.textContent >0){
        resultat.innerHTML="<i class='fas fa-exclamation-triangle'></i> Attention vous n'avez plus beaucoup d'argent";
    }else if(budget.textContent <= 0){
        resultat.innerHTML="<i class='fas fa-exclamation-triangle'></i> Vous n'avez plus d'argent !!!";
    }else{
        resultat.innerHTML=""
    }


    if (budget.textContent > 150){
        budget.style.color="green";   
    }else if(budget.textContent < 0){
        budget.style.color="red";
    }else{
        budget.style.color="orange";
    }
}

// test
