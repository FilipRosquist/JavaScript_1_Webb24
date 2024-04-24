let dishes = [];

function addDish(name) {
    dishes.push(name);
    console.log(name + " has been added to the list of dishes.");
}

function countDishes() {
    return dishes.length;
}

function showDishes() {
    console.log("List of added dishes:");
    for (let i = 0; i < dishes.length; i++) {
        console.log((i + 1) + ". " + dishes[i]);
    }
}

addDish("Kebab");
addDish("Burger");
addDish("Pasta");

console.log("Number of added dishes:", countDishes());

showDishes();
