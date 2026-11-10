console.log ("Hello World!");

const calculate = document.querySelector("#calc");
const message = document.querySelector("#message");
const akop = document.querySelector("#akop");
const dfop = document.querySelector("#dfop");


const typeChart = {
  fire: { strongAgainst: ["grass"], weakAgainst: ["water"] },
  water: { strongAgainst: ["fire"], weakAgainst: ["electric"] },
  electric: { strongAgainst: ["water"], weakAgainst: ["grass"] },
  grass: { strongAgainst: ["electric"], weakAgainst: ["fire"] }
};

// const messages = [
//     {sentence: "Super Effective!", multiplier: "2x"},
//     {sentence: "Not Very Effective...", multiplier: "0.5x"}, 
//     {sentence: "Effective.", multiplier: "1x"}
// ];

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

function calcDiff(atkn, dfnd){
    message.innerHTML = "";
    
    if (typeChart[atkn].strongAgainst.includes(dfnd)){
        message.innerHTML = ("Super Effective! (x2)");
    }
    else if (typeChart[atkn].weakAgainst.includes(dfnd)){
        message.innerHTML = ("Not Very Effective... (x0.5)");
    }
    else {
        message.innerHTML = ("Effective. (1x)")
    }

    // if (akop.value === dfop.value)
    //     { 
    //         console.log("working");
    //         message.innerHTML = (messages.sentence);
    //     }
    //     else {
    //         console.log("mismatched")
    //         message.innerHTML = ("0.5x");

    //     }
    
};

calc.addEventListener("click", function(){
    const atkn = akop.value;
    const dfnd = dfop.value;

    message.innerHTML = "";
    const result = document.createElement("h2");

    result.innerHTML = calcDiff(atkn, dfnd);
});

loadInput();
