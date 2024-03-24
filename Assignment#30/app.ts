// Creating a Array.
let userNames = ["Rauf", "Raheel", "Ali", "Umair", "Hani"];

// Using ForEach Loop on Array.
userNames.forEach(oneUser =>{
    if(oneUser === "Umair"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})