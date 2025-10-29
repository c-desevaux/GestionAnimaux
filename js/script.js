    "use strict";

    import { Animal } from "./Animal.js";                   //On importe la classe animal

    let name = document.getElementById("name");         //On recupere chaque champs du html
    let type = document.getElementById("type");
    let age = document.getElementById("age");
    let swim = document.getElementById("swim");
    let container = document.getElementById("display");                     //On recupere le dom du container
    let displayDiv = document.getElementById("tabAnimaux");                 //On recupere le dom du contenu
    let dSelect = document.getElementById("delete-select");                 //Recupere le select

    let btnOk = document.getElementById("btn-submit");      //on récupere le bouton valider du html
    let btnVider = document.getElementById("btn-empty");

    let zoo = [];                                           //defini un tableau qui va contenir nos animaux
   

    btnOk.addEventListener("click", ()=> {                  //On ajoute l'action qui suit le click du bouton
        
        let nameValue = name.value;                         //Pour chaque element du Dom on extrait la valeur des champs du formulaire
        let ageValue = age.value;
        let swimValue = swim.checked;
        let typeValue = type.value;
        

        zoo.push(new Animal(Animal.getNbAnimal(), nameValue, typeValue, ageValue, swimValue));       //On push dans le tableau le nouvel animal qui vient d'être rentré par l'utilisateur
     

        container.innerHTML = "";                                               //On vide la div
        displayDiv.style.whiteSpace = "pre-line";                               //On paramettre pour que les retour a la ligne soient visible

        displayDiv.textContent=

        `${zoo.map((animal, index) => {                                         //pour chaque élement du tableau on fait un map
            return `Animal ${index+1}:   ${animal.getFullId()} <br>`;               //On donne le numéro de l'animal puis son ID
        }).join('')}`;                                                                  //Puis on fait un join pour eviter les virgules qui séparent les élement car map renvoie un tableau

        localStorage.setItem("animaux", displayDiv.textContent);                //On enregistre le tableau dans le local storage sous la clefs "animaux"

        container.appendChild(displayDiv);                                      //On implémente la div du html
        displayDiv.innerHTML = localStorage.getItem("animaux");                 //On change le text de la div en y mettant ce qui se trouve dans le local storage
        resetForm();                                                            //On reset le form


        localStorage.setItem("nbAnimaux", Animal.getNbAnimal());

console.log("nombre d'animaux créer "+localStorage.getItem("nbAnimaux"));
        dSelect.innerHTML="";
        for(let i=0 ; i<(localStorage.getItem("nbAnimaux")) ; i++){                                               //On parcours le tableau de 0 aux nombre d'animaux créer
            
            let newOption = document.createElement("option");                           //Pour chaque on creer une option
            newOption.innerHTML = i;                                                    //La valeur de l'option vaut i
            dSelect.appendChild(newOption);

        }

    });



    btnVider.addEventListener("click", ()=>{                                    //Event listener sur le bouton vider qui supprime les données d ela cléf animaux du local storage
        container.innerHTML = "";
        localStorage.removeItem("animaux");
    });

  
    





    displayDiv.innerHTML = localStorage.getItem("animaux");
    dSelect.innerHTML="";
        for(let i=0 ; i<(localStorage.getItem("nbAnimaux")) ; i++){                                               //On parcours le tableau de 0 aux nombre d'animaux créer
            
            let newOption = document.createElement("option");                           //Pour chaque on creer une option
            newOption.innerHTML = i;                                                    //La valeur de l'option vaut i
            dSelect.appendChild(newOption);

        }


    //Fonction qui va clear tous les champs du formulaire
        function resetForm(){
            name.value= "";
            type.value= "";
            age.value= "";
            swim.checked= false;
        }