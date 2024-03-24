// Array of current users.
var current_users = ["Ali", "Raheel", "Rauf", "Hussain", "Ahmed"];
// Array of New Users.
var new_users = ["Raufi", "Raheela", "Alia", "Umair", "Hani"];
// Loop through new_users to check for userNames Availability.
new_users.forEach(function (new_one_users) {
    // Making a conditin for username already exist and save in our_condition Variable.
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_users.toLowerCase(); });
    // Print Different messages using If-Else statements.
    if (our_condition) {
        console.log("Sorry ".concat(new_one_users, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_users, " is available"));
    }
});
