const categoryRef = document.querySelectorAll(".item");
console.log("Number of categories: ", categoryRef.length);

// for (const item of categoryRef) {
//     console.log("Category: ", item.firstElementChild.textContent);
//     console.log("Elements: ", item.lastElementChild.children.length);
// }

categoryRef.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
