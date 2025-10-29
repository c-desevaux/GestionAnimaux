    "use strict";

    export class Animal{            //Export de la class Animal pour la rendre accessible depuis le script principal

        #id;
        #name;                      //Ensemble des propriétés de la class protégés
        #type;
        #age;
        #doSwim;
        static #nbAnimal=0;


        constructor(id, name, type, age, doSwim){     //Constructeur qui va set up notre objet

            this.#setId(id);
            this.#setName(name);
            this.#setType(type);
            this.#setAge(age);
            this.#setDoSwim(doSwim);
            Animal.#nbAnimal++;
        }
//-------------------------------------------------------------------SETTERS-----------------------------------------------------------------


        #setId(id){
            this.#id=id;
        }

        #setName(name){
            if(!name){ throw new Error ("ERR : Le nom doit être renseigné")}
            if(name.length<2){ throw new Error ("ERR : Le nom doit contenir plus de 2 caractères")
            }else{this.#name=name};
            
        }
        

        #setType(type){
            if(!type){ throw new Error ("ERR : Le type doit être renseigné")}
            if(type.length<2){ throw new Error ("ERR : Le type doit contenir plus de 2 caractères")
           }else{this.#type=type};
        }

        #setAge(age){
            if(!age){ throw new Error ("ERR : L'age doit être rensigné")}
            if(age==NaN){ throw new Error ("ERR : L'age doit être un nombre")
            }else{this.#age=age};
            
        }

        #setDoSwim(doSwim){
            if(doSwim===true){
                this.#doSwim = "nage";
            }else{
                this.#doSwim = "ne nage pas";
            }
            
        }
//-------------------------------------------------------------------GETTERS-------------------------------------------------------------

        getId(){
            return this.#id;
        }

        getName(){
            return this.#name;
        }

        getType(){
            return this.#type;
        }

        getAge(){
            return this.#age;
        }

        getDoSwim(){
            return this.#doSwim;
        }

//-----------------------------------------------------------------BEHAVIORS-------------------------------------------------------------

        static getNbAnimal() {
            return Animal.#nbAnimal;
        }    

        getFullId(){

            
            let char;
            char = "Id: "+this.#id+", Nom: "+ this.#name+", Type "+this.#type+", Age; "+this.#age+", capacité: "+this.#doSwim;


            return char;
        }


    }