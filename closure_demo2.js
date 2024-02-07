function groceryList(list) {
    let groceries = list;

    function additem() {
        groceries.push("and ice cream!");
    }

    additem();
    return groceries;
}

console.log(groceryList(["milk", "egg"]));
