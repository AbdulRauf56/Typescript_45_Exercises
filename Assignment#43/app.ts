function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}

const magicians: string[] = ["Hussain", "Umair", "Ali", "Rauf & Raheel"];

const great_magicians = make_great([...magicians]);
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
