// Creating a Array.
var userNames = ["Rauf", "Raheel", "Ali", "Umair", "Hani"];
// Using ForEach Loop on Array.
userNames.forEach(function (oneUser) {
    if (oneUser === "Umair") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
