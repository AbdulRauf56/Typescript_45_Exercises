var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries and Print its original Order.
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original order", countriesToVisit);
// Print the array in alphabatical order without modifying the actual array list.
console.log("Alphabatical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the array is still in its original order.
console.log("Still in original order:", countriesToVisit);
// Print a array in reversed order without modifying the original list.
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that the array is still in its original order.
console.log("Still in original order:", countriesToVisit);
// We have changed the original array order now.
console.log("Original array Reversed:", countriesToVisit.reverse());
// Print the array to show that its back to its original order.
console.log("Back to original order:", countriesToVisit.reverse());
// Print the array to show that its order has been changed in Alphabatical order now.
console.log("Sorted in Alphabatical order:", countriesToVisit.sort());
// We have changed again the original array order now in reverse order again.
console.log("Original array Reversed Again:", countriesToVisit.reverse());
