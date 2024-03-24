function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    return magicians;
}

const magicians: string[] = ["Khan", "Ali", "Umair", "Rauf & Raheel"];

const great_magicians = make_great(magicians);
show_magicians(great_magicians);
