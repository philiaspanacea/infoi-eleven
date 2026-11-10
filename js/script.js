console.log ("Hello World!");

const confirm = document.querySelector("#confirm");
const message = document.querySelector("#message");
const atk = document.querySelector("#atkInput");
const dfn = document.querySelector("#dfnInput");


const typeChart = {
  fire: { strongAgainst: "grass", weakAgainst: "water" },
  water: { strongAgainst: "fire", weakAgainst: "electric" },
  electric: { strongAgainst: "water", weakAgainst: "grass" },
  grass: { strongAgainst: "electric", weakAgainst: "fire" }
};

const messages = [
    {sentence: "Super Effective!", multiplier: "2x"},
    {sentence: "Not Very Effective...", multiplier: "0.5x"}, 
    {sentence: "Effective.", multiplier: "1x"}
];

function loadInput(){
    for(const key in typeChart){
        const attack = document.createElement("option");
        const defense = document.createElement("option");

        attack.innerHTML = key
        defense.innerHTML = key
        
        akop.appendChild(attack);
        dfop.appendChild(defense)

        console.log (typeChart[key].strongAgainst);
        // console.log (typeChart[key].weakAgainst);

    }
}


function calcDiff(){
    message.innerHTML = "";
    if (akop.value === dfop.value)
        { 
            console.log("working");
            message.innerHTML = ("messages");
        }
        else {
            console.log("mismatched")
            message.innerHTML = ("no messages");

        }
    };

loadInput();

confirm.addEventListener("click", function(){
    calcDiff()
})