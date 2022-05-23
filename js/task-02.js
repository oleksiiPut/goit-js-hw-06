const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const elem1 = document.createElement("li");
elem1.textContent = "Potatoes";
elem1.classList.add("item");

const elem2 = document.createElement("li");
elem2.textContent = "Mushrooms";
elem2.classList.add("item");

const elem3 = document.createElement("li");
elem3.textContent = "Garlic";
elem3.classList.add("item");

const elem4 = document.createElement("li");
elem4.textContent = "Tomatos";
elem4.classList.add("item");

const elem5 = document.createElement("li");
elem5.textContent = "Herbs";
elem5.classList.add("item");

const elem6 = document.createElement("li");
elem6.textContent = "Condiments";
elem6.classList.add("item");

ingredientsList.append(elem1, elem2, elem3, elem4, elem5, elem6);
console.log(ingredientsList);
