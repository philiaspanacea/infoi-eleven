console.log ("Hello World!");

const message = document.querySelector("#message");
const attack = document.querySelector("#atk");
const defense = document.querySelector("#dfn");


const typeChart = {
  fire: { strongAgainst: ["grass"], weakAgainst: ["water"] },
  water: { strongAgainst: ["fire"], weakAgainst: ["electric"] },
  electric: { strongAgainst: ["water"], weakAgainst: ["grass"] },
  grass: { strongAgainst: ["electric"], weakAgainst: ["fire"] }
};

const types = [
    {
        type: "fire",
        dmg: 1
    },

    {
        type: "water",
        dmg: 1
    },

    {
        type: "electric",
        dmg: 1
    },

    {
        type: "grass",
        dmg: 1
    }
]

// function battle(){
//     if (attack.value = defense.value){
//         console.log ("Not very effective...");
//         message.innerHTML ("Not Very Effective...");
//     }
// };

// attack.addEventListener("change", function()
//     {
//         battle();
//     });