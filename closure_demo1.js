// closure: a closure is when an inner function uses, or changes, varibles in an outer function.
function pizzaMaker(food) {
    let order = "I'd like a pizza with ";
    function oven() {
        return order + food;
    }
    return oven();
}

console.log(pizzaMaker("cheese"));
