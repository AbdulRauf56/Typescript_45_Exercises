let guestList = ["Rauf", "Raheel", "Ali", "Umair"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi aa sakta");

guestList.splice(0, 1, "Shahzad");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));