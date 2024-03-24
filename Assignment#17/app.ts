// Creating a Guest List Array.
let guestList = ["Rauf", "Raheel", "Ali", "Umair"];

// Making variable for those guest who cant come.
let dontCome = guestList[0];

// Print the name of Guest who cant come.
console.log(dontCome, "Nahi aa sakta");

// Add or Remove values from Guest List Array.
guestList.splice(0, 1, "Hussain");

// Message Print for Bigger Table.
console.log("Good News! We have found a bigger table for dinner.");

// Adding a new guest at starting index of array.
guestList.unshift("Ahmed");

// Adding a new guest at ending index of array.
guestList.push("Zain");

// Making a variable for storing a middle index of our guestlist array.
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array.
guestList.splice(middleIndex, 0, "Osama");

// Print message of updated list.
console.log("Updated List of our Guests");

// Sending a invitation message to our guests one by one.
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me?`));

// Inform that only two guests can be invited for dinner.
console.log("Unfortunately, The new dinner table wont arrive on time, So I can invite only two guest to dinner with me.");

// Using while loop to remove guests from the array until only two names remain.
while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner.`);
}
// Sending a invitation to last 2 Guests in the list.
console.log("Invitation to the last 2 Guests");
guestList.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to dinner.`));

// Removing last 2 Guests from the list.
guestList.pop();
guestList.pop();

console.log("Empty list:", guestList);
