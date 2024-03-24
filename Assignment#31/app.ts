// Creating a Array with 5 Values.
let userNames = ["Ali", "Raheel", "Rauf", "Hussain", "Ahmed"]

// Remove all Values from our Array Now our Array is empty.
userNames = []

// If statement for checking Length of our Array is Empty?
if (userNames.length === 0){
    console.log("Your Array in Empty We need to find some users!")
}else{
    // If Array is not empty Use ForEach Loop on Array.
userNames.forEach(oneUser =>{
    if(oneUser === "Umair"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
}