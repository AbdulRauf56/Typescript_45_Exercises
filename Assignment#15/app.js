var guestList = ["Rauf", "Raheel", "Ali", "Umair"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi aa sakta");
guestList.splice(0, 1, "Shahzad");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
