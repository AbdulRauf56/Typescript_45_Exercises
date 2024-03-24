function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Sandwich is ready!\n");
}

makeSandwich("Ketchup", "Cheese", "Salad");
makeSandwich("Chips", "Sauce");
makeSandwich("Peanut butter", "Jelly");
