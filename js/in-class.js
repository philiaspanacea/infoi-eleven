const currencySelector = document.getElementById("currencies");
const wrapper = document.getElementById("wrapper");

const conversions = { // <-- NOT an array (curly brackets)
    USD: {country: "USA", value: 1, symbol: "$"},
    EURO: {country: "EU", value: 0.89, symbol: "€"},
    CAD: {country: "CAN", value: 1.4, symbol: "$"}
}

const products = [ // <-- ARRAY (brackets)
    {
        name: "watermelon",
        price: 8
    },

    {
        name: "honeydew",
        price: 5
    },

    {
        name: "cantaloupe",
        price: 3
    }
]

function priceConversion(products, currency){
    console.log(products.price * conversions[currency].value);
};

function loadCurrencies(){
    for(const key in conversions){
        const ele = document.createElement("option");
        ele.setAttribute("value", key); // <-- 'key' is the value, 'conversions[key]' is an object. Using 'conversions[key]' will return '[object Object]. Using 'key' will return the values in the object (USA, EURO, CAN).
        ele.innerHTML = key;
        currencySelector.appendChild(ele);
    }
}

function loadProducts(currency){

    wrapper.innerHTML ="";

    products.forEach(itm => {
        const ele = document.createElement("div");
        const nameEle = document.createElement("h2");
        const priceEle = document.createElement("h4");
        nameEle.innerHTML = itm.name;
        priceEle.innerHTML = conversions[currency].symbol + itm.price * conversions[currency].value;

        ele.appendChild(nameEle);
        ele.appendChild(priceEle);
        wrapper.appendChild(ele);
    })
}

currencySelector.addEventListener("change", function(event){
    loadProducts(event.target.value);
    console.log(event.target.value);
})

loadCurrencies();
loadProducts("USA");

priceConversion(products[0], "EURO");