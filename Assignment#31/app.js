var userNames = ["Ali", "Raheel", "Rauf", "Hussain", "Ahmed"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array in Empty We need to find some users1");
}
else {
    // Using ForEach Loop on Array.
    userNames.forEach(function (oneUser) {
        if (oneUser === "Umair") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
