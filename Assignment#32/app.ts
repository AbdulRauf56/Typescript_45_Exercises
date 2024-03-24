// Array of current users.
let current_users = ["Ali", "Raheel", "Rauf", "Hussain", "Ahmed"]

// Array of New Users.
let new_users = ["Raufi", "Raheela", "Alia", "Umair", "Hani"];

// Loop through new_users to check for userNames Availability.
new_users.forEach(new_one_users => {

    // Making a conditin for username already exist and save in our_condition Variable.
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase())

    // Print Different messages using If-Else statements.
    if(our_condition){
        console.log(`Sorry ${new_one_users} is already taken!`)
    }else{
        console.log(`This Username ${new_one_users} is available`)
    }
})