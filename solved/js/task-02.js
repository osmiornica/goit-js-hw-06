const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

window.addEventListener("load", function (){
    for (const ing of ingredients) {
        let el = document.createElement("li");
        el.textContent = ing;
        el.classList.add("item")
        document.getElementById("ingredients").appendChild(el);
    }
})

