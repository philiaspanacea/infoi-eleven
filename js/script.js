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
    {sentence: "Super Effective!"},
    {sentence: "Not Very Effective..."}, 
    {sentence: "Effective."}
];

function loadInput(){
    for(const key in typeChart){
        const ele = document.createElement("option");
        const ele2 = document.createElement("option");

        ele.setAttribute("strongAgainst", key);
        ele2.setAttribute("weakAgainst", key)
        ele.innerHTML = key
        ele2.innerHTML = key
        akop.appendChild(ele);
        dfop.appendChild(ele2)
    }
}

function calcDiff(){
    message.innerHTML = "";
    console.log(typeChart)

    if (atk === typeChart.value){
        if (dfn === typeChart.strongAgainst){
            message.innerHTML = (messages[0]);
        }
        else if (dfn === typeChart.weakAgainst){
            message.innerHTML = (messages[1]);
        }
        else if (dfn === atk){
            message.innerHTML = (messages[2]);
        }
    }

    }

loadInput();

confirm.addEventListener("click", function(){
    calcDiff();
})