// Making a array of countries and Print its original Order.
let countriesToVisit: String[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original order", countriesToVisit); 

// Print the array in alphabatical order without modifying the actual array list.
console.log("Alphabatical Order:", [...countriesToVisit].sort());

// Show that the array is still in its original order.
console.log("Still in original order:", countriesToVisit);

// Print a array in reversed order without modifying the original list.
console.log("Reverse Order:", [...countriesToVisit].reverse());

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
