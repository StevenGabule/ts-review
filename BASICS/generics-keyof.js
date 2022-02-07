function pluck(items, key) {
    return items.map(function (item) { return item[key]; });
}
var dogs = [
    { name: "Mimi", age: 12 },
    { name: "Momo", age: 14 },
];
console.log(pluck(dogs, 'age'));
console.log(pluck(dogs, 'name'));
function sendEvent(name, data) {
    console.log([name, data]);
}
sendEvent("addToCart", { productID: 'foo', user: 'baz', quantity: 1, time: 10 });
sendEvent("checkout", { time: 20, user: 'Bob' });
